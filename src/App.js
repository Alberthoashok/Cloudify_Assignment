import React, { useState } from "react";
import "./App.css";

const App = () => {
  // First Section (Dropdown with unique options)
  const staticOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];
  const [rows, setRows] = useState(["", "", ""]); // Initialize rows with empty values

  const handleSelectChange = (value, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex] = value;
    setRows(updatedRows);
  };

  const getAvailableOptions = (rowIndex) => {
    const selectedValues = rows.filter((_, index) => index !== rowIndex);
    return staticOptions.filter((option) => !selectedValues.includes(option));
  };

  // Second Section (Dynamic table with radio buttons)
  const [dynamicRows, setDynamicRows] = useState([{ column: [] }]);
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (rowIndex) => {
    if (selectedOption) {
      const updatedRows = [...dynamicRows];
      if (!updatedRows[rowIndex].column.includes(selectedOption)) {
        updatedRows[rowIndex].column = [
          ...updatedRows[rowIndex].column,
          selectedOption,
        ];
        setDynamicRows(updatedRows);
      }
      setSelectedOption("");
    }
  };

  const handleAddNewItem = (newItem) => {
    if (newItem && !options.includes(newItem)) {
      setOptions([...options, newItem]);
    }
  };

  const handleAddRow = (newRowText) => {
    if (newRowText) {
      handleAddNewItem(newRowText);
      setDynamicRows([...dynamicRows, { column: [] }]);
    }
  };

  const renderDropdown = (selectedItems, rowIndex) => {
    return (
      <div className="multi-select-dropdown">
        <div className="radio-options">
          {options.map((option) => (
            <label key={option} className="radio-item">
              <input
                type="radio"
                name={`radio-${rowIndex}`}
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
        <button
          className="add-selected-btn"
          onClick={() => handleDropdownChange(rowIndex)}>
          Add
        </button>
        <div className="selected-items">
          <strong>Selected:</strong> {selectedItems.join(", ")}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Dropdown Select and Dynamic Table Example</h1>

      {/* First Section: Dropdowns */}
      <div className="dropdown-section">
        <h2>Dropdown Select Example</h2>
        <table className="dropdown-table">
          <thead>
            <tr>
              <th>Row</th>
              <th>Dropdown</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <select
                    value={row}
                    onChange={(e) => handleSelectChange(e.target.value, index)}>
                    <option value="">Select an option</option>
                    {getAvailableOptions(index).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second Section: Dynamic Table with Radio Options */}
      <div className="dynamic-table-section">
        <h2>Dynamic Table with Radio Options</h2>
        <table className="dropdown-table">
          <thead>
            <tr>
              <th>Column</th>
            </tr>
          </thead>
          <tbody>
            {dynamicRows.map((row, index) => (
              <tr key={index}>
                <td>{renderDropdown(row.column, index)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-row-section">
          <input
            type="text"
            placeholder="Enter text to add as new row"
            id="newRowInput"
          />
          <button
            className="add-row-btn"
            onClick={() => {
              const newRowText = document
                .getElementById("newRowInput")
                .value.trim();
              if (newRowText) {
                handleAddRow(newRowText);
                document.getElementById("newRowInput").value = "";
              }
            }}>
            Add New Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

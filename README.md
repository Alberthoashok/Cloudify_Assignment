React Dropdown and Dynamic Table Example
This project demonstrates the implementation of two interactive components in React:

A dropdown select component where each row has a dropdown menu with options that are dynamically filtered to avoid duplicates.
A dynamic table with radio options where new rows can be added dynamically, and each row has a set of radio buttons to select options.
Table of Contents
Project Overview
Features
Technologies Used
Getting Started
How It Works
File Structure
App Behavior
CSS Styling
Contributing
License
Project Overview
This project is a React-based web application that demonstrates how to create interactive tables with dropdowns and dynamic rows. It allows users to:

Select options from dropdown menus where the options are filtered to avoid duplication.
Dynamically add rows with radio options, allowing the user to select a single choice per row.
Features
Dropdown with unique options: Each row has a dropdown menu, and the options are dynamically filtered based on selections made in other rows.
Dynamic table with radio buttons: Allows users to add new rows with radio buttons to select options. Users can also add new options for radio buttons dynamically.
User-friendly interface: The layout is simple and intuitive, with buttons to add rows and options easily.
Technologies Used
React: JavaScript library for building user interfaces.
CSS: For styling the application and making it visually appealing.
HTML5: For structuring the web content.
Getting Started
To run this project locally, follow the steps below.

Prerequisites
Make sure you have the following installed:

Node.js: You can download it from nodejs.org.
npm: This comes bundled with Node.js.
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/react-dropdown-dynamic-table.git
Navigate into the project directory:

bash
Copy
Edit
cd react-dropdown-dynamic-table
Install the necessary dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000 to see the app in action.

How It Works
1. Dropdown Select Example (First Section)
Purpose: Display a table where each row contains a dropdown. The options in each dropdown are dynamically filtered based on the selections made in other rows to ensure no duplicate selections.
Key Functions:
handleSelectChange: Updates the selected value for a specific row.
getAvailableOptions: Filters out already selected options in other rows.
2. Dynamic Table with Radio Options (Second Section)
Purpose: Display a dynamic table where each row has radio buttons. Users can add new rows, and for each row, the user can select an option from a set of radio buttons.
Key Functions:
handleAddRow: Adds a new row to the table when the user enters text.
handleDropdownChange: Adds the selected radio option to the row.
handleAddNewItem: Adds new radio options to the available list if necessary.
How the Components Interact
Both sections are independent of each other but are displayed on the same page.
The first section allows the user to choose options from dropdowns, while the second section allows the user to choose options from radio buttons.
The user can add new rows dynamically in both sections.
File Structure
bash
Copy
Edit
/react-dropdown-dynamic-table
├── /public
│   └── index.html
├── /src
│   ├── App.js          # Main React component combining both sections
│   ├── App.css         # Styling for the app
│   ├── index.js        # Entry point for the React app
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation (this file)
App.js: Contains the main logic and UI for both the dropdown and dynamic table components.
App.css: Contains the styles for the dropdowns, radio buttons, and table layout.
App Behavior
First Section: Dropdown Select Example
When the page loads, three dropdowns are displayed in a table.
The user can select an option from each dropdown, but the options in each dropdown are filtered to ensure that no option is selected more than once across the rows.
The available options are dynamically updated as the user makes selections.
Second Section: Dynamic Table with Radio Options
Initially, there is one row with radio buttons for each option.
The user can add new rows by typing in the input field and clicking the "Add New Row" button.
In each row, the user can select one radio button from the available options.
The user can dynamically add new options to the list of radio buttons for all rows.
CSS Styling
The App.css file contains styles for the dropdowns, tables, radio buttons, and buttons. It uses a simple and clean layout to make the app easy to use:

Tables: Styled to have clear borders, padding, and proper alignment.
Dropdowns and Radio Buttons: Styled with clear labels and a responsive layout.
Buttons: Styled to change color on hover for a better user experience.
You can modify the styles in App.css to suit your needs or make the design more customized.

Contributing
If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please ensure you follow the coding standards and write clear commit messages.

License
This project is open-source and available under the MIT License.

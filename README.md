# React Todo List Application

A simple, yet fully functional Todo List application built with React and styled with Tailwind CSS.

![Todo List App Screenshot](screenshot.png)

## Features

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete individual tasks
- Reset functionality:
  - Delete all tasks
  - Mark all tasks as complete
- Persistent storage using localStorage
- Custom favicon
- Responsive design

## Project Structure

```
react-todo-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles
│   ├── Header.jsx       # Header component
│   ├── ToDoList.jsx     # Component for rendering the list of todos
│   ├── ToDoItem.jsx     # Component for individual todo items
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Requirements

- Node.js (v14.0.0 or above recommended)
- npm (v6.0.0 or above recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` folder.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Technologies Used

- React (Functional Components with Hooks)
- Tailwind CSS for styling
- Vite for build tooling
- LocalStorage for data persistence

## Project Requirements Fulfilled

- Created a React Application using Vite
- Implemented required components:
  - App
  - Header
  - ToDoList
  - ToDoItem
- Used state and props to manage application data
- Dynamically rendered list of todo items with unique keys
- Implemented event handling for:
  - Adding new todo items
  - Marking todo items as completed
  - Deleting todo items
  - Editing existing todo items
- Added additional features:
  - Custom favicon
  - Reset button with dual functionality (delete all and mark all complete)
  - Responsive design with Tailwind CSS
  - Data persistence with localStorage

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- This project was created as part of a React assignment.
- Thanks to Tailwind CSS for the styling utilities.
# Project Showcase

A simple React single-page application for showcasing projects in a portfolio.

This project was created as part of a React learning assignment. It demonstrates basic React concepts such as components, state, props, event handling, forms, and simple styling.

## Features

* View a list of projects
* Search for projects by title
* Add a new project using a form
* Display project information in cards
* Use React state to manage projects and search
* Use props to pass information between components
* Simple and responsive styling

## Technologies Used

* React
* JavaScript
* Vite
* HTML
* CSS

## Project Structure

```text
project-showcase/
├── src/
│   ├── components/
│   │   ├── ProjectForm.jsx
│   │   ├── ProjectList.jsx
│   │   └── ProjectCard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── public/
├── package.json
└── README.md
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/RozelineGitau/-Single-Page-Application-SPA-with-React--Portfolio-Platform.git
```

### 2. Go into the project folder

```bash
cd project-showcase
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available through the local address shown in the terminal.

## How It Works

The application is divided into small React components.

### App

The `App` component is the main component. It manages the project data and search functionality.

### ProjectForm

The `ProjectForm` component allows the user to enter information about a new project and add it to the project list.

### ProjectList

The `ProjectList` component displays the projects and passes project information to the project cards.

### ProjectCard

The `ProjectCard` component displays the details of an individual project.

## React Concepts Demonstrated

### Components

The application is divided into reusable components such as:

* `ProjectForm`
* `ProjectList`
* `ProjectCard`

### State

React `useState` is used to keep track of information such as the projects and search input.

### Props

Props are used to pass project information from one component to another.

### Event Handling

The application handles events such as:

* Form submission
* Button clicks
* Text input
* Search input

## Learning Objectives

Through this project, I practiced:

* Creating React components
* Managing state using `useState`
* Passing data using props
* Handling user events
* Creating forms in React
* Filtering displayed data
* Styling a React application with CSS
* Using Vite to run a React application

## Author

**Rozeline Gitau**

This project was created for learning and practicing React development.

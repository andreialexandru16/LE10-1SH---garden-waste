# LE10-15H — Garden Waste

A React application for selecting the right skip size through a multi-step wizard. This project demonstrates a clean, modular structure and a responsive UI that works well on both desktop and mobile.

## Table of Contents
1. Overview
2. Key Features
3. Project Structure

---

## 1. Overview
The **LE10-15H — Garden Waste** project is a React-based application that guides users through a multi-step process (wizard) to select the appropriate skip size for waste disposal. The application includes a progress stepper, skip selection cards, and a responsive design to ensure a smooth user experience on any device.

---

## 2. Key Features
- **Modular Components:**  
  The application is built with modular components (e.g., ProgressStepper, SelectorCard) to make the code easy to maintain and extend.
- **Responsive Design:**  
  The UI is fully responsive, providing an optimal experience on both desktop and mobile devices.
- **Multi-step Wizard:**  
  A clear and intuitive progress stepper guides users through the selection process.
- **Configurable Data:**  
  Skip information (size, price, images, etc.) is managed in a single configuration file, making it easy to update or modify the data.

---

## 3. Project Structure
- **public/**
  - favicon.ico
  - index.html
  - *(other static assets)*
- **src/**
  - **features/**
    - **components/**
      - **ProgressStepper.jsx** – Displays the multi-step progress bar.
      - **Selector.jsx** – Container for skip selection.
      - **SelectorCard.jsx** – Displays individual skip details (image, price, size).
      - **skip-config.jsx** – Holds the skip data and image mapping.
    - **hooks/**
    - **service/**
  - **App.js** – Combines the components into the main application.
  - **index.js** – Application entry point.
  - **App.test.js**
  - **reportWebVitals.js**
  - **setupTests.js**
- **package.json**
- **package-lock.json**
- **README.md**




# LE10-15H—Garden Waste

A React-based application for selecting and managing skip sizes in a multi-step wizard. This project demonstrates a clean folder structure, modular components, and a responsive UI, making it easy to maintain and extend.

---

## Table of Contents
1. Overview
2. Features
3. Folder Structure
4. Installation
5. Usage
6. Scripts
7. Contributing
8. License

---

## Overview
The LE10-15H—Garden Waste project is a React application that guides users through a multi-step process (wizard) to select the appropriate skip size for waste disposal. It includes a progress stepper, skip selection cards, and a responsive design suitable for both desktop and mobile.

---

## Features
- Multi-step Wizard: A stepper (ProgressStepper.jsx) that indicates current and upcoming steps (e.g., Postcode, Waste Type, Select Skip, etc.).
- Skip Selection: Cards (SelectorCard.jsx) displaying skip sizes, prices, images, and selection status.
- Responsive Layout: Works seamlessly on desktop and mobile devices.
- Configurable Data: The skip information is stored in a single config file (skip-config.jsx) for easy updates.

---

## Folder Structure

LE10-15H---garden-waste
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── ...
├── src
│   ├── features
│   │   ├── poc
│   │   │   ├── bin
│   │   │   │   └── components
│   │   │   │       ├── css
│   │   │   │       ├── ProgressStepper.jsx
│   │   │   │       ├── Selector.jsx
│   │   │   │       ├── SelectorCard.jsx
│   │   │   │       └── skip-config.jsx
│   │   ├── hooks
│   │   ├── service
│   │   └── ...
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
└── README.md

- public/  
  Contains the base index.html file and other static assets (e.g., favicon.ico).

- src/  
  The main source folder for all React components and logic.

  - features/  
    A grouping for domain-specific or feature-specific folders.
    - poc/bin/components/  
      - css/: Stylesheets or CSS modules for these components.
      - ProgressStepper.jsx: A stepper component indicating current step in the wizard.
      - Selector.jsx: Main container that maps through skip data and renders SelectorCard components.
      - SelectorCard.jsx: Displays individual skip details (image, price, size).
      - skip-config.jsx: Holds the skip data array (ID, size, price, etc.) and any transformations needed (e.g., generating image URLs).

  - App.js: The root component where the stepper and skip selector are combined.
  - index.js: Application entry point, rendering <App /> into the DOM.
  - App.test.js / setupTests.js: Example test files (using Jest & React Testing Library).
  - reportWebVitals.js: Performance measuring utility (optional).

---

## Installation

1. Clone the repository (or download the ZIP) from GitHub:
   git clone https://github.com/username/LE10-15H-garden-waste.git

2. Navigate into the project folder:
   cd LE10-15H-garden-waste

3. Install dependencies:
   npm install
   or
   yarn

---

## Usage

1. Start the development server:
   npm start
   This launches the app on http://localhost:3000

2. Open the application in your browser to interact with the multi-step wizard and choose skip sizes.

3. Make changes to the source code in src/ and the app will hot-reload automatically.

---

## Scripts

Inside package.json, the following scripts are commonly used:

- npm start  
  Runs the app in development mode on http://localhost:3000.

- npm test  
  Launches the test runner in interactive watch mode.

- npm run build  
  Builds the app for production into the build folder.

- npm run eject  
  Exposes the configuration files (not typically recommended unless necessary).

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature/awesome-improvement.
3. Commit your changes: git commit -m 'Add awesome improvement'.
4. Push to the branch: git push origin feature/awesome-improvement.
5. Open a Pull Request on GitHub.

---

## License

This project is licensed under the MIT License (https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute as per the license terms. If you have any questions or want to contribute, please open an issue or pull request.

---

Contact: For questions or suggestions, feel free to reach out via GitHub Issues (https://github.com/username/LE10-15H-garden-waste/issues) or email.

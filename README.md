# Arithmetic Operation App Project

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Vuex Store](#vuex-store)
- [Axios Interceptor](#axios-interceptor)

## Overview

This repository contains a Vue application that performs basic arithmetic operations like addition, subtraction, multiplication, and division by calling APIs created using Node.js. The app uses Vuex for state management to handle the application's state effectively.

## Technologies Used

- **Vue**: A progressive JavaScript framework for building user interfaces.
- **Vuex**: State management library for Vue applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Vue Router**: The official router for Vue.js.

## Project Structure

```
.
├── src
│ ├── assets
│ │ └── images
│ ├── components
│ │ ├── HomeComponents
│ │ ├── LoginComponents
│ │ └── RegisterComponents
│ ├── views
│ │ ├── HomeView.vue
│ │ ├── LoginView.vue
│ │ ├── RegisterView.vue
│ │ └── NotFound.vue
│ ├── routes
│ │ └── index.js
│ ├── service
│ │ └── axiosInterceptor.js
│ ├── store
│ │ ├── modules
│ │ │ └── auth
│ │ │   ├── actions.js
│ │ │   ├── getters.js
│ │ │   ├── index.js
│ │ │   └── mutations.js
│ │ ├── store.js
│ │ └── storeConstants.js
├── public
│ ├── index.html
├── .env
├── package.json
└── ...
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sabari570/Arithmetic-operations-calculator-innovature-frontend-task-1.git
```

2. Navigate to the project directory:

```bash
cd Arithmetic-operations-calculator-innovature-frontend-task-1
```

3. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following:

```env
VUE_APP_BACKEND_BASE_URL=your_backend_baseurl
```

## Running the Application

```bash
npm run serve
```

## Features

- **User Authentication**: Includes Login, Signup, and Logout functionality.
- **Arithmetic Operations**: Supports Addition, Subtraction, Multiplication, and Division.
- **State Management**: Utilizes Vuex for managing application state.
- **HTTP Interception**: Axios interceptor for handling HTTP requests and responses.
- **Responsive Design**: Adapts to various screen sizes with a responsive layout.

## Vuex Store

The Vuex store in this application is designed to handle authentication and the loading state. It is structured to include modules for better organization and scalability. The authentication module handles actions, mutations, and getters related to user authentication, while the main store manages the loading state.

### store.js

The `store.js` file creates and exports the Vuex store. It imports the `auth` module and integrates it into the store. Additionally, it defines a global state property `showLoading` and a mutation to update this state.

### storeConstants.js

The `storeConstants.js` file defines constants for actions, mutations, and getters used in the Vuex store. These constants help in avoiding typos and make the code more maintainable by providing a single source of truth for these strings.

## Axios Interceptor

The axios interceptor is configured to handle HTTP requests and responses, managing authentication tokens and error handling seamlessly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# SavourVault - Your Go to Recipes at one place

A modern, responsive web application for managing  recipes. This app allows users to add, save, and view recipes, with a sleek, dark-themed user interface.

## Features

- **Authentication:** User login and registration.
- **Recipe Management:** Add, view, and save recipes.
- **Responsive Design:** Mobile-friendly layout.
- **Dark Theme:** Modern dark-themed UI.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
-**API:** Insomnia
## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. **Clone the repository:**

    ```sh
    git clone 
    cd "your directory project"
    ```

2. **Install dependencies:**

    For the backend:
    ```sh
    cd server
    npm install
    ```

    For the frontend:
    ```sh
    cd ../client
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**

    Start the backend server:
    ```sh
    cd server
    npm start
    ```

    Start the frontend development server:
    ```sh
    cd ../client
    npm start
    ```

    The app should now be running at `http://localhost:3000`.


## API Endpoints

### User Authentication

- **POST** `/user/register`: Register a new user.
- **POST** `/user/login`: Log in an existing user.

### Recipes

- **GET** `/recipes`: Get all recipes.
- **POST** `/recipes`: Add a new recipe.
- **PUT** `/recipes`: Save a recipe for a user.
- **GET** `/recipes/savedRecipes/ids/:userId`: Get IDs of saved recipes for a user.
- **GET** `/recipes/savedRecipes/:userId`: Get saved recipes for a user.



# Bike Rental Service

This project is a bike rental service where users can rent bikes from other users. The website is divided into several pages and is using different modern methodologies and technologies.

## Pages

### Home Page

The home page is the main landing page for the website. It provides navigation to other pages and features buttons for uploading a bike for rent and renting a bike.

### My Bikes Page

The My Bikes page allows users to view all the bikes they have uploaded for rent. Users can edit the details of their bikes from this page and remove bikes as needed.

### Upload Page

The Upload page provides a form for users to upload their bikes for rent. Users can specify details like the image of the bike, description, city, available dates, and price per day.

### Rent Page

The Rent page displays all available bikes for rent. Users can filter bikes based on city and available dates.

## Server

The server-side logic is handled in the [BikeRentalServer](https://github.com/simonAouiz/BikeRentalServer) reposetory.

## Styles

The styles for the website are located in the [css directory](src/css). There are separate CSS files for general styles and for each page.

## Scripts

The JavaScript files in the [js directory](src/js) handle the client-side logic for each page.

## Images

The [images directory](src/images) contains all the images (logos and icons) used in the website.

## Database

Stored locally on the server side in the [BikeRentalServer](https://github.com/simonAouiz/BikeRentalServer) reposetory.

## Technologies Used

### Express.js

The server-side application is built with Express.js, a fast, unopinionated, and minimalist web framework for Node.js. Express.js is used for the client-side application to interact with the server side. It handles routes, server-side logic, and interactions with the SQLite database.

### SQLite

SQLite is used as the database for this project. It's a C library that provides a lightweight disk-based database. It allows accessing the database using a nonstandard variant of the SQL query language.

### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's used to run the server-side application.

### Vanilla JavaScript

The client-side application is built with vanilla JavaScript. It uses the Fetch API to interact with the Express.js API, and it manipulates the DOM to provide a dynamic user interface.

## Server-Client Methodology

This project follows the server-client methodology. The client-side application is responsible for presenting data to the user and handling user interactions. The server-side application is responsible for processing requests from the client-side application and interacting with the database.

### Controller

The controller is responsible for handling requests from the client. It processes the request, interacts with the model to get or manipulate data, and sends a response back to the client.

### Model

The model is responsible for interacting with the database. It contains functions for creating, reading, updating, and deleting bikes and users in the database.

### Routes

Routes define the endpoints that the client-side application can request. Each route is associated with a controller function that handles requests to that route.

## Running the Project

To run the project, you need to start both the client-side (this repo) and server-side ([BikeRentalServer](https://github.com/simonAouiz/BikeRentalServer)) applications. For each repository you should run npm install and npm start.

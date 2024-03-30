# Bike Rental Service

This project is a bike rental service where users can rent bikes from other users. The website is divided into several pages and is using different modern methodologies and technologies.

## Pages

### Home Page

The home page is the main landing page for the website. It provides navigation to other pages and features buttons for uploading a bike for rent and renting a bike. It also has a navigation bar with buttons that lead to the different pages in the website.

### My Bikes Page

The "My Bikes" page is a dedicated section of the application where users can view and manage the bikes they have listed for rent. This page provides a comprehensive overview of all the bikes listed by the user, including their current status and any rental requests they have received.

Key features of the "My Bikes" page include:

- **View All Listed Bikes**: Users can see a list of all their listed bikes, including details such as the bike's name, type, rental price, and availability status. This list is dynamically generated and updated.

- **Manage Rental Requests**: For each listed bike, users can view and manage the rental requests they have received. They can accept or reject requests.

- **Remove Bike**: Users also have the option to remove a bike from their list. This is particularly useful if the bike is no longer available for rent.

- **Update Bike Details**: Users can update the details of their listed bikes, such as the rental price or availability status.

### My Requests Page

The "My Requests" page is a dedicated section of the application where users can view and manage their bike rental requests. This page provides a comprehensive overview of all the requests made by the user, including their current status.

Key features of the "My Requests" page include:

- **View All Requests**: Users can see a list of all their bike rental requests, including details such as the bike's name, rental period, and the status of the request (pending, accepted, or rejected).

- **Request Status**: Each request is accompanied by its current status. The status can be "pending" if the request is still being processed, "accepted" if the request has been approved, or "rejected" if the request was not approved.

- **Contact Information**: For accepted requests, users can view the contact information of the bike owner. This feature is hidden by default for privacy reasons, but users can view the information by clicking on the "Show Contact Info" button. In this way the owner's privacy is reserved while the renter and the owner can comunicate the details of the rent when permition is granted.

- **Remove Request**: Users also have the option to remove a request from their list. This is particularly useful if a request has been rejected or if the user decides not to proceed with a request.

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

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's used to run both the server-side and client side applications.

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

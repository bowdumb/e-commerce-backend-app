# E-Commerce Back End Routing

## Description

This application is a demonstration of the back end for a simple e-commerce company. While this application works to return data from a database that is representative of an actual e-commerce business, the true intention behind this projects development was to practice and demonstrate how we can build API routes to allow us to interact with our back end content on the front end of our stack. For this reason, there is no real front end content, and instead the user is intended to use the Insomnia software (or equivalent) to test the validity of these API routes. Additionally, the user may modify data in the database and experiment with the existing route to better learn their functionality for use within their own projects.

## Installation

To install this application, you should begin by cloning the following GitHub repository to your local machine: <a href="https://github.com/claxCode/e-commerce-backend-app">https://github.com/claxCode/e-commerce-backend-app</a>. Once the necessary files have been imported to your machine, navigate in your terminal to the root directory containing the repository, and run `npm i` to install the necessary NPM package dependencies as listed within the package.json file. These dependencies include: Express.js, MySQL2, Sequelize, and dotenv NPM packages. While dotenv is not strictly required, the codebase is designed to implement it's functionality and it's integration is recommended for ease-of-use. Additionally, the nodemon NPM is listed as a developer dependency, and it's use is recommended as well. The following usage instructions will assume that the user is utlilizing all listed NPM packages.

## Usage

Once the necessary NPM dependencies have been downloaded and successfully integrated, first navigate in your terminal to the appropriate folder and initiate your MySQL server. Once the server is up and running, run `npm run watch` from the terminal in order to initiate the nodemon. As nodemon is initialized it will execute the `node server.js` command, causing the database table "ecommerce_db" to be generated. Once the tables are generated, it's recommended to terminate the server by pressing `control + C`, and then run `npm run seed` to see the newly created tables with test data so that it's functionality may be observed. After the tables have been seeded, you can now run `npm run watch` again and leave the server to database connection running. At this point, you are able to test the functionality of the established API routes by using Insomnia to test the GET, POST, PUT, and DELETE routes for each respective database table and their associated data sets. Comments have been left within the codebase in order to simplify the process, and further define the URLs for each respective route.

## Features

This is entirely a back end application, and therefore the heavy lifting is all done by Express.js, Sequelize, and MySQl. The sole intent is for the user to be able to view and manipulate serverbase data in an environment that mimics an authentic e-commerce business' framework. Because there is no front end, the user must utilize the Insomnia software in order to manipulate the database content. This creates an idea environment to both familiarize oneself with the architecture of Sequelize routing, as well as to experiment with their own routes and data.

## Screenshots

![Image demonstrating GET request in Insomnia](/screenshots/Screenshot%202023-05-16%20at%2010.58.16%20PM%20(2).png)

![Image demonstrating a POST route to create a new category](/screenshots/Screenshot%202023-05-16%20at%2010.58.59%20PM%20(2).png)

## Contact

For questions regarding this project, please feel free to contact me on LinkedIn at <a href="https://www.linkedin.com/in/joshua-claxton-916a2a272/">this link</a>

## Video Demonstration

<a href="https://drive.google.com/file/d/1f7N276CxZejovMWOgTDbrDZNRPzkaj-2/view">Click here for a video demonstration</a>
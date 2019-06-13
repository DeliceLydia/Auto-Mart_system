# Auto-Mart_system
This is an online shop for automobiles of diverse makes, model or body type. with AUTO MART, users will be able to sell their cars or buy from trusted dealerships or private sellers

[![Build Status](https://travis-ci.org/DeliceLydia/Auto-Mart_system.svg?branch=develop)](https://travis-ci.org/DeliceLydia/Auto-Mart_system)    [![Coverage Status](https://coveralls.io/repos/github/DeliceLydia/Auto-Mart_system/badge.svg)](https://coveralls.io/github/DeliceLydia/Auto-Mart_system)


UI Technologies
HTML.
CSS.
Javascript.
UI link
Auto-Mart

Heroku link Example
Auto-mart

Swagger link Example
Auto-mart-swagger


API ENDPOINTS
Ressource URL	Methods	Description
/	GET	The index page
/api/v1/auth/signup	POST	Sign up
/api/v1/auth/signin	POST	Sign in
/api/v1/users	GET	Get all users
/api/v1/cars	GET	Get all cars advers
/api/v1/car	POST	Create a car advert
/api/v1/orders	GET	Get all purchasing order
/api/v1/order	POST	Create purchasing order
/api/v1/order/:order Id	PUT	Update price of purchasing order
/api/v1/car/:car Id/status	PUT	Update car status
/api/v1/car/:car Id/price	PUT	Seller Update car price
/api/v1/cars/available	GET	Get all available cars
/api/v1/cars/:advert id	DELETE	Delete a car advert
clone the Application
Github

Tools Used
Language
*Javascript*
Server Environment
 *NodeJS* 
Framework
 *Express* 
Testing Framework
 *Mocha* and *Chai*
Style Guide
*Airbnb*
Continuous Integration
Travis CI
Test Coverage
nyc
Git badge
coveralls
Deployment
Heroku
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages.

 [Node Package Installer - NPM] this usually comes with Node.
Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

> npm install
It will install the node_modules which will help you run the project on your local machine.

Run the server
> npm run start
Run the test
> npm run test
Contributor
Lydia Ingabire Delydia84@gmail.com

License & copyright
Lydia Ingabire
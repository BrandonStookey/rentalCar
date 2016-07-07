##rentalCar

## Table of Contents

  - Usage
  - Requirements
  - Installing Dependencies
  - In production
  - Tech Stack
  - Test
  - Deployment

##Usage

  - Fork and clone this repo

##Requirements

  - Node 4.4.0
  - Angular 1.5.6
  - Angular ui router 0.3.0
  - Bootstrap 3.3.6
  - Angular animate 1.5.7
  - Angular ui bootstrap 1.3.3
  - xml2json

##Installing Dependencies

  - From within the root directory:

  - sudo npm install -g nodemon
	
  - sudo npm install -g bower

  - npm install 
		runs bower install for you

  - npm start 
		uses nodemon,the server runs on port 8080 by default

##In production 

  - node server/server.js 
  - When the web app is deployed to heroku, it will do a postinstall for bower. This will install all of the required Angular dependency, the .bowerrc file instructs power to install Angular and its dependency in a file called libs.

##Tech stack

  - Angularjs 1.5

  - Angularjs is a single page application, which allows a single index.html to be loaded with all required scripts and style sheets. It then utilizes many views that can be rendered to the static index.html page. This saves time from fetching required scripts and style sheets each time a new view is loaded.

  - Angular bootstrap and angular-animate was used to style the page

  - An xml2json library was used to convert the Rest API request from XML, to JSON, it was used with the $http request in app.module.js to transform the XML to JSON

  - ngAutocmoplete was used with google maps to allow for auto complete for cities, to improve users' experience

  - A cdn for an angular-loading-bar and angular-loading-spinner was included and then the dependency was injected on second view. The loading bar helps improve the user experience, so the user knows there search is running. 

##Test

  - Karma was used to test the $http request
    

Project Name: rentalCar

## Table of Contents

  - Usage
  - Requirements
  - Installing Dependencies
  - In production
  - Tech Stack

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
		uses nodemon
		The server runs on port 8080 by default

##In production 

  - node server/server.js 

##Tech stack

  - Angularjs 1.5

  - Angularjs is a single page application, which allows a single index.html to be loaded with all required scripts and style sheets. It then utilizes many views that can be rendered to the static index.html page. This saves time from fetching required scripts and style sheets each time a new view is loaded.

  - Angular bootstrap and angular-animate was used to style the page

  - An xml2json library located in libs1 was used to convert the Rest API request from xml, to json, it was then used with the $http request in app.module.js to transform the xml to json

  - ngAutocmoplete was used with google maps API to allow for auto complete for cities, to improve user's experience

  - A cdn for an angular-loading-bar and angular-loading-spinner was included and then the dependency was injected on second view. The loading bar helps improve the user experience, so the user knows there search is running. 




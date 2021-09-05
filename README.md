## prerequisites

-   react-app

-   react-dom

-   react-router

-   react-script

-   axios

-   recharts

## Preview

You can see the actual project here :

https://sportify.pages.dev/

## Clone the repo

run the following command to clone the depo

> git clone https://github.com/Willy-tec/wastiauxwilliam_12_04082021.git

## Installation

run the following command to install all the dependency

> npm install

## Run the server

> npm start

## Configuration for backend

The backend server is actually hosted on heroku.app. The server can turn into pause mode, so, it's possible to take some time when you launch your app.

You can use the backend server locally, but you will need to change a little bit in the service/index.js file

All you need to do is to clone the other project

> git clone https://github.com/Willy-tec/p12_api_dashboard

Run :

> npm install

and

> npm start

All the information about the api can be found on the depo, like endpoint and other things.
[https://github.com/Willy-tec/p12_api_dashboard]

Be carrufull about the port.

The backend need to be on port 3000, and the front-end on another port.

in the service/index.js

find the line(line 16) :

> const config = configArr[1]; // Define this number to 1 if you want to use heroku, or 0 if you want to use local

The service actually load a json file containing an array with the url to use.

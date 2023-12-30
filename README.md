# Assignment 2 - Web API.

Name: Daniel Lawton

## Features.

 + Sign up Page Attempted
 + Login Page Ex: username=user1, password=test123@.
 + New Actors Page using tmdb-api
 + Protected Routes/Authentication
 + Movies-api to host top rated movies information

## Setup requirements.

npm run dev for movies-api folder
npm start for movies folder

## API Configuration

 create an `.env` file
______________________
MongoDB KEY,
SECRET,
TMDB KEY, 
FAST_REFRESH=false,
PORT=8080.
______________________

## API Design


/api/movies | GET | Gets a list of movies
/api/movies | GET | Gets a list of movies
/api/users | POST | Logs in a new user if authentication is successful.
/api/users?action=register | POST | Registers a new user to the app.


## Security and Authentication

All Routes but the Home Page, SignUp and Login Pages are protected and require the user to authenticate before viewing them. 
The user only needs to authenticate themselves once in order to view all the protected pages.

## Integrating with React App

The main integrations was the inclusion of a login signup page, along with a new actors page, and an attempt at using my movie-api folder to feed the info to my top rated tv show page.

## Independent learning (if relevant)


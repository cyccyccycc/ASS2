# Assignment 2 - Web API.

Name: YICHENG CAI

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - user can get actor from the database which is collected by using key from TMDB website
 + Feature 2 - user can get one specific actor by id from the database which is collected by using key from TMDB website
 + Feature 3 = user can find one specific actor by id an changer his/her infromation 
 + Feature 4 = user can delete one actor by finding he/her by id
 + Feature 5 = user can check one specific detailed infromation
 + Feature 6 = user can get one specific movie's review
 + Feature 7 = user can add some new reviews into one movie's review
 + Feature 8 = user delete one specific movie by id
 + Feature 9 = user can get All of the similar movies about one specific movie
 + Feature 10 = user can add some similar movies about one specific movie
 + Feature 11 = user can get the nowplaying movies
 + Feature 12 = user can get the similar movies about one specific nowplaying movie
 + Feature 13 = user can get the upcoming movies

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 


npm install oepnapi-types
npm install -g swagger

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= YOUR_TMDB_KEY
mongodb=YOU_CLOUD_MONGOdb_KEY
SEED_DB=true
SECRET=ilikecake

## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/:id |Gets one specific movies | N/A | N/A |Delete one movie by movie_id
| /api/movies/:id/review |Gets reviews of one movie |Add reviews to one movie| N/A |
| /api/movies/:id/similarmovies |Gets simialr movies about one movies |Add similar movies to one movie| N/A |
| /api/movie/:id |Gets detailed infromation of one movies | N/A | N/A |
| /api/upcoming |Gets a list of upcoming movies | N/A | N/A |
| /api/upcoming/:id |Gets one specific upcoming movie| N/A | N/A | Delete one upcoming movie by id
| /api/nowplaying |Gets a list of nowplaying movies | N/A | N/A |
| /api/nowplaying/:id/simialr |Gets similar movies movies |Add similar movies about one nowplaying movie | N/A |
| /api/users |Gets a list of users in database |Add new user to the database | N/A |
| /api/users/:id |N/A | N/A | update a user infromation |
| /api/users/:username/favourites |Gets one user's favourites |Add movies into one user's favourite| N/A |

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).
I bulid the swagger document in Heroku
## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

protect routes:

+ /api/actordetail Put
+ /api/actordetail Get
+ /api/actordetail Delete
+ /api/movie Get
+ /api/movie Post
+ /api/upcoming  GET
+ /api/upcoming  Delete
+ /api/nowplaying Get
+ /api/nowplaying Post

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
      'Content-Type': 'application/json'
    },
    method: 'get',
  }
  ).then(res => res.json());
};

export const getMovie = id => {
  return fetch(`/api/movie/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
    
}).then(res => res.json())
};
~~~
link to the React App repo: https://github.com/cyccyccycc/wad2-moviesApp
## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

I bulid the swagger document in Heroku

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

+ swagger UI
i learnt to build the swagger Ui in my Heroku app, and i implement the swagger with the swagger in this assignment


# Assignment 2 - Agile Software Practice.

Name: YICHENG CAI

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Put /api/movies/:id - update a specific movie. The request payload includes the some/all of the following movie properties to be updated: title, genre list, release date.
+ Post /api/movies - add a new movie to the database.
+ Get /api/movies/:id/reviews - return one speciific move reviews
+ Post /api/movies/:id/reviews - add some new reviews about one specific movie
+ delete /api/movies/:id - delete one movie by finding it use its id  
+ Get /api/movie/:id - get movie's detail infromation  
+ Get /api/upcoming - get upcoming movies  
+ Delete /api/upcoming - delete upcoming movie by id
+ Get /api/nowplaying - get nowplaying movies 
+ Post /api/nowplaying/:id/similarmovies - add some similar movies about one specific movie
+ Get /api/nowplaying/:id/similarmovies - get a list of  similar movies about one specific movie
+ Get /api/actor - get all actors  
+ Get /api/actordetail - get actor's detail  
+ Get /api/acotr/:id - get one specific actor  
+ Put /api/actor/:id - update a specific actor. The request payload includes the properties to be updated: id
+ Get /api/users - get all users  
+ Post /api/users - add a new user
+ Put /api/users/:id -  update the user's information  
+ Post /api/users/:username/favourites - add the user's favoutite movies into the favourites 
+ Get /api/users/:username/favourites - get all of movies in one specific user favourites 

## Error/Exception Testing.

.... From the list of endpoints above, specify those that have error/exceptional test cases in your test code, the relevant test file and the nature of the test case(s), e.g.

+ Post /api/movies - test when the new movie has no title, invalid release date, empty genre list. Test adding a movie without prior authentication. See tests/functional/api/movies/index.js 
+ Get /api/movies - test when the token is invalid-unauthorized and token is valid.- See tests/functional/api/movies/index.js 
+ Get /api/movies/:id - test when the user enter a invalid movies id(not in the database). See tests/functional/api/movies/index.js 
+ Delete /api/movies/:id - test when the movies wanted to be deleted id is invalid condition. See tests/functional/api/movies/index.js 
+ Post /api/users?action=register - test when the entered words were empty- See tests/functional/api/users/index.js 
+ Post /api/users?action=register - test when the password is wrong format-See tests/functional/api/users/index.js 
+ Post /api/users?action=authenticate - test when enter the wrong user-See tests/functional/api/users/index.js 

## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://movies-api-trial-staging.herokuapp.com/ - Staging deployment
+ https://movies-api-production.herokuapp.com/ - Production

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 

[ , , , screenshot here . . . ]

[If an alternative platform to Heroku was used then show the relevant page from that platform's UI.]

## Feature Flags (If relevant)

... Specify the feature(s) in your web API that is/are controlled by a feature flag(s). Mention the source code files that contain the Optimizerly code that implement the flags. Show screenshots (with appropriate captions) from your Optimizely account that prove you successfully configured the flags.


[stagingapp]: ./img/stagingapp.png
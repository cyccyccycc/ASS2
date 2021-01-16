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
+ Get /api/nowplaying - get nowplaying movies 
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
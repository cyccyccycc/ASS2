import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadActors, loadNowplaying, loadUpcomingMovies} from './seedData';
import usersRouter from './api/users';
import actorsRouter from './api/actor';
import upcomingRouter from './api/upcoming';
import onemovieRouter from './api/movie';
import actordetailRouter from './api/actordetail';
import nowplayingRouter from './api/nowplaying';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();
const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
  };

  if (process.env.SEED_DB) {
    loadUsers();
    loadMovies();
    loadActors();
    loadUpcomingMovies();
    loadNowplaying();
  }
const app = express();

const port = process.env.PORT;
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//session middleware
app.use(session({
    secret: 'ilikecake',
    resave: true,
    saveUninitialized: true
  }));

app.use(express.static('public'));
// initialise passport​
app.use(passport.initialize());
// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/movie', onemovieRouter);
app.use('/api/actor', actorsRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/actordetail', actordetailRouter);
app.use('/api/nowplaying', nowplayingRouter);
app.use(errHandler);
const server = app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

module.exports = server;
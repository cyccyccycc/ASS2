import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import actorModel from '../api/actor/actorModel';
import {movies} from './movies.js';
import {actors} from './actors.js';
const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }
  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  } 

  export async function loadActors() {
    console.log('load seed actor data');
    console.log(actors.length);
    try {
      await actorModel.deleteMany();
      await actorModel.collection.insertMany(actors);
      console.info(`${actors.length} actors were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load actor Data: ${err}`);
    }
  }

import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import actorModel from '../api/actor/actorModel';
import nowplayingModel from '../api/nowplaying/nowplayingModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import onemovieModel from '../api/movie/onemovieModel';
import actordetailModel from '../api/actordetail/actordetailModel';
import {getMovies, getMovie, getActors, getActor, getnowplaying, getUpcomingMovies} from '../api/tmdb-api'
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
//export async function loadMovies() {
//    console.log('load seed data');
//    console.log(movies.length);
 //   try {
 //     await movieModel.deleteMany();
  //    await movieModel.collection.insertMany(movies);
 //     console.info(`${movies.length} Movies were successfully stored.`);
  //  } catch (err) {
  //    console.error(`failed to Load movie Data: ${err}`);
  //  }
 // } 

  export async function loadMovies() {
    console.log('load Movies');
    try {
      getMovies().then(async res => {
        await movieModel.deleteMany();
        await onemovieModel.deleteMany();
        await movieModel.collection.insertMany(res);
        console.info(`${res.length} Movies successfully stored.`);
        res.map(async (movie)=>{
          await getMovie(movie.id).then(async (res)=>{
            await onemovieModel.collection.insertOne(res,(err)=>{if(err) console.log(err);})
          }
          )
        })
      })
    } catch (err) {
      console.error(`failed to Load movies Data: ${err}`);
    }
  }


  export async function loadActors() {
    console.log('load actors');
    try {
      getActors().then(async res => {
        await actorModel.deleteMany();
        await actordetailModel.deleteMany();
        await actorModel.collection.insertMany(res);
        console.info(`${res.length} actors successfully stored.`);
        res.map(async (actor)=>{
          await getActor(actor.id).then(async (res)=>{
            await actordetailModel.collection.insertOne(res,(err)=>{if(err) console.log(err);})
          }
          )
        })
      })
    } catch (err) {
      console.error(`failed to Load actors Data: ${err}`);
    }
  }

  export async function loadUpcomingMovies() {
    console.log('load upcomingmovies');
    try {
      getUpcomingMovies().then(async res => {
        await upcomingModel.deleteMany();
        await upcomingModel.collection.insertMany(res);
        console.info(`${res.length} Upcomingmovies were successfully stored.`);
      })
    } catch (err) {
      console.error(`failed to Load upcomingmovie Data: ${err}`);
    }
  }

  export async function loadNowplaying() {
    console.log('load nowplaying movies data');
   try {
      getnowplaying().then(async res => {
        await nowplayingModel.deleteMany();
       await nowplayingModel.collection.insertMany(res);
        console.info(`${res.length} nowplayingmovies successfully stored.`);
      })
    } catch (err) {
      console.error(`failed to Load nowplaying movies Data: ${err}`);
    }
  }


import express from 'express';
import nowplayingModel from './nowplayingModel';
import {
  getsimilarmovies
} from '../tmdb-api';
const router = express.Router();

router.get('/',(req, res, next)=>{
    nowplayingModel.find().then(movies => res.status(200).send(movies))
    .catch(next);
  });


  router.get('/:id', async (req, res, next)=>{
    const id = parseInt(req.params.id);
    const nowplaying = await nowplayingModel.findByMovieDBId(id);
    if(nowplaying){
    nowplayingModel.findByMovieDBId(id).then(nowplaying => res.status(200).send(nowplaying)).catch(next);
  }else{
    res.status(404).send({message: `Unable to find nowplayingmovie with id: ${id}.`, status: 404});
  }
});


router.get('/:id/similarmovies', async(req, res, next) => {
  try{
    const id = parseInt(req.params.id);
  const similarmovies=await getsimilarmovies(id)
  res.status(200).send(similarmovies);
  }
  catch{
    console.log(err)
  }
});

router.post('/:id/similarmovies', async (req, res, next) => {
  try{
    const id = parseInt(req.params.id);
    const newsimilarmovies = req.body.original_title;
    const movie = await movieModel.findByMovieDBId(id);
    if(movie.original_title.indexOf(newsimilarmovies) === -1){
    await movie.original_title.push(newsimilarmovies);
    }else{
      res.status(405).send("newsimilarmovies already exists");
    }
    await movie.save(); 
    res.status(201).json(movie);
  }catch(error){
    next(error);
  }
})
  export default router;

import express from 'express';
import movieModel from './movieModel'
import {
  getMovieReviews,getsimilarmovies
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res, next) => {
    movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', async (req, res, next)=>{
  const id = parseInt(req.params.id);
  const movie = await movieModel.findByMovieDBId(id);
  if(movie){
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
}else{
  res.status(404).send({message: `Unable to find movie with id: ${id}.`, status: 404});
}

});


router.get('/:id/reviews', async(req, res, next) => {
  try{
    const id = parseInt(req.params.id);

  const reviews=await getMovieReviews(id)
  res.status(200).send(reviews);
  }
  catch{
    console.log(err)
  }
});

router.post('/:id/reviews', async (req, res, next) => {
  try{
    const id = parseInt(req.params.id);
    const newReview = req.body.reviews;
    const movie = await movieModel.findByMovieDBId(id);
    if(movie.reviews.indexOf(newReview) === -1){
    await movie.reviews.push(newReview);
    }else{
      res.status(405).send("review already exists");
    }
    await movie.save(); 
    res.status(201).json(movie);
  }catch(error){
    next(error);
  }
})

router.delete('/:id', async (req,res, next)=>{
  const id = parseInt(req.params.id);
  const movie = await movieModel.findByMovieDBId(id);
  if(movie){
  movieModel.deleteOne({id: id}).then(res.status(200).send("delete successfully"))
  .catch(next);
  } else{
    res.status(404).send("can't find the moive wanted to delete");
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

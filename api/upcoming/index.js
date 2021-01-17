import express from 'express';
import upcomingMovieModel from './upcomingModel'
const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingMovieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  upcomingMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next).catch((error)=>next(error));
  
});

router.delete('/:id', async (req,res, next)=>{
  const id = parseInt(req.params.id);
  const upcomingmovie = await upcomingMovieModel.findByMovieDBId(id);
  if(upcomingmovie){
    upcomingMovieModel.deleteOne({id: id}).then(res.status(200).send("delete successfully"))
  .catch(next);
  } else{
    res.status(404).send("can't find the upcomingmovie wanted to delete");
  }
});



export default router;


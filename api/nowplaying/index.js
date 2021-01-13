import express from 'express';
import nowplayingModel from './nowplayingModel';

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
  export default router;

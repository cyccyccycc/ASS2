import express from 'express';
import onemovieModel from './onemovieModel'
const router = express.Router();

router.get('/', (req, res, next) => {
  onemovieModel.find().then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  onemovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next).catch((error)=>next(error));
  
});


router.post('/:id', async (req, res, next) => {
  try {const value = req.body.value;
    if(!value){
      res.status(403).json({
        code: 403,
        msg: 'NO value has entered'
      });
    }
    const id =req.params.id;
    const movie = await onemovieModel.findByMovieDBId(id);
    if (movie!=null) {
      await movie.push(value);
      await movie.save(); 
      res.status(201).json({
        code:201,
        msg: 'The movie has been posted'
        }); 
    }
    else {
      if(value!=null){
      res.status(401).json({
        code: 401,
        msg: 'The movie does not exist'
      });
    }
  }} catch (error) {
    next(error);
  }
});

export default router;

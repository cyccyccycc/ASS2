import express from 'express';

import ActordetailModel from './actordetailModel'
const router = express.Router();

router.get('/', (req, res, next) => {
  ActordetailModel.find().then(actor => res.status(200).send(actor)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  ActordetailModel.findByActorDBId(id).then(actor => res.status(200).send(actor)).catch(next).catch((error)=>next(error));
  
});
 


export default router;

import express from 'express';
import actorModel from './actorModel'

const router = express.Router();

// Get all actors
router.get('/', (req,res,next)=>{
    actorModel.find().then(actors => res.status(200).send(actors))
    .catch(next);
});

router.get('/:id', (req,res,next)=>{
    const id = parseInt(req.params.id);
    actorModel.findByActorDBId(id).then(actor => res.status(200).send(actor))
    .catch(next);
});



router.put('/:id', async (req, res, next)=>{
    const id = parseInt(req.params.id);
    const updateActor = req.body;
    const actor = await actorModel.findByActorDBId(id);
    if(actor){
        actorModel.findByActorDBId(id).then(actor =>res.status(200).send(actor))
    .catch(next);
    }else{
      res.status(404).send({message: `Unable to find actor with id: ${id}.`, status: 404});
    }
  });

  router.delete('/:id', async (req,res, next)=>{
    const id = parseInt(req.params.id);
    const actor = await actorModel.findByActorDBId(id);
    if(actor){
      actorModel.deleteOne({id: id}).then(res.status(200).send("delete successfully"))
    .catch(next);
    } else{
      res.status(404).send("can't find the actor wanted to delete");
    }
  });

export default router;

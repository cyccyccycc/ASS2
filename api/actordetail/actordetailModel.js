import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const ActordetailSchema = new Schema({
  adult: { type: Boolean },
  gender: { type: Number },
  id: { type: Number, required: true },
  also_known_as:{type:Array},
  biography:{type:String},
  name:{type:String},
  birthday:{type:String},
  profile_path:{type:String},
  known_for_department:{type:String},
  place_of_birth:{type:String},
  imdb_id:{type:String}


});
ActordetailSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('actordetail', ActordetailSchema);

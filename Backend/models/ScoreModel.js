import mongoose, { Types } from "mongoose";

const scoreSchema = new mongoose.Schema({
  userId:{ type :String},
  score: {type : Number},
  date: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', scoreSchema);

export default Score
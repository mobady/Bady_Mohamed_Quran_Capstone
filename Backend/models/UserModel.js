import mongoose, { Types } from "mongoose";

const UserSchema = mongoose.Schema({
    username :{type : String} ,
    email :{ type : String} ,
_id:{type:String},
score:{type:Number}
})
const User = mongoose.model('user',UserSchema)

export default User
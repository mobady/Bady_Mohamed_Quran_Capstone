import mongoose, { Types } from "mongoose";

const UserSchema = mongoose.Schema({
    username :{type : String} ,
    email :{ type : String} ,
    password :{ type : String}
})
const User = mongoose.model('user',UserSchema)

export default User
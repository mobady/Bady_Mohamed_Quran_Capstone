import mongoose, { Types } from "mongoose";

const QuranSchema = mongoose.Schema({
    code :{type : Number} ,
    status :{ type : String} ,
    data :{ type : Object}
})
const Quran = mongoose.model('quran',QuranSchema)

export default Quran
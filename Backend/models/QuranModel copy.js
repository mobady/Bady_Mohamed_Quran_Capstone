import mongoose, { Types } from "mongoose";

const QuranSchema = mongoose.Schema({
    code :{type : Number} ,
    status :{ type : String} ,
    data :{ type : Object},

    
})
const Surah = mongoose.model('quran',QuranSchema)

export default Surah
import mongoose, { Types } from "mongoose";

const AyahSchema = mongoose.Schema({
    number: { type: Number },
    name: { type: String },
    englishName: { type: String },
    englishNameTranslation: { type: String },
    numberOfAyahs: { type: Number },
    revelationType: { type: String },
    ayahs: [
        {
            number: {type : Number},
            text: {type : String},
            numberInSurah: {type : Number},
            juz: {type : Number},
            manzil: {type : Number},
            page: {type : Number},
            ruku: {type : Number},
            hizbQuarter: {type : Number},
            sajda: {}
        }
    ]

})
const Ayah = mongoose.model('ayahs', AyahSchema)

export default Ayah
import mongoose, { Types } from "mongoose";

const SurahSchema = mongoose.Schema({
    number: { type: Number },
    name: { type: String },
    englishName: { type: String },
    englishNameTranslation: { type: String },
    numberOfAyahs: { type: Number },
    revelationType: { type: String }
})
const Surah = mongoose.model('surah', SurahSchema)

export default Surah
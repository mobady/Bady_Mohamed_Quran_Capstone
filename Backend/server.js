import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config.js"
import Quran from "./models/QuranModel.js"
import surahs from "./data.js"

const app = express()
const PORT = 8080
app.use(cors())

app.get('/', (req, res) => {
    res.json('hello world')
})

app.get('/quran', async (req,res) =>{
    try {
        const quran = await Quran.find({})
        console.log("Get res from /quran")
        res.status(200).json(quran)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})


app.get('/seedRoute', async (req,res) =>{
    try {

      // await Surah.insertMany(surahs)
        //
    } catch (error) {
        
    }
})

app.listen(PORT, () =>{
    console.log("Listening on port: " + PORT)
    connectDB()
})
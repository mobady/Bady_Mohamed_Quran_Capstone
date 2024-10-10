import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config.js"
import Quran from "./models/QuranModel.js"


import Ayah from "./models/AyahModel.js"

const app = express()
const PORT = 8080
app.use(cors())


app.get('/ayah', async (req,res) =>{
    try {
        const ayahs = await Ayah.find({})
        console.log("Get res from /quran")
        res.status(200).json(ayahs)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

app.get('/ayah/:id', async (req, res) => {
    try {
      const ayah = await Ayah.findOne({ number: req.params.id }); 
      res.status(200).json(ayah);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

app.listen(PORT, () =>{
    console.log("Listening on port: " + PORT)
    connectDB()
})
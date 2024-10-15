import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config.js"
import Quran from "./models/QuranModel.js"
import Surah from "./models/SurahModel.js"
import Score from "./models/ScoreModel.js"
import Ayah from "./models/AyahModel.js"
import User from "./models/UserModel.js"

const app = express()
const PORT = 8080
app.use(cors())
app.use(express.json())


app.get('/ayah', async (req,res) =>{
    try {
        const ayahs = await Ayah.find({})
        console.log("Get res from databse /ayah")
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

  app.post('/user', async (req,res) =>{
    try {
        const newUser = await User.create(req.body)
        console.log("Post new user to database /user")
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

app.get('/user', async (req,res) =>{
  try {
      const users = await User.find({})
      console.log("Get res from database /user")
      res.status(200).json(users)
  } catch (error) {
      console.log(error)
      res.status(400).json(error)
  }
})

app.get('/surahs', async (req,res) =>{
  try {
      const surahs = await Surah.find({}).sort({number: 1})
      console.log("Get res from databse /surahs")
      res.status(200).json(surahs)
  } catch (error) {
      console.log(error)
      res.status(400).json(error)
  }
})


app.post('/score', (req, res) => {
    const { userId, score } = req.body;
  
    
    Score.create({ userId, score })
      .then(() => res.status(201).json({ message: 'Score saved successfully!' }))
      .catch((error) => res.status(500).json({ message: 'Failed to save score', error }));
  });
  

app.listen(PORT, () =>{
    console.log("Listening on port: " + PORT)
    connectDB()
})
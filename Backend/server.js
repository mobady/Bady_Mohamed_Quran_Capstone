import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config.js"
import Quran from "./models/QuranModel.js"
import Surah from "./models/SurahModel.js"
import Ayah from "./models/AyahModel.js"
import User from "./models/UserModel.js"

const app = express()
const PORT = 8080
app.use(cors())
app.use(express.json())


app.get('/ayah', async (req, res) => {
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

app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log("Post new user to database /user")
    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}).sort({ score: -1 }).limit(3)
    console.log("Get res from database /user")
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

app.get('/surahs', async (req, res) => {
  try {
    const surahs = await Surah.find({}).sort({ number: 1 })
    console.log("Get res from databse /surahs")
    res.status(200).json(surahs)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})


app.put('/users/:userId/score', (req, res) => {
  const { userId } = req.params;
  const { score } = req.body;
  console.log('hello', score, userId)
  User.findByIdAndUpdate(userId, { $inc: { score: score } }, { new: true })
    .then(updatedUser => {
      console.log(updatedUser)
      res.json(updatedUser);
    })
    .catch(error => {
      console.error('Error updating score:', error);
      res.status(500).json({ error: 'Error updating score' });
    });
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT)
  connectDB()
})
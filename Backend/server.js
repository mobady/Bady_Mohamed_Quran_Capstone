import express from "express"
import cors from "cors"

const app = express()
const PORT = 8080
app.use(cors())

app.get('/', (req, res) => {
    res.json('hello world')
})
app.listen(PORT, () =>{
    console.log("Listening on port: " + PORT)
})
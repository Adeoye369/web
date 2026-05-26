import express from "express"
import cors from "cors"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    try {
        res.json({message: "Hello from ExpressJs"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

app.listen(PORT, ()=>{
    console.log(`App listening from port ${PORT}...`)
})
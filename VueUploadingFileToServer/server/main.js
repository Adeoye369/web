
import express from "express"
import cors from "cors"

const port = 3000
const app = express()
app.use(express.json()) // to send Json POST application/json header
app.use(cors())

app.use('/', (req, res)=>{
    res.json({
        hello: "Hello from Express"
    })
})

app.listen(port, ()=>{
    console.log(`File Running from localhost:${port}`)
})
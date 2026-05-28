import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.use('/api/message', (req, res)=>{

    res.status(200).json({
        message: "Hello From Express Again!!!"
    })
})

app.listen(port, ()=>{
    console.log(`Listening to at http://localhost:${port}`)
})
import express from 'express'

const PORT = 3000
const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: "Hello from Express"})
})

app.get('/api/products', (req, res)=>{
    try {
        res.json({name: "product A", price: '45'})
    } catch (error) {
      res.status(500).json({error: `Failed Error ${error.message}`})  
    }
})

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT)
})
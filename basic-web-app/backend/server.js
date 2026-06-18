import express from "express"
import cors from "cors"
import sequelize from './config/db.js'
import Product from "./model/Product.js"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

// HOME
app.get("/", (req, res)=>{
    try {
        res.json({message: "Hello from ExpressJs"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

// Add Product ENDPOINT
app.post('/api/products', async (req, res)=>{

        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
    try {
        const newProduct = await Product.create({
            name: name, price: price, description: description
        })

       

        res.json(newProduct)
    } catch (error) {
        
        res.status(500).json(error.message)
    }

})

// get products ENDPOINTS

app.get('/api/products', async(req, res)=>{
    try {
        const products = await Product.findAll({
            benchmark: true,
            logging: (sql, timingMs)=>{
                console.log(`findAll took, ${timingMs}ms`)
            }
        })
        res.json(products)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening from port ${PORT}...`)
    })
})

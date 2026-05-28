import express from "express"
import cors from "cors"
import sequelize from "./config/db.js"
import Product from "./model/Product.js"
import { Op } from "sequelize"

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

// Create Product api endpoint
app.post("/api/products", async(req, res)=>{
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    try {
        const newProduct = await Product.create({
        name: name,
        price: price,
        description: description
    })
    console.log("New Product created: ", newProduct.dataValues)

    res.status(200).json({newProduct: newProduct})
    } catch (error) {
        res.status(500).json({error: `Failed to create Product:: ${error.message}` })
    }
})

app.get("/api/products", async(req, res)=>{

    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.status(500).json({error: `Failed to get Products:: ${error.message}`})
    }
})


sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening from port ${PORT}...`)
    })
}).catch((error)=>{
    console.log(error)
})

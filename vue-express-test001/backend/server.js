import express from "express"
import cors from "cors"
import sequelize from "./config/db.js"
import Product from "./model/Product.js"
import { Op } from "sequelize"
import { faker } from "@faker-js/faker"

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

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 4 // items par page
    const offset = (page - 1) * limit     // offset

    try {
        const {count, rows} = await Product.findAndCountAll({
            limit: limit,
            offset: offset
        })

        // calc. totalPages
        const totalPages = Math.ceil(count / limit)

        res.json({
            products: rows,
            totalPages: totalPages,
            totalProducts: count
        })
    } catch (error) {
        res.status(500).json({error: `Failed to get Products:: ${error.message}`})
    }
})


app.get("/api/products/faker", async(req, res)=>{
    const productsArray = [];

    for (let i = 0; i < 1000; i++) {
        productsArray.push({
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price({min:10, max: 1000})),
            description: faker.commerce.productDescription()
        })
    }

    await Product.bulkCreate(productsArray, {
        benchmark: true,
        logging: (sql, timingMs)=>{
            console.log(`==> Db insert for ${productsArray.length} took ${timingMs}ms`)
        }
    })

    res.json({
        message: "Bulk Product posted successfully!"
    })
} )

app.get('/api/delete-bulk', async(req, res)=>{

    const products = await Product.findAll({
        limit: 1000,
        attributes: ['id'],
        order: [['id', 'DESC']]
    })

    const ids = products.map(prod => prod.id)
    
    await Product.destroy({
        where:{
            id: {
                [Op.in]: ids  // finds matches inside your array      
            }
        }
    })

    res.json("Bulk deleted successfully")
})

sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening from port ${PORT}...`)
    })
}).catch((error)=>{
    console.log(error)
})

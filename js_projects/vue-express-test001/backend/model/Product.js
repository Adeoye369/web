import sequelize from "../config/db.js"
import { DataTypes } from "sequelize"

const Product = sequelize.define("product", {
    name: {type: DataTypes.STRING, allowNull:true},
    price: {type: DataTypes.STRING, allowNull:true},
    description: DataTypes.TEXT
})

export default Product
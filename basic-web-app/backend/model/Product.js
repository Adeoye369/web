import sequelize from '../config/db.js'
import {DataTypes} from 'sequelize'

const Product = sequelize.define('product', {
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    description: DataTypes.TEXT
})

export default Product
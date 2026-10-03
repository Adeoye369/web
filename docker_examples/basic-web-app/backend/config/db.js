import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize('express_test_db', 'root', process.env.DB_PASS,
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default sequelize
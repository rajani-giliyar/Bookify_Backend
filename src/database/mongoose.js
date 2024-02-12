const dotenv = require("dotenv");
const mongoose = require("mongoose");
const config = require("../../config/config");
const environment = process.env.NODE_ENV || 'development';
const envConfig = config[environment];


const dbName = envConfig.dbName
const dbConnectionString = envConfig.dbConnectionString

dotenv.config();

// create a function to connect with database

exports.connectDB = async() => {
    try {
        const dbURI = `${dbConnectionString}/${dbName}`
        await  mongoose.connect(dbURI)
        console.log("connected to mongoDB")
    } catch (error) {
        console.error(`connection erroe : ${error}`)
        process.exit(1);
    }
}
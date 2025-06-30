import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DB_HOST
/* Here we save db's url in url variable*/

const dbConn = async()=>{
    try {
        await mongoose.connect(url)
        console.log("MongoDB is Connected")
    } catch (error) {
        console.error(error)
    }
}
/* here we make connection of database */

export default dbConn
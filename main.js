import express from 'express'
import dbConn from './config/dbConfig.js'
const app = express()
const PORT = process.env.PORT || 4000

dbConn()
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
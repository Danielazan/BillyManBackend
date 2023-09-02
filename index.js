const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const user = require("./Routes/User")
const sequelize = require('./database')
const Machine = require("./Routes/Machines")
const path = require("path")

require("dotenv").config()
app = express()


app.use(cors())
// app.use(helmet())
app.use(express.json())
app.use(express.static("public"))



// for creating the databse 
app.use("/api",user)
app.use('/api',Machine)

sequelize.sync().then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log(`Listening at port ${process.env.PORT}`)
    })
})


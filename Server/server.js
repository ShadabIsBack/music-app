const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { mongoConnect } = require('./config/databse')
const music_routers = require('./routes/user')

dotenv.config({path:"./config/config.env"})

mongoConnect()

app.use(cors())

app.use(bodyParser.json({
    limit:"100mb"
}))

app.use(morgan("dev"))


app.get('/',(req,res)=>{
    try {
        res.send("I am server")
    } catch (error) {
        console.log(error)
    }
    
})

app.get('/large-response', (req, res) => {
    const largeData = generateLargeData(); // Replace with your data logic
    res.json(largeData); // Send as JSON (ensure it's optimized)
});

app.use('/music',music_routers)

app.listen(8000,()=>{console.log("server is running")})

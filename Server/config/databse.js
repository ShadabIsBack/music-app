const { default: mongoose } = require("mongoose")

exports.mongoConnect = async (req,res)=>{
    try {
        const connectDB = mongoose.connect(process.env.MONGO_URL)
        if(connectDB){
            console.log("MongoDB Connected")
        }
    } catch (error) {
        console.log(error)
    }
}
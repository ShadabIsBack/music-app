const { default: mongoose, mongo } = require("mongoose");

const data = mongoose.Schema({
    name:{
        type : String
    },
    artist:{
        type:String
    },
    url:{
        type:String
    },
    image:{
        type:String
    },
    duration: {
        type : String
    }
})

const Data = mongoose.model('Data',data)
module.exports = Data
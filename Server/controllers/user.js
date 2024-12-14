const Data = require("../model/user")

exports.addData = async (req,res)=>{
    try {
        const data = new Data(req.body)
        const dataToBeSaved = await data.save()
        res.send({dataToBeSaved,msg:"dataAdded"})
    } catch (error) {
        console.log(error)
    }
}


exports.getData = async (req,res)=>{
    try {
        const data =await Data.find()
        res.send({data,msg:"Data got it"})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteData = async (req,res)=>{
    try {
        const data =await Data.findByIdAndDelete(req.params.id)
        res.send({data,msg:"deleted data"})
    } catch (error) {
        console.log(error)
    }
}
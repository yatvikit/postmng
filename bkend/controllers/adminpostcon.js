let pm = require("../models/postmodel")

let posts=async(req,res)=>{
    try
    {
        let data=await pm.aggregate([{$sort:{"status":-1,"date":-1}}])
        res.json(data)


    }
    catch
    {
        res.json([])
    }
}
let delpost=async(req,res)=>{
    try
    {
        await pm.findByIdAndDelete(req.params.id)
        res.json({"msg":"del done"})

    }
    catch{
        res.json({"msg":"error in del"})
    }
}

module.exports={posts,delpost}
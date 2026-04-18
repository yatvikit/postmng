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
let accept=async(req,res)=>{
    try
    {
        await pm.findByIdAndUpdate({"_id":req.params.id},{"status":"accepted"})

res.json({"msg":"post accepted"})
    }
    catch{
        res.json({"msg":"error in accept"})
    }
}
let modify=async(req,res)=>{
    try
    {
        await pm.findByIdAndUpdate({"_id":req.body._id},{"msg":req.body.msg,"status":"modify"})

res.json({"msg":"post send for review"})
    }
    catch{
        res.json({"msg":"error in accept"})
    }
}

module.exports={posts,delpost,accept,modify}
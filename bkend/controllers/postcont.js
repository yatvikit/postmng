const pm = require("../models/postmodel")
let {v4:uuidv4}=require("uuid")

let addpost=async(req,res)=>{
    try
    {
        let data=new pm({...req.body,"_id":uuidv4()})
        await data.save()
        res.json({"msg":"post created"})

    }
    catch{
        res.json({"msg":"error in adding post"})
    }
}
let all=async(req,res)=>{
    try
    {
        let data=await pm.find({"status":"accepted"})
        res.json(data)

    }
    catch
    {
        res.json({"msg":"error in fetching"})
    }
}
let postbyid=async(req,res)=>{
     try
    {
        let obj=await pm.findById(req.params.pid)
        res.json(obj)
    }
    catch
    {
        res.json({"msg":"error in fetching"})
    }
}

let postbycat=async(req,res)=>{
     try
    {
        let arr=await pm.find({"cat":req.params.cat,"status":"accepted"})
        res.json(arr)
    }
    catch
    {
        res.json({"msg":"error in fetching"})
    }
}

module.exports={addpost,all,postbycat,postbyid}

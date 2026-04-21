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

let getpostsbyuser=async(req,res)=>{
    try
    {
       let data=await pm.find({"uid":req.params.uid})
       res.json(data)

    }
    catch
    {
        res.json({"msg":"error in fetching"})
    }
}
let updpost=async(req,res)=>{
    try
    {
        await pm.findByIdAndUpdate({"_id":req.body._id},{...req.body,"status":"pendding"})
        res.json({"msg":"updation done"})

    }
    catch
    {
        res.json({"msg":"error in updation"})
    }
}
let like=async(req,res)=>{
    try
    {
        await pm.findByIdAndUpdate({"_id":req.body._id},{$addToSet:{"likes":req.body.uid},$pull:{"dislikes":req.body.uid}})
        res.json({"msg":"post liked"})

    }
    catch
    {
        res.json({"msg":"error in adding like"})
    }
}

let dislike=async(req,res)=>{
    try
    {
        await pm.findByIdAndUpdate({"_id":req.body._id},{$addToSet:{"dislikes":req.body.uid},$pull:{"likes":req.body.uid}})
        res.json({"msg":"post disliked"})

    }
    catch
    {
        res.json({"msg":"error in adding like"})
    }
}
module.exports={addpost,all,postbycat,postbyid,getpostsbyuser,updpost,like,dislike}

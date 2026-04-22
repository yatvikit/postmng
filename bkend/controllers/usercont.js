let bcrypt=require("bcrypt")
const um = require("../models/usermodels")
let jwt=require("jsonwebtoken")
let reg=async(req,res)=>{
    try
    {
        let obj=await um.findById(req.body._id)
        if(obj)
        {
            res.json({"msg":"email exists"})
        }
        else
        {
            let hash=await bcrypt.hash(req.body.pwd,10)
            let data=new um({...req.body,"pwd":hash})
            await data.save()
            res.json({"msg":"reg done"})
        }


    }
    catch{
        res.json({"msg":"error in reg"})
    }
}
let login=async(req,res)=>{
    try
    {
        let obj=await um.findById(req.body._id)
        if(obj)
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
            {
                res.json({"token":jwt.sign({"_id":req.body._id},process.env.pk),"name":obj.name,"role":obj.role,"uid":obj._id})
            }
            else
            {
                res.json({"msg":"check pwd"})
            }

        }
        else
        {
            res.json({"msg":"check email"})
        }

    }
    catch(err)
    {
        console.log(err)
        res.json({"msg":"error in login"})
    }
}
module.exports={reg,login}
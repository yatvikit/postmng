let mongoose=require("mongoose")
let postsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "desc":String,
    "cat":String,
    "date":{
        type:Date,
        default:Date.now()
    },
    "status":{
        type:String,
        default:"pendding"
    },
    "msg":String,
    "uid":String,
    "name":String,
    "likes":[],
    "dislikes":[]
})
let pm=mongoose.model("post",postsch)
module.exports=pm
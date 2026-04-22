let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const rt = require("./routes/rt")
require('dotenv').config();
let app=express()
mongoose.connect(process.env.dburl).then(()=>{
    console.log("con ok")
    app.listen(5000)
}).catch(()=>{
    console.log("error in db con")
}) 

/*mongoose.connect("mongodb://localhost:27017/v25hfs34db").then(()=>{
    console.log("con ok")
}).catch(()=>{
    console.log("error in db con")
})*/


app.use(express.json())
app.use(cors())
app.use("/",rt)
let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const rt = require("./routes/rt")
/*mongoose.connect("mongodb://rsr:rsr1234@ac-mzy6fsm-shard-00-00.1emgc3q.mongodb.net:27017,ac-mzy6fsm-shard-00-01.1emgc3q.mongodb.net:27017,ac-mzy6fsm-shard-00-02.1emgc3q.mongodb.net:27017/demodb?ssl=true&replicaSet=atlas-jngpp2-shard-0&authSource=admin&appName=Cluster0").then(()=>{
    console.log("con ok")
}).catch(()=>{
    console.log("error in db con")
}) */

mongoose.connect("mongodb://localhost:27017/v25hfs34db").then(()=>{
    console.log("con ok")
}).catch(()=>{
    console.log("error in db con")
})
let app=express()
app.listen(5000)
app.use(express.json())
app.use(cors())
app.use("/",rt)
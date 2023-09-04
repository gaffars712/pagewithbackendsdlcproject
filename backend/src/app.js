const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
require("./userdetails");
const jwt = require("jsonwebtoken");
const user = mongoose.model("userinfo");
// const corsOptions = {
//     origin: "http://localhost:3001", // Replace with the actual origin of your React app
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   };
  

const app = express();

app.use(cors());
const jws_token = "joieiurtlsit45w8erwe97rsdfg8h8r4d687sdfhjsdfsdf88s68sfdsfjahghgsg98r2f8";
// require("./db/conn")
const mongourl = "mongodb+srv://gaffars712:root@cluster0.elvebhl.mongodb.net/simple?retryWrites=true&w=majority"
mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database")  
})
.catch((e)=>{console.log(e)})
    

app.use(express.json())
const port = process.env.PORT || 3000
// const static_path = path.join(__dirname, "../public");
// // console.log(path.join(__dirname, "../public "))
// app.use(express.static(static_path));
// // app.set("views engine" , "hbs")
// app.get('/', (req,res) =>{
// res.send('hello from the gaffar')
// });
app.listen(port,()=>{   
console.log('server is running at port number' + port)
})
// const data = async (req , res) =>{
//     const url = await req.body
//     const {data} = req.body
//     console.log(url)
//     try {

//         if(data === "gaffar"){
//             res.send({status:"ok"})
//         }else{
//             res.send({status:"user Note fond"})
//         }
//     }catch(eroor){
//         res.send({status:"error"})
//     }
//     }
// app.post("/post",data )


app.post("/register",async(req,res)=>{
    const {fname,email,pass} = req.body;
    const encryptedpass = await bcrypt.hash(pass,10)

    
    try{
        const olduser = await user.findOne({email});
        if(olduser){
            console.log('user all redy axist')
           return res.send({status:"user all redy exist"})
        }
        await user.create({
            fname,
            email,
            // phone:phone,
            pass:encryptedpass
        });

        res.send({status:"ok55555"})
    }
    
    catch(e){
        res.send({status:"error"})

    }
})

app.post("/login",async (req,res) => {
    const {email,pass} = req.body; 
    const userexist = await user.findOne({email})
    const bcryptjs = bcrypt;

    if(!userexist){
        return res.json({error:"user not exist"})
    }
    else if(await bcrypt.compare(pass,userexist.pass)){
        const token = jwt.sign({},jws_token);

        if(res.status(201)){
            return res.json({status:"ok", data:token})
        }else{
            return res.json({error:"eroor"})
        }
    }else {
    res.json({status:"eroor", error:"invalit pass"})
}
})


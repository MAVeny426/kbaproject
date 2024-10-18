import {Router} from "express";  // import express
import bcrypt from 'bcrypt';

const adminRoute=Router();   // instance created 
const user=new Map();

adminRoute.get('/',(req,res)=>{
    res.send("Hello World");
})

adminRoute.post('/signup',async (req,res)=>{
    try{
    console.log("Hii");
    const data= req.body;
    
    console.log(data.FirstName);
    const fname=data.FirstName // not compulsory in this programme
    const {FirstName,
           LastName,
           UserName,
           Password,
           Role}=data;
           console.log(FirstName);
           const newP=await bcrypt.hash(Password,10)
           console.log(newP);
       
        if(user.has(UserName)){
            res.status(400).json({message:"data already saved"}) 
        }
        else{
            user.set(UserName,{FirstName,LastName, UserName,Password:newP,Role});
            console.log(user.get(UserName));
            res.status(201).json({message:"data saved"})
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }

})

export {adminRoute};
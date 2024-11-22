import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticate } from "../middleware/auth.js";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();


const adminroute=Router();
// const secretkey = "hello";1
const secretkey = process.env.Secretkey;

const adminSchema=new mongoose.Schema({firstname:String,
    lastname:String,
    username:{type:String,unique:true},
    password:String,
    role:String
    }) 
const Admin=mongoose.model('admindetails',adminSchema);

const IssueSchema=new mongoose.Schema({coursename:String,
    candidateid:{type:String,unique:true},
    candidatename:String,
    selectgrade:String,
    issuedate:String
    }) 

const Issue=mongoose.model('IssueCertidetails',IssueSchema);
mongoose.connect('mongodb://localhost:27017/CERTIAPP')


// signup part
adminroute.post("/signup",async(req,res)=>{
    try{
        const data =req.body;
        const {firstname,lastname,username,password,role}=data;
        const newp =await bcrypt.hash(password,10)
        const exist=await Admin.findOne({username:username})
        if(exist){
            res.send('user already exist');
        }else{
            const newadmin=new Admin({
                firstname:firstname,
                lastname:lastname,
                username:username,
                password:newp,
                role:role
            })
            await newadmin.save();
            console.log(newadmin);
            
            res.status(200).json({message:"User registered succesfully"})
            console.log("User registered succesfully");
            
            
        }
    }
    catch{
        res.send("error");
    }
});

// login part
adminroute.post("/login",async(req,res)=>{
    // try{
        const  data =req.body;
        const {username,password}=data;
        const result = await Admin.findOne({username:username})
        console.log("checking",result)
        if(!result){
            res.send("user not found")
        }else{
            const info = await bcrypt.compare(password,result.password)
            if(info){
                const token = jwt.sign({username:username, role:result.role},secretkey,{expiresIn:"3h"})
                res.cookie('certiapp',token,{httpOnly:true});
                res.send("login success")
                console.log("Secret Key:", process.env.Secretkey);
               
                console.log("login successfully");
            }
        }
    // }
    // catch(error){
    //     res.send("error")
    // }
})
//view certificate

adminroute.post('/issuecerti',authenticate,async(req,res)=>{
    // try{
        const data =req.body;
        const {coursename,candidateid,candidatename,selectgrade,issuedate}=data;
        const role=req.role;
        console.log("trying",req.role)
        const checkadmin = await  Issue.findOne({role:role})

        if(checkadmin == "user")
        {
            res.status(200).json("you are not admin to issue certificate")
            console.log("you are not admin to issue certificate")
        }else {
  
          const checkcertid = await Issue.findOne({candidateid:data.candidateid})
            if(checkcertid){
                res.send("certificate already exist")
            }
            else{
                const newCertid= new Issue({
                    coursename:coursename,
                    candidateid:candidateid,
                    candidatename:candidatename,
                    selectgrade:selectgrade,
                    issuedate:issuedate
                  })
                   
                   await newCertid.save(); 
                   console.log("certificate issued successfully")
                    res.status(201).json({message:"certificate issued successfully"})
               
            }
        }
})
adminroute.get('/viewcertificate',async(req,res)=>{
    
    const {candidateid} = req.query;
    const find = await Issue.findOne({candidateid:candidateid})
    if(find)
    {
      console.log("view certificate ")
      console.log(find)
      res.status(200).json(find);   
      // console.log(response.status)  
    }else{
      res.status(404).json("candidate id is not found")
      console.log("candidate id is not found")
    }
})
// onloadfunction 
adminroute.get('/viewuser',authenticate,(req,res)=>{
  try{
  const user=req.role;
  res.json({user});}
  catch{
      res.status(404).json({message:'user not authorized'});
  }
})

//logout
adminroute.post('/logout',(req,res)=>{
    res.clearCookie('certiapp');
    res.send('logout  successfully');
    console.log("logout  successfully");
   })
export{adminroute};
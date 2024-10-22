import {json, Router} from "express";  // import express
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticate } from "../Middleware/auth.js";  //auth il ninnum export cheithu ennatt evide access venam athukond evide import cheithu

const addcourse=new Map();
const adminRoute=Router();   // instance created for router
const user=new Map();
const secretkey="hi"

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

adminRoute.post('/login',async(req,res)=>{
    const {UserName,Password}=req.body;
    console.log(UserName);
    const result=user.get(UserName);
    console.log(result);
    if(!result){
        res.status(404).json("user not found")
    }
    else
    {
        const isvalid=await bcrypt.compare(Password,result.Password)
        console.log(isvalid)
        if(isvalid)
        {
          const token=  jwt.sign({UserName:UserName,UserRole:result.Role},secretkey,{expiresIn:'1h'})
          res.cookie('authToken',token,{httpOnly:true});
          res.status(200).json();
          console.log(token);
        //   res.send("Login successfully")
        }
    }
})

adminRoute.post('/addcourse',authenticate,(req,res)=>  //authenticate ne vilichu because athenticate kazhinjala arreow function work aavu
{
    // console.log("Add Course")
    // res.status(200).json({message:"Add Course"});
    console.log(req.UserName);
    console.log(req.UserRole);
    const role=req.UserRole;
    console.log(role);
    // addcourse=req.body
    const {CourseName,CourseId,CourseType,Description}=req.body
    if(role!=="admin")
    {
        res.send("not permission");
    }
    else
    {
        addcourse.set(CourseName,{CourseName,CourseId,CourseType,Description})
        console.log(addcourse.get(CourseName));
        res.send("Add Course Succesfully");
    }
    
});
adminRoute.post('/updatecourse',authenticate,(req,res)=>
{
    console.log(req.UserName);
    console.log(req.UserRole);
    const role=req.UserRole;
    console.log(role);
    // const coursedetails=req.body;
    const {CourseName,NewCourseId,NewCourseType,NewDescription}=req.body;
    if(role!=="admin")
        {
            res.send("You have not permission to access")
        }
        else
        {
            if(addcourse.has(CourseName))
                {
                    addcourse.set(CourseName,{CourseName,NewCourseId,NewCourseType,NewDescription});
                    console.log(addcourse.get(CourseName));
                    res.status(200).json({Messagee:"Updated Course Successfully"});
                }
                else
                {
                    res.status(404),json({message:"Course not exist"})
                }
        }
});

adminRoute.post('/viewcourse',(req,res)=>
{
    const viewcourse = req.body;
    const {CourseName}=viewcourse;
    if(addcourse.has(CourseName))
    {
        const view=addcourse.get(CourseName);
        console.log("View Course");
        console.log(view);
        res.send("View Course")
    }
    else
    {
        res.status(404),json({message:"Course does not exist"})
    }
})
//get course
//update course

export {adminRoute};
import {json, Router} from "express";  // import express
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticate } from "../Middleware/auth.js";  //auth il ninnum export cheithu ennatt evide access venam athukond evide import cheithu
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
// const addcourse=new Map();
const adminRoute=Router();   // instance created for router
// const user=new Map();
const secretkey=process.env.secretkey; // encrypt secret key from .env file
const userSchema=new mongoose.Schema({FirstName:String,
                                    LastName:String,
                                    UserName:{type:String,unique:true},
                                    Password:String,
                                    Role:String
                                    })  //magobd_name:Routename

//create model
const User=mongoose.model('Userdetails',userSchema); //user=collection get

const CoursesSchema= new mongoose.Schema({CourseName:{type:String,unique:true},
                                          CourseId:String,
                                          CourseType:String,
                                          Description:String,
                                          Price:String})

const Courses=mongoose.model('Coursedetails',CoursesSchema);

mongoose.connect('mongodb://localhost:27017/KBA') //connect with composs port/database name

adminRoute.get('/',(req,res)=>{
    res.send("Hello World");
})

adminRoute.post('/signup',async (req,res)=>{
    try{
    // console.log("Hii");
    const data= req.body;
    
    // console.log(data.FirstName);
    const fname=data.FirstName // not cuser.set(UserName,{FirstName,LastName, UserName,Password:newP,Role});
    // console.log(user.get(UserName));
    // res.status(201).json({message:"data saved"})ompulsory in this programme
    const {FirstName,
           LastName,
           UserName,
           Password,
           Role}=data;
        //    console.log(FirstName);
           const newP=await bcrypt.hash(Password,10)
        //    console.log(newP);
        const existingUser=await User.findOne({UserName:UserName}) //database
        if(existingUser){    //user.has(UserName)
            res.status(400).json({message:"data already saved"}) 
        }
        else{
            // user.set(UserName,{FirstName,LastName, UserName,Password:newP,Role});
            // console.log(user.get(UserName));
            // res.status(201).json({message:"data saved"})
            const newUser=new User({  //new User=object of newUser
                FirstName:FirstName,
                LastName:LastName,
                UserName:UserName,
                Password:newP,
                Role:Role
            });
            //save user to mongodb
            await newUser.save();
            res.status(201).json({message:"User registered succesfully"})
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }

})

adminRoute.post('/login',async(req,res)=>{
    const {UserName,Password}=req.body;
    // console.log(UserName);
    console.log("login success")
    const result=await User.findOne({UserName:UserName}); //user.get(UserName)
    console.log(result);
    if(!result){
        console.log("User Not Found")
        res.status(400).json("user not found")
    }
    else
    {
        const isvalid=await bcrypt.compare(Password,result.Password)
        console.log(isvalid)
        if(isvalid)
        {
          const token=  jwt.sign({UserName:UserName,UserRole:result.Role},secretkey,{expiresIn:'1h'})
          res.cookie('authToken',token,{httpOnly:true});
          res.status(201).json();
          console.log(token);
          
        //   res.send("Login successfully")
        }
    }
})

adminRoute.post('/addcourse',authenticate,async (req,res)=>  //authenticate ne vilichu because athenticate kazhinjala arreow function work aavu
{
//    try 
//    {
     
    const role=req.UserRole;
    // console.log(role);
    // addcourse=req.body
    const {CourseName,CourseId,CourseType,Description,Price}=req.body
    if(role!=="admin")
    {
        res.status(400).json(" not permission");
        res.send("Not permission")
        console.log("You have not permissin to access")
        
    }
    else
    {
       const exist=await Courses.findOne({CourseName:CourseName})
       if(exist) //addcourse.has(CourseName)
       {
        console.log("Course already exist")

        res.status(404),json({message:"Course already exist"})
        
       }
       else
       {
        // addcourse.set(CourseName,{CourseName,CourseId,CourseType,Description,Price})
        // console.log(addcourse.get(CourseName));
        // res.send("Add Course Succesfully");
        const newCourses= new Courses({
            CourseName:CourseName,
            CourseId:CourseId,
            CourseType:CourseType,
            Description:Description,
            Price:Price
        })
        await newCourses.save();
        res.status(200).json({message:"Course Added Successfully"})
       }

    }
//    } 
//    catch (error) 
//    {
//     res.status(500).json(error);
//    }
    
});
adminRoute.post('/updatecourse',authenticate,(req,res)=>
{
    // console.log(req.UserName);
    // console.log(req.UserRole);
    const role=req.UserRole;
    // console.log(role);
    // const coursedetails=req.body;
    const {CourseName,NewCourseId,NewCourseType,NewDescription}=req.body;
    if(role!=="admin")
        {
            // res.send("You have not permission to access");
            // res.status(400).json("Not access")
            res.send("Not permission")
            console.log("You have not permissin to access")
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

adminRoute.post('/viewuser',authenticate,(req,res)=>{
    try{
    const user=req.UserRole;
    res.json({user});}
    catch{
        res.status(404).json({message:'user not authorized'});
    }
})

// adminRoute.post('/Viewcourse',(req,res)=>
// {
//     const viewcourse = req.body;
//     const {CourseName}=viewcourse;
//     if(addcourse.has(CourseName))
//     {
//         const view=addcourse.get(CourseName);
//         console.log("View Course");
//         console.log(view);
//         res.send("View Course")
//     }
//     else
//     {
//         console.log("Course does not exist")
//         res.status(404),json({message:"Course does not exist"})
//     }
// });

adminRoute.get('/viewcourse', async(req,res)=>{
    try{
        console.log(addcourse.size);

        if(addcourse.size!=0){
           
            
        res.send(Array.from(addcourse.entries())) //built in function used to create array for course.array of array
    }
else{
    res.status(404).json({message:'Not Found'});
}}
    catch{
        res.status(404).json({message:"Internal error"})
    }
})


//get course with params

adminRoute.get('/getcourse/:name',authenticate,(req,res)=>   //name=which data is passed from url, it stored to :name and print in console 
{
    console.log (req.params.name);


    // const viewcourse = req.body;
    // const {CourseName}=viewcourse;
    if(addcourse.has(req.params.name))
    {
        console.log("View Course in get Method using params");
        console.log(addcourse.get(req.params.name));
        res.send("View Course")
    }
    else
    {
        // res.status(404),json({message:"Course does not exist"})
        // console.log(addcourse.get(req.query.CourseName));
        res.send("Course does not exist");
    }
})
//query 
adminRoute.get('/getcoursequery',(req,res)=>
{
    console.log("View Course in query method using query"); 
    const id = req.query.CourseName;
    
    // CourseName=Computer from url.it print in console

    if(addcourse.has(req.query.CourseName))
        {
            // console.log("View Course in get Method");
            console.log(addcourse.get(req.query.CourseName));
            res.send(addcourse.get(req.query.CourseName))
        }
        else
        {
            res.status(404),json({message:"Course does not exist"})
            // console.log("Course does not exist")
        }
})

adminRoute.delete('/deletecourse',authenticate,(req,res)=>
{
    // console.log(req.UserRole);
    const role=req.UserRole;
    console.log(role);
    console.log("Delete Course");
    // console.log(req.query.CourseName);

    const result=req.query.CourseName;
    // console.log(result);

    if(role!=='admin')
    {
        res.send('you dont have permission');
    }
    else
    {
        if(addcourse.has(result))
        {
            console.log('course deleted successfully ')
            addcourse.delete(result);
            res.send(`Course ${result} has been deleted successfully.`);
        }
        else
        {
            res.send('course not found !')
        }
    }
})

adminRoute.post('/logout',(req,res)=>
{
    res.clearCookie('authToken');
    res.send('logout successfully');
    console.log('logout successfully');
});

// put 

adminRoute.put('/putcourse',authenticate,(req,res)=>
{
    console.log("Put Course");

    const role=req.UserRole;
    console.log(role);
    // const coursedetails=req.body;
    const {CourseName,NewCourseId,NewCourseType,NewDescription}=req.body;
    if(role!=="admin")
        {
            res.send("You have not permission to access to put course by put method")
        }
        else
        {
            if(addcourse.has(CourseName))
                {
                    addcourse.set(CourseName,{CourseName,NewCourseId,NewCourseType,NewDescription});
                    console.log(addcourse.get(CourseName));
                    res.status(200).json({Messagee:"Put Course Successfully"});
                }
                else
                {
                    res.status(404),json({message:"Course not exist in put method"})
                }
        }
})

adminRoute.patch('/patchcourse',authenticate,(req,res)=>
{
    console.log("Patch Course");

    const role=req.UserRole;
    console.log(role);
    const {CourseName,NewCourseId,NewCourseType,NewDescription}=req.body;

    if(role!=="admin")
        {
            res.send("You have not permission to access to put course by put method")
        }
        else
        {
            if(addcourse.has(CourseName))
                {
                    // const exist=addcourse.get(CourseName);
                    // addcourse.set(CourseName,{CourseName,NewCourseId,NewCourseType,NewDescription});
                    // console.log(addcourse.get(CourseName));
                    // res.status(200).json({Messagee:"Put Course Successfully"});
                    const existingcourse=course.get(CourseName);


                    course.set(CourseName,
                        {
                        CourseName: CourseName,
                        CourseId: NewCourseId || existingcourse.CourseId,
                        coursetype: NewCourseType || existingcourse.CourseType,
                        description: NewDescription || existingcourse.Description,
                        price: newprice || existingcourse.Price,
                    });
                    console.log(course.get(coursename));
                    console.log('course updated sucessfully');
                    res.send(' course updated sucessfully');
                }
                else
                {
                    res.status(404).json({message:"Course not exist in patch method"})
                }
        }
})
export {adminRoute};
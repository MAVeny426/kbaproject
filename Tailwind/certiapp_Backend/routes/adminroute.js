import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticate } from "../Middleware/auth.js"; 

const adminRoute=Router();
const user=new Map();
const certificate=new Map();
const secretkey="hi"

adminRoute.post('/signup',async (req,res)=>
{
    const signup=req.body;
    const{ FirstName,
           LastName,
           UserName,
           Password,
           Role}=signup;
           console.log(signup);

           const newp=await bcrypt.hash(Password,10);
           console.log(newp);

           if(user.has(UserName))
           {
            res.send('Already exist');
           }
           else
           {
            user.set(UserName,{FirstName,LastName,Password:newp,Role});
            res.send('Data saved')
           }
})

adminRoute.post('/login',async(req,res)=>{
    const login=req.body;
    const {UserName,Password}=login;
    const result=user.get(UserName);
    if(!result)
    {
        res.send("User not found");
    }
    else
    {
        const match = await bcrypt.compare(Password, result.Password); 
        console.log(match) 
        if (match) {
            
            const token=  jwt.sign({UserName:UserName,UserRole:result.Role},secretkey,{expiresIn:'1h'});
            res.cookie('auth',token,{httpOnly:true});
            console.log(token);
            res.send("Login successful");
        } else {
            res.send("Invalid credentials");
        }
    }
})

adminRoute.post('/issuecertificate',authenticate,(req,res)=>
{
    try {
        console.log("Issue Certificate");
        // console.log(req.UserName);
        // console.log(req.UserRole);  
        const role=req.UserRole;
        const issue=req.body
        const {CourseName,CourseId,CandidateName,Grade,Date}=issue
        if(role!=="admin")
            {
                res.send("You have not permission to access")
            }
            else
            {
                
                if(certificate.has(CourseName))
                {
                    res.status(404),json({message:"Candidate not found"}) 
                    
                }
                else
                {
                    
                    certificate.set(CourseName,{CourseName,CourseId,CandidateName,Grade,Date});
                    console.log("Certificate Issued");
                    console.log(certificate.get(CourseName,CourseId,CandidateName,Grade,Date));
                    res.status(200).json({Messagee:"Data Saved"});
                }
            }
    } 
    catch (error) 
    {
        res.status(500).json(error); 
    }
})

export {adminRoute} ;

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
        //    console.log(signup);


           const newp=await bcrypt.hash(Password,10);
        //    console.log(newp);

           if(user.has(UserName))
           {
             res.send('Already exist');
           }
           else
           {
            user.set(UserName,{FirstName,LastName,Password:newp,Role});
            console.log(user.get(UserName))
            res.send('Data saved')
           }
})

adminRoute.post('/login',async(req,res)=>{
    const login=req.body;
    const {UserName,Password}=login;
    const result=user.get(UserName);
    // console.log(result)
    if(!result)
    {
        res.send("User not found");
    }
    else
    {
        const match = await bcrypt.compare(Password, result.Password);  
        // console.log(match) 
        if (match) {
            
            const token=  jwt.sign({UserName:UserName,UserRole:result.Role},secretkey,{expiresIn:'1h'});  //create token using jwt.sign. Its a in built function
            res.cookie('auth',token,{httpOnly:true}); //auth=token name.
            // console.log(token);
            res.send("Login successful");
            console.log("Login Successfully")

        } else {
            res.send("Invalid");
        }
    }
})

adminRoute.post('/issuecertificate',authenticate,(req,res)=>
{
    // console.log("Issue Certificate");
    try {
        // console.log(req.UserName);
        // console.log(req.UserRole);  
        
        const issue=req.body
        const {CourseName,CourseId,CandidateName,Grade,Date}=issue
        const role=req.UserRole;
        if(role!=="admin")
            {
                res.send("You have not permission to access")
                console.log("You have not permission to access")
            }
            else
            {
                
                if(certificate.has(CourseName))
                {
                    // res.status(400),json({message:"Candidate not found"}) 
                    console.log("Certificate already exist")
                    
                }
                else
                {
                    
                    certificate.set(CourseName,{CourseName,CourseId,CandidateName,Grade,Date});
                    console.log("Certificate Issued");
                    // console.log(certificate.get(CourseName,CourseId,CandidateName,Grade,Date));
                    res.status(200).json({Messagee:"Data Saved"});
                }
            }
    } 
    catch (error) 
    {
        res.status(500).json(error); 
    }
})

adminRoute.post('/logout',(req,res)=>
    {
       try{
        res.clearCookie('auth');
        res.send('logout successfully');
        console.log('logout successfully');
       }
       catch(error){
   
        console.log('logout failed');
       }
    });

    adminRoute.get('/viewcertificate/:name',authenticate,(req,res)=>   //name=which data is passed from url, it stored to :name and print in console 
    {
        console.log (req.params.name);
    
    
        // const viewcourse = req.body;
        // const {CourseName}=viewcourse;
        if(certificate.has(req.params.name))
        {
            console.log("View Course in get Method using params");
            console.log(certificate.get(req.params.name));
            res.send("Certificate Issued")
        }
        else
        {
            // res.status(404),json({message:"Course does not exist"})
            console.log("Candidate not found");
            res.send("Candidate does not exist");
        }
    })

export {adminRoute};
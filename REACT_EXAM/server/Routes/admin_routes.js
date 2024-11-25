import { json, Router } from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const adminRoute=Router();

const adminSchema=new mongoose.Schema({
    UserName:{type:String,unique:true},
    UserType:String,
    email:String,
    Password:String
    })  //magobd_name:Routename

//create model
const Admin=mongoose.model('userDetails',adminSchema);

const userSchema=new mongoose.Schema({roomno:{type:String,unique:true},
    checkin:String,
    checkout:String,
    personname:String
    }) 
const User= mongoose.model('bookingdetails',userSchema)
mongoose.connect('mongodb://localhost:27017/HOTEL-RESERVATION') 

adminRoute.post('/signup',async (req,res)=>{
    try{
    // const data= req.body;
    // console.log("hii");      
    const {
        UserName,
        Password,
        email,
        UserType}=req.body;
        // console.log(req.body);

           const newP=await bcrypt.hash(Password,10)
        const existingUser=await Admin.findOne({UserName:UserName})
        if(existingUser){   
            res.status(400).json({message:"User already  exist"}) 
        }
        else{
            const newUser=new Admin({  
                UserName:UserName,
                Password:newP,
                email:email,
                UserType:UserType
            });
            await newUser.save();
            return res.status(200).json({message:"User registered succesfully"})
            // res.status(200).json({message:"User registered succesfully"})
            // console.log("registered succesfully")
        }
    }
    catch(error)
    {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
          
      
    }

})

adminRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await Admin.findOne({ email: email });
    console.log(result);
    if (!result) {
        console.log("User Not Found");
        return res.status(400).json({ error: "User not found" });
    }
    const isvalid = await bcrypt.compare(password, result.Password);
    if (!isvalid) {
        return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ email: email }, "your-secret-key", { expiresIn: "1h" });
    res.cookie("Authtoken", token, { httpOnly: true});
    res.json({
        status: true,
        message: "Login success",
        userType: result.userType
    });
});


adminRoute.post('/addbooking',async(req,res)=>
{
    const {roomno,checkin,checkout,personname}=req.body;
    // console.log(req.body);
    const existingbooking=await User.findOne({roomno:roomno})
    if(existingbooking)
    {
        res.send("Already Booked.Room not available");
    }
    else
    {
        const newUser= new User({
            roomno:roomno,
            checkin:checkin,
            checkout:checkout,
            personname:personname
        })

        newUser.save();
        res.status(201).json("Booking Succesfully completed")
        console.log("Booking Succesfully completed")
    }
});

adminRoute.get('/viewusers',async(req,res)=>
    {
        const viewusers = req.body;
        console.log(viewusers);
    
        const exist=await User.find({})
        if(exist)
        {
            console.log(exist);
            res.send(exist)
        }
        else
        {
            console.log("Empty bookings")
            res.status(404),json({message:"Empty Booking"})
        }
});

adminRoute.delete('/deletebooking',async(req,res)=>
    {
        const booking=req.query.roomno;
        //  console.log(booking);
         const exist=await User.find({roomno:booking})
         if(exist)
            {
                // addcourse.delete(result);
                await User.deleteOne({roomno:booking})
                res.send(`Booking ${booking} has been deleted successfully.`);
                console.log(`Booking ${booking} has been deleted successfully.`)
            }
            else
            {
                res.send('Booking details not found !')
            }
});

adminRoute.put('/updatebooking',async(req,res)=>
    {
        const {roomno,newcheckin,newcheckout,newpersonname}=req.body;
        // console.log(req.body);
        const existingbooking=await User.findOne({roomno:roomno})
        if(!existingbooking)
        {
            res.send("Room not available");
        }
        else
        {
            const newUser= new User({
                roomno:roomno,
                checkin:newcheckin,
                checkout:newcheckout,
                personname:newpersonname
            })
            res.send("Updated Succesfully")
            console.log(newUser)
        }
});

adminRoute.get('/viewdate',async(req,res)=>
    {
    
        const {checkin}=req.body;
        
        console.log(checkin);
    
        const exist=await User.find({checkin})
        // console.log(exist.viewdate)
        if(exist)
        {
            console.log(exist);
            res.send(exist)
        }
        else
        {
            console.log("Empty bookings")
            res.status(404),json({message:"Empty Booking"})
        }
});

export { adminRoute }
import { json, Router } from "express";
import mongoose from "mongoose";


const adminRoute=Router();

const userSchema=new mongoose.Schema({roomno:{type:String,unique:true},
    checkin:String,
    checkout:String,
    personname:String
    }) 
const User= mongoose.model('bookingdetails',userSchema)
mongoose.connect('mongodb://localhost:27017/ROOM') 

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
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Booking } from "./user_routes.js";

const adminRoute=Router();
const secretkey="hi"

const adminSchema=new mongoose.Schema({UserName:{type:String,unique:true},
    FirstName:String,
    LastName:String,
    Password:String,
    email:String,
    UserRole:String
    }) 
const Admin=mongoose.model('admindetails',adminSchema);

const serviceSchema=new mongoose.Schema({ServiceName:{type:String,unique:true},
    Amount:String,
    Description:String
    }) 
const Service=mongoose.model('addservice',serviceSchema);




adminRoute.post('/signup',async (req,res)=>{
    const data= req.body;
    const {FirstName,
           LastName,
           UserName,
           Password,
           email,
           UserRole
          }=data;
          console.log(data)
           const newP=await bcrypt.hash(Password,10)
        const existingadmin=await Admin.findOne({UserName:UserName}) //database
        if(existingadmin){    
            res.send({message:"data already saved"}) 
        }
        else{
            const newadmin=new Admin({  
                FirstName:FirstName,
                LastName:LastName,
                UserRole:UserRole,
                Password:newP,
                email:email
            });
            console.log(newadmin)
            //save user to mongodb
            await newadmin.save();
            res.send({message:"User registered succesfully"})
        }

})
adminRoute.post('/adminlogin',async(req,res)=>{
    const{adminname,Password}=req.body;
    console.log("login details");
    const result= await Admin.findOne({adminname:adminname})
    // console.log(result);
    if(!result){
        res.status(404).json("admin not found")
    }
    else{
      console.log(Password)
      console.log(result.Password)
        const isvalid =await bcrypt.compare(Password,result.Password)
        // console.log(isvalid);
        if(isvalid){
        const token = await jwt.sign({adminname:adminname},secretkey,{expiresIn:'1h'})
        res.cookie('asadmin',token,{httpOnly:true});
        res.status(200).json({token});
        console.log("login successfully")
        }  
    }
    })

    adminRoute.post('/addservice',async(req,res)=>
        {
            const {ServiceName,Amount,Description}=req.body;
            const serviceexist=await Service.findOne({ServiceName:ServiceName})
                if(serviceexist)
                    {
                        console.log("Service already exist") 
                    }
                    else  
                    {
                        const newservice = new Service({
                            ServiceName:ServiceName,
                            Amount:Amount,
                            Description:Description
                        });
                        console.log(newservice)
                    await newservice.save();
                    res.send({message:"Service added susccessfully Successfully"})
                    }
            
           
        
});

adminRoute.get('/viewservice', async (req, res) => {
    const { ServiceName } = req.params; // Get the servicename from the URL parameter
    // const current = req.body;
    try {
        const fullservice = await Service.find(); // Fetch all reservations
        if (fullservice.length === 0) {
            res.status(200).json({ message: 'No services yet' });
        }else
       { res.status(200).json(fullservice);} // Return all reservation data in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving services', error: error.message });
    }
});




adminRoute.get('/viewbooking',async(req,res)=>
{
        const allbooking = await Booking.find();
        if (allbooking.length > 0) 
        {
            console.log("All Booking:", allbooking);
            res.send("All Services")
        }  
        else
        {
            console.log("No Booking available");
            res.send("No Booking available")
        }
    
   
});    
adminRoute.delete('/deleteservice/:id',async(req,res)=>
    {
            const servicename=req.params.id;
            console.log(servicename);
            
            const value =  await Service.findOne({ServiceName:servicename})
                  if(value)
                  {
                      await Service.findOneAndDelete({ServiceName:servicename});
                      res.send(`Service ${servicename} has been deleted successfully.`);
                  }
                  else
                  {
                      res.send('Service not found !');
                  }
        
   
    });

    adminRoute.put('/UpdateService/:ServiceName', async (req, res) => {
        const { ServiceName } = req.params; // Get the dishname from the URL parameter
        const updatedData = req.body; // The updated dish data from the frontend
        try {
          const updatedService = await Service.findOneAndUpdate(
            { ServiceName }, // Find the dish by its name
            updatedData, // Update the dish with the new data
            { new: true } // Return the updated dish
          );
          if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
          }
          res.status(200).json(updatedService); // Return the updated dish details
        } catch (error) {
          res.status(500).json({ message: 'Error updating Service', error: error.message });
        }
      });
      adminRoute.get('/viewservice/:ServiceName', async (req, res) => {
        const { ServiceName } = req.params; // Get ServiceName from the URL parameter
        try {
          const service = await Service.findOne({ ServiceName }); // Find service by ServiceName
          if (!service) {
            return res.status(404).json({ message: 'Service not found' });
          }
          res.status(200).json(service); // Send the found service as response
        } catch (error) {
          res.status(500).json({ message: 'Error fetching service', error: error.message });
        }
      });
      

export {adminRoute}
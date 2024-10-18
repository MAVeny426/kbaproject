import express,{json} from 'express';
import bcrypt from 'bcrypt';

const app=express();
app.use(json())
const port=8000;
const user=new Map();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('/signup',async (req,res)=>{
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
        //    user.set(UserName,{FirstName,LastName,Password:newP,Role});
         
        //    console.log(user.get(UserName));
        // //    res.status(201).send("Data saved")
        //    res.status(201).json({mesage:"Data saved"})

        if(user.has(UserName)){
            res.status(201).json({message:"data already saved"}) 
        }
        else{
            user.set(UserName,{FirstName,LastName, UserName,Password:newP,Role});
            console.log(user.get(UserName));
            // res.status(201).send("data saved");
            res.status(201).json({message:"data saved"})
        }
})
app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
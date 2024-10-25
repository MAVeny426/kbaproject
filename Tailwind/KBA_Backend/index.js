import express,{json} from 'express';
import bcrypt from 'bcrypt';
import { adminRoute } from './routes/admin_routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config()
const app=express();
app.use(json())
app.use(cors({
    // origin:'*',
    origin:'http://127.0.0.1:5500',
    credentials:true
}));
app.use(cookieParser())
app.use('/',adminRoute)
const port=process.env.port;
const user=new Map();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
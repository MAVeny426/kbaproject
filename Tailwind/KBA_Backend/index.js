import express,{json} from 'express';
import bcrypt from 'bcrypt';
import { adminRoute } from './routes/admin_routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config()
const app=express();
app.use(json())
app.use(cors({  // CORS (Cross-Origin Resource Sharing)
    // origin:'*',
    origin:'http://127.0.0.1:5500',
     credentials:true   //allows the server to include credentials (such as cookies, authorization headers, or TLS client certificates) in cross-origin requests.
}));
app.use(cookieParser())  //managing user sessions, authentication tokens, or any data you may store in cookies.
app.use('/',adminRoute)
const port=process.env.port;
const user=new Map();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
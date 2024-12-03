import express,{json} from 'express';
import { userRoute } from './routes/user_routes.js';
import { adminRoute } from './routes/admin_routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(
    cors({
        origin:"http://localhost:8000",
        credentials:true,
    })
);
app.use(json());
app.use(cookieParser());
app.use('/',userRoute)
app.use('/',adminRoute)
const port=3000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
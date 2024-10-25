import express,{json} from 'express';
import { adminRoute } from './routes/adminroute.js';
 
const app=express();
app.use(json());
app.use('/',adminRoute)
const port=8000;
// const user=new Map();

app.post('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>
{
    console.log(`Server is listening to ${port}`)
})
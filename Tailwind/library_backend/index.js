import express,{json} from 'express';
// import bcrypt from 'bcrypt';

const app=express();
app.use(json())
const port=3000;
const user=new Map();

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
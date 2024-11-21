import express,{ json } from 'express'
import { adminRoute } from './Routes/admin_routes.js'

const app=express();

app.use(json());
app.use('/',adminRoute)
const port=8000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
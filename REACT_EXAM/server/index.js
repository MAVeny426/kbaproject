import express,{ json } from 'express'
import { adminRoute } from './Routes/admin_routes.js'
import cors from 'cors'

const app=express();
app.use(
    cors({
        origin:"http://localhost:5000"
    })
)
app.use(json());
app.use('/',adminRoute)
const port=8000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
const secretkey=process.env.secretkey;

const authenticate=(req,res,next)=> //next used to execute next function after authenticate
{
    const cookies= req.headers.cookie //access cookies
    // req.cookies //access cookies
    // console.log(cookies);
    const cookie=cookies.split(';');
    for(let cooki of cookie)
    {
        const [name,token]= cooki.trim().split('=');
        if(name=='authToken')
        {
            const verified= jwt.verify(token,secretkey);
            // console.log(verified);
            req.UserName=verified.UserName;
            req.UserRole=verified.UserRole;
            // console.log(verified.UserName);
            break;
        }
    }
    next();
}
export {authenticate};
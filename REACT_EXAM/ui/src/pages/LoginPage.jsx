import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const navigate = useNavigate();
    
        const loginSubmit = async (e) => {
            e.preventDefault();
            const loginDetails = {
                email,
                password,
            };
            const res = await fetch('/api/login',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify(loginDetails),
                credentials:'include',
            })
            if(res.ok){
                const data=await res.json();
                toast.success(`Logged in as: ${data.userType}`);
                alert("Login successful")
                navigate('/home');
            }else{
                toast.error('Please check your credentials')
            }
        }
        return (
    <div className="flex justify-center mt-32">
     
     <form onSubmit={loginSubmit}>
     <div className="bg-slate-200 max-w-screen-sm py-20 px-20 rounded-lg bg-gray-300 shadow-2xl shadow-blue-950" >
           <p className="text-5xl font-semibold font-sans text-center"> Login </p>
             <div className="mt-4 ">Email: </div>
           <input  
           className="ring-2 rin-blue-800 hover:ring-4" 
           type="text" 
           size="45" 
           placeholder="Enter your email"
           id='email'
           name='email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
             <div className="mt-4"> Password: </div>
           <input  
           type="password"  
           size="45" 
           placeholder="Enter your password"
           id='password'
           name='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                 <div > 
                     <button   type="submit" className="float-right border border-zinc-950  border-solid border-2 bg-yellow-400 w-24 rounded-3xl focus:ring-2 ring-red-300 hover:ring-4 ring-2" >Login</button>
                 </div>
                <div className="mt-12" ><a  href="">Forget Password?</a></div>
                <Link to="/signup" className="mt-4 text-sky-600">Don't have an account? Sign Up</Link>
        </div>
     </form>
        
</div>
  )
}

export default LoginPage
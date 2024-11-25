import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Signup = () => {

        const [UserName,SetUserName] = useState('');
        const [Password,setPassword] = useState('');
        const [email,setEmail] = useState('');
        const [UserType,setUserType] = useState('admin');
        const navigate = useNavigate();
    
        const signupSubmit = async (userDetails) => {
            console.log("try")
            const res = await fetch('/api/signup',{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(userDetails),
            });
    console.log("res",res)
            if(res.ok){
                console.log("res",res)
                alert("Sigup successful")
                navigate('/');
            }else{
                toast.error('Please check the input data ');
                
            }
        };
    
        const submitForm = (e) => {
            e.preventDefault();
            const userDetails = {
                
                UserName,
                Password,
                email,
                UserType
            };
            signupSubmit(userDetails);
        }
    
  return (
    
    <>
    <div className="flex justify-center mt-32">
    <div className="bg-slate-200 max-w-screen-sm py-20 px-20 rounded-lg bg-gray-300 shadow-2xl shadow-blue-950" >
        <p className="text-5xl font-semibold font-sans text-center"> Sign UP </p>
        <form onSubmit={submitForm}>
        <div className="mt-4">Name:</div>
        <input
        id='UserName' 
        name='UserName'
        type="text" 
        className="ring-2 rin-blue-800 hover:ring-4"  
        size="45" 
        required placeholder="Enter your name"
        value={UserName}
        onChange={(e) => SetUserName(e.target.value)}/>
         <div className="mt-4 ">Email: </div>
        <input  
        id='email' 
        name='email'
        className="ring-2 rin-blue-800 hover:ring-4" 
        type="text" 
        size="45" 
        required placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
         <div className="mt-4"> Password: </div>
        <input  
        type="password" 
        className="ring-2 rin-blue-800 hover:ring-4"  
        size="45" 
        required placeholder="Enter your password"
        id='Password' 
        name='Password'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
         <div className="mb-4">
        <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">User Type:</label>
        <select
          id="UserType"
          name="UserType"
          value={UserType}
          onChange={(e) => setUserType(e.target.value)}
          className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
         {/* <div className="mt-4"> Confirm Password: </div>  */}
         {/* <input  type="text" className="ring-2 rin-blue-800 hover:ring-4"  size="45" required placeholder="Re-enter your password"/><br/><br/> */}
          <div > 
          <button type="submit" className="justify-items-center border border-zinc-950  border-solid border-2 bg-green-400 w-24 rounded-3xl focus:ring-2 ring-red-300 hover:ring-4 ring-2" > Sign Up</button>
          </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Signup



















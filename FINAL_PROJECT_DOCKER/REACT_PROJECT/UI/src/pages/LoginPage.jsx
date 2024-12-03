import React,{useState} from 'react';
import richard from '../assets/images/richard.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  
  const [UserName,setUserName] = useState('');
  const [Password,setPassword] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
      e.preventDefault();
      const loginDetails = {
          UserName,
          Password,
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
          localStorage.setItem('UserType',data);

          console.log(data);
          
          // toast.success(`Logged in as: ${data.UserType}`);
          alert("Login successful")
          navigate('/Home');
      } else{
          alert("User not found")
      }
      
  }
  return (
    <>
      <div 
        className="bg-cover bg-center h-screen bg-no-repeat flex items-center justify-center" 
        style={{ backgroundImage: `url(${richard})` }}
      >

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mt-[10px]">

          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <form action="" onSubmit={loginSubmit}>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">UserName</label>
            <input 
              type="text" 
              id="UserName" 
              name="UserName" 
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
              placeholder="Enter your UserName" 
              required 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
            <input 
              type="Password" 
              id="Password" 
              name="Password" 
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account? 
            <Link to='/Signup' className="text-blue-500 hover:underline">Sign up</Link>
          </p>
          </form>
        </div>
        
      </div>
      
    </>
  );
};

export default LoginPage;

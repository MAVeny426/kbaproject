import React,{useState} from 'react'
import richard from '../assets/images/richard.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'

const Signup = () => {

  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [UserName,setUserName] = useState('');
  const [Password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  // const [UserType,setUserType] = useState('admin');
  const navigate = useNavigate();

  const signupSubmit = async (userDetails) => {
      console.log("try")
      const res = await fetch('/api/signup',{
          method:'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body:JSON.stringify(userDetails),
      }
    );
console.log("res",res)
      if(res.ok){
          console.log("res",res)
          alert("Signup successful")
          navigate('/');
      }else{
          toast.error('Please check the input data ');
          
      }
  };

  const submitForm = (e) => {
      e.preventDefault();
      const userDetails = {
          
          FirstName,
          LastName,
          UserName,
          Password,
          email
      };
      signupSubmit(userDetails);
  }
  return (
    <>
    <div 
        className="bg-cover bg-center h-screen bg-no-repeat flex items-center justify-center" 
        style={{ backgroundImage: `url(${richard})` }}>

<div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
    <form action="" onSubmit={submitForm}>

    <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

{/* First Name Input */}
<div className="mb-4">
  <label htmlFor="firstName" className="block text-lg font-semibold text-gray-700">First Name</label>
  <input 
    type="text" 
    id="FirstName" 
    name="FirstName" 
    value={FirstName}
    onChange={(e) => setFirstName(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    placeholder="Enter your first name" 
    required 
  />
</div>

{/* Last Name Input */}
<div className="mb-4">
  <label htmlFor="lastName" className="block text-lg font-semibold text-gray-700">Last Name</label>
  <input 
    type="text" 
    id="LastName" 
    name="LastName" 
    value={LastName}
    onChange={(e) => setLastName(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    placeholder="Enter your last name" 
    required 
  />
</div>

{/* Username Input */}
<div className="mb-4">
  <label htmlFor="username" className="block text-lg font-semibold text-gray-700">Username</label>
  <input 
    type="text" 
    id="UserName" 
    name="UserName" 
    value={UserName}
    onChange={(e) => setUserName(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    placeholder="Choose a username" 
    required 
  />
</div>

<div className="mb-4">
  <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
  <input 
    type="text" 
    id="email" 
    name="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    placeholder="Enter your E-mail" 
    required 
  />
</div>

{/* User Role Input */}
{/* <div className="mb-4">
  <label htmlFor="userRole" className="block text-lg font-semibold text-gray-700">User Role</label>
  <select 
    id="UserType" 
    name="UserType" 
    value={UserType}
    onChange={(e) => setUserType(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    required >
    
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </select>
</div> */}

{/* Password Input */}
<div className="mb-6">
  <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
  <input 
    type="Password" 
    id="Password" 
    name="Password" 
    value={Password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mt-2" 
    placeholder="Create a password" 
    required 
  />
</div>

{/* Sign Up Button */}
<button 
  type="submit" 
  className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200" >
  Sign Up
</button>

{/* Login Link */}
<p className="text-center mt-4 text-gray-600">
  Already have an account? 
  <Link to='/Login' className="text-blue-500 hover:underline">Login</Link>
</p>

    </form>


</div>

</div>
    </>
  )
}

export default Signup
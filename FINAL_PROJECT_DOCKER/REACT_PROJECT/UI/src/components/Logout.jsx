import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate();

    const handleLogout = async () => {
        await fetch('/logout',{
            method:'GET',
            credentials:'include',
        });
        document.cookie='AuthToken=; Max-Age=0'; //Max-Age=0 used to clear cookie
        navigate('/');
    };
    return(
        <button onClick={handleLogout} className='text-purple-700 hover:undeline'>Logout</button>
  )
}

export default Logout
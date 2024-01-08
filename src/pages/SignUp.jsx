import React from 'react'
import { Link,useNavigate} from "react-router-dom";
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
const SignUp = () => {

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const {user,Signup}=UserAuth();
const navigate=useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
        await Signup(email,password);
        navigate('/');
    } catch (error) {
        console.log(error)  
    }
}
  return (
    <div>
       <div className="w-full h-screen">
         <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"  />

         <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

         <div className="fixed w-full px-4 py-24 z-50">
         <div className='max-w-[450px] h-[500px] mx-auto bg-black/70 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>

                <form onSubmit={handleSubmit} 
                className='w-full flex flex-col py-4'>

                    <input 
                        onChange={(e) => {setEmail(e.target.value)}}
                        className='p-3 my-2 bg-gray-700 rounded' 
                        type="email"
                        placeholder='Email'
                        autoComplete='email'/>
                    <input
                        onChange={(e) => {setPassword(e.target.value)}}
                        className='p-3 my-2 bg-gray-700 rounded' 
                        type="password"
                        placeholder='Password' 
                        autoComplete='current-password'
                    />
                    <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                    <div className='flex justify-between items-center'>
                        <p><input className='mr-2' type="checkbox"/>Remember Me</p>

                        <p>Need Help?</p>
                    </div>
                    <p className='py-4'>
                        <span className='text-gray-600' >Already Subscribed to Joyflix? 
                        </span>{' '}
                        <Link to='/Login'>
                        Sign In 
                        </Link></p>
                </form>

            </div>
            </div> 

         </div>

         
         
       </div>
    </div>
  )
}

export default SignUp

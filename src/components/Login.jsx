import React from 'react'
import { RiAccountBoxFill } from "react-icons/ri";
import { useState } from 'react';

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: ''})
  
  const handleChangeUserData = (e) => {
    const {name, value} = e.target;
    setUserData((prevData) => ({
      
      ...prevData,
      [name]: value
    }))
  }
  
  const handleAuth= async() => {
    try {
      alert('Login Successfully')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }
  return (
    <>
    <section className='flex items-center justify-center min-h-screen background-image'>
      <div className='bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center'>
      <div className='mb-10'>
        <h1 className='text-center text-[28px] font-bold'>Sign In</h1>
        <p className='text-center text-sm text-gray-400'>Welcome Back,Login in to continue.</p>
      </div>
      <div className="w-full">
        <input type="email" name='email' onChange={handleChangeUserData} value={userData.email} className='border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#26b416f3] mb-3 font-medium outline-none' placeholder='Enter email'/>
        <input type="password" name='password' onChange={handleChangeUserData} value={userData.password} className='border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#26b416f3] mb-3 font-medium outline-none' placeholder='Enter Password'/>
      </div>
      <button onClick={handleAuth} className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out mt-4 flex items-center justify-center gap-2'><span>Login</span> <RiAccountBoxFill /></button>
      <div className="mt-5 text-center text-gray-400 text-m">
        <button>Dont have an account yet? Sign Up</button>
      </div>
      </div>
    </section>
    </>
  )}

export default Login




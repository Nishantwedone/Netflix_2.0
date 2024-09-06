import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () =>{
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh] bg-cover' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='error' />
      </div>

      <form className='absolute flex flex-col left-0 right-0 mx-auto w-3/12 my-36 items-center justify-center bg-black p-12 opacity-90 rounded-md'>
        <div className='flex flex-col items-center'>
          <h1 className='text-white text-3xl mb-4 font-bold'>{isLogin? "Login" : "Signup"}</h1>
          {
            !isLogin &&  <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter Name' type='text' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
          }
         
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
          <p className='text-white mt-2 tracking-tight'>{isLogin? "New to Netflix?" : "Already have an account"}<span onClick={loginHandler} className='ml-2 text-blue-900  font-medium cursor-pointer'>{isLogin? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login

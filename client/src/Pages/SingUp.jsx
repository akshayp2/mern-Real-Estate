import React from 'react'
import {Link} from 'react-router-dom'

function SingUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center  font-semibold my-7'>SingUp</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" className='border p-3 rounded-lg'
          placeholder='username' id="username"
        />
        <input type="password" className='border p-3 rounded-lg'
          placeholder='password' id="password"
        />
        <input type="emai" className='border p-3 rounded-lg'
          placeholder='email' id="email"
        />
        <button className='bg-fuchsia-600 text-white p-3 rounded-lg uppercase
        hover:opacity-95 
        ' >Sing Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
              <Link to={"/sing-in"}>
              <span className='text-blue-700'>Sing In</span>
              </Link>
              </div>
    </div>
  )
}

export default SingUp
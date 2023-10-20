import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function SingUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit  =async(e)=>{
    
    try {
      e.preventDefault();
      const res = await fetch('/api/auth/singup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      })
      const data =await res.json();
      if(data.success===false){
          setError(data.message);
          setLoading(false)
          return;
      }
      setLoading(false);
      setError(null);
      navigate('/sing-in');
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false)
    }
    }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center  font-semibold my-7'>SingUp</h1>
      <form action="" className='flex flex-col gap-4' 
        onSubmit={handleSubmit}
      >
        <input type="text" className='border p-3 rounded-lg'
          placeholder='username' id="username"
          onChange={handleChange}/>
        <input type="password" className='border p-3 rounded-lg'
          placeholder='password' id="password"
          onChange={handleChange}/>
        <input type="emai" className='border p-3 rounded-lg'
          placeholder='email' id="email"
          onChange={handleChange}/>
        <button disabled={loading} className='bg-fuchsia-600 text-white p-3 rounded-lg uppercase
        hover:opacity-95 
        ' >{loading ?'loading...':'Sing Up'} </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
              <Link to={"/sing-in"}>
              <span className='text-blue-700'>Sing In</span>
              </Link>
              </div>
              {error && <p className='text-red-600'>{error}</p>}
    </div>
  )
}

export default SingUp
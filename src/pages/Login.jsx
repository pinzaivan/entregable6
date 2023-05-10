import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { axiosEcommerce } from '../utils/configAxios'
import { logOut, loginUser } from '../store/slices/userInfo.slice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const {register,handleSubmit} = useForm()
  const {token,user} = useSelector(store=>store.userInfo)
  const dispach = useDispatch()

  const submit = (data)=>{
    dispach(loginUser(data)   )

  }

  const handleClickLogOut= ()=>{
    dispach(logOut())
  }

  return (
    <main className='bg-gray-300 grid place-content-center px-2'>
      {
        token ? (
          <section className='bg-white p-4 rounded-md w-[300px] text-center grid gap-6'>
            <i className='bx bxs-user-circle text-6xl'></i>
            <h3 className='capitalize'>{user?.firstName} {user?.lastName}</h3>
            <button onClick={handleClickLogOut} className='bg-red-500 text-white py-2 rounded-md block'>Logout</button>
          </section>
        ) : (<form onSubmit={handleSubmit(submit)} className='bg-white p-4 rounded-md max-w-[350px] grid gap-6'>
          <h2 className='text-2xl font-[500] text-gray-700'>Welcome! Enter your email and password to continue</h2>
          <section className='bg-[#d8f5fd] p-4 rounded-md '>
            <h3 className='text-center py-2'>Test data</h3>
            <div className='flex gap-2 items-center text-lg'>
              <i className='bx bx-envelope'></i>
              <span>john@gmail.com</span>
            </div>

            <div className='flex gap-2 items-center text-lg'>
              <i className='bx bx-lock-alt'></i>
              <span>john1234</span>
            </div>

          </section>

          <div className='grid gap-1'>
            <label htmlFor='email'>Email</label>
            <input className='border-[1px] border-gray-300 p-1 outline-none'
              id="email"
              type="email"
              {...register("email", { required: true })} />
          </div>

          <div className='grid gap-1'>
            <label htmlFor='password'>password</label>
            <input className='border-[1px] border-gray-300 p-1 outline-none'
              id="password"
              type="password"
              {...register("password", { required: true })} />
          </div>

          <button className='block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors'>Login</button>

          <span>Dont have a account? <Link to="#">Sing up</Link> </span>
        </form>

        )
      }


    </main>
  )
}

export default Login
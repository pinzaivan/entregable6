import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  
  const {token} = useSelector((store)=>store.userInfo)
  
  const dispach = useDispatch()
  const navigate = useNavigate()



  const handleClickChangeShowCart = () => {
    if(!token) return navigate("/login")
    dispach(changeIsShowCart())
  }
  return (
      <section className='sm:flex sm:mr-16 grid gap-5 justify-between my-2 mx-5'>
          <Link to="/">
            <h1 className='font-bold sm:text-2xl text-xl text-[#f85555]'>PRACTICE COMMERCE</h1>
          </Link>
          <nav className='flex text-2xl text-gray-400 gap-14'>
              <Link to="/login">
                  <i className='bx bxs-user'></i>
              </Link>
              <Link to="/purchases">
                  <i className='bx bx-box'></i>
              </Link>              
                <button onClick={handleClickChangeShowCart}>
                <i className='bx bx-cart'></i>
                </button>
          </nav>
      </section>
  )
}

export default Header
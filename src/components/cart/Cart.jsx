import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { changeIsShowCart, getCartProducts, purchaseCard } from '../../store/slices/cart.slice'
import CartProduct from './CartProduct'

const Cart = () => {

  const {isShowCart,products} = useSelector(store=> store.cart)
  const {token} = useSelector(store=>store.userInfo)
  
  const dispach = useDispatch()

  const handleClickChangeShowCart = () => {
    dispach(changeIsShowCart())
  }

  const totalPrice = products.reduce((acc,curr)=> acc+(curr.quantity * curr.product.price),0)
  
  const handleClickCheckOut = () =>{
    dispach(purchaseCard())
  }

  useEffect(()=>{
    if(isShowCart){
      dispach(getCartProducts())
    }
  },[isShowCart]) 


  return (
    <section className={`fixed top-0 bg-gray-200 h-screen w-[300px] shadow-xl ${isShowCart && token ? "right-0" : "-right-full"} duration-200 p-2 grid grid-rows-[auto_1fr_auto]`}>
        <h1 className='text-lg font-bold'>Shoping cart</h1>
        <i onClick={handleClickChangeShowCart} className='bx bx-x absolute top-2 right-3 text-xl hover:text-red-500 cursor-pointer '></i>
        
        <section className='overflow-auto grid gap-10 content-start'>
          {
          products.map(product=> <CartProduct key={product.id} product={product}/>)
          }
        </section>

        <section className='grid grid-cols-2 py-8 border-t-[1px] border-gray-400'>
          <span>Total</span>
          <h4 className='text-end'>{totalPrice}</h4>
          <button onClick={handleClickCheckOut} className='w-full col-span-2 bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6 '>Checkout</button>
        </section>

    </section>
  )
}

export default Cart
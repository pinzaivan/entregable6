import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'

const CartProduct = ({product}) => {
    const dispach = useDispatch()
   
    const [counter, setCounter] = useState(1)
   
    const handleClickPlus = ()=>{
        product.quantity + 1
       
    }

    const handleClickLess = ()=>{
        const newCounter=counter-1
        if(newCounter>0){
            setCounter(newCounter)
        }
    }

    
    const handleClickDelete=()=>{
        dispach(deleteProductCart(product.id))
    }



  return (
      <article>
          <section className='grid grid-cols-[auto_1fr_auto] gap-1'>
              <div className='h-[90px] aspect-square row-span-2'>
                  <img className='w-full h-full object-contain p-2' src={product.product.images[1].url} alt="" />
              </div>
              <h4>{product.product.title}</h4>
              <i onClick={handleClickDelete} className='bx bxs-trash text-red-500 cursor-pointer row-span-2'></i>
              <div>
                  <button onClick={handleClickLess} className='border-[1px] p-2 px-2 hover:bg-red-500 hover:text-white'>-</button>
                  <span className='border-[1px] p-2 px-4 border-x-0 border-y-0'>{product.quantity}</span>
                  <button onClick={handleClickPlus} className='border-[1px] p-2 px-2 hover:bg-red-500 hover:text-white'>+</button>
              </div>
          </section>
          <h4 className='mt-2 text-end'>Total <span className='font-bold'>$ {(product.quantity * product.product.price).toFixed(1)}</span></h4>
          
      </article>  
  )
}

export default CartProduct
import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import SimilarProducts from './SimilarProducts'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductDetail = ({productId}) => {
    
    const [prodcutData, setProdcutData] = useState()
    
    const [counter, setCounter] = useState(1)

    const dispach = useDispatch()

    const handleClickPlus = ()=>{
        const newCounter=counter+1
        setCounter(newCounter)
    }

    const handleClickLess = ()=>{
        const newCounter=counter-1
        if(newCounter>0){
            setCounter(newCounter)
        }
    }

    const handleClickAddToCart = () => {
        dispach(addProductCart({quantity:counter,productId:prodcutData.id}))
    }

    useEffect(()=>{
        axiosEcommerce
        .get(`products/${productId}`)
        .then((res)=> setProdcutData(res.data))
        .catch((err)=>console.log(err))  
      },[productId])

  return (
<>
<section className='flex gap-2 items-center'>
            <Link to="/">Home</Link>
            <div className='h-[7px] aspect-square bg-red-500 rounded-full'></div>
            <span className='font-bold'>{prodcutData?.title}</span>
        </section>


<section className='grid gap-6 sm:grid-cols-2 sm:items-center max-w-[1000px] mx-auto'>
        <section>
            <div className='h-[300px] '>
                <img className='h-full w-full object-contain p-4' src={prodcutData?.images[0].url} alt="" />
            </div>
        </section>
       <section>
       <h4 className='text-gray-400 font-bold mt-6'>{prodcutData?.brand}</h4>
        <h3 className='font-bold text-lg ml-2'>{prodcutData?.title}</h3>
    
        <section className='grid grid-cols-2 mt-6'>
            <article>
                <h4 className='text-gray-400 font-bold'>price</h4>
                <span className='font-bold text-lg ml-2'>$ {prodcutData?.price}</span>
            </article>

            <article>
                <h4 className='text-gray-400 font-bold'>Quantity</h4>
                <div>
                    <button onClick={handleClickLess} className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white'>-</button>
                    <span className='border-[1px] p-2 px-4 border-x-0 border-y-0'>{counter}</span>
                    <button onClick={handleClickPlus} className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white'>+</button>
                </div>
            </article>

        </section>

        <button onClick={handleClickAddToCart} className='w-full bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6 '>
            Add to Cart <i className='bx bx-cart'></i>
        </button>

        <p className='text-sm my-6 text-gray-700'>{prodcutData?.description}</p>
       </section>

       
    </section>

    <SimilarProducts categoryId={prodcutData?.categoryId} productId={prodcutData?.id}/>
</>
  )
}

export default ProductDetail
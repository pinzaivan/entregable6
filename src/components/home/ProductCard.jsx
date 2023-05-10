import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductCard = ({product}) => {
  
  const dispach = useDispatch()
  
  const handleClickAddProduct = (e)=>{
    e.preventDefault()
    dispach(addProductCart({productId: product.id, quantity:1,}))
   }
  return (
    <Link to={`/products/${product.id}`} className='border-[1px] border-gray-300 rounded-md relative'>
        <div className='p-4 border-b-[1px] border-gray-300 h-[200px] overflow-hidden'>
            <img className='h-full w-full object-contain' src={product?.images[0].url} alt="" />
        </div>
        <section className='p-4 '>
            <h4 className='text-gray-400 font-bold'>{product?.brand}</h4>
            <h3 className='font-bold text-xl ml-2'>{product?.title}</h3>
            <h4 className='text-gray-400 font-bold mt-4'>price</h4>
            <span className='font-bold text-xl ml-2'>$ {product?.price}</span>
            <button onClick={handleClickAddProduct} className='absolute grid place-content-center right-4 bottom-4 bg-red-500 text-white text-xl w-[45px] aspect-square rounded-full hover:bg-red-600 transition-colors'>
            <i className='bx bxs-cart'></i>
            </button>
        </section>

    </Link>
  )
}

export default ProductCard
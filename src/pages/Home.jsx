import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'


const Home = () => {
  
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newProductName = e.target.productName.value
    setProductName(newProductName)
  }

  const productsByName = useMemo(()=>{
    return products.filter((product)=> product.title.toLowerCase().includes(productName.toLocaleLowerCase()))
    }, [productName,products])
  
  
  const handelClikcCategory = (e)=>{
    setCurrentCategory(Number(e.target.dataset.category))
  }
  
 
  useEffect(()=> {
       
    axiosEcommerce
    .get("categories")
    .then((res)=> setCategories(res.data))
    .catch((err)=>console.log(err))
  },[])

  useEffect(()=>{
    if(currentCategory===0)
    axiosEcommerce.get("products")
    .then((res)=> setProducts(res.data))
    .catch((err)=>console.log(err))  
  },[currentCategory])

  useEffect(()=>{
    if(currentCategory){
      axiosEcommerce
      .get(`products?categoryId=${currentCategory}`)
      .then((res)=> setProducts(res.data))
      .catch((err)=>console.log(err)) 
    }
  },[currentCategory])

  return (
     <main className='px-4' >
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center my-10'>
          <input className='rounded-sm w-[70%] border-[1px] border-gray-400 h-[45px]' id="productName" type="text" placeholder='What are you looking for?' />
          <button className='text-white bg-[#f85555] h-[45px] aspect-square rounded-sm text-xl'>
            <i className='bx bx-search'></i>
          </button>
        </div>

        <ul className='grid sm:flex sm:gap-8 gap-2 sm:justify-center'>
          <li className='cursor-pointer text-gray-400 hover:text-[#f85555] hover:transition-colors' onClick={handelClikcCategory} data-category={0}>All</li>
          {
            categories.map(category=> 
            <li className='cursor-pointer text-gray-400 hover:text-[#f85555] hover:transition-colors' onClick={handelClikcCategory} data-category={category.id} key={category.id}>{category.name}</li>)
          }
        </ul>
      </form>
      <section className='grid gap-8 py-6 sm:grid-cols-3 sm:max-w-[1000px] mx-auto'>
          {
            productsByName.map(product=> <ProductCard key={product.id} product={product}/>)
          }
      </section>



     </main>
  )
}

export default Home
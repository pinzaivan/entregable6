import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/product/ProductDetail'
import SimilarProducts from '../components/product/SimilarProducts'

const Products = () => {


    const {id} = useParams()



  return (
    <main className='px-2'>

        <ProductDetail productId={id}/>
 
    
 
    </main>
  )
}

export default Products

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Products from './pages/Products'
import Header from './components/layout/Header'
import NotFound from './pages/NotFound'
import ProtectetedAuth from './components/auth/ProtectetedAuth'
import Cart from './components/cart/Cart'
import { Footer } from './components/layout/Footer'

function App() {
 
  return (
  <section className='grid grid-rows-[auto_1fr] min-h-screen font-["yantramanav"]'>
      <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      
      <Route element={<ProtectetedAuth/>}>
      <Route path='/purchases' element={<Purchases />}/>
      </Route>
      
      <Route path='/products/:id' element={<Products />}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>

    <Cart/>

    <Footer/>

  </section>
  )
}

export default App

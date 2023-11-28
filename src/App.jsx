import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Products from './components/products/products'
import Services from './components/services/services'

function App() {
  const [productsCart, setProductsCart] = useState([])
  return (
    <main>
      <Header productsCart={productsCart} setProductsCart={setProductsCart} />
      <Hero />
      <Products setProductsCart={setProductsCart} productsCart={productsCart} />
      <Services />
      <Footer />
    </main>
  )
}

export default App

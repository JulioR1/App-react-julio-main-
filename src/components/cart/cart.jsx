import styles from './cart.module.css'
import { useState } from 'react'

import imageCart from '../../assets/cart.png'
import Cards from './components/cards/cards'
export default function Cart({ productsCart, setProductsCart }) {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <article className={styles.cart}>
      {!!productsCart.length && <span className={styles.counter}>{productsCart.length}</span>}
      <img src={imageCart} alt="" onClick={handleShow} />
      {show && (
        <div className={styles.productsCart}>
          {productsCart.length ? (
            productsCart.map(({ title, image, cantidad}) => (
              <Cards key={title} imagen={image} nombre={title} cantidad={cantidad} setProductsCart={setProductsCart} productsCart={productsCart}/>
            ))
          ) : (
            <span>No hay productos en el carrito</span>
          )}
          {!!productsCart.length && (<div className={styles.button}>
            <button onClick={()=>setProductsCart([])}>Vaciar el carrito</button>
          </div>)}
        </div>
      )}
    </article>
  )
}

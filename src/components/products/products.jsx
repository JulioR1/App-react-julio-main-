import Card from './components/card/card'
import styles from './products.module.css'
import { tortasData } from '../../lib/data'
import { useEffect, useState } from 'react'

export default function Products({ setProductsCart, productsCart }) {
  const [toCart, setToCart] = useState('')
  useEffect(() => {
    if (toCart) {
      const isIncluded = productsCart.find((product) => product.title === toCart)
      if (isIncluded) {
        const newProductsCart = productsCart.map((product) => {
          if (product.title === toCart) {
            return { ...product, cantidad: product.cantidad + 1 }
          }
          return product
        })
        setProductsCart(newProductsCart)
        setToCart('')
      } else {
        const producto = tortasData.find((product) => product.title === toCart)
        setProductsCart([...productsCart, { ...producto, cantidad: 1 }])
        setToCart('')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toCart])
  return (
    <section id='productos' className={styles.products}>
      <h2> Productos</h2>
      <div className={styles.container}>
        {tortasData.map(({ image, title, calidad }) => {
          return (
            <Card
              setToCart={setToCart}
              key={title}
              imagen={image}
              titulo={title}
              calidad={calidad}
            />
          )
        })}
      </div>
    </section>
  )
}

import styles from './cards.module.css'
import deletImage from '../../../../assets/delete.png'

export default function Cards({ imagen, nombre, cantidad, setProductsCart, productsCart }) {
  const handleClick = () => { 
    const newProductsCart = productsCart.filter(product => product.title !== nombre)
    setProductsCart(newProductsCart)
  }
  return (
    <div className={styles.container}>
      <img src={imagen} alt="" />
      <div className={styles.data}>
        <span>{nombre}</span>
        <span>$ {15000* cantidad}</span>
      </div>
      <div className={styles.count}>
        <span>{cantidad}</span>
        <img src={deletImage} alt="" onClick={handleClick}/>
      </div>
    </div>
  )
}

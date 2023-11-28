import styles from './header.module.css'
import imageLogo from '../../assets/menu.png'
import Cart from '../cart/cart'

export default function Header({ productsCart, setProductsCart }) {
  return (
    <header className={styles.header}>
      <a href="#">
        <div className={styles.logo}>
          <img src={imageLogo} alt="Logo imagen" />
          <span>Logo</span>
        </div>
      </a>
      <nav className={styles.navBar}>
        <a href="#inico">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <Cart productsCart={productsCart} setProductsCart={setProductsCart} />
    </header>
  )
}

import styles from './card.module.css'

export default function Card({ imagen, titulo, calidad, setToCart }) {
  const handleClick = () => {
    setToCart(titulo)
  }
  return (
    <div className={styles.container}>
      <img src={imagen} alt="" />
      <h4>{titulo}</h4>
      <span>{calidad}</span>
      <span>$15000</span>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  )
}
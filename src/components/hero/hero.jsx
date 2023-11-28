import styles from './hero.module.css'

export default function Hero() {
  return (
    <section id='inicio' className={styles.hero}>
      <h1>Pasteleria dulce tentacion</h1>
      <p>
        ¡Descubre el placer de cada bocado con nosotros! Ven y
        disfruta de nuestros deliciosos pasteles y postres, hechos con amor y cuidado para que
        cada uno sea una experiencia inolvidable
      </p>
    </section>
  )
}
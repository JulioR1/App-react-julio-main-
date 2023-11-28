import styles from './services-card.module.css';

export default function ServicesCard({ title, description }) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
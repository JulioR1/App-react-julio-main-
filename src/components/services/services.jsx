import ServicesCard from "./components/services-card/services-card";
import { servicesData } from "../../lib/data";
import styles from './services.module.css';

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <h2>Servicios</h2>
      <div className={styles.container}>
        {servicesData.map(({ title, description }) => (
          <ServicesCard key={title} title={title} description={description}/>
        ))}
      </div>
    </section>
  )
}
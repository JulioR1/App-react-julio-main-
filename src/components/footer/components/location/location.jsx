import styles from './location.module.css'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

// const key = proc

export default function Location() {
  const defaultCenter = {
    lat: 8.95,
    lng: -75.45
  }
  
  const key = import.meta.env.VITE_API_KEY_GOOGLE_MAPS

  return (
    <div className={styles.container}>
      <span>Encuentranos en:</span>
      <APIProvider apiKey={key}>
        <div className={styles.location}>
          <Map center={defaultCenter} zoom={12}>
            <Marker position={defaultCenter} />
          </Map>
        </div>
      </APIProvider>
    </div>
  )
}

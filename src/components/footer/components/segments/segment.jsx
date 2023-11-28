import styles from './segment.module.css';

export default function Segment({segment, listItems}) {
  return (
    <div className={styles.segment}>
      <h4>{segment}</h4>
      {listItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );

}
import styles from "@/app/css/Skeleton.module.css";

export default function Skeleton() {
  return (
    <ul className={styles.skeleton}>
      <li className={`${styles.btn} ${styles.loading}`}>
        <div className={styles.image}></div>
      </li>
      {Array.from({ length: 4 }, (_, i) => (
        <li className={`${styles.card} ${styles.loading}`} key={i}>
          <div className={styles.image}></div>
          <div className={styles.content}></div>
        </li>
      ))}
      <li className={`${styles.btn} ${styles.loading}`}>
        <div className={styles.image}></div>
      </li>
    </ul>
  );
}

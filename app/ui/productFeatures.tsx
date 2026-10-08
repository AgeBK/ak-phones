import styles from "@/app/css/ProductFeatures.module.css";

export default function ProductFeatures({
  descriptions,
}: {
  descriptions: string[];
}) {
  return (
    <div className={styles.features}>
      <h3 className={styles.hdr}>Features</h3>
      {descriptions.map((val, i) => (
        <div className={styles.feature} key={i}>
          {val}
        </div>
      ))}
    </div>
  );
}

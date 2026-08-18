import styles from "@/app/css/ProductFeatures.module.css";

export default function ProductFeatures({
  descriptions,
}: {
  descriptions: string[];
}) {
  return (
    <div className={styles.descs}>
      <h3 className={styles.features}>Features</h3>
      {descriptions.map((val, i) => (
        <div className={styles.desc} key={i}>
          {val}
        </div>
      ))}
    </div>
  );
}

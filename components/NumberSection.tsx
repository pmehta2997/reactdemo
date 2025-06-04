import styles from "@/styles/page.module.css";

export default function NumberSection() {
  return (
    <div className={styles.container}>
      <div className={styles.flexItemLeft} style={{ order: 3 }}>1</div>
      <div className={styles.flexItemRight}>2</div>
    </div>
  );
}

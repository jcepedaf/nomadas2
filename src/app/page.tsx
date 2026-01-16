import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Nomadas
          </h1>
          <p className={styles.subtitle}>
            Discover your next workspace.
          </p>
          <div className={styles.actions}>
            <button className={styles.buttonPrimary}>
              Explore Destinations
            </button>
            <button className={styles.buttonSecondary}>
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

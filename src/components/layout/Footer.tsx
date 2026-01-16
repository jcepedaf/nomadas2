import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copy}>
                    &copy; {new Date().getFullYear()} Nomadas. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

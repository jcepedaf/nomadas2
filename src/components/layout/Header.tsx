import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Nomadas
                </Link>
                <nav className={styles.nav}>
                    <Link href="/destinations" className={styles.link}>
                        Destinations
                    </Link>
                    <Link href="/about" className={styles.link}>
                        About
                    </Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.button}>Sign In</button>
                </div>
            </div>
        </header>
    );
}

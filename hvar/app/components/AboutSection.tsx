import Link from 'next/link';
import styles from './styles/About.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgLogo} aria-hidden="true" />

            <div className={styles.inner}>
                <p className={styles.kicker}>ABOUT THE KONOBA</p>

                <h2 className={styles.title}>OUR STORY</h2>

                <p className={styles.text}>
                    A place where the Adriatic sets the rhythm and time slows to the pace of the sea.
                    Here, daily catch defines the menu, fire and salt shape the flavours, and simplicity is elevated to its
                    purest form. ELYSIUM is dedicated to the art of fish and seafood — respectful to tradition, guided
                    by season, and refined through contemporary technique. Every dish is created to honour the
                    ingredient, the moment, and the experience of dining without compromise.
                    Sit back, trust the kitchen, and allow the sea to lead the way.
                </p>

                <Link href="/about" className={styles.cta}>
                    READ MORE
                </Link>
            </div>
        </section>
    );
}
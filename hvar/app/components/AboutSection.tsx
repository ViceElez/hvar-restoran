import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/About.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>ABOUT THE RESTAURANT</p>
                    <span className={styles.spark} aria-hidden="true">✦</span>
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

                <div className={styles.media}>
                    <Image
                        src="/images/home/img_3.png"
                        alt="About Elysium"
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className={styles.image}
                        priority={false}
                    />
                </div>
            </div>
        </section>
    );
}
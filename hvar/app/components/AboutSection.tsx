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
                        Located in the heart of Hvar, Elysium offers a unique dining experience where Mediterranean flavors meet the relaxed spirit of island life. Just steps away from the vibrant town square and beautiful Adriatic views, our restaurant is a place to slow down, enjoy fresh local ingredients, and share unforgettable moments. Whether you're stopping by for a sunset dinner or a late evening glass of wine, Elysium brings together great food, a warm atmosphere, and the timeless charm of Hvar.
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
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
                        Restaurant Gariful is situated on the sunniest island of the Croatian coast, at the very
                        waterfront of the town of Hvar, where the most luxurious yachts in the world are aligned
                        next to one another. Thanks to its excellent position, exceptional specialties and a rich
                        wine card, every guest can enjoy the stunning view, a great atmosphere and the unique
                        gastronomic pleasures of this restaurant.
                    </p>
                    <Link href="/about" className={styles.cta}>
                        READ MORE
                    </Link>
                </div>

                <div className={styles.media}>
                    <Image
                        src="/images/home/img_3.png"
                        alt="About Gariful"
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
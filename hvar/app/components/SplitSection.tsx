import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Split.module.css';

export default function SplitSection() {
    return (
        <section className={styles.section}>

            {/* Our Story */}
            <div className={styles.row}>
                <div className={styles.media}>
                    <Image
                        src="/images/home/img_1.png"
                        alt="Restaurant view"
                        fill
                        sizes="(max-width: 900px) 100vw, 55vw"
                        className={styles.image}
                        priority={false}
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.kicker}>ABOUT THE RESTAURANT</h3>
                    <h2 className={styles.title}>OUR STORY</h2>
                    <p className={styles.text}>
                        This restaurant has a pretty common name that has a much deeper meaning to its owner.
                        Namely, "gariful" in the Dalmatian dialect means a carnation – a flower of reconciliation
                        which symbolizes admiration, respect and deep emotions. It represents the family business
                        of its owner, who proudly takes his nickname after his father, as the name remained and
                        imposed itself as a reminder of their first, floral business.
                    </p>
                    <Link href="/about" className={styles.cta}>DISCOVER MORE</Link>
                </div>
            </div>

            {/* Our Menu */}
            <div className={`${styles.row} ${styles.rowReverse}`}>
                <div className={styles.media}>
                    <Image
                        src="/images/home/img_2.png"
                        alt="Fresh fish and seafood"
                        fill
                        sizes="(max-width: 900px) 100vw, 55vw"
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.kicker}>WE SERVE FRESHEST CATCHES</h3>
                    <h2 className={styles.title}>OUR MENU</h2>
                    <p className={styles.text}>
                        A long time ago, in 1981, restaurant Gariful first opened its doors wishing to offer its
                        customers something new and different: a unique pleasure combined with outstanding
                        specialties, always-fresh fish and seafood, and some of the special, but sometimes also
                        very rare bottles of wine that the wine cellar of this restaurant can be proud of.
                    </p>
                    <Link href="/" className={styles.cta}>DISCOVER MORE</Link>
                </div>
            </div>

        </section>
    );
}
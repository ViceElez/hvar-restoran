import Image from 'next/image';
import styles from './styles/Specialties.module.css';

export default function SpecialtiesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/home/img_1.webp"
                    alt="Lobster Image"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.kicker}>RECOMMENDATIONS</h3>
                <h2 className={styles.title}>ELYSIUM SPECIALTIES</h2>
                <div className={styles.item}>
                    <h4 className={styles.name}>Elysium Sea Plate</h4>
                    <p className={styles.desc}>White fish / scampi / squid / seasonal side dishes</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Lobster Gone Wild</h4>
                    <p className={styles.desc}>Lobster buzara style / cognac / tomato sauce / spaghetti</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Champagne & Saffron Risotto</h4>
                    <p className={styles.desc}>Aged rice / Champagne / saffron / seared scallops</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Glazed Lamb Shank</h4>
                    <p className={styles.desc}>Slow-braised lamb shank / honey glaze / pickled vegetables / jus</p>
                </div>
            </div>
        </section>
    );
}
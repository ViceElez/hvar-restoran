import Image from 'next/image';
import styles from './styles/Specialties.module.css';

export default function SpecialtiesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/home/img_1.png"
                    alt="Gariful specialties"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.kicker}>RECOMMENDATIONS</h3>
                <h2 className={styles.title}>GARIFUL SPECIALTIES</h2>
                <div className={styles.item}>
                    <h4 className={styles.name}>Lobster Carpaccio</h4>
                    <p className={styles.desc}>Fresh Adriatic lobster / Madagascar vanilla and fresh cucumber extra virgin olive oil / lemon</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>"Drunken" Lobster 1 Kg</h4>
                    <p className={styles.desc}>Cognac / tomato sauce / spaghettini di Gragnano / Parmigiano Reggiano</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Wagyu 250 G</h4>
                    <p className={styles.desc}>Premium Japanese beef</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Ribeye Steak</h4>
                    <p className={styles.desc}>130-Days Dry-Aged Ribeye Steak</p>
                </div>
            </div>
        </section>
    );
}
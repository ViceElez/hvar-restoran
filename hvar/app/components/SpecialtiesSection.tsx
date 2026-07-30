import Image from 'next/image';
import styles from './styles/Specialties.module.css';

export default function SpecialtiesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/home/img2.webp"
                    alt="Lobster Image"
                    fill
                    sizes="100vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.kicker}>RECOMMENDATIONS</h3>
                <h2 className={styles.title}>ELYSIUM SPECIALTIES</h2>
                <div className={styles.item}>
                    <h4 className={styles.name}>Poor Man&apos;s Lobster</h4>
                    <p className={styles.desc}>Monkfish steak wrapped in leek / light béarnaise sauce / red grapefruit / light salad</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>The First Impression</h4>
                    <p className={styles.desc}>Adriatic tasting selection / shrimp pâté / tuna tartare / beetroot tartare / seafood delicacies</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Embered Fish Paccheri</h4>
                    <p className={styles.desc}>Paccheri / charcoal-finished fish / shellfish reduction / cherry tomatoes</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Velvet Veal Roll</h4>
                    <p className={styles.desc}>Slow-roasted veal roulade / mustard / polenta / marinated red cabbage / rich demi-glace</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Contemporary Pašticada</h4>
                    <p className={styles.desc}>Beef / pašticada sauce / gnocchi or homemade pasta / root vegetables / prunes / pancetta</p>
                </div>
            </div>
        </section>
    );
}
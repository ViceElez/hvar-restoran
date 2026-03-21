import styles from './styles/About.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h3 className={styles.kicker}>SUMMER WITH THE GARIFUL SIGNATURE</h3>
                <h2 className={styles.title}>EXCLUSIVE FISH RESTAURANT</h2>
                <p className={styles.text}>
                    Restaurant Gariful is situated on the sunniest island of the Croatian coast, at the very
                    waterfront of the town of Hvar, where the most luxurious yachts in the world are aligned
                    next to one another. Thanks to its excellent position, exceptional specialties and a rich
                    wine card, every guest can enjoy the stunning view, a great atmosphere and the unique
                    gastronomic pleasures of this restaurant.
                </p>
            </div>
        </section>
    );
}
import styles from './styles/Footer.module.css';

export default function FooterSection() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.col}>
                    <h4 className={styles.heading}>OPENING HOURS</h4>
                    <p className={styles.text}>Every day</p>
                    <p className={styles.text}>10:00 am to 2:00 am</p>
                    <p className={styles.text}>1 April — 1 November</p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.heading}>LOCATION</h4>
                    <p className={styles.text}>Riva</p>
                    <p className={styles.text}>21 450 Hvar</p>
                    <p className={styles.text}>Croatia</p>
                    <p className={styles.text} style={{ marginTop: '20px' }}>restaurantgariful.hvar@gmail.com</p>
                    <p className={styles.text}>+385 (0)21 742 999</p>
                    <a href="#" className={styles.mapLink}>VIEW ON MAP</a>
                </div>

            </div>
        </footer>
    );
}
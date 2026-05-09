import styles from './styles/Footer.module.css';

export default function FooterSection() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.col}>
                    <h4 className={styles.heading}>OPENING HOURS</h4>
                    <p className={styles.text}>Every day</p>
                    <p className={styles.text}>08:00 — 14:00</p>
                    <p className={styles.text}>18:00 — 01:00</p>
                    <div className={styles.socials}>
                        <a
                            href="https://www.facebook.com/mirko.mucic.7?locale=hr_HR"
                            className={styles.socialLink}
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/mirko_mucic/"
                            className={styles.socialLink}
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
                    <p className={styles.text}>Marije Maričić 17</p>
                    <p className={styles.text}>21450 Hvar</p>
                    <p className={styles.text}>Croatia</p>
                    <p className={styles.text}>091 727 8484</p>
                    <a
                        href="https://www.google.com/maps/place/Elysium/@43.1728673,16.4399534,17z/data=!3m1!4b1!4m6!3m5!1s0x13358195cbb60c0f:0x2c68aa5be4b26cc8!8m2!3d43.1728673!4d16.4425283!16s%2Fg%2F11z9q5vmjn?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                        className={styles.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VIEW ON MAP
                    </a>
                </div>

            </div>
        </footer>
    );
}
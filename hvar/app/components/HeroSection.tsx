import FullscreenSlideshow from './FullscreenSlideshow';
import Link from 'next/link';
import styles from './styles/Hero.module.css';

export default function HeroSection() {
    return (
        <div>
            <FullscreenSlideshow
                secondsPerImage={8}
                images={[
                    { src: '/images/home/img.png', alt: 'Slideshow image 1' },
                    { src: '/images/home/img_1.png', alt: 'Slideshow image 2' },
                    { src: '/images/home/img_2.png', alt: 'Slideshow image 3' },
                ]}
            />
            <div className={styles.hero}>
                <h1 className={styles.title}>RESTAURANT WITH A BREATH TAKING SUNSET VIEW</h1>
                <p className={styles.subtitle}>Enjoy fresh seafood and an unforgettable evening by the sea.</p>
                <Link href="/reservate" className={styles.cta}>BOOK A TABLE</Link>
            </div>
            <div className={styles.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"/>
                    <path fill="#ffffff" fillOpacity="0.6" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z"/>
                    <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,267,576,272C672,277,768,256,864,245.3C960,235,1056,235,1152,245.3C1248,256,1344,277,1392,282.7L1440,288L1440,320L0,320Z"/>
                </svg>
            </div>
        </div>
    );
}
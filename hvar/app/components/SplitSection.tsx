'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Split.module.css';

const baseSlides = [
    { src: '/images/home/img_2.png', alt: 'Fresh fish and seafood', aspectClass: 'tall', offset: 'low' },
    { src: '/images/home/img_1.png', alt: 'Gariful specialties', aspectClass: 'wide', offset: 'high' },
    { src: '/images/home/img.png', alt: 'Restaurant view', aspectClass: 'tall', offset: 'mid' },
    { src: '/images/home/img_2.png', alt: 'Adriatic cuisine', aspectClass: 'wide', offset: 'low' },
];

// Duplicate enough times that the seam is never visible
const slides = [...baseSlides, ...baseSlides, ...baseSlides, ...baseSlides];

export default function SplitSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <p className={styles.kicker}>WE SERVE FRESHEST CATCHES</p>
                    <h2 className={styles.title}>OUR<br />MENU</h2>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.desc}>
                        Since 1981, Restaurant Gariful has offered outstanding specialties,
                        always-fresh fish and seafood, and rare wines from our celebrated cellar.
                    </p>
                    <Link href="/menu" className={styles.cta}>DISCOVER MORE</Link>
                </div>
            </div>

            <div className={styles.filmstripWrap}>
                <div className={styles.filmstrip}>
                    <div className={styles.track}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`${styles.card} ${styles[slide.aspectClass]} ${styles[slide.offset]}`}
                            >
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    sizes="400px"
                                    className={styles.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
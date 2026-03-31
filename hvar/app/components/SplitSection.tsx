'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Split.module.css';

const baseSlides = [
    { src: '/images/home/img_2.webp', alt: 'Hvar Riva Image', aspectClass: 'tall', offset: 'low' },
    { src: '/images/home/img_1.webp', alt: 'Lobster Image', aspectClass: 'wide', offset: 'high' },
    { src: '/images/home/img.webp', alt: 'Restaurant Table Image', aspectClass: 'tall', offset: 'mid' },
    { src: '/images/home/img_3.webp', alt: 'Hvar Riva Image', aspectClass: 'wide', offset: 'low' },
];

const slides = [...baseSlides, ...baseSlides, ...baseSlides, ...baseSlides];

export default function SplitSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <p className={styles.kicker}>A TASTE OF MEDITERRANEAN ELEGANCE</p>
                    <h2 className={styles.title}>OUR<br />MENU</h2>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.desc}>
                        Savor thoughtfully crafted dishes, fresh local ingredients, and carefully selected wines in a relaxed island atmosphere
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
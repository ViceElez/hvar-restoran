'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles/Hero.module.css';

type Slide = {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaHref: string;
};

const SLIDES: Slide[] = [
    {
        src: '/images/home/img.webp',
        alt: 'Konoba Table',
        eyebrow: 'EXPERIENCE',
        title: 'HEART OF\nHVAR',
        subtitle: 'Hand-selected seafood prepared with\ncenturies of coastal tradition.',
        cta: 'EXPLORE MENU',
        ctaHref: '/menu',
    },
    {
        src: '/images/home/img_1.webp',
        alt: 'Lobster',
        eyebrow: 'CATCH OF THE DAY',
        title: 'FRESH FROM\nTHE ADRIATIC',
        subtitle: 'Discover a gastronomic experience that\ntransports you to the heart of Hvar.',
        cta: 'VIEW SEAFOOD',
        ctaHref: '/menu',
    },
    {
        src: '/images/home/img_2.webp',
        alt: 'Hvar Riva',
        eyebrow: 'OUR SETTING',
        title: 'DINE ON\nHVAR RIVA',
        subtitle: 'Where the golden light of the Adriatic\nmeets an extraordinary table.',
        cta: 'RESERVE A TABLE',
        ctaHref: '/contact',
    },
];

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [textVisible, setTextVisible] = useState(true);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback(
        (next: number, dir: 'next' | 'prev' = 'next') => {
            if (animating || next === active) return;
            if (timerRef.current) clearTimeout(timerRef.current);

            setDirection(dir);
            setTextVisible(false);

            // Short delay then swap panels
            setTimeout(() => {
                setAnimating(true);
                setPrev(active);
                setActive(next);
            }, 200);
        },
        [active, animating]
    );

    const advance = useCallback(() => {
        goTo((active + 1) % SLIDES.length, 'next');
    }, [active, goTo]);

    const retreat = useCallback(() => {
        goTo((active - 1 + SLIDES.length) % SLIDES.length, 'prev');
    }, [active, goTo]);

    // Re-show text after panel animation settles
    useEffect(() => {
        if (animating) {
            const t = setTimeout(() => {
                setAnimating(false);
                setPrev(null);
                setTextVisible(true);
            }, 900);
            return () => clearTimeout(t);
        }
    }, [animating]);

    // Ensure text visible on first render
    useEffect(() => { setTextVisible(true); }, []);

    // Auto-advance
    useEffect(() => {
        timerRef.current = setTimeout(advance, 7000);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [active, advance]);

    const slide = SLIDES[active];

    return (
        <section className={styles.hero} aria-label="Hero section">

            {/* ── Background images ─────────────────────────────── */}
            <div className={styles.backdrop}>
                {SLIDES.map((s, i) => (
                    <div
                        key={s.src}
                        className={[
                            styles.bgSlide,
                            i === active && !animating ? styles.bgActive :
                                i === active && animating  ? styles.bgEntering :
                                    i === prev  && animating   ? styles.bgLeaving  : '',
                        ].filter(Boolean).join(' ')}
                        style={{
                            '--dir': direction === 'next' ? '1' : '-1',
                        } as React.CSSProperties}
                    >
                        <Image src={s.src} alt={s.alt} fill sizes="100vw" priority className={styles.bgImg} />
                        {/* Dark vignette overlay */}
                        <div className={styles.vignette} />
                    </div>
                ))}
            </div>

            {/* ── Logo ──────────────────────────────────────────── */}
            <div className={styles.logoWrap}>
                <Image
                    src="/images/home/elysiumLogo.webp"
                    alt="Elysium logo"
                    width={220}
                    height={110}
                    className={styles.logo}
                    priority
                />
            </div>

            {/* ── Nav arrows ────────────────────────────────────── */}
            <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={retreat}
                aria-label="Previous slide"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={advance}
                aria-label="Next slide"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* ── Hero copy ─────────────────────────────────────── */}
            <div className={`${styles.content} ${textVisible ? styles.contentVisible : styles.contentHidden}`}>
                <p className={styles.eyebrow}>
                    <span className={styles.eyebrowLine} />
                    {slide.eyebrow}
                    <span className={styles.eyebrowLine} />
                </p>

                <h1 className={styles.title}>
                    {slide.title.split('\n').map((line, i) => (
                        <span key={i} className={styles.titleLine}>{line}</span>
                    ))}
                </h1>

                <p className={styles.subtitle}>
                    {slide.subtitle.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </p>

                <a href={slide.ctaHref} className={styles.cta}>
                    <span>{slide.cta}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaArrow}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* ── Slide counter ─────────────────────────────────── */}
            <div className={styles.counter}>
                <span className={styles.counterActive}>0{active + 1}</span>
                <span className={styles.counterSep} />
                <span className={styles.counterTotal}>0{SLIDES.length}</span>
            </div>

            {/* ── Progress bar ──────────────────────────────────── */}
            <div className={styles.progressBar}>
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.progressDot} ${i === active ? styles.progressDotActive : ''}`}
                        onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}
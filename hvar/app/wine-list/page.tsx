import Image from "next/image";
import styles from "./WinePageStyle.module.css";

// Wines available by the glass, grouped as in the PDF
const winesByGlass = {
    kicker: "REFRESH YOUR TASTE BUDS",
    title: "WINES BY GLASS",
    image: "/images/wine/wines-by-glass.webp",
    categories: [
        {
            name: "CROATIAN SPARKLING WINE",
            items: [
                { name: "Tomac Millenium", price: "8 €" },
                { name: "Šember Rosé", price: "8 €" },
            ]
        },
        {
            name: "WHITE WINES",
            items: [
                { name: "Carić Bogdanuša", price: "5 €" },
                { name: "Puhelek Sauvignon Blanc", price: "6 €" },
                { name: "Coletti Pinot Grigio", price: "7 €" },
                { name: "Hvar Hills Pošip", price: "8 €" },
            ]
        },
        {
            name: "ROSÉ WINES",
            items: [
                { name: "Bire Rosé", price: "7 €" },
            ]
        },
        {
            name: "RED WINES",
            items: [
                { name: "Sontacchi Crni Pinot", price: "6 €" },
                { name: "Grabovac Merlot", price: "7 €" },
                { name: "Hvar Hills Plavac Maior Riserva", price: "8 €" },
            ]
        },
        {
            name: "SWEET WINES",
            items: [
                { name: "Tomić Hektorović Prošek", price: "8 €" },
            ]
        },
    ]
};

// Full wine list grouped exactly as in the PDF, including bottle/glass/measure info
const wineCategories = [
    {
        kicker: "ELYSIUM WINE LIST",
        title: "CHAMPAGNE",
        layout: "image-right",
        image: "/images/wine/champagne.webp",
        items: [
            { name: "Veuve Clicquot Brut", desc: "Bottle — 95 €" },
            { name: "Ruinart Brut R", desc: "Bottle — 120 €" },
        ]
    },
    {
        kicker: "ELYSIUM WINE LIST",
        title: "CROATIAN SPARKLING WINE",
        layout: "image-left",
        image: "/images/wine/croatian-sparkling.webp",
        items: [
            { name: "Tomac Millenium", desc: "Bottle 48 € · Glass 8 € · 0,10 l" },
            { name: "Šember Rosé", desc: "Bottle 48 € · Glass 8 € · 0,10 l" },
        ]
    },
    {
        kicker: "ELYSIUM WINE LIST",
        title: "PROSECCO",
        layout: "image-right",
        image: "/images/wine/prosecco.webp",
        items: [
            { name: "Prosecco Valdobbiadene Villa Sandi Millesimato D.O.C.G.", desc: "Bottle — 38 €" },
        ]
    },
    {
        kicker: "WINES BY THE GLASS",
        title: "WHITE WINES",
        layout: "image-left",
        image: "/images/wine/white-wines.webp",
        items: [
            { name: "Carić Bogdanuša", desc: "Bottle 28 € · Glass 5 € · 0,125 l" },
            { name: "Puhelek Sauvignon Blanc", desc: "Bottle 32 € · Glass 6 € · 0,125 l" },
            { name: "Erdoro Blend One", desc: "Bottle — 33 €" },
            { name: "Coletti Pinot Grigio", desc: "Bottle 34 € · Glass 7 € · 0,125 l" },
            { name: "Hvar Hills Pošip", desc: "Bottle 45 € · Glass 8 € · 0,125 l" },
            { name: "Luka Krajančić Intrada", desc: "Bottle — 48 €" },
            { name: "Zure Grk", desc: "Bottle — 68 €" },
            { name: "Knebu Chardonnay", desc: "Bottle — 75 €" },
        ]
    },
    {
        kicker: "WINES BY THE GLASS",
        title: "ROSÉ WINES",
        layout: "image-right",
        image: "/images/wine/rose-wines.webp",
        items: [
            { name: "Bire Rosé", desc: "Bottle 36 € · Glass 7 € · 0,125 l" },
            { name: "Markus Rosé", desc: "Bottle — 45 €" },
            { name: "Whispering Angel", desc: "Bottle — 65 €" },
        ]
    },
    {
        kicker: "WINES BY THE GLASS",
        title: "RED WINES",
        layout: "image-left",
        image: "/images/wine/red-wines.webp",
        items: [
            { name: "Sontacchi Crni Pinot", desc: "Bottle 32 € · Glass 6 € · 0,125 l" },
            { name: "Grabovac Merlot", desc: "Bottle 36 € · Glass 7 € · 0,125 l" },
            { name: "Hvar Hills Plavac Maior Riserva", desc: "Bottle 45 € · Glass 8 € · 0,125 l" },
            { name: "Galić Crno 9", desc: "Bottle — 54 €" },
            { name: "Bire Plavac Mali", desc: "Bottle — 54 €" },
            { name: "Grabovac Syrah", desc: "Bottle — 65 €" },
        ]
    },
    {
        kicker: "ELYSIUM WINE LIST",
        title: "SWEET WINES",
        layout: "image-right",
        image: "/images/wine/sweet-wines.webp",
        items: [
            { name: "Tomić Hektorović Prošek", desc: "Bottle 72 € · Glass 8 € · 0,075 l" },
        ]
    },
    {
        kicker: "PODERI LUIGI EINAUDI — PIEDMONT SELECTION",
        title: "WHITE WINE",
        layout: "image-left",
        image: "/images/wine/einaudi-white.webp",
        items: [
            { name: "Roero Arneis 2025 \u201cDonna Ida\u201d", desc: "Bottle — 42 €" },
        ]
    },
    {
        kicker: "PODERI LUIGI EINAUDI — PIEDMONT SELECTION",
        title: "RED WINES",
        layout: "image-right",
        image: "/images/wine/einaudi-red.webp",
        items: [
            { name: "Dogliani 2024 D.O.C.G.", desc: "Bottle — 42 €" },
            { name: "Langhe Nebbiolo 2024 D.O.C.", desc: "Bottle — 58 €" },
            { name: "Barolo D.O.C.G. 2021 \u201cLudo\u201d", desc: "Bottle — 110 €" },
        ]
    },
];

export default function WinePage() {
    return (
        <div className={styles.page}>
            <div className="pageBanner pageBanner--wine">
                <img
                    src="/images/home/elysiumLogo.webp"
                    alt="Elysium Logo"
                    className="pageBannerLogo"
                />
                <div className="pageBannerContent">
                    <p className="pageBannerKicker">CURATED SELECTIONS</p>
                    <h1 className="pageBannerTitle">Wine</h1>
                </div>
            </div>

            <main className={styles.main}>
                <section className={styles.byGlass}>
                    <div className={styles.byGlassHeader}>
                        <p className={styles.kicker}>{winesByGlass.kicker}</p>
                        <h2 className={styles.titleLarge}>{winesByGlass.title}</h2>
                        <div className={styles.divider}>
                            <span className={styles.dividerIcon}>✦</span>
                        </div>
                    </div>

                    <div className={styles.byGlassBody}>
                        <div className={styles.byGlassImage}>
                            <Image
                                src={winesByGlass.image}
                                alt="Wines by glass"
                                fill
                                priority
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.byGlassCategories}>
                            {winesByGlass.categories.map((cat, i) => (
                                <div key={i} className={styles.byGlassCategory}>
                                    <h3 className={styles.categoryName}>{cat.name}</h3>
                                    {cat.items.map((item, j) => (
                                        <p key={j} className={styles.byGlassItem}>
                                            {item.name}
                                            <span className={styles.byGlassPrice}> — {item.price}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {wineCategories.map((cat, i) => (
                    <section key={i} className={styles.category}>
                        <div className={`${styles.categoryBody} ${cat.layout === 'image-right' ? styles.imageRight : styles.imageLeft}`}>

                            <div className={styles.categoryContent}>
                                <p className={styles.kicker}>{cat.kicker}</p>
                                <h2 className={styles.titleLarge}>{cat.title}</h2>
                                <div className={styles.itemList}>
                                    {cat.items.map((item, j) => (
                                        <div key={j} className={styles.wineItem}>
                                            <div className={styles.wineItemInner}>
                                                <h4 className={styles.wineName}>{item.name}</h4>
                                                <div className={styles.wineLine} />
                                            </div>
                                            {item.desc && (
                                                <p className={styles.wineDesc}>{item.desc}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.categoryImage}>
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    priority
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}
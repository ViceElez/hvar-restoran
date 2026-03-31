import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import styles from "./WinePageStyle.module.css";

const winesByGlass = {
    kicker: "REFRESH YOUR TASTE BUDS",
    title: "WINES BY GLASS",
    image: "/images/wine/wines-by-glass.png",
    categories: [
        {
            name: "SPARKLING WINES",
            items: [
                { name: "Bosco Di Gica Adami 0.1", desc: "" },
                { name: "Bianca Vigna Spumante Rose 0.1", desc: "" },
            ]
        },
        {
            name: "CHAMPAGNE",
            items: [
                { name: "Billecart Salmon Brut Reserva 0.1", desc: "" },
                { name: "Moet & Chandon Brut Rose 0.1", desc: "" },
            ]
        },
    ]
};

const wineCategories = [
    {
        kicker: "WINES BY THE GLASS",
        title: "WHITE WINES",
        layout: "image-right",
        image: "/images/wine/white-wines.png",
        items: [
            { name: "Beleca 0.15", desc: "Tomić, vinogorje Hvar, bogdanuša, pošip" },
            { name: "Chablis 0.15", desc: "Domaine Billaud-Simon, Burgundy, chardonnay" },
            { name: "Bura Pošip 0.15", desc: "Toreta, Korčula, pošip, dry" },
            { name: "Sauvignon Blanc 0.15", desc: "Cloudy Bay, Marlborough, New Zealand" },
        ]
    },
    {
        kicker: "WINES BY THE GLASS",
        title: "ROSE WINES",
        layout: "image-left",
        image: "/images/wine/rose-wines.png",
        items: [
            { name: "Opolo Tomić 0.15", desc: "Tomić, Hvarsko vinogorje, plavac mali, dry" },
            { name: "Minuty M 0.15", desc: "Château Minuty, Provence, grenache, dry" },
            { name: "Whispering Angel 0.15", desc: "Château d'Esclans, Provence, grenache, dry" },
        ]
    },
    {
        kicker: "WINES BY THE GLASS",
        title: "RED WINES",
        layout: "image-right",
        image: "/images/wine/red-wines.png",
        items: [
            { name: "Plavac 0.15", desc: "Tomić, vinogorje Hvar, plavac mali, dry" },
            { name: "Karizma 0.15", desc: "Petrać, cabernet sauvignon 73%, merlot 27%, dry" },
            { name: "Dingač 0.15", desc: "Matuško, Pelješac, plavac mali, dry" },
            { name: "Barolo 0.15", desc: "Marchesi di Barolo, Piedmont, nebbiolo, dry" },
        ]
    },
];

export default function WinePage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <main className={styles.main}>

                {/* Wines by Glass — image left, categories right */}
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
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.byGlassCategories}>
                            {winesByGlass.categories.map((cat, i) => (
                                <div key={i} className={styles.byGlassCategory}>
                                    <h3 className={styles.categoryName}>{cat.name}</h3>
                                    {cat.items.map((item, j) => (
                                        <p key={j} className={styles.byGlassItem}>{item.name}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* White, Rose, Red wines */}
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
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}
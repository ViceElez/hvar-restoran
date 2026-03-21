import HeroSection from "@/app/components/HeroSection";
import styles from './MenuPageStyle.module.css';

const menuSections = [
    {
        kicker: "REFRESH YOUR TASTE BUDS",
        title: "COLD APPETIZERS",
        items: [
            { name: "BURRATA", price: "19.00 €", desc: "Basil pesto / cherry tomato / olive oil / pine nuts / sea salt flower" },
            { name: "DALMATIAN PROSCIUTTO", price: "19.00 €", desc: "Olives / pickled onion / cherry tomatoes" },
            { name: "TUNA TATAKI", price: "26.00 €", desc: "Aged in salt / sugar / lemon and lime zest / spicy sauce / dehydrated onion / soy / olive oil / marinated onion" },
            { name: "TUNA TARTARE", price: "29.00 €", desc: "Aged in lemon and lime zest / salt and sugar / spicy sauce / capers / shallots / salted anchovy / pickled caper flower / flavored butter" },
            { name: "FISH CARPACCIO", price: "29.00 €", desc: "White fish carpaccio / lemon / olive oil / pepper / strawberry / orange in cherry juice / lemon pearls" },
            { name: "COLD PLATE", price: "49.00 €", desc: "Chef's selection" },
            { name: "CARPACCIO GARIFUL", price: "54.00 €", desc: "Fresh Adriatic lobster / fresh beef tenderloin / fruit pearls", badge: "RECOMMENDATION" },
            { name: "LOBSTER CARPACCIO", price: "88.00 €", desc: "Fresh Adriatic lobster / Madagascar vanilla / cucumber / extra virgin olive oil / lemon" },
            { name: "CAVIAR", price: "260.00 €", desc: "Prunier caviar / smoked butter with Nin salt flower / onion / cream" },
            { name: "CAVIAR BELUGA", price: "550.00 €", desc: "Beluga caviar / smoked butter with Nin salt flower / onion / cream" },
        ]
    },
    {
        kicker: "FROM THE KITCHEN",
        title: "WARM APPETIZERS",
        items: [
            { name: "SHRIMP BUZARA", price: "32.00 €", desc: "Adriatic shrimp / white wine / garlic / olive oil / parsley" },
            { name: "SCALLOPS", price: "38.00 €", desc: "Pan-seared / cauliflower cream / truffle oil / micro herbs" },
            { name: "OCTOPUS CROQUETTES", price: "24.00 €", desc: "Slow-cooked octopus / potato / smoked paprika aioli" },
            { name: "LOBSTER BISQUE", price: "28.00 €", desc: "Adriatic lobster / cream / cognac / tarragon", badge: "RECOMMENDATION" },
        ]
    },
    {
        kicker: "FROM THE SEA",
        title: "MAIN COURSES",
        items: [
            { name: '"DRUNKEN" LOBSTER 1 KG', price: "180.00 €", desc: "Cognac / tomato sauce / spaghettini di Gragnano / Parmigiano Reggiano", badge: "RECOMMENDATION" },
            { name: "GRILLED SEA BASS", price: "65.00 €", desc: "Whole Adriatic sea bass / seasonal vegetables / olive oil / lemon" },
            { name: "WAGYU 250 G", price: "120.00 €", desc: "Premium Japanese beef" },
            { name: "RIBEYE STEAK", price: "95.00 €", desc: "130-Days Dry-Aged Ribeye Steak" },
            { name: "SEAFOOD PLATTER", price: "220.00 €", desc: "Lobster / scallops / shrimp / oysters / seasonal fish" },
        ]
    },
];

export default function Menu() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <main className={styles.main}>
                {menuSections.map((section, i) => (
                    <section key={i} className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <p className={styles.kicker}>{section.kicker}</p>
                            <h2 className={styles.title}>{section.title}</h2>
                        </div>

                        <div className={styles.grid}>
                            {section.items.map((item, j) => (
                                <div key={j} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.nameRow}>
                                            <h3 className={styles.name}>{item.name}</h3>
                                            {item.badge && (
                                                <span className={styles.badge}>{item.badge}</span>
                                            )}
                                        </div>
                                        <span className={styles.price}>{item.price}</span>
                                    </div>
                                    <p className={styles.desc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
            <div style={{
                lineHeight: 0,
                marginTop: '-130px',
                position: 'relative',
                zIndex: 10
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ display: 'block', width: '100%', height: '160px' }}
                >
                    <path fill="#0b2f44" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"/>
                    <path fill="#0b2f44" fillOpacity="0.6" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z"/>
                    <path fill="#0b2f44" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,267,576,272C672,277,768,256,864,245.3C960,235,1056,235,1152,245.3C1248,256,1344,277,1392,282.7L1440,288L1440,320L0,320Z"/>
                </svg>
            </div>
        </div>
    );
}
import HeroSection from "@/app/components/HeroSection";
import styles from './MenuPageStyle.module.css';

const menuSections = [
    {
        kicker: "THE FIRST CUT",
        title: "COLD STARTERS",
        items: [
            { name: "THE FIRST CUT", price: "39 €", desc: "Top quality selection of Adriatic cold starters / a refined introduction to the chef's vision" },
            { name: "DALMATIAN PROSCIUTTO", price: "19 €", desc: "Dry-aged Dalmatian prosciutto / olives / pickled onions / cherry tomatoes" },
            { name: "BURRATA & TRUFFLE", price: "19 €", desc: "Creamy burrata / cherry tomatoes / 25-year aged balsamic / fresh truffle" },
            { name: "SHRIMP COCKTAIL", price: "18 €", desc: "Poached Adriatic shrimp / house cocktail sauce / citrus notes", badge: "RECOMMENDATION" },
            { name: "BLACK BASS CARPACCIO", price: "24 €", desc: "Thinly sliced black bass / citrus textures / fresh herbs / beetroot essence" },
            { name: "BEEF CARPACCIO", price: "26 €", desc: "Beef tenderloin / Grana Padano / pine nuts / rocket / lemon dressing / olive oil" },
        ]
    },
    {
        kicker: "FROM THE KITCHEN",
        title: "SOUPS",
        items: [
            { name: "SOUP OF THE DAY", price: "10 €", desc: "Daily seasonal soup / inspired by the Adriatic market" },
            { name: "GAZPACHO", price: "12 €", desc: "Chilled gazpacho of four cherry tomato varieties / olive oil" },
        ]
    },
    {
        kicker: "FROM THE KITCHEN",
        title: "WARM APPETIZERS",
        items: [
            { name: "EMBERED FISH PACCHERI", price: "35 €", desc: "Paccheri / charcoal-finished fish / shellfish reduction / cherry tomatoes" },
            { name: "BLACK RISOTTO", price: "24 €", desc: "Aged rice / Adriatic cuttlefish / squid ink / olive oil" },
            { name: "CHAMPAGNE & SAFFRON RISOTTO", price: "42 €", desc: "Aged rice / Champagne / saffron / seared scallops" },
            { name: "VODKA AFFAIR", price: "29 €", desc: "Paccheri / tomato / vodka / aged cheese / burrata" },
        ]
    },
    {
        kicker: "FROM THE SEA",
        title: "FISH · CRUSTACEANS · SHELLFISH",
        items: [
            { name: "POOR MAN'S LOBSTER", price: "36 €", desc: "Monkfish steak wrapped in leek / light béarnaise sauce / red grapefruit" },
            { name: "ADRIATIC SQUID", price: "27 €", desc: "Char-grilled Adriatic squid / olive oil / herbs" },
            { name: "THE FIRST PEARL", price: "6 € / pc", desc: "Fresh oysters / lemon" },
            { name: "BAKED OYSTERS", price: "6 € / pc", desc: "Herb butter / sea aromas" },
            { name: "ADRIATIC SHELLFISH SELECTION", price: "35 €", desc: "Mussels / cockles / clams" },
            { name: "SCAMPI BUZARA", price: "42 €", desc: "Adriatic scampi / white wine / tomato" },
            { name: "GRILLED SCAMPI", price: "42 €", desc: "Adriatic scampi / olive oil / sea salt" },
            { name: "TOP QUALITY ADRIATIC FISH", price: "98 € / kg", desc: "Prepared upon guest's preference: brudet · gregada · grill" },
            { name: "ELYSIUM SEA PLATE", price: "158 €", desc: "White fish / scampi / squid / seasonal side dishes", badge: "CHEF'S RECOMMENDATION" },
            { name: "THE GOLDEN CATCH", price: "190 € / kg", desc: "Adriatic lobster / olive oil" },
            { name: "LOBSTER GONE WILD", price: "220 € / kg", desc: "Lobster buzara style / cognac / tomato sauce / spaghetti" },
        ]
    },
    {
        kicker: "FROM THE LAND",
        title: "MEAT",
        items: [
            { name: "VELVET VEAL ROLL", price: "55 €", desc: "Slow-roasted veal roulade / mustard / polenta / marinated red cabbage / rich demi-glace" },
            { name: "CHARRED RIBEYE", price: "46 €", desc: "Grilled ribeye / garlic confit / burnt onion purée / jus" },
            { name: "GLAZED LAMB SHANK", price: "60 €", desc: "Slow-braised lamb shank / honey glaze / pickled vegetables / jus" },
        ]
    },
    {
        kicker: "FRESH & LIGHT",
        title: "SALADS",
        items: [
            { name: "BEETROOT & GOAT CHEESE SALAD", price: "16 €", desc: "Roasted beetroot / goat cheese / arugula / walnuts / balsamic" },
            { name: "ELYSIUM SALAD", price: "19 €", desc: "Salmon / avocado / mixed greens / cherry tomatoes / lemon dressing" },
        ]
    },
    {
        kicker: "ON THE SIDE",
        title: "SIDE DISHES",
        items: [
            { name: "TOMATO CARPACCIO", price: "10 €", desc: "Gazpacho / 25-year aged balsamico / olive oil" },
            { name: "GRILLED VEGETABLES", price: "8 €", desc: "" },
            { name: "TRUFFLE MASHED POTATOES", price: "12 €", desc: "Creamy potatoes / truffle aroma" },
            { name: "FRENCH FRIES", price: "6 €", desc: "" },
            { name: "SEASONAL SALAD", price: "7 €", desc: "" },
            { name: "GOAT CHEESE SELECTION", price: "", desc: "Artisan goat cheeses / fresh & aged / seasonal accompaniments" },
            { name: "SHEEP CHEESE SELECTION", price: "", desc: "Artisan sheep cheeses / aged selection / seasonal accompaniments" },
        ]
    },
    {
        kicker: "TO FINISH",
        title: "DESSERTS",
        items: [
            { name: "CHEF'S SWEET SELECTION", price: "12 €", desc: "Daily creation" },
            { name: "FRESH FRUIT", price: "14 €", desc: "" },
        ]
    },
    {
        kicker: "MIDDAY DINING",
        title: "ELYSIUM LUNCH",
        items: [
            { name: "ELYSIUM LUNCH MENU", price: "39 €", desc: "Choose any two dishes from the selection below / dessert of the day / still water & coffee included" },
            { name: "SHRIMP COCKTAIL", price: "", desc: "Poached shrimp / classic cocktail sauce / lemon" },
            { name: "BURRATA", price: "", desc: "Creamy burrata / cherry tomatoes / 25-year aged balsamic" },
            { name: "BLACK BASS CARPACCIO", price: "", desc: "Black bass / lemon gel / citrus vinaigrette / olive oil" },
            { name: "PACCHERI ALLA VITTORIO", price: "", desc: "Paccheri / datterino / piccadilly / yellow cherry / cherry tomatoes / butter / Parmigiano Reggiano" },
            { name: "BLACK RISOTTO", price: "", desc: "Aged rice / Adriatic cuttlefish / olive oil" },
            { name: "GRILLED SQUID", price: "", desc: "Char-grilled squid / olive oil / parsley / lemon / salad" },
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
                                        {item.price && <span className={styles.price}>{item.price}</span>}
                                    </div>
                                    {item.desc && <p className={styles.desc}>{item.desc}</p>}
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
import styles from './MenuPageStyle.module.css';

const menuSections = [
    {
        kicker: "THE FIRST CUT",
        title: "COLD STARTERS",
        items: [
            { name: "THE FIRST IMPRESSION", price: "", desc: "Adriatic tasting selection / shrimp pâté / tuna tartare / beetroot tartare / seafood delicacies" },
            { name: "DALMATIAN PROSCIUTTO", price: "", desc: "Dry-aged Dalmatian prosciutto / olives / pickled onions / cherry tomatoes" },
            { name: "BURRATA & TRUFFLE", price: "", desc: "Creamy burrata / cherry tomatoes / 25-year aged balsamic / fresh truffle" },
            { name: "TUNA CEVICHE", price: "", desc: "Tuna / citrus / garlic / parsley / apple / capers / chili" },
            { name: "OCTOPUS SALAD", price: "", desc: "Tender Adriatic octopus / cherry tomatoes / olives / red onion / capers / parsley" },
            { name: "BLACK BASS CARPACCIO", price: "", desc: "Hama / white fish / citrus dressing / beetroot essence / olive oil" },
            { name: "SMOKED BEEF TARTARE", price: "", desc: "Beef tenderloin / house mayonnaise / capers / pickles / onion / garlic / parsley / Worcestershire / cognac" },
        ]
    },
    {
        kicker: "FROM THE KITCHEN",
        title: "SOUPS",
        items: [
            { name: "SOUP OF THE DAY", price: "", desc: "Daily seasonal soup / inspired by the Adriatic market" },
            { name: "GAZPACHO", price: "", desc: "Chilled gazpacho of four cherry tomato varieties / olive oil" },
        ]
    },
    {
        kicker: "FROM THE KITCHEN",
        title: "WARM APPETIZERS",
        items: [
            { name: "EMBERED FISH PACCHERI", price: "", desc: "Paccheri / charcoal-finished fish / shellfish reduction / cherry tomatoes" },
            { name: "BLACK RISOTTO", price: "", desc: "Aged rice / Adriatic cuttlefish / squid ink / Parmesan / parsley" },
            { name: "CHAMPAGNE & SAFFRON RISOTTO", price: "", desc: "Aged rice / Champagne / saffron / seared scallops / leek" },
            { name: "HOMEMADE PASTA \u201cNON PLUS ULTRA\u201d", price: "", desc: "Blue crab reduction / dried bottarga / sea hare caviar" },
        ]
    },
    {
        kicker: "FROM THE SEA",
        title: "FISH · CRUSTACEANS · SHELLFISH",
        items: [
            { name: "POOR MAN'S LOBSTER", price: "", desc: "Monkfish steak wrapped in leek / light béarnaise sauce / red grapefruit / light salad" },
            { name: "ADRIATIC SQUID", price: "", desc: "Adriatic squid / olive oil / garlic / parsley / lemon" },
            { name: "THE FIRST PEARL", price: "", desc: "Fresh oysters / lemon / microgreens" },
            { name: "OPEN-FIRE OYSTERS", price: "", desc: "Shiro miso butter / lime / sesame / microgreens" },
            { name: "ADRIATIC SHELLFISH SELECTION", price: "", desc: "Mussels / cockles / clams / garlic / parsley / breadcrumbs" },
            { name: "SCAMPI BUZARA", price: "", desc: "Adriatic scampi / white wine / tomato sauce / stock / garlic / parsley" },
            { name: "GRILLED SCAMPI", price: "", desc: "Adriatic scampi / olive oil / sea salt / lemon / parsley" },
            { name: "TOP QUALITY ADRIATIC FISH", price: "", desc: "Prepared upon guest's preference: brudet · gregada · grill" },
            { name: "THE GOLDEN CATCH", price: "", desc: "Adriatic lobster / olive oil / lemon / garlic / parsley" },
            { name: "LOBSTER GONE WILD", price: "", desc: "Lobster buzara style / cognac / tomato sauce / spaghetti" },
        ]
    },
    {
        kicker: "FROM THE LAND",
        title: "MEAT",
        items: [
            { name: "VELVET VEAL ROLL", price: "", desc: "Slow-roasted veal roulade / mustard / polenta / marinated red cabbage / rich demi-glace" },
            { name: "CHARRED RIBEYE", price: "", desc: "Ribeye / garlic confit / sweet potato purée / burnt onion purée / rich demi-glace" },
            { name: "FREESTYLE PAŠTICADA", price: "", desc: "Beef / pašticada sauce / gnocchi or homemade pasta / root vegetables / prunes / pancetta" },
            { name: "CRIMSON DUCK", price: "", desc: "Duck breast / raspberry jus / celery root purée" },
        ]
    },
    {
        kicker: "ON THE SIDE",
        title: "SIDE DISHES",
        items: [
            { name: "TOMATO CARPACCIO", price: "", desc: "Tomatoes / gazpacho / 25-year aged balsamic / olive oil / microgreens" },
            { name: "GRILLED VEGETABLES", price: "", desc: "Seasonal vegetables / olive oil / garlic / parsley" },
            { name: "TRUFFLE MASHED POTATOES", price: "", desc: "Potatoes / butter / milk or cream / tartufata" },
            { name: "SEASONAL SALAD", price: "", desc: "Seasonal salad mix / olive oil / vinegar or lemon" },
        ]
    },
    {
        kicker: "ARTISAN SELECTION",
        title: "CHEESE SELECTION",
        items: [
            { name: "GOAT CHEESE SELECTION", price: "", desc: "Artisan goat cheeses / fresh and aged / seasonal accompaniments" },
            { name: "SHEEP CHEESE SELECTION", price: "", desc: "Artisan sheep cheeses / aged selection / seasonal accompaniments" },
        ]
    },
    {
        kicker: "TO FINISH",
        title: "DESSERTS",
        items: [
            { name: "CHEF'S SWEET SELECTION", price: "", desc: "Daily creation" },
            { name: "FRESH FRUIT", price: "", desc: "Seasonal fruit / melted chocolate / whipped cream" },
        ]
    },
];

export default function Menu() {
    return (
        <div className={styles.page}>
            <div className="pageBanner pageBanner--menu">
                <img
                    src="/images/home/elysiumLogo.webp"
                    alt="Elysium Logo"
                    className="pageBannerLogo"
                />
                <div className="pageBannerContent">
                    <p className="pageBannerKicker">FROM OUR KITCHEN</p>
                    <h1 className="pageBannerTitle">Menu</h1>
                </div>
            </div>

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
        </div>
    );
}
import HeroSection from "@/app/components/HeroSection";
import "./AboutPageStyle.css";

export default function About() {
    return (
        <div>
            <HeroSection />
            <div>
                <section className="aboutWrap" aria-label="About Restaurant Elysium">
                    <p className="aboutKicker">EXPERIENCE HVAR'S HIDDEN GEM</p>
                    <h1 className="aboutTitle">About Restaurant Elysium</h1>

                    <div className="aboutBody">
                        <p>
                            Nestled in the heart of Hvar, <strong>Elysium</strong> is more than just a restaurant—it’s a celebration of island life, Mediterranean flavors, and timeless moments. From the lively town square just steps away to the endless blue of the Adriatic coastline, every visit to Elysium is infused with the energy and charm of this unique island.
                        </p>

                        <p>
                            Our philosophy is simple: great food starts with exceptional ingredients. That’s why we source fresh, local produce, seafood, and artisan products to craft each dish with care. Every plate tells a story of Hvar’s rich culinary traditions, reimagined in a contemporary style that complements our relaxed, welcoming atmosphere.
                        </p>

                        <p>
                            Whether it’s a perfectly grilled catch of the day, a vibrant seasonal salad, or a comforting pasta, each bite is designed to delight the senses. Savor thoughtfully crafted dishes and carefully selected wines in a setting that embodies the laid-back charm of island life.
                        </p>

                        <p>
                            Beyond the food, Elysium is a place to slow down and savor life. Enjoy a glass of wine as the sun sets over the harbor, gather with friends for an evening of laughter, or simply let the warm ambiance carry you into the night. Our team is passionate about creating experiences that linger long after the last bite—moments where flavors, views, and company come together seamlessly.
                        </p>

                        <p>
                            At Elysium, dining is not just about nourishment—it’s about connection, joy, and discovery. Whether you are a first-time visitor or a returning friend, we invite you to explore the tastes, sights, and spirit of Hvar in every visit. Step inside, unwind, and let us make every meal a memory to cherish.
                        </p>
                    </div>
                </section>
            </div>

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
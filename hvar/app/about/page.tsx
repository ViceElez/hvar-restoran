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
        </div>
    );
}
import HeroSection from "@/app/components/HeroSection";
import "./AboutPageStyle.css";

export default function About() {
  return (
    <div>
        <HeroSection />
        <div>
            <section className="aboutWrap" aria-label="About Restaurant Gariful">
                <p className="aboutKicker">EXCLUSIVE FISH RESTAURANT</p>
                <h1 className="aboutTitle">About Restaurant Gariful</h1>

                <div className="aboutBody">
                    <p>
                        “Gariful” restaurant is situated on the sunniest island of the Croatian coast, at the very waterfront
                        of the town of Hvar, where the most luxurious yachts in the world are aligned next to each other.
                        Thanks to its excellent position, exceptional specialties and a rich wine card, every guest can enjoy
                        the stunning view, great atmosphere and the unique gastronomic pleasures of this restaurant.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sit amet metus porta
                        tincidunt. Curabitur at risus ac neque lobortis tincidunt. Aenean at pharetra orci. Sed sit amet nibh
                        non risus viverra finibus.
                    </p>

                    <p>
                        This restaurant, with a pretty common name, has a much deeper meaning for its owner. Namely,
                        “Gariful” in the Dalmatian dialect means a carnation, a flower of reconciliation which symbolizes
                        admiration, respect and deep emotions.
                    </p>

                    <p>
                        What makes this restaurant distinctive from the others is the always fresh fish in sufficient quantities.
                        The restaurant owns small fishing boats which set sail with their fishermen every day at dawn.
                    </p>

                    <p>
                        This restaurant, with a pretty common name, has a much deeper meaning for its owner. Namely,
                        “Gariful” in the Dalmatian dialect means a carnation, a flower of reconciliation which symbolizes
                        admiration, respect and deep emotions.
                    </p>

                    <p>
                        What makes this restaurant distinctive from the others is the always fresh fish in sufficient quantities.
                        The restaurant owns small fishing boats which set sail with their fishermen every day at dawn.
                    </p>

                    <p>
                        This restaurant, with a pretty common name, has a much deeper meaning for its owner. Namely,
                        “Gariful” in the Dalmatian dialect means a carnation, a flower of reconciliation which symbolizes
                        admiration, respect and deep emotions.
                    </p>

                    <p>
                        What makes this restaurant distinctive from the others is the always fresh fish in sufficient quantities.
                        The restaurant owns small fishing boats which set sail with their fishermen every day at dawn.
                    </p>

                    <p>
                        This restaurant, with a pretty common name, has a much deeper meaning for its owner. Namely,
                        “Gariful” in the Dalmatian dialect means a carnation, a flower of reconciliation which symbolizes
                        admiration, respect and deep emotions.
                    </p>

                    <p>
                        What makes this restaurant distinctive from the others is the always fresh fish in sufficient quantities.
                        The restaurant owns small fishing boats which set sail with their fishermen every day at dawn.
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
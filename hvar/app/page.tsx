import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SplitSection from './components/SplitSection';
import SpecialtiesSection from './components/SpecialtiesSection';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#14110f'}}>
            <HeroSection />
            <AboutSection />
            <SplitSection />
            <SpecialtiesSection />
        </main>
    );
}
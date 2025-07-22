import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <section>
                <HeroSection />
                <FeatureSection />
            </section>
        </>
    );
}

export default App;

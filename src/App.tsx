import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/Navbar";
import HighlightOverlay from "./components/HighlightOverlay";

function App() {
    return (
        <>
            <Navbar />
            <section>
                <HeroSection />
                <HighlightOverlay />
                <FeatureSection />
            </section>
        </>
    );
}

export default App;

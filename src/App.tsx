import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HowItWorksSection from "./components/HowItWorksSection";
import GetAppSection from "./components/GetAppSection.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.tsx";
import HighlightOverlay from "./components/HighlightOverlay";

function App() {
    return (
        <>
            <Navbar />
            <section>
                <HeroSection />
                <HighlightOverlay />
                <FeatureSection />
                <HowItWorksSection />
                <GetAppSection />
                <Footer />
            </section>
        </>
    );
}

export default App;

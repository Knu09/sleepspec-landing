import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HowItWorksSection from "./components/HowItWorksSection";
import GetAppSection from "./components/GetAppSection.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.tsx";
import HighlightOverlay from "./components/HighlightOverlay";
import TeamSection from "./components/TeamSection.tsx";

function App() {
    return (
        <>
            <Navbar />
            <section>
                <HeroSection />
                <HighlightOverlay />
                <FeatureSection />
                <HowItWorksSection />
                <TeamSection />
                <GetAppSection />
                <Footer />
            </section>
        </>
    );
}

export default App;

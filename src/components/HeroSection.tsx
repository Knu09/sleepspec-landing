import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const HeroSection = () => {
    return (
        <div className="relative container mx-auto py-40">
            <div className="flex flex-col text-center gap-14 mx-auto xl:w-8/12 z-30">
                <div>
                    <h1>
                        Detect Sleep Deprivation Through Your Voice with{" "}
                        <span className="bg-[linear-gradient(to_right,_theme(colors.primaryBlue)_90%,_theme(colors.darkBg)_100%)] text-transparent bg-clip-text">
                            SleepSpec
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="mx-auto md:w-9/12">
                        <p>
                            Powered by AI and advanced voice analysis that
                            detects signs of mild sleep deprivation using just
                            your voice.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-4">
                        <PrimaryButton text="Download APK" href="#" />
                        <SecondaryButton text="Learn More" href="#" />
                    </div>
                </div>
            </div>
            {/* Glowing Ellipse */}
            <div className="absolute z-0 left-[50%] top-[230px] w-64 h-64 bg-primary opacity-25 blur-[80px]"></div>
            <div className="absolute z-0 left-[25%] top-[300px] w-64 h-64 bg-primaryBlue opacity-25 blur-[80px]"></div>
            <div className="absolute z-0 right-0 top-0 w-40 h-40 bg-[#3AC8D9] opacity-15 blur-[60px]"></div>
        </div>
    );
};

export default HeroSection;

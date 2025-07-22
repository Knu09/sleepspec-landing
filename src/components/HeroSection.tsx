import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const HeroSection = () => {
    return (
        <div className="relative container mx-auto py-40">
            <div className="flex flex-col text-center gap-14 mx-auto xl:w-8/12 z-30">
                <div>
                    <h1 className="font-publicsans font-bold text-6xl leading-tight">
                        Detect Sleep Deprivation Through Your Voice with{" "}
                        <span className="bg-[linear-gradient(to_right,_theme(colors.primaryBlue)_90%,_theme(colors.darkBg)_100%)] text-transparent bg-clip-text">
                            SleepSpec
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="mx-auto md:w-9/12">
                        <p className="font-publicsans font-light text-xl text-secondary opacity-80">
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
            {/* Glowing light */}
            <div className="absolute z-0 left-2/4 top-[100px] w-72 h-72 bg-primary opacity-25 blur-[80px]"></div>
            <div className="absolute z-0 left-[30%] top-[200px] w-72 h-72 bg-primaryBlue opacity-25 blur-[80px]"></div>
        </div>
    );
};

export default HeroSection;

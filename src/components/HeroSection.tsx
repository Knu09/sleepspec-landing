import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import androidIcon from "../assets/android-icon.png";

const HeroSection = () => {
    return (
        <div
            id="hero"
            className="relative @container h-dvh min-[400px]:h-auto mx-auto pt-10 pb-32 sm:py-40 md:pb-72 px-2 sm:px-4"
        >
            <div className="flex flex-col text-center gap-[clamp(28px,5vw,56px)] mx-auto xl:w-8/12 z-30">
                <div>
                    <h1 className="text-start sm:text-center tracking-tighter md:tracking-normal">
                        Detect Sleep Deprivation Through Your Voice with{" "}
                        <span className="bg-[linear-gradient(to_right,_theme(colors.primaryBlue)_0%,_theme(colors.primaryCyan)_50%,_theme(colors.primary)_100%)] text-transparent bg-clip-text">
                            SleepSpec
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="mx-auto w-full md:w-9/12">
                        <p className="text-start sm:text-center">
                            Powered by AI and advanced voice analysis that
                            detects signs of mild sleep deprivation using just
                            your voice.
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                        <PrimaryButton
                            text="Download APK"
                            href="#"
                            img={androidIcon}
                        />
                        <SecondaryButton text="Learn More" href="#feature" />
                    </div>
                </div>
            </div>
            {/* Glowing Ellipse */}
            <div className="hidden md:flex absolute z-0 left-[50%] top-[230px] w-64 h-64 bg-primary opacity-25 blur-[80px]"></div>
            <div className="absolute z-0 left-[25%] top-[300px] w-40 h-40 sm:w-64 sm:h-64 bg-primaryBlue opacity-25 blur-[80px]"></div>
            <div className="absolute z-0 right-0 top-0 w-40 h-40 bg-primaryCyan opacity-15 blur-[60px]"></div>
        </div>
    );
};

export default HeroSection;

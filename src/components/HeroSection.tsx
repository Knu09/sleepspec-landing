const HeroSection = () => {
    return (
        <div className="container mx-auto py-40">
            <div className="flex flex-col text-center gap-10 mx-auto md:w-8/12 xl:w-7/12">
                <div>
                    <h1 className="font-publicsans font-bold text-5xl">
                        Detect Sleep Deprivation Through Your Voice with{" "}
                        <span>SleepSpec</span>
                    </h1>
                </div>
                <div>
                    <div>
                        <p className="font-publicsans font-light text-xl text-secondary opacity-80">
                            Powered by AI and advanced voice analysis that
                            detects signs of mild sleep deprivation using just
                            your voice.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

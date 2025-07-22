const FeatureSection = () => {
    return (
        <div className="bg-white text-darkBg">
            <div className="container mx-auto py-20">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-6">
                        <div className="rounded-full px-6 py-3 w-fit bg-primaryBlue/25">
                            <span className="font-poppins text-primaryBlue font-medium">
                                FEATURE
                            </span>
                        </div>
                        <div className="flex flex-col w-8/12 gap-3">
                            <h1>Unlock the Power of SleepSpec Technology</h1>
                            <p className="text-darkBg">
                                Experience an efficient sleep health check with
                                advanced voice analysis, accurate results, and
                                convenient mobile accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;

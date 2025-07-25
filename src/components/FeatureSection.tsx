import { featItems } from "../constants/constant";

const FeatureSection = () => {
    return (
        <div id="feature" className="bg-white text-darkBg px-5">
            <div className="container mx-auto py-20">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="rounded-full px-5 py-2 w-fit bg-primaryBlue/25">
                            <span className="font-poppins text-primaryBlue font-medium">
                                FEATURE
                            </span>
                        </div>
                        <div className="flex flex-col w-8/12 gap-3">
                            <h1 className="leading-none">
                                Unlock the Power of SleepSpec Technology
                            </h1>
                            <p className="text-darkBg">
                                Experience an efficient sleep health check with
                                advanced voice analysis, accurate results, and
                                convenient mobile accessibility.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-18 gap-y-6 gap-x-16">
                        {featItems.map((item, idx) => (
                            <div
                                className="rounded-xl pt-4 pb-12 px-4 bg-white hover:bg-divider/5 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all ease-in-out delay-150 cursor-default"
                                key={idx}
                            >
                                <img src={item.icon} alt={item.alt} />
                                <div className="mt-4 flex flex-col gap-3">
                                    <h2>{item.heading}</h2>
                                    <p className="text-darkBg">
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;

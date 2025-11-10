import transparentLogo from "../assets/svg/transparent_logo_sleepspec_.svg";
import appEntriesMask from "../assets/phone_entries/sleepspec_entries_mask (updated).png";
import androidIcon from "../assets/android-icon.png";

const GetAppSection = () => {
    return (
        <div id="get-the-app" className="px-1 sm:px-5 bg-white">
            <div className="container mx-auto py-32 pb-16">
                <div className="relative flex flex-row bg-darkBg rounded-3xl">
                    <div className="p-6 sm:p-10 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 bg-darkBg rounded-3xl md:rounded-r-none z-20 bg-opacity-80 backdrop-blur-[2px]">
                        <div className="absolute -top-6 -left-5">
                            <img
                                className="w-[250px] sm:w-fit"
                                src={transparentLogo}
                                alt="sleepspec-logo"
                            />
                        </div>
                        <div className="flex flex-col gap-10 py-14">
                            <div className="flex flex-col gap-8 text-start">
                                <h3>
                                    Your Personal Sleep Checker, Always Within
                                    Reach
                                </h3>
                                <p>
                                    Download the SleepSpec mobile app and take
                                    control of your sleep health. With just a
                                    few recording, get accurate insights into
                                    mild sleep deprivation — anytime, anywhere.
                                </p>
                            </div>
                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6 items-center sm:items-start">
                                <a
                                    href="https://github.com/Knu09/SleepSpec/releases/download/1.0.0/SleepSpec-v1.0.0.apk"
                                    className="z-20 flex flex-row items-center gap-4 px-10 py-4 rounded-full text-center"
                                    id="primary-btn"
                                    type="button"
                                >
                                    {/* <i className="fa-brands fa-android text-3xl"></i> */}
                                    <img
                                        src={androidIcon}
                                        alt="android-icon"
                                        width={30}
                                    />
                                    <div className="flex flex-col text-lg font-publicsans leading-tight">
                                        <span>Download for</span>
                                        <span className="font-bold">
                                            Android
                                        </span>
                                    </div>
                                </a>
                                <div className="relative">
                                    <button
                                        className="z-20 flex items-center gap-4 px-10 py-4 rounded-full cursor-not-allowed shadow-[3px_4px_10px_rgba(0,0,0,0.25)]"
                                        id="secondary-btn"
                                    >
                                        <i className="fa-brands fa-apple text-4xl" />

                                        <div className="flex flex-col text-lg font-publicsans leading-tight">
                                            <span>Download for</span>
                                            <span className="font-bold">
                                                iOS
                                            </span>
                                        </div>
                                    </button>

                                    <div
                                        className="absolute -bottom-3 -right-4
                                        bg-[#F7083B] text-white shadow-xl px-4 py-2 cursor-not-allowed rounded-full
                                        font-publicsans font-bold text-sm animate-pulse"
                                    >
                                        Coming&nbsp;Soon
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex absolute inset-y-0 right-0">
                        <img
                            src={appEntriesMask}
                            alt="sleepspec-entries"
                            className="h-full object-cover rounded-r-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppSection;

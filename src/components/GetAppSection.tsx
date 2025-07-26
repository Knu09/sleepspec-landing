import transparentLogo from "../assets/svg/transparent_logo_sleepspec_.svg";
import appEntriesMask from "../assets/phone_entries/sleepspec_entries_mask.png";
import androidIcon from "../assets/android-icon.png";
import comingSoon from "../assets/coming-soon-banner.png";
const GetAppSection = () => {
    return (
        <div id="get-the-app" className="px-5 bg-white">
            <div className="container mx-auto py-20">
                <div className="relative p-10 flex flex-col lg:flex-row bg-darkBg rounded-3xl">
                    <div className="absolute -top-6 -left-5">
                        <img src={transparentLogo} alt="sleepspec-logo" />
                    </div>
                    <div className="flex flex-col gap-10 py-14 w-6/12">
                        <div className="flex flex-col gap-8">
                            <h3>
                                Your Personal Sleep Checker, Always Within Reach
                            </h3>
                            <p>
                                Download the SleepSpec mobile app and take
                                control of your sleep health. With just a few
                                recording, get accurate insights into mild sleep
                                deprivation — anytime, anywhere.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <a
                                href="#"
                                className="z-30 flex flex-row items-center gap-4 px-10 py-4 rounded-full text-center w-fit"
                                id="primary-btn"
                                type="button"
                            >
                                <i className="fa-brands fa-android text-4xl"></i>
                                <div className="flex flex-col text-lg font-publicsans leading-tight">
                                    <span>Download for</span>
                                    <span className="font-bold">Android</span>
                                </div>
                            </a>
                            <div className="relative">
                                <button
                                    className="z-30 flex items-center gap-4 px-10 py-3 rounded-full cursor-not-allowed h-full opacity-60"
                                    id="secondary-btn"
                                >
                                    <i className="fa-brands fa-apple text-4xl" />

                                    <div className="flex flex-col text-lg font-publicsans leading-tight">
                                        <span>Download for</span>
                                        <span className="font-bold">iOS</span>
                                    </div>
                                </button>

                                <div
                                    className="absolute -top-1 -right-4
                                    bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-xl px-4 py-1 cursor-not-allowed rounded-full
                                    font-publicsans font-bold text-sm
                                    rotate-12 animate-pulse"
                                >
                                    Coming&nbsp;Soon
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex xl:absolute inset-y-0 right-0">
                        <img
                            src={appEntriesMask}
                            alt="sleepspec-entries"
                            className="h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppSection;

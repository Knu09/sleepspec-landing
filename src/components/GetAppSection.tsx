import transparentLogo from "../assets/svg/transparent_logo_sleepspec_.svg";
import appEntriesMask from "../assets/phone_entries/sleepspec_entries_mask.png";
import androidIcon from "../assets/android-icon.png";
const GetAppSection = () => {
    return (
        <div id="get-the-app" className="px-5 bg-white">
            <div className="container mx-auto py-20">
                <div className="relative p-10 flex flex-col md:flex-row bg-darkBg rounded-3xl">
                    <div className="absolute -top-6 -left-5">
                        <img src={transparentLogo} alt="sleepspec-logo" />
                    </div>
                    <div className="flex flex-col gap-10 py-14 w-6/12">
                        <div className="flex flex-col gap-8">
                            <h3>
                                Your Personal Sleep Check, Always Within Reach
                            </h3>
                            <p>
                                Download the SleepSpec mobile app and take
                                control of your sleep health. With just a few
                                recording, get accurate insights into mild sleep
                                deprivation — anytime, anywhere.
                            </p>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="z-30 flex flex-row items-center gap-4 px-10 py-3 rounded-full w-fit"
                                id="primary-btn"
                                type="button"
                            >
                                <img src={androidIcon} alt="android" />
                                <div className="flex flex-col text-lg font-publicsans leading-tight">
                                    <span>Download for</span>
                                    <span className="font-bold">Android</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0">
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

import sleepspecLogo from "../assets/svg/black_white_logo_sleepspec.svg";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className="bg-darkBg py-16">
            <div className="container mx-auto px-8 flex flex-col">
                <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center gap-3">
                            <img src={sleepspecLogo} alt="sleepspec" />
                            <span className="text-white font-poppins text-3xl font-medium">
                                SleepSpec
                            </span>
                        </div>
                        <div className="max-w-[500px]">
                            <p>
                                An intelligent, voice-based companion designed
                                to detect your sleep health status with
                                confidence.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="footer-header">Stay Updated</h4>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="font-publicsans text-xl bg-secondary/10 px-8 sm:pr-16 py-4 rounded-full border border-white/20 outline-none focus:outline focus:outline-2 focus:outline-white/50 w-full"
                                    placeholder="Enter your Email"
                                    type="text"
                                />
                                <PrimaryButton text="Subscribe" href="#" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <div className="w-full h-[1px] bg-white/25 my-10"></div>
                <div className="flex flex-col md:flex-row justify-between items-center sm:items-start gap-8">
                    <div className="flex flex-col sm:flex-row gap-3 order-2 md:order-1">
                        <span className="bg-white/10 p-4 font-medium text-lg rounded-full h-fit w-fit">
                            © {currentYear} SleepSpec
                        </span>
                        <span className="bg-white/10 p-4 font-medium text-lg rounded-full h-fit w-fit">
                            All Rights Reserved
                        </span>
                    </div>
                    <div className="flex flex-row order-1 md:order-2">
                        <div className="flex flex-col gap-4 text-center sm:text-start">
                            <span className="footer-header">Contact Info</span>

                            <a href="#" className="flex items-center gap-3">
                                <i className="fa-regular fa-envelope text-xl"></i>
                                <p>support@sleepspec.site</p>
                            </a>
                            <div className="flex items-center gap-3">
                                <i className="fa-regular fa-compass text-xl"></i>
                                <p>Bacolod City, Philippines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

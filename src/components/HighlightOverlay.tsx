import iphoneFrame from "../assets/phone_entries/iphone_frame.png";
import homePhone from "../assets/phone_entries/sleepspec_interface_entry_02.jpg";
import languagePhone from "../assets/phone_entries/sleepspec_interface_entry_01.jpg";
import recordPhone from "../assets/phone_entries/sleepspec_interface_entry_03.jpg";

const HighlightOverlay = () => {
    return (
        <div className="hidden md:flex bg-white px-5">
            <div className="relative container mx-auto h-96">
                <div className="absolute top-[15%] left-0 xl:translate-x-1/2 -translate-y-1/2 bg-transparent z-10 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-50">
                    <img src={iphoneFrame} alt="iphone-frame" />
                    <img
                        src={recordPhone}
                        alt="home-phone"
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-2xl shadow-2xl"
                    />
                </div>
                <div className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-transparent z-20 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-50">
                    <img src={iphoneFrame} alt="iphone-frame" className="" />
                    <img
                        src={homePhone}
                        alt="home-phone"
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-2xl shadow-2xl"
                    />
                </div>

                <div className="absolute top-[15%] right-0 xl:-translate-x-1/2 -translate-y-1/2 bg-transparent z-10 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-50">
                    <img src={iphoneFrame} alt="iphone-frame" className="" />
                    <img
                        src={languagePhone}
                        alt="home-phone"
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HighlightOverlay;

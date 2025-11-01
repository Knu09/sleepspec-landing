import homePhone from "../assets/phone_entries/sleepspec_interface_entry_02 (updated).png";
import languagePhone from "../assets/phone_entries/sleepspec_interface_entry_01.png";
import recordPhone from "../assets/phone_entries/sleepspec_interface_entry_03 (updated).png";

const HighlightOverlay = () => {
    const SIZE = 320;
    return (
        <div className="hidden md:flex bg-white px-5">
            <div className="relative container mx-auto h-96">
                <div
                    className="absolute top-[15%] left-0 xl:translate-x-1/2 -translate-y-1/2 bg-transparent z-10 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40 group"
                    style={{ width: SIZE }}
                >
                    <img src={recordPhone} alt="record-phone" />
                    <div className="absolute top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-1/2 -z-10 transition-all ease-in-out delay-100 duration-500 rounded-[45px] shadow-sm group-hover:shadow-2xl w-[97%] h-[97%]"></div>
                </div>
                <div
                    className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-transparent z-20 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40 group"
                    style={{ width: SIZE }}
                >
                    <img src={homePhone} alt="home-phone" />
                    <div className="absolute top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-1/2 -z-10 transition-all ease-in-out delay-100 duration-500 rounded-[45px] shadow-sm group-hover:shadow-2xl w-[97%] h-[97%]"></div>
                </div>

                <div
                    className="absolute top-[15%] right-0 xl:-translate-x-1/2 -translate-y-1/2 bg-transparent z-10 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40 group"
                    style={{ width: SIZE }}
                >
                    <img src={languagePhone} alt="language-phone" />
                    <div className="absolute top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-1/2 -z-10 transition-all ease-in-out delay-100 duration-500 rounded-[45px] shadow-sm group-hover:shadow-2xl w-[97%] h-[97%]"></div>
                </div>
            </div>
        </div>
    );
};

export default HighlightOverlay;

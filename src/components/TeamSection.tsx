import _16kHzLogo from "../assets/svg/16KHz Labs.svg";
import { teamItems } from "../constants/constant";

const TeamSection = () => {
    return (
        <div id="team" className="px-1 sm:px-5 bg-white text-darkBg">
            <div className="container mx-auto py-32">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-6 text-center sm:text-start items-center sm:items-start">
                        <div className="rounded-full px-5 py-2 w-fit bg-primaryBlue/25">
                            <span className="font-poppins text-primaryBlue font-medium">
                                MEET THE TEAM
                            </span>
                        </div>
                        <div className="flex flex-col w-full sm:w-8/12 gap-3">
                            <h1 className="leading-none">
                                Driven by Innovation.
                                <br />
                                United by Purpose.
                            </h1>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-darkBg/25 my-10"></div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row px-3 select-none">
                            <div className="md:min-w-[200px]">
                                <p className="text-darkBg leading-none">
                                    we are the
                                </p>
                                <img
                                    src={_16kHzLogo}
                                    alt="16kHz Labs"
                                    className="w-fit"
                                />
                            </div>
                            <p className="text-darkBg">
                                A computer science students in University of
                                Negros Occidental - Recoletos. Introduces
                                SleepSpec a research-based mobile application
                                developed as part of our college thesis —
                                combining artificial intelligence and voice
                                analysis to address the growing concern of{" "}
                                <span className="bg-[linear-gradient(to_right,_#00B935_0%,_#F8C408_100%)] text-transparent bg-clip-text font-bold">
                                    Sustainable Development Goals 3
                                </span>
                                , also known as "Good Health and Well-being".
                                <br />
                                <br />
                                With a shared vision to turn science into
                                action, we’ve built a system that allow users to
                                gain insights in their sleep health status,
                                using just their voice.
                            </p>
                        </div>

                        <div className="flex flex-row flex-wrap justify-center px-8 gap-8 mt-6">
                            {teamItems.map((item, idx) => (
                                <div className="relative group rounded-xl rounded-tl-none overflow-hidden shadow-lg border border-1 border-darkBg/20">
                                    <div
                                        key={idx}
                                        className="flex flex-col gap-4 items-center pb-4"
                                    >
                                        <div className="w-[250px] h-[250px] bg-darkBg rounded-t-xl rounded-tl-none aspect-square m-1">
                                            <img
                                                className="w-full h-full rounded-xl object-cover"
                                                src={item.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <h4 className="border border-1 border-darkBg/50 rounded-full py-2 px-4">
                                                {item.name}
                                            </h4>
                                            <span className="font-light">
                                                {item.role}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 right-0 top-[110%] h-full bg-darkBg/80 rounded-xl rounded-tl-none transition-all delay-150 duration-500 ease-in-out backdrop-blur-sm blur-lg group-hover:top-0 group-hover:blur-none">
                                        <div className="flex flex-col h-full justify-between p-6">
                                            <div className="">
                                                <div className="flex flex-row gap-3">
                                                    {item.social.map(
                                                        (item, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={item.link}
                                                                target="_blank"
                                                                className="flex rounded-full bg-secondary w-8 h-8 p-2 items-center justify-center hover:opacity-80"
                                                            >
                                                                <i
                                                                    className={
                                                                        item.icon
                                                                    }
                                                                ></i>
                                                            </a>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 text-center text-secondary">
                                                <h4 className="border border-1 border-white/50 rounded-full py-2 px-4">
                                                    {item.name}
                                                </h4>
                                                <span className="font-light">
                                                    {item.course}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="absolute left-0 right-0 top-0 bottom-0 h-full rounded-xl rounded-tl-none transition-all delay-150 duration-500 ease-in-out border border-1 border-darkBg/50"></div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;

import languageSelection from "../assets/phone_entries/sleepspec_interface_entry_01.png";
import recordEntry from "../assets/phone_entries/sleepspec_interface_entry_03 (updated).png";
import processingEntry from "../assets/phone_entries/sleepspec-processing-entry.png";

import analysis_entry_01 from "../assets/phone_entries/sleepspec_analysis_entry_01.png";
import analysis_entry_02 from "../assets/phone_entries/sleepspec_analysis_entry_02.png";

import feature_entry_01 from "../assets/phone_entries/sleepspec_feature_interface_entry_05.png";
import feature_entry_02 from "../assets/phone_entries/sleepspec_feature_interface_entry_06.png";

import recordingLangOverlay from "../assets/phone_entries/recording_overlay.png";

const HowItWorksSection = () => {
    return (
        <div id="how-it-works" className="relative px-1 sm:px-5">
            <div className="container mx-auto py-20">
                <div className="flex flex-col gap-10">
                    <div className="relative mx-auto flex flex-col items-center gap-6 max-w-[950px]">
                        {/* Glowing Ellipse */}
                        <div className="hidden md:flex absolute z-0 left-[60%] top-[150px] w-64 h-64 bg-primary opacity-25 blur-[80px]"></div>
                        <div className="absolute z-0 left-0 -top-20 w-40 h-40 sm:w-64 sm:h-64 bg-primaryBlue opacity-25 blur-[80px]"></div>
                        <div className="rounded-full px-5 py-2 w-fit bg-primaryBlue/25">
                            <span className="font-poppins text-primaryBlue font-medium">
                                HOW IT WORKS
                            </span>
                        </div>
                        <div className="flex flex-col w-full lg:w-[950px] gap-3 text-center">
                            <h1 className="leading-none">
                                From Voice to Insight in Minutes
                            </h1>
                            <p>
                                Simplifies sleep health screening into just a
                                few guided steps. From voice capture to
                                AI-driven analysis. No wearable or long surveys
                                needed.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-8">
                        {/* Entry 1 */}
                        <div className="flex flex-col md:flex-row gap-6 text-secondary rounded-2xl py-7 w-full">
                            <div className="flex flex-row justify-center md:justify-end items-center w-full md:w-6/12">
                                <div className="relative flex flex-col items-center md:items-start gap-4 text-center md:text-start">
                                    {/* Glowing Ellipse */}
                                    <div className="absolute z-0 right-8 top-10 w-40 h-40 bg-primaryCyan opacity-15 blur-[60px]"></div>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex bg-secondary rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                            <span className="font-poppins font-semibold text-2xl text-darkBg">
                                                1
                                            </span>
                                        </div>
                                        <h2>Choose Your Language</h2>
                                    </div>
                                    <div className="max-w-[450px]">
                                        <p className="text-secondary">
                                            Select your preferred script
                                            language (English or Filipino) to
                                            read from before recording begins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center text-secondary p-4 rounded-xl gap-3 w-full md:w-6/12">
                                <div className="relative">
                                    {/* Recording Language Selector Overlay */}
                                    <div className="hidden sm:flex absolute z-40 top-1/2 left-full -translate-x-1/2 -translate-y-1/6 w-full">
                                        <img
                                            className="rounded-lg shadow-lg"
                                            src={recordingLangOverlay}
                                            alt="record-lang-overlay"
                                        />
                                    </div>
                                    {/* Background white div */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                    {/* Foreground image */}
                                    <img
                                        src={languageSelection}
                                        alt="language_selection"
                                        className="relative z-30 rounded-lg max-w-[250px] lg:max-w-[300px]"
                                    />
                                </div>
                                {/* Entry backdrop */}
                                <div className="absolute bottom-20 z-0 w-full max-w-[350px] lg:max-w-[500px] h-[280px] lg:h-[350px] bg-[linear-gradient(145deg,_theme(colors.primaryBlue)_0%,_theme(colors.primary)_50%,_theme(colors.primaryCyan)_100%)] rounded-2xl"></div>
                            </div>
                        </div>
                        {/* Entry 2 */}
                        <div className="flex flex-col md:flex-row gap-6 text-secondary rounded-2xl py-7 w-full">
                            <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-start gap-4 w-full md:w-6/12 order-1 md:order-2">
                                {/* Glowing Ellipse */}
                                <div className="absolute z-0 right-[20%] top-10 w-64 h-64 bg-primary opacity-25 blur-[80px]"></div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex bg-secondary rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                        <span className="font-poppins font-semibold text-2xl text-darkBg">
                                            2
                                        </span>
                                    </div>
                                    <h2>Record Your Voice</h2>
                                </div>
                                <div className="max-w-[450px]">
                                    <p className="text-secondary">
                                        Read the displayed script naturally in a
                                        quiet environment. The system requires
                                        at least 15 seconds to ensure accurate
                                        analysis. Once done, you can hold the
                                        microphone button to stop and proceed.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center text-secondary p-4 rounded-xl gap-3 w-full md:w-6/12 order-2 md:order-1">
                                <div className="relative">
                                    {/* Background white div */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                    {/* Foreground image */}
                                    <img
                                        src={recordEntry}
                                        alt="language_selection"
                                        className="relative z-30 rounded-lg max-w-[250px] lg:max-w-[300px]"
                                    />
                                </div>

                                {/* Entry backdrop */}
                                <div className="absolute bottom-20 z-0 w-full max-w-[350px] lg:max-w-[500px] h-[280px] lg:h-[350px] bg-[linear-gradient(145deg,_theme(colors.primaryBlue)_0%,_theme(colors.primary)_50%,_theme(colors.primaryCyan)_100%)] rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Entry 3 */}
                        <div className="flex flex-col md:flex-row gap-6 text-secondary rounded-2xl py-7 w-full">
                            <div className="flex flex-row justify-center md:justify-end items-center w-full md:w-6/12">
                                <div className="relative flex flex-col items-center md:items-start gap-4 text-center md:text-start">
                                    {/* Glowing Ellipse */}
                                    <div className="absolute z-0 left-0 top-20 w-40 h-40 bg-primaryCyan opacity-15 blur-[60px]"></div>
                                    <div className="hidden md:flex absolute z-0 left-[80%] bottom-20 w-40 h-40 sm:w-64 sm:h-64 bg-primaryBlue opacity-25 blur-[80px]"></div>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex bg-secondary rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                            <span className="font-poppins font-semibold text-2xl text-darkBg">
                                                3
                                            </span>
                                        </div>
                                        <h2>Audio Processing</h2>
                                    </div>
                                    <div className="max-w-[450px]">
                                        <p className="text-secondary">
                                            After submitting your recording, the
                                            system will display a processing
                                            interface—visually indicating that
                                            your voice is being analyzed. No
                                            further input is needed during this
                                            step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center text-secondary p-4 rounded-xl gap-3 w-full md:w-6/12">
                                <div className="relative">
                                    {/* Background white div */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                    {/* Foreground image */}
                                    <img
                                        src={processingEntry}
                                        alt="language_selection"
                                        className="relative z-30 rounded-lg max-w-[250px] lg:max-w-[300px]"
                                    />
                                </div>

                                {/* Entry backdrop */}
                                <div className="absolute bottom-20 z-0 w-full max-w-[350px] lg:max-w-[500px] h-[280px] lg:h-[350px] bg-[linear-gradient(145deg,_theme(colors.primaryBlue)_0%,_theme(colors.primary)_50%,_theme(colors.primaryCyan)_100%)] rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Entry 4 */}
                        <div className="flex flex-col md:flex-row gap-6 text-secondary rounded-2xl py-7 w-full">
                            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start gap-4 w-full md:w-6/12 order-1 md:order-2">
                                <div className="flex gap-3 items-center">
                                    <div className="flex bg-secondary rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                        <span className="font-poppins font-semibold text-2xl text-darkBg">
                                            4
                                        </span>
                                    </div>
                                    <h2>Receive Your Results & Insights</h2>
                                </div>
                                <div className="max-w-[450px]">
                                    <p className="text-secondary">
                                        In approximately 1-2 minutes, receive a
                                        detailed classification and personalized
                                        recommendations based on your result.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center text-secondary p-4 rounded-xl gap-3 w-full md:w-6/12 order-2 md:order-1 min-h-[610px]">
                                {/* Entry backdrop */}
                                <div className="absolute bottom-20 z-0 w-full max-w-[350px] lg:max-w-[500px] h-[280px] lg:h-[350px] bg-[linear-gradient(145deg,_theme(colors.primaryBlue)_0%,_theme(colors.primary)_50%,_theme(colors.primaryCyan)_100%)] rounded-2xl">
                                    <div className="absolute left-1 md:left-5 bottom-1 z-0 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40">
                                        {/* Background white div */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                        {/* Foreground image */}
                                        <img
                                            src={analysis_entry_02}
                                            alt="language_selection"
                                            className="relative z-30 rounded-lg max-w-[240px] lg:max-w-[280px]"
                                        />
                                    </div>
                                    <div className="absolute right-1 sm:right-5 -bottom-10 z-30 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40">
                                        {/* Background white div */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                        {/* Foreground image */}
                                        <img
                                            src={analysis_entry_01}
                                            alt="language_selection"
                                            className="relative z-30 rounded-lg max-w-[240px] lg:max-w-[280px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 5 */}
                        <div className="flex flex-col md:flex-row gap-6 text-secondary rounded-2xl py-7 w-full">
                            <div className="flex flex-row justify-center md:justify-end items-center w-full md:w-6/12 md:min-h-[610px]">
                                <div className="relative flex flex-col items-center md:items-start gap-4 text-center md:text-start">
                                    {/* Glowing Ellipse */}
                                    <div className="absolute z-0 left-0 bottom-20 w-40 h-40 bg-primaryCyan opacity-15 blur-[60px]"></div>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex bg-secondary rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                            <span className="font-poppins font-semibold text-2xl text-darkBg">
                                                5
                                            </span>
                                        </div>
                                        <h2>Feature Extraction Preview</h2>
                                    </div>
                                    <div className="max-w-[450px]">
                                        <p className="text-secondary">
                                            Your voice is automatically
                                            processed into spectro-temporal
                                            modulation features, and you can
                                            freely preview the extracted
                                            patterns behind the analysis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col justify-center items-center text-secondary p-4 rounded-xl gap-3 w-full md:w-6/12 min-h-[610px]">
                                {/* Entry backdrop */}
                                <div className="absolute bottom-20 z-0 w-full max-w-[350px] lg:max-w-[500px] h-[280px] lg:h-[350px] bg-[linear-gradient(145deg,_theme(colors.primaryBlue)_0%,_theme(colors.primary)_50%,_theme(colors.primaryCyan)_100%)] rounded-2xl">
                                    <div className="absolute right-1 sm:right-5 bottom-1 z-0 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40">
                                        {/* Background white div */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                        {/* Foreground image */}
                                        <img
                                            src={feature_entry_01}
                                            alt="language_selection"
                                            className="relative z-30 rounded-lg max-w-[240px] lg:max-w-[280px]"
                                        />
                                    </div>

                                    <div className="absolute left-1 md:left-5 -bottom-10 z-30 transition-all ease-in-out delay-100 duration-500 hover:scale-105 hover:z-40">
                                        {/* Background white div */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45px] shadow-xl w-[96%] h-[97%] bg-white z-20"></div>

                                        {/* Foreground image */}
                                        <img
                                            src={feature_entry_02}
                                            alt="language_selection"
                                            className="relative z-30 rounded-lg max-w-[240px] lg:max-w-[280px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;

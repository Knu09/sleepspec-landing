import languageSelection from "../assets/phone_entries/speech_script_language_entry.jpg";
import recordEntry from "../assets/phone_entries/recording_entry.jpg";
import submitButtonEntry from "../assets/phone_entries/submit_button_entry.jpg";
import processEntry from "../assets/phone_entries/process_entry.jpg";
import entry_04 from "../assets/phone_entries/how_it_works_entry_04.jpg";
import entry_05 from "../assets/phone_entries/how_it_works_entry_05.jpg";

const HowItWorksSection = () => {
    return (
        <div id="how-it-works" className="px-5">
            <div className="container mx-auto py-20">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-center gap-6">
                        <div className="rounded-full px-5 py-2 w-fit bg-primaryBlue/25">
                            <span className="font-poppins text-primaryBlue font-medium">
                                HOW IT WORKS
                            </span>
                        </div>
                        <div className="flex flex-col w-full lg:w-[925px] gap-3 text-center">
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
                        <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                            <div className="flex flex-col gap-6 bg-white text-darkBg rounded-2xl px-5 lg:px-9 py-7 w-full md:w-4/12">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <div className="flex bg-[linear-gradient(135deg,_rgba(0,110,255,0.15)_0%,_rgba(120,0,211,0.15)_50%,_rgba(58,200,217,0.15)_100%)] rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                            <span className="font-poppins font-medium text-2xl">
                                                1
                                            </span>
                                        </div>
                                        <h2>Choose Your Language</h2>
                                    </div>
                                    <div>
                                        <p className="text-darkBg">
                                            Select your preferred script
                                            language (English or Filipino) to
                                            read from before recording begins.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-darkLayer text-secondary p-4 rounded-xl gap-3 w-fit md:w-full">
                                    <h4>Language Selection</h4>
                                    <img
                                        src={languageSelection}
                                        alt="language_selection"
                                        className="rounded-lg max-w-[272px]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-5 bg-white text-darkBg rounded-2xl px-5 lg:px-9 py-7 w-full md:w-8/12">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                                            <div className="flex bg-[linear-gradient(135deg,_rgba(0,110,255,0.15)_0%,_rgba(120,0,211,0.15)_50%,_rgba(58,200,217,0.15)_100%)] rounded-full w-[40px] lg:min-w-[40px] h-[40px] justify-center items-center">
                                                <span className="font-poppins font-medium text-2xl">
                                                    2
                                                </span>
                                            </div>
                                            <h2>Record Your Voice</h2>
                                        </div>
                                        <div>
                                            <p className="text-darkBg">
                                                Read the displayed script
                                                naturally— the app records your
                                                voice for analysis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col bg-darkLayer text-secondary p-4 rounded-xl gap-3">
                                        <h4>Displayed Script</h4>
                                        <img
                                            src={recordEntry}
                                            alt="record-entry"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="flex bg-[linear-gradient(135deg,_rgba(0,110,255,0.15)_0%,_rgba(120,0,211,0.15)_50%,_rgba(58,200,217,0.15)_100%)] rounded-full min-w-[40px] h-[40px] justify-center items-center">
                                                <span className="font-poppins font-medium text-2xl">
                                                    3
                                                </span>
                                            </div>
                                            <h2>Submit the Recording</h2>
                                        </div>
                                        <div>
                                            <p className="text-darkBg">
                                                Upload the recorded audio to
                                                begin the analysis process — no
                                                need for any manual input.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col bg-darkLayer text-secondary p-4 rounded-xl gap-3">
                                        <h4>Submission and Process</h4>
                                        <img
                                            src={submitButtonEntry}
                                            alt="submit-button-entry"
                                            className="rounded-lg"
                                        />
                                        <img
                                            src={processEntry}
                                            alt="process-entry"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                            <div className="flex flex-row gap-5 bg-white text-darkBg rounded-2xl px-5 lg:px-9 py-7 w-full md:w-6/12">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                                            <div className="flex bg-[linear-gradient(135deg,_rgba(0,110,255,0.15)_0%,_rgba(120,0,211,0.15)_50%,_rgba(58,200,217,0.15)_100%)] rounded-full w-[40px] lg:min-w-[40px] h-[40px] justify-center items-center">
                                                <span className="font-poppins font-medium text-2xl">
                                                    4
                                                </span>
                                            </div>
                                            <h2>
                                                Receive Your Results & Insights
                                            </h2>
                                        </div>
                                        <div>
                                            <p className="text-darkBg">
                                                In approximately 1-2 minutes,
                                                receive a detailed
                                                classification and personalized
                                                recommendations based on your
                                                result.
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={entry_04}
                                        alt="entry_04"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-5 bg-white text-darkBg rounded-2xl px-5 lg:px-9 py-7 w-full md:w-6/12">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                                            <div className="flex bg-[linear-gradient(135deg,_rgba(0,110,255,0.15)_0%,_rgba(120,0,211,0.15)_50%,_rgba(58,200,217,0.15)_100%)] rounded-full w-[40px] lg:min-w-[40px] h-[40px] justify-center items-center">
                                                <span className="font-poppins font-medium text-2xl">
                                                    5
                                                </span>
                                            </div>
                                            <h2>Feature Extraction Preview</h2>
                                        </div>
                                        <div>
                                            <p className="text-darkBg">
                                                Your voice is automatically
                                                processed into spectro-temporal
                                                modulation features, and you can
                                                freely preview the extracted
                                                patterns behind the analysis.
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={entry_05}
                                        alt="entry_05"
                                        className="rounded-lg"
                                    />
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

import voiceBased from "../assets/svg/voice-based.svg";
import aiIcon from "../assets/svg/ai-icon.svg";
import reliableIcon from "../assets/svg/reliable-icon.svg";
import mobileOptIcon from "../assets/svg/mobile-optimized-icon.svg";
import scientificIcon from "../assets/svg/scientific-icon.svg";
import secureIcon from "../assets/svg/secure-icon.svg";
import christianPic from "../assets/christian.png";
import gianPic from "../assets/gian.png";
import rafaelPic from "../assets/refael.png";

export const navItems = [
    { label: "Features", href: "#feature" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Model", href: "#model" },
    { label: "Contact", href: "#contact" },
];

export const featItems = [
    {
        icon: voiceBased,
        alt: "voice-based",
        heading: "Voice-Based Sleep Deprivation",
        paragraph:
            "Analyze your voice to identify signs of mild sleep deprivation in seconds.",
    },
    {
        icon: aiIcon,
        alt: "ai",
        heading: "AI-Powered SVM Model",
        paragraph:
            "Uses a state-of-the-art Support Vector Machine trained on spectro-temporal modulation patterns.",
    },
    {
        icon: reliableIcon,
        alt: "reliable",
        heading: "Reliable Sleep Assessment",
        paragraph:
            "Get results within a couple of seconds after uploading your voice — no wearables required.",
    },
    {
        icon: mobileOptIcon,
        alt: "mobile-optimized",
        heading: "Mobile-Optimized Experience",
        paragraph:
            "Designed for smooth performance and clarity on Android devices.",
    },
    {
        icon: scientificIcon,
        alt: "scientific",
        heading: "Scientifically Validated Accuracy",
        paragraph:
            "Achieves an average accuracy of 86% — validated through academic research.",
    },
    {
        icon: secureIcon,
        alt: "secure",
        heading: "Secure Data Processing",
        paragraph:
            "Ensures your audio is only used for analysis with no cloud-based storage or sharing.",
    },
];

export const teamItems = [
    {
        img: christianPic,
        name: "Christian",
        role: "Team Leader & Developer",
        course: "Computer Science Student",
        social: [
            {
                icon: "fa-brands fa-github",
                link: "https://github.com/Knu09",
            },
            {
                icon: "fa-solid fa-link",
                link: "https://knu09.github.io/v2.christiandelatorre/",
            },
        ],
    },
    {
        img: gianPic,
        name: "Gian Frans",
        role: "Data Analyst",
        course: "Computer Science Student",
        social: [
            {
                icon: "fa-brands fa-github",
                link: "",
            },
            {
                icon: "fa-solid fa-link",
                link: "",
            },
        ],
    },
    {
        img: rafaelPic,
        name: "Rafael",
        role: "Technical Analyst",
        course: "Computer Science Student",
        social: [
            {
                icon: "fa-brands fa-github",
                link: "",
            },
            {
                icon: "fa-solid fa-link",
                link: "",
            },
        ],
    },
];

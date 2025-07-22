import logo from "../assets/logo_sleepspec.png";
import downloadIcon from "../assets/download-icon.png";
import { navItems } from "../constants/constant.tsx";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton.tsx";
import SecondaryButton from "./SecondaryButton.tsx";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-6 backdrop-blur-lg">
            <div className="container px-4 mx-auto relative ">
                <div className="flex justify-between items-center">
                    <div>
                        <img
                            src={logo}
                            className="w-10 "
                            alt="SleepSpec Logo"
                        />
                    </div>
                    <div>
                        <ul className="hidden md:flex gap-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="font-poppins text-lg"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <a
                            className="gap-3 hidden md:flex items-center"
                            href="#"
                        >
                            <img
                                src={downloadIcon}
                                className="w-6"
                                alt="download"
                            />
                            <span className="text-lg font-poppins">
                                Get the App
                            </span>
                        </a>
                    </div>
                    <div className="md:hidden flex flex-col z-30">
                        <button className="text-lg" onClick={toggleNavbar}>
                            {drawerOpen ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-bars"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {drawerOpen && (
                <div className="fixed top-0 right-0 z-20 bg-darkLayer w-full sm:w-9/12 h-screen p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className="flex flex-col gap-6">
                        {navItems.map((item, index) => (
                            <li className="text-center" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        <li>
                            <PrimaryButton text="Download APK" href="#" />
                        </li>
                        <li>
                            <SecondaryButton text="Learn More" href="#" />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

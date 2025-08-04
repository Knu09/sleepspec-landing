import logo from "../assets/logo_sleepspec.png";
import { navItems } from "../constants/constant.tsx";
import { useState } from "react";
import downloadIcon from "../assets/download-icon.png";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <>
            <nav className="sticky top-0 z-50 py-6 bg-darkLayer bg-opacity-80 bg-clip-padding backdrop-blur-lg">
                <div className="container px-4 mx-auto relative">
                    <div className="flex justify-between items-center">
                        <a href="/">
                            <img
                                src={logo}
                                className="w-10 "
                                alt="SleepSpec Logo"
                            />
                        </a>
                        <div>
                            <ul className="hidden md:flex gap-5">
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
                        <a
                            className="gap-3 hidden md:flex items-center"
                            href="#get-the-app"
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
                        <div
                            className="md:hidden flex flex-col"
                            style={{ zIndex: 60 }}
                        >
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
                    <div
                        className={`fixed top-0 right-0 bg-darkLayer w-full sm:w-9/12 h-screen p-12 flex flex-col justify-center items-center md:hidden transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
                        aria-hidden={drawerOpen}
                        style={{ zIndex: 50 }}
                    >
                        <ul className="flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <li className="text-lg text-center" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                            {/* Divider */}
                            <li className="w-full h-[1px] bg-white/20"></li>
                            <li>
                                <a
                                    className="flex gap-3 items-center"
                                    href="#get-the-app"
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
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
                    drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleNavbar}
                aria-hidden={drawerOpen}
            />
        </>
    );
};

export default Navbar;

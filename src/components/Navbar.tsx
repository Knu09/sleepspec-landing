import logo from "../assets/logo_sleepspec.png";
import downloadIcon from "../assets/download-icon.png";
import { navItems } from "../constants/constant.tsx";
const Navbar = () => {
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
                        <ul className="hidden lg:flex gap-4">
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
                        <a className="gap-3 flex items-center" href="#">
                            <img
                                src={downloadIcon}
                                className="w-6"
                                alt="download"
                            />
                            <span className="text-lg font-poppins">
                                Download App
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import homePagePhone from "../assets/svg/home-phone.svg";

const HighlightOverlay = () => {
    return (
        <div className="relative bg-white h-96">
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <img src={homePagePhone} alt="home-page-phone" />
            </div>
        </div>
    );
};

export default HighlightOverlay;

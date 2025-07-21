import androidIcon from "../assets/android-icon.png";

type PrimaryButtonProps = {
    title: string;
};

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
    return (
        <button
            className="flex flex-row items-center gap-3 px-6 py-3 rounded-full"
            id="primary-btn"
            type="button"
        >
            <img src={androidIcon} alt="android" />
            <span>{title}</span>
        </button>
    );
};

export default PrimaryButton;

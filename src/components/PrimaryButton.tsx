type PrimaryButtonProps = {
    text: string;
    href: string;
    img?: string;
};

const PrimaryButton = ({ text, href, img }: PrimaryButtonProps) => {
    return (
        <a
            href={href}
            className="z-30 flex flex-row items-center justify-center gap-3 px-6 py-3 rounded-full"
            id="primary-btn"
            type="button"
        >
            {img && <img src={img} alt={img} />}
            <span className="text-lg font-publicsans font-medium">{text}</span>
        </a>
    );
};

export default PrimaryButton;

type PrimaryButtonProps = {
    text: string;
    href: string;
    img?: string;
};

const PrimaryButton = ({ text, href, img }: PrimaryButtonProps) => {
    return (
        <a
            href={href}
            className="z-10 flex flex-row items-center justify-center min-[400px]:justify-start gap-4 px-6 py-4 rounded-full text-center w-full min-[400px]:w-fit"
            id="primary-btn"
            type="button"
        >
            {img && <img src={img} alt={img} width={25} />}
            <span className="text-lg font-publicsans font-medium">{text}</span>
        </a>
    );
};

export default PrimaryButton;

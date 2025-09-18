type SecondaryButtonProps = {
    text: string;
    href: string;
};

const SecondaryButton = ({ text, href }: SecondaryButtonProps) => {
    return (
        <a
            href={href}
            className="z-10 flex flex-row justify-center items-center gap-3 px-6 py-4 rounded-full w-full min-[400px]:w-fit"
            id="secondary-btn"
            type="button"
        >
            <span className="text-lg font-publicsans font-medium">{text}</span>
        </a>
    );
};

export default SecondaryButton;

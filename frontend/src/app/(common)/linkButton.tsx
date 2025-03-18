import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

type LinkButtonProps = {
    platform: "twitter" | "instagram";
    url: string;
    size: number;
    color?: string;
};

const LinkButton = ({ platform, url, size, color = "#000000" }: LinkButtonProps ) => {
    const icon = platform === "twitter" ? <FiTwitter size={size} style={{ color }} /> : <FaInstagram size={size} style={{ color }} />

    return (
        <Link href={url} target="_blank" rel="noopener noreferer">
            <button
                className={`flex items-center justify-center transition duration-300`}
            >
                {icon}
            </button>
        </Link>

    );
}

export default LinkButton;
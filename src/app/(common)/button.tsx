import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function Button({ children, onClick, className}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </button>
    );
}
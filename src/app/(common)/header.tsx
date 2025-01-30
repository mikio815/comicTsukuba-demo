import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black text-white py-4 px-6 shadow-md font-custom">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">コミックつくば！</Link>
                <nav>
                    <ul className="flex space-x-1 text-xs">
                        <li className=" px-3 py-1 group hover:bg-white hover:text-black">
                            <Link href="/about">コミつく！とは？</Link>
                        </li>
                        <li className="px-3 py-1 group hover:bg-white hover:text-black">
                            <Link href="/info">開催概要</Link>
                        </li>
                        <li className=" px-3 py-1 group hover:bg-white hover:text-black">
                            <Link href="/application">参加申込</Link>
                        </li>
                        <li className=" px-3 py-1 group hover:bg-white hover:text-black">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>    
        </header>
    );
}



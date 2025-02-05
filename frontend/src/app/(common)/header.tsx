import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu"; 

export default function Header() {
    return (
        <header className="bg-[#00C1D4] text-white py-4 px-6 shadow-md font-custom">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    コミックつくば！
                </Link>

        {/* PC用ナビゲーション（md以上で表示） */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-4 text-xs">
                        <li>
                            <Link href="/news">News</Link>
                        </li>
                        <li>
                            <Link href="/about">コミックつくば！とは？</Link>
                        </li>
                        <li>
                            <Link href="/application">参加案内</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

        {/* スマホ用ハンバーガーメニュー（md未満で表示） */}
                <div className="md:hidden">
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}
     


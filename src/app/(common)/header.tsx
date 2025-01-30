import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">コミックつくば！</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/about">コミつく！とは？</Link></li>
                        <li><Link href="/info">開催概要</Link></li>
                        <li><Link href="/application">参加申込</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>    
        </header>
    );
}
// src/app/news/page.tsx
import Layout from "../(common)/layout";
import Link from "next/link";

export default async function NewsPage() {
  return (
    <Layout>
      <div className="mt-12 mb-28 font-bold max-w-[720px] mx-auto"> {/* News */}
        <h2 className="text-center text-3xl mb-12">NEWS</h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
              <span className="text-lg text-left pl-6">2025.03.01</span>
              <span className="text-xl text-center">
                <Link href="/news/3" className="hover:underline">出展者募集開始について</Link>
              </span>
            </div>
            <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
              <span className="text-lg text-left pl-6">2025.02.15</span>
              <span className="text-xl text-center">
                <Link href="/news/2" className="hover:underline">スタッフ募集のお知らせ</Link>
              </span>
            </div>
            <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
              <span className="text-lg text-left pl-6">2025.02.01</span>
              <span className="text-xl text-center">
                <Link href="/news/1" className="hover:underline">webサイト開設のお知らせ</Link>
              </span>
            </div>
          </div>
      </div> 
    </Layout>
  );
}

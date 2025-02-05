// src/app/news/page.tsx
import Layout from "../(common)/layout";
import { getNews } from "@/lib/api";
import Link from "next/link";

export default async function NewsPage() {
  const newslist = await getNews();

  return (
    <Layout>
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold">News</h1>
        <div className="mt-6 space-y-6">
          {newslist.length === 0 ? (
            <p>新着情報はまだありません！</p>
          ) : (
            newslist.map((news:any) => (
              <div key={news.id} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{news.title}</h2>
                <p>{news.published}</p> {/* 日付を表示 */}
                <Link href={`/news/${news.id}`} passHref>
                    <span className="text-blue-500">詳細を見る</span>                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

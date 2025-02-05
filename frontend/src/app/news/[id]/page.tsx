import Layout from "../../(common)/layout";
import { getNews } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import { News } from "@/types/news";

type NewsDetailProps = {
  params: {
    id: string;
  };
};

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { id } = await params;
  const newslist = await getNews();
  const news = newslist.find((news: News) => news.id.toString() === id);

  if (!news) {
    return <p>ニュースが見つかりませんでした。</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">{news.title}</h1>
        <p className="text-gray-600 text-center">{news.published}</p>

        <div className="mt-6 prose prose-lg">
          <ReactMarkdown>{news.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

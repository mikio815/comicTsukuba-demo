import Layout from "@/app/(common)/layout";
import Button from "@/app/(common)/button";

export default function HomePage() {
    return (
        <Layout>
            <div className="container mx-auto py-8 text-center">
                <h1 className="text-3xl font-bold">コミックつくば！へようこそ！</h1>
                <p className="mt-4">
                    記念すべきコミックつくば！01は、春C期間（7月〜8月上旬）での開催を予定しています。
                </p>
                <Button className="mt-4">開催の詳細を見る</Button>

            </div>
        </Layout>
    );
}
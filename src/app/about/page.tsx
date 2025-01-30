import Layout from "@/app/(common)/layout";

export default function AboutPage() {
    return (
        <Layout>
            <div className="container mx-auto py-8 text-center">
                <h1 className="text-2xl font-bold">コミックつくば！とは？</h1>
                <p className="mt-4">
                    「コミックつくば！」（通称：コミつく！）とは、「即売会を筑波大学構内で開催したい」という信念のもと企画された筑波大生主導のオールジャンル即売会です。<br />
                    コミックマーケットなどの即売会をこよなく愛する筑波大生有志が集まって結成された「コミックつくば！準備会」によって運営されています。
                </p>
            </div>
        </Layout>
    );
}
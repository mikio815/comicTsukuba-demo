import { ReactNode } from "react";
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="Flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
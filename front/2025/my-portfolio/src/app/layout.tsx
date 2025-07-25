import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/provider/ThemeProvider";
import HeaderMade from "@/components/layout/Header";
import { getMenu } from "@/lib/apiList";

const gowunBatang = Gowun_Batang({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const descriptions = {
    en: "A frontend developer who prioritizes user value, adapts to change, and strives for better user experiences.",
    ko: "사용자 가치를 최우선으로 생각하는 프론트엔드 개발자 정다슬입니다. 변화에 유연하게 적응하며 더 나은 사용자 경험을 고민합니다.",
};

export const metadata: Metadata = {
    title: "Portfolio | Daseul Jeong",
    description: descriptions.ko,
    icons: "/favicon/favicon.ico",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const menus = await getMenu(); // 서버에서 fetch
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body className={`relative w-full max-w-full h-full min-h-[100vh] text-dark bg-light dark:text-light dark:bg-dark ${gowunBatang.className} antialiased`}>
                <ThemeProvider>
                    <HeaderMade />
                    <main id="main" className="relative w-full max-w-full h-full min-h-[100vh]">
                        {children}
                    </main>
                     <Footer menus={menus} />
                </ThemeProvider>
            </body>
        </html>
    );
}

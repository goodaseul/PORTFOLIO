import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { getMenu } from "@/lib/apiList";
import { gowunBatang } from "@/store/store";

export const metadata: Metadata = {
    title: "Portfolio | Daseul Jeong",
    description: "사용자 가치를 최우선으로 생각하는 프론트엔드 개발자 정다슬입니다. 변화에 유연하게 적응하며 더 나은 사용자 경험을 고민합니다.",
    icons: "/favicon/favicon.ico",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = (await cookies()).get("theme")?.value || "light";

    const menus = await getMenu(); // 서버에서 fetch
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body className={`relative w-full max-w-full h-full min-h-[100vh] text-dark bg-light dark:text-light dark:bg-dark ${gowunBatang.className} antialiased`}>
                <ThemeProvider>
                    <Header menus={menus} />
                    <main id="main" className="relative w-full max-w-full h-full min-h-[100vh]">
                        {children}
                    </main>
                    <Footer menus={menus} />
                </ThemeProvider>
            </body>
        </html>
    );
}

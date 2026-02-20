import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "마이픽 디자인 | 프리미엄 맞춤형 포트폴리오 제작",
  description: "결과물로 증명합니다. 노코드가 아닌 100% 맞춤 코딩 프론트엔드 최적화로 압도적인 웹사이트를 만들어드립니다.",
  keywords: "홈페이지 제작, 포트폴리오 사이트, 맞춤형 웹 제작, 브랜드 홈페이지, 기업 홈페이지 제작",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth bg-background text-foreground">
      <body className="antialiased min-h-screen flex flex-col pt-[88px]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

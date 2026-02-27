import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Igor Lima | Portfolio",
    description: "Software Engineer & Web Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${raleway.variable} antialiased`}>
                <LanguageProvider>
                    <Navbar />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}

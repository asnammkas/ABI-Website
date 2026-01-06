import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import standard Inter font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ABI Systems - Empowering Retail with AI",
    description: "Leading software solutions for Sri Lankan retail.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen pt-[80px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

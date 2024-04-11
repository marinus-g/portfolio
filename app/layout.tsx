import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "marinus.dev",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#002]`}>{children}</body>
        </html>
    );
}

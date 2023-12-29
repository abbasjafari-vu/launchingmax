import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import { Children } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LaunchingMax",
    description: "Launching Max",
};

type Props = Children;
export default function RootLayout(props: Props) {
    const { children } = props;

    return (
        <html lang="en">
            <body className={inter.className}>
                {/* add fontawesome by script file*/}
                <Script defer src="./js/all.js" />
                {children}
            </body>
        </html>
    );
}

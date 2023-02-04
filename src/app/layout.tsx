import "./globals.css";
import { unstable_getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";

import Navbar from "components/Navbar";
import Script from "next/script";
import Footer from "components/Footer";
import { Roboto } from "@next/font/google";

import { name } from "config";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await unstable_getServerSession();
    const providers = await getProviders();
    console.log(session);

    return (
        <html lang="en" className={roboto.className}>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json"></link>
                <title>{name}</title>
            </head>
            <Script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></Script>
            <body className="wrapper flex flex-col dark:bg-[#05091a]">
                <div className="fixed w-screen bg-white dark:bg-[#05091a] z-10">
                    <Navbar session={session} />
                </div>
                {children}
            </body>
            <Footer />
        </html>
    );
}

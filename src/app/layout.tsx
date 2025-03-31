import type { Metadata } from "next";
import "../styles/globals.css"; 
import localFont from "next/font/local";
import Script from "next/script";

const geistSans = localFont({
  src: "../../public/fonts/Geist-Regular.ttf", // ✅ Use relative path correctly
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMono-Regular.ttf",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Helina Belete",
  description: "Generated by Helina Belete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-81ZQGLR2NX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-81ZQGLR2NX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

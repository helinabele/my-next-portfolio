import type { Metadata } from "next";
import "../styles/globals.css"; 
import localFont from "next/font/local";
import Script from "next/script";
import { Inter } from 'next/font/google';

const geistSans = localFont({
  src: "../../public/fonts/Geist-Regular.ttf", // ✅ Use relative path correctly
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMono-Regular.ttf",
  variable: "--font-geist-mono",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Helina Belete | Software Engineer',
  description: 'Portfolio website of Helina Belete, a software engineer specializing in building exceptional digital experiences using React, Angular, and modern web technologies.',
  keywords: ['software engineer', 'web developer', 'react', 'angular', 'typescript', 'next.js', 'portfolio'],
  authors: [{ name: 'Helina Belete' }],
  creator: 'Helina Belete',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://helinabelete.com',
    title: 'Helina Belete | Software Engineer',
    description: 'Portfolio website of Helina Belete, a software engineer specializing in building exceptional digital experiences.',
    siteName: 'Helina Belete Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helina Belete | Software Engineer',
    description: 'Portfolio website of Helina Belete, a software engineer specializing in building exceptional digital experiences.',
    creator: '@helinabelete',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

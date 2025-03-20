"use client";

import Footer from "./Footer";
import "./../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow container mx-auto px-4 md:px-6 py-6 lg:py-8">
          {children}
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

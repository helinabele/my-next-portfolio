"use client";

import Footer from "./Footer";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[var(--bg-color)]">
        <main className="flex-grow">
          {children}
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

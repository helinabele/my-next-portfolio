"use client";

import Footer from './Footer';
import './../globals.css';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-6 lg:py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

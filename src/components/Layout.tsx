"use client";

import Footer from "./Footer";
import "../styles/globals.css";
import SkipLink from './SkipLink';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SkipLink />
      <div role="document">
        <header role="banner">
          {/* Your header content */}
        </header>
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </>
  );
}

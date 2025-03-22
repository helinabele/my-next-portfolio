import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/helinabele"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/helina-belete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
        
        <p className="font-mono text-sm text-[var(--muted)]">
          Built with Next.js & Tailwind CSS
        </p>
        
        <p className="font-mono text-sm text-[var(--muted)]">
          © 2024 Helina Belete
        </p>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface ResumeSection {
  title: string;
  icon: React.ReactNode;
  content: string;
}

const resumeSections: ResumeSection[] = [
  {
    title: 'Experience',
    icon: <FaBriefcase className="text-[var(--accent)]" />,
    content: `Software Engineer at Company X (2022-Present)
• Led development of key features using React and TypeScript
• Improved application performance by 40%
• Mentored junior developers and conducted code reviews

Software Developer at Company Y (2020-2022)
• Developed and maintained multiple web applications
• Implemented responsive designs and accessibility features
• Collaborated with cross-functional teams`
  },
  {
    title: 'Education',
    icon: <FaGraduationCap className="text-[var(--accent)]" />,
    content: `Bachelor of Science in Computer Science
University of XYZ (2016-2020)
• GPA: 3.8/4.0
• Relevant Coursework: Data Structures, Algorithms, Web Development
• Dean's List: All Semesters`
  },
  {
    title: 'Skills',
    icon: <FaCode className="text-[var(--accent)]" />,
    content: `Frontend: React, Angular, TypeScript, Next.js
Backend: Node.js, Express, Python
Database: MongoDB, PostgreSQL
Tools: Git, Docker, AWS
Soft Skills: Leadership, Communication, Problem Solving`
  }
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState<string>(resumeSections[0].title);
  const { theme } = useTheme();

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme }),
      });
      
      if (!response.ok) throw new Error('Failed to generate PDF');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'helina-belete-resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <section className="py-20" id="resume">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Download my resume or explore my professional journey interactively below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <div className="sticky top-24 space-y-4">
              {resumeSections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setActiveSection(section.title)}
                  className={`w-full p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeSection === section.title
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-[var(--card-bg)] hover:bg-[var(--accent)]/10'
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
              <button
                onClick={handleDownload}
                className="w-full p-4 rounded-lg bg-[var(--accent)] text-white transition-all duration-300 hover:bg-[var(--accent)]/90 flex items-center justify-center gap-2"
              >
                <FaDownload />
                <span>Download PDF</span>
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-9"
          >
            <div className="bg-[var(--card-bg)] rounded-xl p-8 shadow-lg">
              {resumeSections.map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSection === section.title ? 1 : 0,
                    display: activeSection === section.title ? 'block' : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    {section.icon}
                    {section.title}
                  </h3>
                  <div className="whitespace-pre-line text-[var(--text-secondary)]">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
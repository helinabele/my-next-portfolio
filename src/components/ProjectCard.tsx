import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  style?: React.CSSProperties;
  isReversed?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  technologies,
  style,
  isReversed = false,
}: ProjectCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div 
      className={`project-card relative md:grid md:grid-cols-12 items-center gap-4 md:gap-10`}
      style={style}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Project Image */}
      <motion.div 
        className={`relative md:col-span-7 ${
          isReversed ? 'md:col-start-6' : 'md:col-start-1'
        } group`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {imageUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block relative rounded-md overflow-hidden"
            aria-label={`View ${title} project`}
          >
            <div className="relative aspect-[16/9] w-full">
              {imageLoading && (
                <div className="absolute inset-0 bg-[var(--card-bg)] animate-pulse" />
              )}
              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                fill
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                onLoadingComplete={() => setImageLoading(false)}
                quality={90}
              />
            </div>
          </a>
        )}
      </motion.div>

      {/* Project Content */}
      <div 
        className={`relative md:col-span-7 ${
          isReversed ? 'md:col-start-1 md:text-right' : 'md:col-start-6 md:text-left'
        } md:absolute md:h-full md:w-full md:py-8`}
      >
        <div className={`h-full flex flex-col ${isReversed ? 'md:items-end' : 'md:items-start'}`}>
          <motion.div 
            className={`bg-[var(--bg-color)]/80 backdrop-blur-lg transition-all duration-300 group-hover:backdrop-blur-none group-hover:bg-[var(--bg-color)]/95 p-6 rounded-lg shadow-xl w-full max-w-xl ${
              isReversed ? 'md:mr-4' : 'md:ml-4'
            }`}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="text-[var(--accent)] font-mono text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors duration-300"
                aria-label={`View ${title} project`}
              >
                {title}
              </a>
            </h3>
            
            <div className="mb-4">
              <p className="text-[var(--text-color)] text-base leading-relaxed">{description}</p>
            </div>

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <ul 
                className={`flex flex-wrap gap-3 mb-4 ${isReversed ? 'justify-end' : 'justify-start'}`}
                aria-label="Technologies used"
              >
                {technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    className="font-mono text-sm text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Links */}
            <div 
              className={`flex gap-4 ${isReversed ? 'justify-end' : 'justify-start'}`}
              aria-label="Project links"
            >
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors duration-300"
                  aria-label={`View ${title} GitHub repository`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <FaGithub size={20} />
                </motion.a>
              )}
              {projectUrl && (
                <motion.a
                  href={projectUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors duration-300"
                  aria-label={`View ${title} live demo`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <FaExternalLinkAlt size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

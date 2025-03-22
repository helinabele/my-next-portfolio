import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
  return (
    <div 
      className={`project-card relative md:grid md:grid-cols-12 items-center gap-4 md:gap-10`}
      style={style}
    >
      {/* Project Image */}
      <div 
        className={`relative md:col-span-7 ${
          isReversed ? 'md:col-start-6' : 'md:col-start-1'
        } group`}
      >
        {imageUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block relative rounded-md overflow-hidden"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </a>
        )}
      </div>

      {/* Project Content */}
      <div 
        className={`relative md:col-span-7 ${
          isReversed ? 'md:col-start-1 md:text-right' : 'md:col-start-6 md:text-left'
        } md:absolute md:h-full md:w-full md:py-8`}
      >
        <div className={`h-full flex flex-col ${isReversed ? 'md:items-end' : 'md:items-start'}`}>
          <div className={`bg-[var(--bg-color)]/80 backdrop-blur-lg transition-all duration-300 group-hover:backdrop-blur-none group-hover:bg-[var(--bg-color)]/95 p-6 rounded-lg shadow-xl w-full max-w-xl ${
            isReversed ? 'md:mr-4' : 'md:ml-4'
          }`}>
            <p className="text-[var(--accent)] font-mono text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors duration-300"
              >
                {title}
              </a>
            </h3>
            
            <div className="mb-4">
              <p className="text-[var(--text-color)] text-base leading-relaxed">{description}</p>
            </div>

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <ul className={`flex flex-wrap gap-3 mb-4 ${isReversed ? 'justify-end' : 'justify-start'}`}>
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-sm text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {/* Links */}
            <div className={`flex gap-4 ${isReversed ? 'justify-end' : 'justify-start'}`}>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors duration-300"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

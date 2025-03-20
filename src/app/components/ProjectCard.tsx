import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:text-blue-600"
          >
            Explore Project →
          </a>
        )}
      </div>
    </div>
  );
}

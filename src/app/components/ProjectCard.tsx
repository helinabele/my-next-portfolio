import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div
     className="project-card border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
    <div className="elative h-48 w-full">

     {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title}-image`}
         
     layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out"
        />
      )}
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-2xl font-semibold mb-3 text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-semibold hover:text-blue-600"
      >
        Explore Project →
      </a>
    </div>
</div>
  );
}

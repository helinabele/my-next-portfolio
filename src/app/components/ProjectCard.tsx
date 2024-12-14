import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="border rounded shadow-md p-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title}-image`}
          width={300}
          height={200}
          className="rounded"
        />
      )}
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
}

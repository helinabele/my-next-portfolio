"use client";

export default function Skills() {
  const skills = ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "CSS", "Node.js", "TailwindCSS"];

  return (
    <section id="skills" className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded text-center shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

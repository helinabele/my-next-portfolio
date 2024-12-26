"use client";

export default function Experience() {
  const experiences = [
    { role: "Full-Stack Developer", company: "TechCorp", duration: "Jan 2020 - Present", description: "Built scalable web applications with React & Next.js." },
    { role: "Frontend Developer", company: "DevSolutions", duration: "May 2017 - Dec 2019", description: "Designed responsive UI with Angular and optimized performance." }
  ];

  return (
    <section id="experience" className="container mx-auto py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="mb-4 p-4 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold">{exp.role} @ {exp.company}</h3>
          <p className="text-sm text-gray-600">{exp.duration}</p>
          <p className="mt-2 text-gray-700">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

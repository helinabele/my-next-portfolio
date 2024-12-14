"use client";

export default function Education() {
  const education = [
    { degree: "Bachelor's in Computer Science", institution: "XYZ University", year: "2013 - 2017" }
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {education.map((edu) => (
        <div
          key={edu.degree}
          className="mb-4 p-4 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-600">{edu.institution} - {edu.year}</p>
        </div>
      ))}
    </section>
  );
}

import Layout from "../components/Layout";

export default function Projects() {
    const projects = [
      {
        title: 'Fraud Report Management System',
        description: 'React-based system improving fraud detection by 40%',
      },
      {
        title: 'HR Management System',
        description: 'Built with Angular, increased engagement by 40%',
      },
    ];
  
    return (
        <Layout>
      <section id="projects" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      </Layout>
    );
  }
  
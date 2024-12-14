export default function Hero() {
    return (
        <section className="h-screen bg-primary flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Helina Belete</h1>
          <p className="text-lg md:text-xl mb-4">Full-Stack Developer | Problem Solver | Portfolio Creator</p>
          <p className="max-w-md mb-4">
            I’m a passionate developer specializing in creating robust web applications, user-friendly interfaces, and clean, maintainable codebases.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="images/profile-image.png"
            alt="Helina Belete"
            className="rounded-lg shadow-md w-48 h-48 object-cover"
          />
        </div>
      </div>
      </section>
    );
  }
  
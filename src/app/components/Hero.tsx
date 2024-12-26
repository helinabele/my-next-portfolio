import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between" 
       style= {{width: "fit-content"}}>
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Hello, I'm Helina Belete 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-6">
            Full-Stack Developer | Problem Solver | Portfolio Creator
          </p>
          <p className="text-gray-500 max-w-lg mx-auto md:mx-0 mb-6 leading-relaxed">
            I’m a passionate developer specializing in creating robust web
            applications, user-friendly interfaces, and clean, maintainable
            codebases.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-48 h-64 md:w-64 md:h-80">
            <Image
              src="/images/profile-image.png"
              alt="Helina Belete"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

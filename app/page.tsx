import Image from "next/image";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";
import Card from "./components/Card";

// Define the types for the sections

type Job = {
  title: string;
  company: string;
  location: string;
  description: string;
};
type Project = {
  name: string;
  description: string;
  viewCodeLink: string;
  liveDemoLink: string;
};

type Language = {
  name: string;
};

const language: Language[] = [{ name: "JavaScript" }, { name: "TypeScript" }];

const jobs: Job[] = [
  {
    title: "Technical Implementation Analyst",
    company: "TechCorp",
    location: "Remote",
    description:
      "Managed frontend development projects for clients in the finance sector.",
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Remote",
    description:
      "Worked with various clients to develop full-stack web applications.",
  },
  {
    title: "CTO & Founder",
    company: "StartupX",
    location: "Melbourne, Australia",
    description:
      "Led the development of a software platform from scratch, focusing on user experience and performance.",
  },
  {
    title: "Software Development Intern",
    company: "TechVentures",
    location: "Melbourne, Australia",
    description:
      "Developed key features for the company’s flagship product, utilizing React and Node.js.",
  },
];

const projects: Project[] = [
  {
    name: "HomeGame Analytics Manager",
    description: "A tool to track and analyze game statistics in real-time.",
    viewCodeLink: "#",
    liveDemoLink: "#",
  },
  {
    name: "Cafe Loyalty App",
    description: "A cafe loyalty app to reward customers for repeat purchases.",
    viewCodeLink: "#",
    liveDemoLink: "#",
  },
  {
    name: "Quantum-Resistant Password Manager",
    description: "A secure password manager with quantum-resistant encryption.",
    viewCodeLink: "#",
    liveDemoLink: "#",
  },
  {
    name: "Freelancer Invoicing App",
    description:
      "An invoicing app for freelancers to easily manage their projects and invoices.",
    viewCodeLink: "#",
    liveDemoLink: "#",
  },
  {
    name: "Workout Companion",
    description:
      "An interactive workout companion that tracks your fitness progress.",
    viewCodeLink: "#",
    liveDemoLink: "#",
  },
];

const Home = () => {
  return (
    <div className="bg-stone-900 text-white   ">
      <div className="max-w-7xl gap-5 mx-auto flex flex-col md:flex-row justify-between ">
        {/* profile section */}
        <div className="w-full md:w-2/5 sticky top-10 z-10 max-h-screen ">
          <div className="mb-12">
            <Image
              src="/profile.jpg"
              width={150}
              height={150}
              alt="Profile"
              className="rounded-full "
            />
            <h1 className="text-4xl font-bold mt-4">Md Shamim Reza</h1>
            <p className="text-gray-400 text-xl">Full Stack Web Developer</p>
            <p className="flex items-center text-gray-400 text-xl mt-4 gap-3">
              <MdAddLocation className="text-red-600" /> Gazipur, Bangladesh 🇧🇩
            </p>
            <p className=" text-gray-400 text-lg mt-4 gap-3">
              Building Real Products For Real Clients, Not Just More Projects
            </p>
            <div className="flex mt-6 space-x-6 items-center align-middle">
              <button className="flex items-center align-middle gap-3 py-1 px-4 text-gray-400 hover:text-black hover:bg-white cursor-pointer rounded-lg border-2 transition-all duration-300 ease-in-out">
                <FaFileDownload />
                Resume
              </button>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={30} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={30} />
              </a>
            </div>
            <p className="text-2xl font-bold mt-7 mb-3">
              Want to Work Together?
            </p>
            <button className="px-3 py-2 text-white hover:text-gray-100 bg-gray-600 hover:bg-gray-400  hover:px-3.5 cursor-pointer rounded-md transition-all duration-300 ease-in-out">
              Get in Touch
            </button>
          </div>
        </div>
        {/* Profile Section */}

        <div className="w-full md:w-3/6">
          {/* About Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400 text-lg">
              I'm a full-stack developer with a passion for building scalable
              web applications. I love solving challenging problems and making
              complex things simple for users. My expertise spans across various
              technologies such as JavaScript, React, Node.js, and more.
            </p>
            <br />
            <p className="text-gray-400 text-lg">
              Throughout my career, I've been deeply involved in the startup
              ecosystem. I've worked with various startups, embracing the
              fast-paced, innovative nature of these environments. This journey
              led me to found my own startup, where I gained firsthand
              experience in every aspect of product development and business
              operations.
            </p>
            <br />
            <p className="text-gray-400 text-lg">
              During my high school years, I excelled in software development,
              earning the prestigious title of DUX (top student) in this field.
              This early achievement laid the foundation for my passion and
              expertise in programming.
            </p>
            <p className="text-gray-400 text-lg">
              When I'm not immersed in code, you'll find me experimenting in the
              kitchen or bringing ideas to life with my 3D printer. I'm always
              creating, whether it's digital products or tangible objects.
            </p>
          </section>
          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
                  Fanguages
                </h4>
                <div className="flex flex-wrap ">
                  <span className="inline-block bg-blue-800 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-blue-300 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-blue-800 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-blue-300 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* frameworks */}

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
                  Framework
                </h4>
                <div className="flex flex-wrap ">
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Backend */}

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
                  Backend
                </h4>
                <div className="flex flex-wrap ">
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Database */}

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
                  Framework
                </h4>
                <div className="flex flex-wrap ">
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Tools */}

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
                  Framework
                </h4>
                <div className="flex flex-wrap ">
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    JavaScript
                  </span>
                  <span className="inline-block bg-green-700 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-200 mr-2 mb-2 rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <Card />

          {/* Projects Section */}
        </div>
      </div>
    </div>
  );
};

export default Home;

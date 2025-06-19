import BlurText from "../../ReactBits/BlurText/BlurText";
import Navbar from "../components/Navbar";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineNoFood } from "react-icons/md";
import { PiPlanetBold } from "react-icons/pi";
import { RiMovie2AiLine } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    icon: GrUserManager,
    iconBg: "#FA8070",
    title: "SkDev Portfolio",
    description: "Personal portfolio website showcasing my work and skills.",
    githubLink: "https://github.com/SkDev22/SkDev2025",
    liveLink: "https://github.com/SkDev22/SkDev2025",
    bgColor: "#1b263b",
  },
  {
    icon: MdOutlineNoFood,
    iconBg: "#98FF98",
    title: "Fooddyyy",
    description: "A modern food ordering and delivery system.",
    githubLink: "https://github.com/SkDev22/Fooddyyy",
  },
  {
    icon: PiPlanetBold,
    iconBg: "#87CEEB",
    title: "PlanetX",
    description: "Educational planetary exploration web app.",
    githubLink: "https://github.com/SkDev22/PlanetX",
  },
  {
    icon: RiMovie2AiLine,
    iconBg: "#B19CD9",
    title: "MovieNet",
    description: "Movie search and recommendation platform.",
    githubLink: "https://github.com/SkDev22/MovieNet",
  },
  {
    icon: GiArchiveResearch,
    iconBg: "#FFB6C1",
    title: "Research",
    description: "Research-based web application with experimental features.",
    githubLink: "http://google.com",
  },
  {
    icon: AiOutlineSchedule,
    iconBg: "#FDD5B1",
    title: "Schedule Management System",
    description: "Web-based schedule planner and organizer.",
    githubLink: "https://github.com/SkDev22/Fooddyyy",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#0D1B2A] h-auto">
      <header className="absolute inset-x-0 top-0 z-50 px-10">
        <Navbar />
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#0022ff] to-[#c300ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto w-full pt-[135px] flex justify-between items-start px-14 ">
          <div className="flex-2 pl-16">
            <BlurText
              text="Projects I’ve Built to Create My Own Mark on the World"
              delay={300}
              animateBy="words"
              className="text-5xl font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
            />
            <p className="text-pretty text-white font-medium text-lg text-justify font-family-Ubuntu ">
              Over the years, I’ve poured my passion into building various
              projects. Each one reflecting my journey as a developer and a
              problem solver. These are some of the creations I’m most proud of.
              <br />
              <br />
              As someone who’s always curious and constantly learning, I love
              experimenting with new technologies and turning ideas into
              functional, meaningful applications. Many of these projects are
              open-source, so if something catches your eye, feel free to dive
              into the code, share or feedback.
              <br />
              <br />
              This collection represents not just what I’ve built, but who I am,
              someone driven by innovation, continuous growth, and the desire to
              make a difference through technology.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center"></div>
        </div>
        <div className="mt-20 px-28 flex flex-col gap-5">
          {projects
            .reduce((rows, item, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, i) => (
              <div key={i} className="flex justify-between items-center gap-5">
                {row.map((project, j) => (
                  <ProjectCard key={j} {...project} />
                ))}
              </div>
            ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#00eeff] to-[#0022ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

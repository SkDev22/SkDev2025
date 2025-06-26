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
    liveLink: "https://skdev25.netlify.app/",
  },
  {
    icon: MdOutlineNoFood,
    iconBg: "#98FF98",
    title: "Fooddyyy",
    description:
      "Fooddyyy is a place that users can find various food recipes.",
    githubLink: "https://github.com/SkDev22/Fooddyyy",
    liveLink: "https://fooddyyy.netlify.app/",
  },
  {
    icon: PiPlanetBold,
    iconBg: "#87CEEB",
    title: "PlanetX",
    description:
      "Educational planetary exploration web app. Explore details about planets of the space",
    githubLink: "https://github.com/SkDev22/PlanetX",
  },
  {
    icon: RiMovie2AiLine,
    iconBg: "#B19CD9",
    title: "MovieNet",
    description:
      "Movie search website. search movies using movie name and find it's released date and other details.",
    githubLink: "https://github.com/SkDev22/MovieNet",
  },
  {
    icon: GiArchiveResearch,
    iconBg: "#FFB6C1",
    title: "Research",
    description:
      "Innovative web application designed to provide a booking experience for both seekers and owners.",
    githubLink: "https://github.com/SkDev22/Models_Research",
  },
  {
    icon: AiOutlineSchedule,
    iconBg: "#FDD5B1",
    title: "Schedule Management System",
    description:
      "Developed for cleaning service businesses to manage services.",
    githubLink: "https://github.com/SkDev22/Schedule_Management_System",
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
        <div className="mx-auto w-full md:pt-[135px] pt-10 md:flex md:flex-row flex-col justify-between items-start md:px-14 px-0 ">
          <div className="flex-2 md:pl-16 pl-0">
            <BlurText
              text="Projects I've Built to Create My Own Mark on the World"
              delay={300}
              animateBy="words"
              className="md:text-5xl text-4xl font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
            />
            <p className="text-pretty text-white font-medium text-lg md:text-justify text-left font-family-Ubuntu ">
              Over the years, I&apos;ve poured my passion into building various
              projects. Each one reflecting my journey as a developer and a
              problem solver. These are some of the creations I&apos;m most
              proud of.
              <br />
              <br />
              As someone who&apos;s always curious and constantly learning, I
              love experimenting with new technologies and turning ideas into
              functional, meaningful applications. Many of these projects are
              open-source, so if something catches your eye, feel free to dive
              into the code, share or feedback.
              <br />
              <br />
              This collection represents not just what I&apos;ve built, but who
              I am, someone driven by innovation, continuous growth, and the
              desire to make a difference through technology.
            </p>
          </div>
          <div className="flex-1 justify-center items-center hidden md:block"></div>
        </div>
        <div className="mt-20 mb-10 md:mb-0 md:px-28 px-0 flex flex-col gap-5">
          {projects
            .reduce((rows, item, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, i) => (
              <div
                key={i}
                className="flex justify-between md:flex-row flex-col md:items-center items-start gap-5"
              >
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

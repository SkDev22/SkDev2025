import BlurText from "../../ReactBits/BlurText/BlurText";
import Navbar from "../components/Navbar";
import GlareHover from "../../ReactBits/GlareHover/GlareHover";
import { Link } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineNoFood } from "react-icons/md";
import { PiPlanetBold } from "react-icons/pi";
import { RiMovie2AiLine } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";

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
        <div className="mt-20 px-28 flex flex-col justify-center gap-5">
          <div className="flex justify-between items-center gap-5">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#1b263b",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <GrUserManager className="bg-[#FA8070] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">
                SkDev Portfolio
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/SkDev2025">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <MdOutlineNoFood className="bg-[#98FF98] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">
                Fooddyyy
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/Fooddyyy">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <PiPlanetBold className="bg-[#87CEEB] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">PlanetX</h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/PlanetX">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <RiMovie2AiLine className="bg-[#B19CD9] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">
                MovieNet
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <div>
                {/* {<icons.FaGitAlt />} */}
                <Link to="https://github.com/SkDev22/MovieNet">GitHub</Link>
              </div>
            </GlareHover>
          </div>
          <div className="flex justify-between items-center gap-5">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <GiArchiveResearch className="bg-[#FFB6C1] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">
                Research
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="http://google.com">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <AiOutlineSchedule className="bg-[#FDD5B1] rounded-full text-4xl p-1.5" />
              <h1 className="text-xl font-bold font-family-Poppins">
                Schedule Management System
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet , consectetur adipisicing elit.
                Saepe officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/Fooddyyy">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">PlanetX</h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/PlanetX">GitHub</Link>
            </GlareHover>
          </div>
          <div className="flex justify-between items-center gap-5">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">
                SkDev Portfolio
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="http://google.com">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">
                Fooddyyy
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/Fooddyyy">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">PlanetX</h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/PlanetX">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">
                MovieNet
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <div>
                {/* {<icons.FaGitAlt />} */}
                <Link to="https://github.com/SkDev22/MovieNet">GitHub</Link>
              </div>
            </GlareHover>
          </div>
          <div className="flex justify-baseline items-center gap-5">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">
                SkDev Portfolio
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="http://google.com">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">
                Fooddyyy
              </h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/Fooddyyy">GitHub</Link>
            </GlareHover>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={900}
              playOnce={false}
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "#001233",
                borderRadius: "0.9rem",
                border: "transparent",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "between",
                gap: "1rem",
                color: "#ffffff",
              }}
            >
              <h1 className="text-xl font-bold font-family-Poppins">PlanetX</h1>
              <p className="font-family-Ubuntu text-pretty text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                officia quisquam debitis qui libero rem.
              </p>
              <Link to="https://github.com/SkDev22/PlanetX">GitHub</Link>
            </GlareHover>
          </div>
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

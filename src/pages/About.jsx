import Navbar from "../components/Navbar";
import my5 from "../assets/my5.jpeg";
import BlurText from "../../ReactBits/BlurText/BlurText";
import Gallary from "../components/Gallary";

const About = () => {
  return (
    <div className="bg-[#0D1B2A] h-auto">
      <header className="absolute inset-x-0 top-0 z-50 px-10">
        <Navbar />
      </header>
      <div className="relative isolate px-6 pt-5 lg:px-8">
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
          <div className="flex-1 pl-16">
            <BlurText
              text="I’m Sahan Kalhara"
              delay={300}
              animateBy="words"
              className="text-[64px] font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
            />
            <p className="text-pretty text-white font-medium text-lg text-justify font-family-Ubuntu ">
              From a young age, I’ve been deeply fascinated by how technology
              can reshape the way we live, work, and connect. I wrote my first
              line of code out of curiosity and never looked back — since then,
              I’ve been obsessed with crafting systems that are both beautiful
              and powerful.
              <br />
              <br /> While most kids were playing games, I was dissecting how
              those games were built, designing UIs, experimenting with
              websites, and imagining platforms that could make people’s lives
              easier. What began as a passion quickly evolved into a purpose.
              I’m especially driven by the intersection of creativity and code —
              whether it's building full-stack applications, designing
              user-friendly dashboards, or exploring AI-powered tools that
              improve everyday decision-making.
              <br />
              <br /> I believe the best products come from empathy, iteration,
              and a deep understanding of the people who use them. Today, I’m
              focused on building intelligent web and mobile experiences,
              collaborating on innovative projects, and always learning
              something new. My mission? To engineer solutions that leave a
              meaningful impact.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={my5}
              alt="Sahan Image"
              className=" w-[400px] h-[60%] mt-3 rotate-x-2 rotate-y-16 rotate-6 rounded-xl grayscale-100 hover:animate-pulse hover:rotate-0 hover:grayscale-0"
            />
          </div>
        </div>
        <div>
          <Gallary />
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

export default About;

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
        <div className="md:mx-auto w-full md:pt-[135px] pt-24 flex md:flex-row flex-col justify-between items-start md:px-14 px-2 ">
          <div className="flex-1 md:pl-16 pl-0">
            <BlurText
              text="I'm Sahan Kalhara"
              delay={300}
              animateBy="words"
              className="md:text-[64px] text-5xl font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
            />
            <p className="text-pretty text-white font-medium text-lg md:text-justify text-left font-family-Ubuntu ">
              From a young age, I&apos;ve been deeply fascinated by how
              technology can reshape the way we live, work, and connect. I wrote
              my first line of code out of curiosity and never looked back.
              Since then, I&apos;ve been obsessed with crafting systems that are
              both beautiful and powerful.
              <br />
              <br /> What began as a passion quickly evolved into a purpose.
              I&apos;m especially driven by the intersection of creativity and
              code. Whether it&apos;s building full-stack applications,
              designing user-friendly dashboards, or exploring AI-powered tools
              that improve everyday decision-making, I&apos;m always looking for
              new challenges and opportunities to grow.
              <br />
              <br /> I believe the best products come from empathy, iteration,
              and a deep understanding of the people who use them. Today,
              I&apos;m focused on building intelligent web and mobile
              experiences, collaborating on innovative projects, and always
              learning something new. My mission? To engineer solutions that
              leave a meaningful impact.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={my5}
              alt="Sahan Image"
              className=" w-[400px] h-[60%] md:mt-3 mt-20 rotate-x-2 rotate-y-16 rotate-6 rounded-xl grayscale-100 hover:animate-pulse hover:rotate-0 hover:grayscale-0"
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

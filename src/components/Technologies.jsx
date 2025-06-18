import { icons } from "../assets/icons";

const Technologies = () => {
  const {
    FaReact,
    FaNodeJs,
    SiNextdotjs,
    SiExpress,
    BiLogoTypescript,
    SiTailwindcss,
    SiAntdesign,
    TbBrandFramerMotion,
    SiShadcnui,
    SiChakraui,
    SiMongodb,
    SiMysql,
    DiMsqlServer,
    BiLogoNetlify,
    SiVercel,
    FaGitAlt,
    IoLogoFigma,
    VscVscode,
    DiVisualstudio,
    FaAws,
  } = icons;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Top Background Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0022ff] to-[#c300ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl pt-[100px]">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl font-family-Poppins">
            Technologies I Use
          </h2>
          <p className="mt-6 text-lg text-blue-900 sm:text-xl font-family-Ubuntu">
            I specialize in a range of modern technologies including React,
            Tailwind CSS, Node.js, Express, MongoDB, MySQL, and more. I enjoy
            building responsive, high-performance, and scalable applications.
          </p>
        </div>
        {/* Tech Logos or List */}
        <div className="flex flex-wrap justify-center items-center text-5xl gap-20 mt-10">
          <div className="text-blue-800 font-semibold">
            <FaReact />
          </div>
          <div className="text-blue-800 font-semibold">
            <FaNodeJs />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiNextdotjs />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiExpress />
          </div>
          <div className="text-blue-800 font-semibold">
            <BiLogoTypescript />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiTailwindcss />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiAntdesign />
          </div>
          <div className="text-blue-800 font-semibold">
            <TbBrandFramerMotion />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiShadcnui />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiChakraui />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiMongodb />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiMysql />
          </div>
          <div className="text-blue-800 font-semibold">
            <DiMsqlServer />
          </div>
          <div className="text-blue-800 font-semibold">
            <BiLogoNetlify />
          </div>
          <div className="text-blue-800 font-semibold">
            <SiVercel />
          </div>
          <div className="text-blue-800 font-semibold">
            <FaGitAlt />
          </div>
          <div className="text-blue-800 font-semibold">
            <IoLogoFigma />
          </div>
          <div className="text-blue-800 font-semibold">
            <VscVscode />
          </div>
          <div className="text-blue-800 font-semibold">
            <DiVisualstudio />
          </div>
          <div className="text-blue-800 font-semibold">
            <FaAws />
          </div>
        </div>
      </div>

      {/* Bottom Background Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#00eeff] to-[#0022ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
  );
};

export default Technologies;

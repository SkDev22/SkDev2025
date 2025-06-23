import BlurText from "../../ReactBits/BlurText/BlurText";
import Navbar from "../components/Navbar";
import FallingText from "../../ReactBits/FallingText/FallingText";
import SpotlightCard from "../../ReactBits/SpotlightCard/SpotlightCard";
import { TbWorldCode } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { PiNotePencilBold } from "react-icons/pi";
import { ImPen } from "react-icons/im";

const features = [
  {
    name: "Web Development",
    description:
      "Designed by Good GoodWeb development refers to the process of building and maintaining websites or web applications. It encompasses a range of activities, including web design, coding, programming, and content creation.",
  },
  {
    name: "Mobile App Development",
    description:
      "Mobile app development involves the creation of software applications specifically designed to run on mobile devices such as smartphones and tablets.",
  },
  {
    name: "UI/UX Design",
    description:
      "UI/UX design merges aesthetic appeal with seamless functionality. UI (User Interface) design focuses on visual elements, while UX (User Experience) design enhances overall interaction.",
  },
  {
    name: "Graphic Design",
    description:
      "Graphic design is the art of visual communication, combining creativity and technology to convey messages through images, typography, and layout.",
  },
  // { name: "Includes", description: "Wood card tray and 3 refill packs" },
  // {
  //   name: "Considerations",
  //   description:
  //     "Made from natural materials. Grain and color vary with each item.",
  // },
];

export default function Example() {
  return (
    <div className="bg-[#0D1B2A]">
      <header className="absolute inset-x-0 top-0 z-50 px-10">
        <Navbar />
      </header>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 py-24 sm:px-6 sm:pt-44 lg:max-w-7xl lg:grid-cols-2 lg:px-8 px-6 pt-5 relative isolate">
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
        <div>
          <BlurText
            text="What I Offer"
            delay={300}
            animateBy="words"
            className="text-[60px] font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
          />
          <p className="mt-4 text-gray-200">
            I craft modern various solutions, including responsive websites,
            custom dashboards, and eye catching designs using React, Tailwind,
            backend APIs and many tools designed to boost business efficiency
            and deliver a seamless user experience.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="shadow-md p-2">
                <dt className="font-medium text-white text-2xl">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="font-family-Poppins text-xl font-bold">
              Web Development
            </h1>
            <TbWorldCode className="text-8xl" />
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="font-family-Poppins text-xl font-bold text-center">
              Mobile App Development
            </h1>
            <CiMobile3 className="text-8xl" />
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="font-family-Poppins text-xl font-bold">
              UI/UX Design
            </h1>
            <PiNotePencilBold className="text-8xl" />
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="font-family-Poppins text-xl font-bold">
              Graphic Design
            </h1>
            <ImPen className="text-8xl" />
          </SpotlightCard>
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
      <div className="h-[300px] px-20">
        <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          // mouseConstraintStiffness={0.9}
          mouseConstraintStiffness={1.8}
        />
      </div>
    </div>
  );
}

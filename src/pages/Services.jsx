import BlurText from "../../ReactBits/BlurText/BlurText";
import Navbar from "../components/Navbar";
import FallingText from "../../ReactBits/FallingText/FallingText";

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
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 py-24 sm:px-6 sm:pt-44 lg:max-w-7xl lg:grid-cols-2 lg:px-8 px-6 pt-5 relative isolate">
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
            text="I’m Sahan Kalhara"
            delay={300}
            animateBy="words"
            className="text-[50px] font-bold mb-8 text-blue-600 leading-12 font-family-Poppins"
          />
          <p className="mt-4 text-gray-200">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white text-xl">
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
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
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

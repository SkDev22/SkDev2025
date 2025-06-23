import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div className="bg-[#0D1B2A] h-screen">
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
        <div className="mx-auto max-w-3xl pt-[100px] sm:pt-[136px]">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-blue-600 sm:text-[85px] font-family-Poppins">
              Software Engineer and Designer
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white font-family-Ubuntu sm:text-xl/8 ">
              Hello! I'm{" "}
              <span className="text-blue-600 font-semibold px-2 text-[22px] rounded-lg">
                Sahan Kalhara
              </span>
              , a software engineer and designer with a passion for creating
              innovative solutions. I specialize in building web applications
              and Graphic Design. With a strong foundation in both front-end and
              back-end development, I strive to deliver high-quality, scalable
              software that meets the needs of users.
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-6 mt-8">
            <Link to="https://web.facebook.com/sahan.kalhara.3572">
              <FaFacebookSquare className="text-3xl text-white hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link to="https://www.instagram.com/__sahan_kalhara__/">
              <FaSquareInstagram className="text-3xl text-white hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link to="https://www.tiktok.com/@sahankalhara_98?lang=en">
              <AiFillTikTok className="text-[33px] text-white hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link to="https://www.linkedin.com/in/sahan-kalhara-04b068216/">
              <FaLinkedin className="text-3xl text-white hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link to="https://github.com/SkDev22">
              <FaGithub className="text-3xl text-white hover:text-blue-600 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
}

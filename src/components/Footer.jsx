import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between pt-10 pb-2 px-20 text-pretty bg-[#0D1B2A]">
      <div className="flex">
        <Link to="/">
          <h1 className="text-2xl text-white font-semibold font-family-EduNSWACTCursive">
            SkDev
          </h1>
        </Link>
      </div>
      <div className="flex text-gray-500 font-family-Poppins">
        <h1>
          © {new Date().getFullYear()} Sahan Kalhara. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;

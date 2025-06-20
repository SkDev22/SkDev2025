import { Link } from "react-router-dom";
import GlareHover from "../../ReactBits/GlareHover/GlareHover";
import { FaLink } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({
  icon: Icon,
  iconBg,
  title,
  description,
  githubLink,
  liveLink,
  bgColor = "#1B263B",
}) => {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={900}
      playOnce={false}
      style={{
        width: "400px",
        height: "250px",
        backgroundColor: bgColor,
        borderRadius: "0.9rem",
        border: "transparent",
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        alignItems: "start",
        justifyContent: "start",
        gap: "1rem",
        color: "#ffffff",
      }}
    >
      {Icon && (
        <Icon
          style={{ backgroundColor: iconBg }}
          className="rounded-full text-4xl p-1.5"
        />
      )}
      <h1 className="text-xl font-bold font-family-Poppins">{title}</h1>
      <p className="font-family-Ubuntu text-pretty text-gray-300">
        {description}
      </p>
      <div className="flex flex-col gap-1">
        {githubLink && (
          <Link
            to={githubLink}
            target="_blank"
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <FaLink />
            GitHub
          </Link>
        )}
        {liveLink && (
          <Link
            to={liveLink}
            target="_blank"
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <TbWorldWww />
            Live Demo
          </Link>
        )}
      </div>
    </GlareHover>
  );
};

export default ProjectCard;

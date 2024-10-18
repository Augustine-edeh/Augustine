import Tilt from "react-parallax-tilt";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import ProjectCard from "./ProjectCard";

// Cloundinary Image instance setup
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});

// Type definitions for the project data
type Project = {
  title: string;
  description: string;
  technologiesUsed: string[];
  liveUrl: string;
  githubUrl: string;
  cldImg_publicId: string;
};

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-x-60 gap-y-28 lg:gap-y-60 mt-20">
      {projects &&
        projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
    </ul>
  );
};

export default ProjectList;

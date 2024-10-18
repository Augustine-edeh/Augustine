import ProjectCard from "./ProjectCard";

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

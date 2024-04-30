import ProjectList from "../components/ProjectList";
import SectionContainer from "../components/SectionContainer";

SectionContainer;

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <p className="font-bold text-gray-400">My works?</p>

      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800 dark:text-gray-100 underline underline-offset-8 decoration-blue-500">
        Projects.
      </h2>

      <p className="text-gray-400">Checkout some of my works...</p>

      <ProjectList />
    </SectionContainer>
  );
};

export default Projects;

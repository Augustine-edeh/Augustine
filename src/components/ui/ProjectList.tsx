import Tilt from "react-parallax-tilt";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

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
          <Tilt>
            <li
              key={Math.random()}
              className={`flex flex-col rounded-2xl lg:rounded-none overflow-hidden ring-2 lg:ring-0 shadow-2xl max-w-96 h-[calc(100vh-250px)] 
    lg:h-[calc(100vh/2.1)] lg:max-w-screen-xl lg:shadow-none ${
      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    }`}
            >
              {/* project image section */}
              <div className="bg-blue-300 h-[40%] lg:h-full lg:w-[80%] m-2 rounded-md overflow-hidden">
                <AdvancedImage
                  cldImg={cld.image(`${project.cldImg_publicId}`)}
                  className="h-full w-full"
                  alt={project.title}
                />
              </div>

              {/* text area section */}
              <div
                className={`z-10 flex flex-col h-[60%] lg:h-auto py-3 px-3 bg-slate-800/80 text-center text-sm lg:w-1/2 ${
                  index % 2 === 0 ? "lg:-ml-10" : "lg:-mr-10"
                } lg:mt-16 lg:mb-2 lg:shadow-xl`}
              >
                <h4 className="text-2xl font-bold uppercase mt-3 lg:mt-10">
                  {project.title}
                </h4>

                <p className="my-7 text-[14px] text-gray-300">
                  {project.description}
                </p>

                {/* technologies used */}
                <ul className="flex flex-wrap gap-2 justify-center">
                  {project.technologiesUsed.map((technology, index) => (
                    <li
                      key={index}
                      className="bg-gray-700/50 px-2 py-0.5 rounded"
                    >
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center gap-x-5 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2 bg-blue-700 hover:bg-blue-600 focus:bg-blue-800 focus:outline-1 outline-offset-2 outline-transparent rounded-2xl px-4 py-1.5"
                  >
                    Live Preview
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2 focus:outline-1 outline-offset-2 outline-transparent rounded-2xl ring-1 ring-gray-300/50 px-4 py-1.5"
                  >
                    Check on GitHub
                  </a>
                </div>
              </div>
            </li>
          </Tilt>
        ))}
    </ul>
  );
};

export default ProjectList;

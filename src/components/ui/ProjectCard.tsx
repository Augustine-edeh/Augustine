import Tilt from "react-parallax-tilt";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

// Cloudinary Image instance setup
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});

const ProjectCard = ({ project, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <li>
      <Tilt
        key={project.githubUrl}
        className={`flex flex-col rounded-2xl lg:rounded-none overflow-hidden ring-2 lg:ring-0 shadow-2xl max-w-96 h-[calc(100vh-250px)] 
      lg:h-[calc(100vh/2.1)] lg:max-w-7xl lg:shadow-none ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      >
        {/* Project image section */}
        <div className="h-[40%] lg:h-full lg:w-[90%] m-2 lg:m-0 rounded-md overflow-hidden">
          <SkeletonTheme baseColor="#1e293b" highlightColor="#64748b">
            {isLoading && <Skeleton height={"99%"} />}
          </SkeletonTheme>

          {!hasError && (
            <AdvancedImage
              cldImg={cld.image(`${project.cldImg_publicId}`)}
              className="h-full w-full"
              alt={project.title}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false); // Stop showing skeleton
                setHasError(true); // Set error state
              }}
            />
          )}

          {hasError && (
            <p className="grid place-content-center text-center text-gray-400 bg-slate-500 h-full w-full">
              Image failed to load.
            </p>
          )}
        </div>

        {/* Project text section */}
        <div
          className={`z-10 flex flex-col h-[60%] lg:h-auto py-3 px-3 bg-slate-800/80 text-center lg:w-1/2 lg :w-[50%] ${
            index % 2 === 0 ? "lg:-ml-10" : "lg:-mr-10"
          } lg:mt-10 lg:mb-2 lg:shadow-xl overflow-scroll`}
        >
          {/* Project title */}
          <h4 className="text-2xl font-bold uppercase mt-3 lg:mt-4">
            {project.title}
          </h4>

          <hr className=" border-slate- 400" />

          {/* Project description */}
          <p className="my-7 text-sm lg:text-lg text-gray-300">
            {project.description}
          </p>

          {/* Technologies used */}
          <ul className="flex flex-wrap gap-2 justify-center">
            {project.technologiesUsed.map((technology, index) => (
              <li key={index} className="bg-gray-700/50 px-2 py-0.5 rounded">
                {technology}
              </li>
            ))}
          </ul>

          {/* Project links */}
          <div className="flex justify-center gap-x-5 mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2 bg-blue-700 hover:bg-blue-600 focus:bg-blue-800 focus:outline-1 outline-offset-2 outline-transparent rounded-2xl px-4 py-1.5"
              aria-label={`View live preview of the ${project.title} project`}
            >
              Live Preview
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2 focus:outline-1 outline-offset-2 outline-transparent rounded-2xl ring-1 ring-gray-300/50 px-4 py-1.5"
              aria-label={`Go to gitHub repo of the ${project.title} project`}
            >
              Check on GitHub
            </a>
          </div>
        </div>
      </Tilt>
    </li>
  );
};

export default ProjectCard;

import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectList = [
    {
      title: "Countries at a glance",
      description:
        "A dynamic level react project, utuilizing the restCountries API for getting countries inforainformations and other general knowledge about countries",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/countries-at-a-glance",
      liveUrl: "https://countriesataglance.vercel.app",
      technologiesUSed: [
        "Vite",
        "React.js",
        "TailwindCSS",
        "Rest Countries API",
        "Vercel",
      ],
    },
    {
      title: "Qr Xpress",
      description:
        "A QR code hub for creating, downloading and scanning  qr codes",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/Qr-Xpress",
      liveUrl: "https://qr-xpress.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Damilare",
      description:
        "A complete functional portfolio webpage I creared for my 7 years old nephew who is developing an interest in technology and games",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/damilare",
      liveUrl: "https://damilareai.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Dynamic Calculator web app",
      description:
        "Multi-arithmetic calculator web app. For non-scientific arithmatic calculations, with a subtle error vibration indiccator function for mobile devices",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/dynamic-calculator",
      liveUrl: "https://dynamic-calculator.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Gym Buddy",
      description:
        "A MERN stack web application for tracking workout exercises",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/Gym-Buddy",
      liveUrl: "https://gym-buddy.vercel.app",
      technologiesUSed: [
        "Vite",
        "Typescript",
        "React.js",
        "TailwindCSS",
        "MongoDB",
        "ExpressJS",
        "Vercel",
      ],
    },
    {
      title: "Go Country",
      description:
        "Former Version of the Countries at a glance project. Get general information on the countries of the world",
      image: "/vite.svg",
      githubUrl: "https://github.com/augustine-edeh/Gocountry.vercel.app",
      liveUrl: "https://Gocountry.vercel.app",
      technologiesUSed: [
        "Vite",
        "React.js",
        "TailwindCSS",
        "Rest Countries API",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen max-w-screen-lg px-8 mx-auto text-white pt-20 bg-red-30"
    >
      <p className="font-bold text-gray-400">My works?</p>

      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800 dark:text-gray-100 underline underline-offset-8 decoration-blue-500">
        Projects.
      </h2>

      <p className="text-gray-400">Checkout some of my works...</p>

      {/* project items */}
      <ul className="flex flex-wrap justify-center gap-x-3 gap-y-28 lg:gap-y-60 mt-20 p-">
        {projectList &&
          projectList.map((project) => (
            <li
              key={Math.random()}
              className="flex flex-col rounded-2xl lg:rounded-none overflow-hidden ring- shadow-2xl max-w-96 h-[calc(100dvh-200px)] 
              lg:h-[calc(100dvh/2)] lg:flex-row lg:max-w-screen-xl lg:shadow-none"
              // project items height is in the above logic (min-height)
            >
              {/* project image section */}
              <div className="bg-blue-300 h-[40%] lg:w-1/2 lg:h-full lg:w-[80%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bg-gray-400 w-full h-full"
                />
              </div>

              {/* text area section */}
              <div className="flex flex-col h-[60%] lg:h-auto py-3 px-3 bg-slate-800/80  text-center text-sm lg:w-1/2 lg:-ml-10 lg:mt-16 lg:mb-2 lg:shadow-xl ">
                <h4 className="text-xl font-bold uppercase mt-3 lg:mt-10">
                  {project.title}
                </h4>

                <p className="my-7">{project.description}</p>

                {/* technologies used */}
                <ul className="flex flex-wrap gap-x-2 gap-y-2 justify-center">
                  {project.technologiesUSed.map((technology) => (
                    <li className="bg-gray-700/50 px-2 py-0.5 rounded">
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center  gap-x-5 mt-auto">
                  <button className="  bg-blue-700 rounded-2xl px-4 py-1.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="underline underline-offset-2"
                    >
                      Live Preview
                    </a>
                  </button>

                  <button className="rounded-2xl ring-1 ring-gray-300/50 px-4 py-1.5">
                    <a href={project.githubUrl} target="_blank" className="">
                      Check on github
                    </a>
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Projects;

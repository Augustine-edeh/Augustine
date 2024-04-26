import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectList = [
    {
      title: "Countries at a glance",
      description:
        "A dynamic level react project, utuilizing the restCountries API for getting countries inforainformations and other general knowledge about countries",
      image: "https://i.imgur.com/6sCnlAq.png",
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
      image: "https://i.imgur.com/6sCnlAq.png",
      githubUrl: "https://github.com/augustine-edeh/Qr-Xpress",
      liveUrl: "https://qr-xpress.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Damilare",
      description:
        "A complete functional portfolio webpage I creared for my 7 years old nephew who is developing an interest in technology and games",
      image: "https://i.imgur.com/6sCnlAq.png",
      githubUrl: "https://github.com/augustine-edeh/damilare",
      liveUrl: "https://damilareai.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Dynamic Calculator web app",
      description:
        "Multi-arithmetic calculator web app. For non-scientific arithmatic calculations, with a subtle error vibration indiccator function for mobile devices",
      image: "https://i.imgur.com/6sCnlAq.png",
      githubUrl: "https://github.com/augustine-edeh/dynamic-calculator",
      liveUrl: "https://dynamic-calculator.vercel.app",
      technologiesUSed: ["Vite", "React.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "Gym Buddy",
      description:
        "A MERN stack web application for tracking workout exercises",
      image: "https://i.imgur.com/6sCnlAq.png",
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
      image: "https://i.imgur.com/6sCnlAq.png",
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
      className="min-h-screen max-w-screen-md px-8 mx-auto text-white pt-20 bg-red-30"
    >
      <p className="font-bold text-gray-400">My works?</p>

      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800 dark:text-gray-100 underline underline-offset-8 decoration-blue-500">
        Projects.
      </h2>

      <p className="text-gray-400">Checkout some of my works...</p>

      <ul className="flex flex-wrap gap-x-3 gap-y-10 bg-red-600 mt-20 p-2">
        {projectList &&
          projectList.map((project) => (
            <li
              key={Math.random()}
              className="flex flex-col bg-purple-700 w-96 rounded-2xl overflow-hidden"
            >
              <div className="bg-blue-300 h-[48%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bg-gray-400 w-full h-full"
                />
              </div>

              <div className="relative flex flex-col mx-4 h-[52%] bg-yellow-950 py-3">
                <h4 className="text-center text-lg font-bold uppercase mb-4 bg-red-500">
                  {project.title}
                </h4>

                <p className="bg-blue-500">{project.description}</p>

                <ul className="flex flex-wrap py-5 gap-x-2 gap-y-2">
                  {project.technologiesUSed.map((technology) => (
                    <li className="bg-green-900 px-2 rounded">
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center gap-x-5 bg-yellow-500 text-center absolute bottom-0 w-full">
                  <button className="bg-green-300 rounded-2xl px-4 py-1.5">
                    Live preview
                  </button>

                  <button className="rounded-2xl ring-1 ring-gray-300/50 px-4 py-1.5">
                    Check on github
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

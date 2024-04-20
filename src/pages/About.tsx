import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const tools = [
    {
      toolName: "HTML",
      icon: "../../public/html.png",
      alt: "HTML",
    },
    {
      toolName: "CSS",
      icon: "../../public/css.png",
      alt: "CSS",
    },
    {
      toolName: "JavaScript",
      icon: "../../public/js.png",
      alt: "javascript",
    },
    {
      toolName: "git",
      icon: "../../public/git.png",
      alt: "git",
    },
    {
      toolName: "gitHub",
      icon: "../../public/github (1).png",
      alt: "gitHub",
    },
    {
      toolName: "ReactJS",
      icon: "",
      alt: "ReactJS",
    },
    {
      toolName: "Netlify",
      icon: "",
      alt: "Netlify",
    },
    {
      toolName: "Vercel",
      icon: "",
      alt: "Vercel",
    },
    {
      toolName: "TailwindCSS",
      icon: "",
      alt: "Tailwind",
    },
    {
      toolName: "Vite",
      icon: "",
      alt: "Vite",
    },
    {
      toolName: "Typescript",
      icon: "../../public/typescript.png",
      alt: "Typescript",
    },
    {
      toolName: "Nodejs",
      icon: "../../public/nodeJS.png",
      alt: "Nodejs",
    },
    {
      toolName: "Express",
      icon: "",
      alt: "Express",
    },
    {
      toolName: "MongoDB",
      icon: "",
      alt: "MongoDB",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-8 lg:px-32 bg-slate-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        className="py-16 px-8 lg:px-32 bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-">
          <p className="font-bold text-gray-400">So, who am I?</p>

          <motion.h2
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-gray-200 mb-6 mt-5 underline underline-offset-8 decoration-blue-500"
          >
            About Me.
          </motion.h2>
          <motion.p
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            {/* <p>
              As an advancing frontend web developer, I'm passionate about
              leveraging technology to create engaging and user-friendly
              experiences. Beyond coding, I'm also an enthusiast in aerospace
              and aviation, finding inspiration from the innovation and
              precision in this field.
            </p> */}
            <div className="flex flex-col gap-3 sm:text-justify">
              <p>
                Hi there! I'm Augustine Edeh, a frontend developer with a
                passion for crafting captivating digital experiences and a love
                for all things aviation. Inspired by the dynamic nature of web
                development and the awe-inspiring world of aviation, I'm on a
                mission to merge my technical skills with my passion for flight.
              </p>
              <p>
                As a frontend developer, I thrive on mastering cutting-edge
                technologies and frameworks, ensuring seamless user interactions
                and visually stunning designs. Simultaneously, my fascination
                with aviation fuels my curiosity and adds a unique perspective
                to my work, blending innovation with a sense of wonder.
              </p>
              <p>
                Whether I'm coding elegant UI components or exploring the skies
                in my free time, I'm driven by a relentless pursuit of
                excellence and a commitment to pushing the boundaries of what's
                possible. Ready to embark on new adventures and create
                extraordinary digital experiences. Let's soar to new heights
                together!
              </p>
            </div>
          </motion.p>
        </div>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-bold text-gray-200 mb-6"
          >
            Some of the tools & technologies I use:
          </motion.h2>
          <ul className="grid grid-cols-3 md:flex md:flex-wrap gap-3 text-white">
            {tools &&
              tools.map((tool) => (
                <li className="flex md:flex-col items-center justify-center md:w-32 md:h-28 p-3 gap-2.5 rounded-lg bg-slate-800 shadow-md shadow-blue-700">
                  <motion.img
                    // variants={headerVariants}
                    // transition={{ duration: 0.6, delay: 0.5 }}
                    // className="text-lg text-gray-300 mb-8"
                    // src={tool.icon}
                    src={tool.icon}
                    alt="."
                    key={Math.random()}
                    className="h-6"
                  />

                  <span>{tool.toolName}</span>
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
  // const first = (second) => {
  //   third;
  // };
};

export default About;

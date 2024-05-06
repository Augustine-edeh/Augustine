import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skills from "../components/Skills";

import SectionContainer from "../components/SectionWrapper";

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

  return (
    <SectionContainer id="about">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        className="py-16 px- lg:px-32 bg-slate-900"
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

        <Skills />
      </motion.div>
    </SectionContainer>
  );
  // const first = (second) => {
  //   third;
  // };
};

export default About;

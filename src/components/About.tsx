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

  return (
    <div className="min-h-screen py-16 px-8 lg:px-32 bg-slate-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        // className="py-16 px-8 lg:px-32 bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-gray-200 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            As an advancing frontend web developer, I'm passionate about
            leveraging technology to create engaging and user-friendly
            experiences. Beyond coding, I'm also an enthusiast in aerospace and
            aviation, finding inspiration from the innovation and precision in
            this field.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
  // const first = (second) => {
  //   third;
  // };
};

export default About;

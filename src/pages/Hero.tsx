import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // const headerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  return (
    // FIXME: height should = screen - 20 tailwind units
    // FIXME: 20 units is from h-20 on header component
    <motion.div
      id="/"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col gap-20 lg:flex-row justify-center items-center bg-slate-900 max-w-screen-lg mx-auto px-8"
    >
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          // delay: 0.5,
          duration: 0.6,
        }}
        className="flex h-56 z-0"
      >
        <div className="container h-full w-56 bg-black rounded-lg overflow-clip z-10 shadow-2xl">
          <picture>
            <source type="image/webp" srcSet="/profileImg.webp" />
            <img src="/profileImg.png" alt="Augustine" className="" />
          </picture>
        </div>
        <div className="h-full w-56 h bg-slate-800 rounded-lg -ml-44 mt-8 shadow-xl"></div>
      </motion.section>

      <section className="text-white text-center">
        <h3 className="text-2xl">Hello, I'm</h3>
        <div>
          <p className="text-3xl my-5 font-extrabold">Augustine Edeh</p>
          <p className="p-0 mt-8">
            a passionate{" "}
            <span className="text-2xl text-blue-400">Frontend Developer </span>
            {/* <span className="text-teal-500 text-2xl">
              Advancing frontend developer
            </span>{" "} */}
            & a
            <span className="text-teal-500/80 text-lg">
              {" "}
              fullstack developer
            </span>{" "}
            in the making (self tught)
          </p>
        </div>

        <div className="flex mx-auto gap-x-5 w-fit my-10">
          <a
            href="/Augustine_edeh-CV.pdf"
            className="grid place-items-center outline outline-1 rounded-3xl px-2 py-2"
            download
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="bg-slate-700 rounded-3xl px-3 py-3.5 shadow-xl"
          >
            Contact me
          </a>
        </div>

        <div className="flex justify-center gap-x-5">
          <a
            href="https://www.linkedin.com/in/augustine-edeh/"
            target="_blank"
            className="grid place-items-center bg-slate-700 rounded-full h-12 w-12"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2xl"
              className="h-8 text-white"
            />
          </a>
          <a
            href="https://github.com/Augustine-edeh"
            target="_blank"
            className="bg-slate-700 rounded-full h-12 w-12"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="h-full w-full text-white"
            />
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;

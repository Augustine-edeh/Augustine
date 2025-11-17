import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

type Skills = {
  toolName: string;
  icon: string;
  alt: string;
};

type SkillsProps = {
  skillSet: Skills[];
};

const Skills = ({ skillSet }: SkillsProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        ref={ref}
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          variants={headerVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl font-bold dark:text-gray-200 mb-6"
        >
          Skills & Tools:
        </motion.p>

        <motion.ul
          variants={headerVariants}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:flex md:flex-wrap gap-3 dark:text-white"
        >
          {skillSet &&
            skillSet.map((skill_tool) => (
              <li
                className="flex md:flex-col items-center justify-center md:w-32 md:h-28 py-3 gap-2.5 rounded-lg outline outline-1 outline-slate-800 dark:bg-slate-800 shadow-md dark:shadow-blue-900/50"
                key={skill_tool.toolName}
              >
                {/* <motion.img
              // variants={headerVariants}
              // transition={{ duration: 0.6, delay: 0.5 }}
              // className="text-lg text-gray-300 mb-8"
              // src={tool.icon}
              src={tool.icon}
              alt="."
              key={Math.random()}
              className="h-6"
            /> */}
                <Icon icon={skill_tool.icon} width="32" height="32" />
                <span>{skill_tool.toolName}</span>
              </li>
            ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Skills;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiFigma,
  SiMysql,
  SiCplusplus,
  SiC
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });


  // Programming languages for horizontal scroll
  const programmingLanguages = [
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },

  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiMysql className="text-[#4169E1]" /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  };


  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-purple-100 rounded-full opacity-20"
        animate={{
          x: [-50, 50, -50],
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Technologies I work with to build amazing applications
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-6"
                  whileHover={{ color: "#2563eb" }}
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                      }}
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="text-4xl mb-2"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Horizontal Scrolling Languages Section */}
        <div className="mt-16 mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            Programming Languages
          </motion.h3>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
              className="flex overflow-x-auto py-4 hide-scrollbar"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex space-x-12 mx-auto">
                {programmingLanguages.map((language, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center min-w-[80px]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-5xl mb-2 p-4 bg-gray-50 rounded-full">
                      {language.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{language.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS or in a style tag
// .hide-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// .hide-scrollbar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }

export default Skills;





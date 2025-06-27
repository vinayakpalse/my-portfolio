import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Travel and Hospitality",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML/CSS", "JavaScript", "MySql", "PHP"],
      githubUrl: "https://github.com/vinayakpalse/VVP-Travel"
    },
    {
      title: "Student Portfolio  Management Website",
      description: "A collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML/CSS", "JavaScript", "MySql", "PHP"],
      githubUrl: "https://github.com/vinayakpalse/student-management-system-"
    },
    {
      title: "AgriTech",
      description: "A responsive weather application that provides current weather, 7-day forecast, and weather maps using multiple APIs.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React","JavaScript", "OpenWeather API", "Chart.js", "CSS3","Mongodb","AI/ML"],
      githubUrl: "https://github.com/vinayakpalse/AgriTech"
    },
   /* {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern animations and interactive elements.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://your-project.com",
      githubUrl: "https://github.com/yourusername/project"
    }*/
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
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
              Featured Projects
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
              A showcase of my recent work and personal projects
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                data-cursor="pointer"
              >
                <div className="relative group overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      data-cursor="pointer"
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-2"
                    whileHover={{ color: "#2563eb" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                        data-cursor="pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      data-cursor="pointer"
                    >
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      data-cursor="pointer"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
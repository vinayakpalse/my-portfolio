import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Lightbulb, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your image paths here (place images in public folder)
  const images = [
    '/vvp.jpg',
    '/vvp2.jpg', // Replace with your second image
    '/vvp3.jpg'  // Replace with your third image
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on delivering results and meeting objectives"
    }
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
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
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                className="text-2xl font-semibold text-gray-900"
                whileHover={{ color: "#2563eb" }}
              >
                Passionate About Creating Digital Solutions
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I am currently pursuing a B.Tech in Computer Engineering at Vishwakarma Institute of Technology, Pune. As a passionate full-stack web developer, I've built and contributed to several college-level projects with a focus on backend integration and MySQL-driven applications. I have a strong command of problem-solving and software development principles, allowing me to create scalable and efficient web solutions. I actively sharpen my skills in Data Structures and Algorithms (DSA) using Java, and frequently participate in competitive programming to stay ahead technically.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Alongside web development, I am expanding my knowledge in the fields of Artificial Intelligence, Machine Learning, and Data Science by developing practical, tech-driven projects. My learning philosophy revolves around building while learning—translating academic knowledge into real-world impact. With a blend of technical depth and a continuous learner mindset, I aim to contribute meaningfully to innovative and user-centric software solutions.
              </motion.p>

              <motion.div
                className="grid sm:grid-cols-3 gap-4 mt-8"
                variants={containerVariants}
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    }}
                    data-cursor="pointer"
                  >
                    <motion.div
                      className="text-blue-600 mb-2 flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-[500px] min-h-[600px] flex items-center justify-center">
                {/* Image Carousel Container - now sized to fit image */}
                <motion.div
                  className="relative w-full h-auto max-h-[600px] overflow-hidden rounded-xl shadow-2xl bg-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Current Image - now using object-contain to prevent cropping */}
                  <img
                    src={images[currentImageIndex]}
                    alt="Vinayak Palse"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-400'}`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-600 rounded-full opacity-20 -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-purple-600 rounded-full opacity-20 -z-10"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
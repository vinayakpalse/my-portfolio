import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 'w-20 h-20', color: 'bg-blue-200', delay: 0, duration: 6 },
    { size: 'w-16 h-16', color: 'bg-purple-200', delay: 1, duration: 8 },
    { size: 'w-12 h-12', color: 'bg-pink-200', delay: 2, duration: 7 },
    { size: 'w-24 h-24', color: 'bg-indigo-200', delay: 0.5, duration: 9 },
    { size: 'w-14 h-14', color: 'bg-cyan-200', delay: 1.5, duration: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-20`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
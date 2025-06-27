import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} Vinayak Palse.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
              <span>Thank for your time....!</span>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vinayakpalse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vinayak-palse-b6b249288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
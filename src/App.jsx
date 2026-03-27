import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-background min-h-screen text-gray-300 selection:bg-accent/20 overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <Hero />
        
        <Skills />
        
        <section id="proyectos" className="relative mt-12 sm:mt-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white">Proyectos</h2>
              <p className="text-gray-400 mt-2">Una selección de mis trabajos más recientes</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (24 / itemsPerPage)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((p) => (
                <div 
                  key={p.id} 
                  className="shrink-0 transition-all duration-500"
                  style={{ width: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})` }}
                >
                  <ProjectCard {...p} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-12 gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-accent' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
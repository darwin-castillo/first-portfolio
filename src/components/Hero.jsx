import { motion } from 'framer-motion';
import profileImg from '../assets/photo.jpg';

const Hero = () => {
    return (
        <section className="pt-20 sm:pt-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <span className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase border-b-2 border-accent/30 pb-1">Disponible para proyectos</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 tracking-tight leading-[1.1]">
                        Darwin Castillo <br className="hidden sm:block" />
                        <span className="text-accent">Desarrollador FullStack</span>
                    </h1>
                    <p className="mt-8 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                        Apasionado por la tecnología, me gusta crear soluciones innovadoras y eficientes. Me considero una persona proactiva, responsable y con gran capacidad de aprendizaje.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#proyectos" className="px-8 py-4 bg-accent text-background rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20">
                            Ver Proyectos
                        </a>
                        <a href="#contacto" className="px-8 py-4 border border-gray-800 text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300">
                            Contacto
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Smartphone Mockup */}
                    <div className="relative w-[280px] sm:w-[320px] aspect-[9/19.5] bg-gray-900 rounded-[3rem] border-[12px] border-gray-800 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] overflow-hidden">
                        {/* Notch / Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            <div className="w-10 h-1.5 rounded-full bg-gray-700"></div>
                        </div>

                        {/* Screen Content (Profile Image) */}
                        <div className="absolute inset-0 z-10">
                            <img
                                src={profileImg}
                                alt="Darwin Castillo Profile"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay UI elements to make it look like a real app or OS */}
                            <div className="absolute bottom-10 left-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Darwin Castillo</p>
                                <p className="text-xs font-medium mt-1">Full Stack Dev & UI/UX enthusiast</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Blobs */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
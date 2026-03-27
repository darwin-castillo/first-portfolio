import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gray-900/40 backdrop-blur-md border border-gray-800 shadow-xl"
            >
                <a href="#" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-accent transition-colors">Inicio</a>
                <a href="#proyectos" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-accent transition-colors">Proyectos</a>
                <a href="#contacto" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-accent transition-colors">Contacto</a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
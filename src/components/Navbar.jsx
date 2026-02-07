import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex gap-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm"
            >
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Inicio</a>
                <a href="#proyectos" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Proyectos</a>
                <a href="#contacto" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contacto</a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
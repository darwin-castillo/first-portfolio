import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-accent font-mono text-sm tracking-widest uppercase">Disponible para proyectos</span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mt-4 tracking-tight">
                    Darwin Castillo <br />
                    <span className="text-blue-500">Desarrollador FullStack </span>
                </h1>
                <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
                    Apasionado por la tecnología, me gusta crear soluciones innovadoras y eficientes. Me considero una persona proactiva, responsable y con gran capacidad de aprendizaje.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
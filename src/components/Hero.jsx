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
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 tracking-tight">
                    Desarrollo lógica robusta <br />
                    <span className="text-gray-400">y experiencias móviles.</span>
                </h1>
                <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
                    Especializado en arquitecturas escalables de Node.js y aplicaciones móviles de alto rendimiento. Menos código, más impacto.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Smartphone } from 'lucide-react';

const ProjectCard = ({ title, description, stack, category, link }) => {
    console.log(stack);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#111] rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-900/10 transition-all duration-500 border border-gray-800 flex flex-col h-full"
        >
            {/* Image Side - Now Top */}
            <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-white shadow-sm border border-gray-800">
                        {category === 'Backend' ? <Server size={14} className="text-accent" /> : <Smartphone size={14} className="text-accent" />}
                        <span className="text-[10px] uppercase tracking-wider font-bold">{category}</span>
                    </div>
                </div>
            </div>

            {/* Content Side - Now Bottom */}
            <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 line-clamp-1">
                        {title}
                    </h3>
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {stack.slice(0, 3).map((t) => (
                            <span key={t} className="px-2.5 py-1 bg-accent/10 text-accent text-[9px] font-semibold rounded-lg border border-accent/20">
                                {t}
                            </span>
                        ))}
                        {stack.length > 3 && (
                            <span className="px-2.5 py-1 bg-gray-800 text-gray-400 text-[9px] font-semibold rounded-lg border border-gray-700">
                                +{stack.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-xl hover:bg-white transition-all duration-300 text-xs font-bold group/btn">
                        Ver más
                        <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <a href={link} className="p-2 text-gray-500 hover:text-accent hover:bg-gray-800 rounded-lg transition-all duration-300" title="GitHub Repository">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
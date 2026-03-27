import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Smartphone } from 'lucide-react';

const ProjectCard = ({ title, description, stack, category, link }) => {
    console.log(stack);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
        >
            {/* Image Side - Now Top */}
            <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 shadow-sm">
                        {category === 'Backend' ? <Server size={14} className="text-blue-500" /> : <Smartphone size={14} className="text-purple-500" />}
                        <span className="text-[10px] uppercase tracking-wider font-bold">{category}</span>
                    </div>
                </div>
            </div>

            {/* Content Side - Now Bottom */}
            <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {title}
                    </h3>
                    <p className="text-gray-500 mt-3 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {stack.slice(0, 3).map((t) => (
                            <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[9px] font-semibold rounded-lg border border-blue-100/50">
                                {t}
                            </span>
                        ))}
                        {stack.length > 3 && (
                            <span className="px-2.5 py-1 bg-gray-50 text-gray-400 text-[9px] font-semibold rounded-lg border border-gray-100/50">
                                +{stack.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 text-xs font-medium group/btn">
                        Ver más
                        <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <a href={link} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300" title="GitHub Repository">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
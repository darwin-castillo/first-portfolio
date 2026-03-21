import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Smartphone } from 'lucide-react';

const ProjectCard = ({ title, description, stack, category, link }) => {
    console.log(stack);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 py-12 border-b border-gray-100"
        >
            <div className="md:col-span-1">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                    {category === 'Backend' ? <Server size={16} /> : <Smartphone size={16} />}
                    <span className="text-xs uppercase tracking-widest font-mono">{category}</span>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>

            <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 mt-3 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                    {stack.map((t) => (
                        <span key={t} className="px-3 py-1 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="md:col-span-1 flex md:justify-end items-start gap-4 ">
                    <a href={link} className="p-2 text-gray-400 hover:text-black transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-2 text-gray-400 hover:text-black transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>


        </motion.div>
    );
};

export default ProjectCard;
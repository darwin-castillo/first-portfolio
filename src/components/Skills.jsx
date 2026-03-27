import { motion } from 'framer-motion';

const SkillGroup = ({ title, skills }) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-bold">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-gray-400 hover:border-accent hover:text-white transition-all duration-300 cursor-default shadow-sm"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const data = {
        backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Microservicios"],
        mobile: ["React Native", "Expo", "Flutter", "Firebase", "Redux", "App Store Connect"],
        tools: ["Git", "Jest", "AWS", "CI/CD", "Postman", "Agile/Scrum"]
    };

    return (
        <section className="py-10 sm:py-20 border-b border-gray-50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
                <SkillGroup title="Backend Architecture" skills={data.backend} />
                <SkillGroup title="Mobile Development" skills={data.mobile} />
                <SkillGroup title="Core & DevOps" skills={data.tools} />
            </motion.div>
        </section>
    );
};

export default Skills;
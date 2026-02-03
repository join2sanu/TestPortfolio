import { motion } from 'framer-motion';
import { FileSpreadsheet, Database, BarChart3, PieChart, LineChart, Code2 } from 'lucide-react';

const skills = [
  {
    name: 'Advanced Excel',
    icon: FileSpreadsheet,
    description: 'Pivot Tables, VLOOKUP, Macros, Data Modeling',
    proficiency: 'Expert',
  },
  {
    name: 'SQL',
    icon: Database,
    description: 'Complex Queries, Joins, CTEs, Window Functions',
    proficiency: 'Expert',
  },
  {
    name: 'Google Sheets',
    icon: FileSpreadsheet,
    description: 'Apps Script, Automation, Collaborative Analytics',
    proficiency: 'Expert',
  },
  {
    name: 'Power BI',
    icon: BarChart3,
    description: 'DAX, Data Modeling, Interactive Dashboards',
    proficiency: 'Expert',
  },
  {
    name: 'Tableau',
    icon: PieChart,
    description: 'Visual Analytics, Storytelling, LOD Expressions',
    proficiency: 'Expert',
  },
  {
    name: 'Python',
    icon: Code2,
    description: 'Pandas, NumPy, Matplotlib, Data Analysis',
    proficiency: 'Expert',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The technical toolkit I use to extract, analyze, and visualize data for impactful decision-making.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group glass-card-hover p-6 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <skill.icon size={24} />
                  </div>
                  
                  {/* Proficiency Badge - appears on hover */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full transition-all duration-300"
                  >
                    {skill.proficiency}
                  </motion.span>
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { FileSpreadsheet, Database, BarChart3, PieChart, LineChart, Code2, CheckCircle2 } from 'lucide-react';

const skills = [
  {
    name: 'Advanced Excel',
    icon: FileSpreadsheet,
    description: 'Pivot Tables, VLOOKUP, Macros, Data Modeling, Power Query, Power Pivot',
    proficiency: 98,
    level: 'Expert',
  },
  {
    name: 'SQL',
    icon: Database,
    description: 'Complex Queries, Joins, CTEs, Window Functions',
    proficiency: 90,
    level: 'Expert',
  },
  {
    name: 'Google Sheets',
    icon: FileSpreadsheet,
    description: 'Apps Script, Automation, Collaborative Analytics',
    proficiency: 98,
    level: 'Expert',
  },
  {
    name: 'Power BI',
    icon: BarChart3,
    description: 'DAX, Data Modeling, Interactive Dashboards',
    proficiency: 88,
    level: 'Expert',
  },
  {
    name: 'Tableau',
    icon: PieChart,
    description: 'Visual Analytics, Storytelling, LOD Expressions',
    proficiency: 85,
    level: 'Expert',
  },
  {
    name: 'Python',
    icon: Code2,
    description: 'Pandas, NumPy, Matplotlib, Data Analysis',
    proficiency: 82,
    level: 'Advanced',
  },
];

const additionalTools = [
  'MS Office Suite',
  'Google Analytics',
  'Jupyter Notebooks',
  'Git & GitHub',
  'Data Cleaning',
  'Statistical Analysis',
  'ETL Pipelines',
  'Data Visualization',
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full"
          >
            Technical Expertise
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The technical toolkit I use to extract, analyze, and visualize data for impactful decision-making.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group glass-card-hover p-6 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <skill.icon size={24} />
                  </div>
                  
                  {/* Level Badge */}
                  <motion.span
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill.level}
                  </motion.span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-emerald-400 rounded-full"
                  />
                </div>
                <p className="text-right text-xs text-muted-foreground mt-1">{skill.proficiency}%</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-display font-semibold text-xl text-center text-foreground mb-6">
            Also Proficient In
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
              >
                <CheckCircle2 size={14} className="text-primary" />
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

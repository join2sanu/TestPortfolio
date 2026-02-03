import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderKanban } from 'lucide-react';

const projects = [
  {
    title: 'Sales Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 2M+ sales records with drill-down capabilities, trend analysis, and predictive forecasting.',
    tags: ['Power BI', 'SQL', 'DAX'],
    github: '#',
    live: '#',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Python-based ML model achieving 92% accuracy in predicting customer churn, with feature engineering and visualization.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    github: '#',
    live: '#',
  },
  {
    title: 'Financial Reporting Automation',
    description:
      'Automated Excel-based financial reporting system using VBA macros, reducing report generation time by 85%.',
    tags: ['Excel', 'VBA', 'Automation'],
    github: '#',
    live: '#',
  },
  {
    title: 'E-commerce Data Pipeline',
    description:
      'End-to-end ETL pipeline processing daily transaction data with SQL and Python, feeding into a Tableau dashboard.',
    tags: ['SQL', 'Python', 'Tableau'],
    github: '#',
    live: '#',
  },
  {
    title: 'Marketing Campaign Analysis',
    description:
      'Comprehensive analysis of multi-channel marketing campaigns, identifying ROI optimization opportunities worth $500K+.',
    tags: ['Google Sheets', 'SQL', 'Analytics'],
    github: '#',
    live: '#',
  },
  {
    title: 'Inventory Optimization Model',
    description:
      'Predictive inventory management system reducing stockouts by 40% through demand forecasting algorithms.',
    tags: ['Python', 'Excel', 'Forecasting'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of data projects that delivered measurable business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group glass-card-hover p-6 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <FolderKanban size={24} />
                </div>
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderKanban, Star, Eye } from 'lucide-react';

const projects = [
  {
    title: 'Sales Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 2M+ sales records with drill-down capabilities, trend analysis, and predictive forecasting.',
    tags: ['Power BI', 'SQL', 'DAX'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: true,
    stats: { stars: 24, views: '1.2k' },
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Python-based ML model achieving 92% accuracy in predicting customer churn, with feature engineering and visualization.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: true,
    stats: { stars: 18, views: '890' },
  },
  {
    title: 'Financial Reporting Automation',
    description:
      'Automated Excel-based financial reporting system using VBA macros, reducing report generation time by 85%.',
    tags: ['Excel', 'VBA', 'Automation'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: false,
    stats: { stars: 12, views: '650' },
  },
  {
    title: 'E-commerce Data Pipeline',
    description:
      'End-to-end ETL pipeline processing daily transaction data with SQL and Python, feeding into a Tableau dashboard.',
    tags: ['SQL', 'Python', 'Tableau'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: true,
    stats: { stars: 31, views: '1.5k' },
  },
  {
    title: 'Marketing Campaign Analysis',
    description:
      'Comprehensive analysis of multi-channel marketing campaigns, identifying ROI optimization opportunities worth $500K+.',
    tags: ['Google Sheets', 'SQL', 'Analytics'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: false,
    stats: { stars: 8, views: '420' },
  },
  {
    title: 'Inventory Optimization Model',
    description:
      'Predictive inventory management system reducing stockouts by 40% through demand forecasting algorithms.',
    tags: ['Python', 'Excel', 'Forecasting'],
    github: 'https://github.com/sanatanjana',
    live: '#',
    featured: false,
    stats: { stars: 15, views: '780' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accents */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" 
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
            Portfolio
          </motion.span>
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
              className="group glass-card-hover p-6 flex flex-col h-full relative overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <motion.span 
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full"
                  >
                    <Star size={12} className="fill-primary" />
                    Featured
                  </motion.span>
                </div>
              )}

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <FolderKanban size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-primary" />
                    {project.stats.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {project.stats.views}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sanatanjana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass-card-hover font-display font-semibold text-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

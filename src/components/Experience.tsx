import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'IQOL Technology Pvt Ltd',
    role: 'Data Analyst',
    period: 'August 2025 – Present',
    description:
      'Leading data analytics initiatives, building dashboards, and implementing data-driven solutions to optimize business operations.',
    current: true,
  },
  {
    company: 'Credgenic',
    role: 'Data Analyst',
    period: 'May 2025 – July 2025',
    description:
      'Analyzed financial data patterns, developed predictive models, and created comprehensive reports for stakeholder decision-making.',
    current: false,
  },
  {
    company: 'Zenth Smart Learn Pvt Ltd',
    role: 'Data Analyst',
    period: 'February 2023 – May 2025',
    description:
      'Built end-to-end data pipelines, automated reporting workflows, and delivered actionable insights that improved learning outcomes.',
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey through data-driven roles where I've turned complex datasets into strategic assets.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)] glass-card-hover p-6 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{exp.role}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

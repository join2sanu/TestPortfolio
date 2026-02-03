import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'IQOL Technology Pvt Ltd',
    role: 'Data Analyst',
    period: 'August 2025 – Present',
    location: 'India',
    description:
      'Leading data analytics initiatives, building dashboards, and implementing data-driven solutions to optimize business operations.',
    achievements: [
      'Built real-time (Automateddashboards for executive decision-making',
      'Automated 15+ reporting workflows saving 20hrs/week',
      'Implemented data quality monitoring systems',
    ],
    current: true,
  },
  {
    company: 'Credgenic',
    role: 'MIS Analyst',
    period: 'May 2025 – July 2025',
    location: 'India',
    description:
      'Analyzed financial data patterns, developed predictive models, and created comprehensive reports for stakeholder decision-making.',
    achievements: [
      'Developed credit risk scoring models',
      'Created automated financial reporting pipelines',
      'Improved data accuracy by 35%',
    ],
    current: false,
  },
  {
    company: 'Zenth Smart Learn Pvt Ltd',
    role: 'MIS Executive',
    period: 'February 2023 – May 2025',
    location: 'India',
    description:
      'Built end-to-end data pipelines, automated reporting workflows, and delivered actionable insights that improved learning outcomes.',
    achievements: [
      'Processed 1M+ student records for insights',
      'Built learning analytics dashboards',
      'Reduced report generation time by 85%',
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/5 rounded-full blur-[100px]" 
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
            Career Journey
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey through data-driven roles where I've turned complex datasets into strategic assets.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                animate={exp.current ? { scale: [1, 1.2, 1], boxShadow: ['0 0 0 0 hsl(160 84% 39% / 0.4)', '0 0 0 10px hsl(160 84% 39% / 0)', '0 0 0 0 hsl(160 84% 39% / 0.4)'] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 mt-6" 
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`ml-12 md:ml-0 w-full md:w-[calc(50%-3rem)] glass-card-hover p-6 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <motion.span 
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full"
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    <p className="text-primary font-semibold mb-3">{exp.role}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
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

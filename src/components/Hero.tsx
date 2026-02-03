import { motion } from 'framer-motion';
import { ArrowDown, BarChart3, Database, TrendingUp, LineChart, PieChart, Activity, Zap, Code2, Sparkles } from 'lucide-react';

const floatingIcons = [
  { Icon: BarChart3, x: '10%', y: '20%', delay: 0, size: 28 },
  { Icon: Database, x: '85%', y: '15%', delay: 0.2, size: 24 },
  { Icon: TrendingUp, x: '5%', y: '60%', delay: 0.4, size: 22 },
  { Icon: LineChart, x: '90%', y: '55%', delay: 0.6, size: 26 },
  { Icon: PieChart, x: '15%', y: '80%', delay: 0.8, size: 20 },
  { Icon: Activity, x: '80%', y: '75%', delay: 1, size: 24 },
  { Icon: Zap, x: '25%', y: '35%', delay: 1.2, size: 18 },
  { Icon: Code2, x: '75%', y: '40%', delay: 1.4, size: 20 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" 
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
            scale: { duration: 0.5, delay: delay + 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }
          }}
          whileHover={{ scale: 1.3, opacity: 1 }}
          className="absolute text-primary/40 hover:text-primary cursor-pointer transition-colors duration-300 hidden md:block"
          style={{ left: x, top: y }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card text-primary text-sm font-medium"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Open to Opportunities</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold mb-4 leading-tight"
          >
            <span className="gradient-text">Sanatan Jana</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-2xl md:text-4xl font-semibold mb-6 text-foreground"
          >
            Data Analyst & Visualization Expert
          </motion.h2>

          {/* Animated Skill Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center gap-4 md:gap-6 mb-8"
          >
            {[BarChart3, Database, TrendingUp, LineChart, PieChart].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                className="p-3 md:p-4 glass-card-hover text-primary cursor-pointer group"
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </motion.div>
            ))}
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming raw data into{' '}
            <span className="text-primary font-semibold relative">
              actionable insights
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>{' '}
            through the power of{' '}
            <span className="text-primary font-medium">Advance Excel</span>,{' '}
            <span className="text-primary font-medium">SQL</span>,{' '}
            <span className="text-primary font-medium">Python</span>,{' '}
            <span className="text-primary font-medium">Power BI</span>, and{' '}
            <span className="text-primary font-medium">modern visualization tools</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(160 84% 39% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: "hsl(160 84% 39%)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card-hover font-display font-semibold text-foreground border-2 border-transparent"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-8 md:gap-16 mt-16"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Completed' },
              { value: '6+', label: 'Tools Mastered' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-default group"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text group-hover:animate-pulse">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#experience"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="p-2 glass-card group-hover:border-primary/50 transition-colors">
              <ArrowDown size={20} />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

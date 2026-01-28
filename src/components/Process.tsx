import { Search, Palette, Code2, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We learn about your business, challenges, and goals to understand exactly what you need.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'We create a tailored solution blueprint that aligns with your vision and objectives.'
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Our expert team develops and implements your solution using cutting-edge technologies.'
  },
  {
    icon: Gauge,
    title: 'Optimize',
    description: 'We monitor, refine, and continuously improve your solution for maximum performance.'
  }
];

export function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-20"
                  whileHover={{ scale: 1.2 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon circle */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-cyan-400/30 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full" />
                  <Icon className="w-12 h-12 text-cyan-300 relative z-10" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

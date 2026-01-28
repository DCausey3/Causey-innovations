import { Code, Server, Workflow, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices. Responsive, fast, and scalable solutions.',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    icon: Server,
    title: 'IT Support & Systems',
    description: 'Comprehensive IT infrastructure management, cloud solutions, and 24/7 support to keep your business running.',
    gradient: 'from-cyan-600 to-blue-500'
  },
  {
    icon: Workflow,
    title: 'Workflow & Power Automations',
    description: 'Streamline operations with custom automation solutions using Power Automate and intelligent workflow design.',
    gradient: 'from-blue-700 to-cyan-600'
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance to help you make informed decisions and achieve your business objectives.',
    gradient: 'from-cyan-700 to-blue-600'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-cyan-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

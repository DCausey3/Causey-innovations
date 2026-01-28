import { Code, Server, Workflow, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    gradient: 'from-blue-600 to-cyan-500',
    features: [
      'Custom web application development',
      'Responsive design for all devices',
      'Modern frontend frameworks (React, Vue, Angular)',
      'Progressive Web Apps (PWAs)',
      'E-commerce solutions',
      'API development and integration',
      'Performance optimization',
      'SEO best practices'
    ]
  },
  {
    icon: Server,
    title: 'IT Support & Systems',
    description: 'Comprehensive IT infrastructure management and support services.',
    gradient: 'from-cyan-600 to-blue-500',
    features: [
      '24/7 monitoring and support',
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'Server management and maintenance',
      'Network security and firewall configuration',
      'Data backup and disaster recovery',
      'System upgrades and migrations',
      'Help desk support',
      'IT consulting and strategy'
    ]
  },
  {
    icon: Workflow,
    title: 'Workflow & Power Automations',
    description: 'Streamline operations with intelligent automation solutions.',
    gradient: 'from-blue-700 to-cyan-600',
    features: [
      'Microsoft Power Automate implementations',
      'Custom workflow design and development',
      'Business process automation',
      'Integration with existing tools',
      'Robotic Process Automation (RPA)',
      'Document processing automation',
      'Notification and alert systems',
      'Analytics and reporting automation'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance for informed business decisions.',
    gradient: 'from-cyan-700 to-blue-600',
    features: [
      'Technology strategy and roadmap',
      'Digital transformation consulting',
      'Architecture design and review',
      'Technology stack evaluation',
      'Security audits and assessments',
      'Scalability planning',
      'Cost optimization analysis',
      'Training and knowledge transfer'
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to help your business thrive in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Icon and Title */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all`}
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>

                  {/* Features */}
                  <div className={`bg-white rounded-2xl shadow-lg p-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

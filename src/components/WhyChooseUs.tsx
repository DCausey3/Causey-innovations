import { Puzzle, TrendingUp, DollarSign, Users } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Puzzle,
    title: 'Custom Solutions',
    description: 'Every business is unique. We craft tailored technology solutions that fit your specific needs and goals.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Technology',
    description: 'Built to grow with you. Our solutions are designed to scale seamlessly as your business expands.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises. Clear, straightforward pricing that fits your budget.'
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Your success is our priority. We partner with you every step of the way to ensure exceptional results.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose CauseyInnovations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for innovative technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

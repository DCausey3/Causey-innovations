import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic web development',
      'Email & phone support',
      'Monthly system checkups',
      'Up to 5 automation workflows',
      '2 hours consulting/month'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: '$2,499',
    period: '/month',
    description: 'Ideal for growing businesses with expanding needs',
    features: [
      'Advanced web applications',
      'Priority 24/7 support',
      'Weekly system optimization',
      'Unlimited automation workflows',
      '8 hours consulting/month',
      'Dedicated account manager',
      'Custom integrations'
    ],
    cta: 'Start Growing',
    popular: true
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    period: '',
    description: 'Enterprise solutions tailored to your needs',
    features: [
      'Full-stack development team',
      'White-glove support',
      'Custom SLA agreements',
      'Enterprise automation suite',
      'Unlimited consulting hours',
      'Strategic technology planning',
      'On-site support available'
    ],
    cta: 'Let\'s Talk',
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible plans designed to scale with your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-cyan-500 scale-105 md:scale-110 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 mt-12"
        >
          All plans include onboarding support and a 30-day satisfaction guarantee
        </motion.p>
      </div>
    </section>
  );
}

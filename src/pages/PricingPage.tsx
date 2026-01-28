import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
      '2 hours consulting/month',
      'Standard response time',
      'Community resources access'
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
      'Custom integrations',
      'Priority response time',
      'Monthly strategy sessions',
      'Performance reporting'
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
      'On-site support available',
      'Dedicated project manager',
      'Custom training programs',
      'Advanced security features',
      'API development',
      'Scalability planning'
    ],
    cta: 'Let\'s Talk',
    popular: false
  }
];

const faqs = [
  {
    question: 'What\'s included in the monthly price?',
    answer: 'Each plan includes the features listed, ongoing support, and access to our team. We provide transparent pricing with no hidden fees.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.'
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'We offer both monthly and annual billing. Annual plans receive a 15% discount. No long-term commitment is required for monthly plans.'
  },
  {
    question: 'What if I need something custom?',
    answer: 'We specialize in custom solutions! Contact us to discuss your specific needs, and we\'ll create a tailored package that fits your requirements.'
  }
];

export function PricingPage() {
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
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Flexible plans designed to scale with your business. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

                  <Link to="/contact">
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
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 mt-12"
          >
            All plans include onboarding support and a 30-day satisfaction guarantee
          </motion.p>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features across all plans
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Responsive web design',
                'Cloud infrastructure',
                'Security best practices',
                'Performance optimization',
                'Regular updates',
                'Technical documentation',
                'Training resources',
                'Ongoing maintenance'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss which plan is right for your business
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

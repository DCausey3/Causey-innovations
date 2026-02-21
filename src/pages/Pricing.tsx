import { motion } from "motion/react";
import { CheckCircle2, Star, ArrowRight, MessageSquare } from "lucide-react";
import { GlowButton } from "../components/GlowButton";

export function Pricing() {
  const packages = [
    {
      name: "Starter Package",
      price: "starting at $800",
      subtitle: "Perfect for small churches and new businesses",
      description: "Everything you need to establish a professional online presence",
      features: [
        "5-page professional website",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO setup",
        "Google Analytics integration",
        "Social media links",
        "Professional domain setup",
        "Email configuration",
        "30 days post-launch support",
      ],
      idealFor: [
        "Small churches starting online",
        "New businesses",
        "Organizations needing a basic web presence",
        "Budget-conscious ministries",
      ],
    },
    {
      name: "Growth Package",
      price: "Starting at $1,200",
      subtitle: "For growing businesses and member-focused churches",
      description: "Advanced features for organizations ready to scale",
      features: [
        "Custom website design (unlimited pages)",
        "Advanced database integration",
        "Member tracking system",
        "Analytics & tracking dashboard",
        "CRM/email integration (Mailchimp, Constant Contact, etc.)",
        "Custom forms and workflows",
        "Advanced SEO optimization",
        "Strategy session included",
        "Content migration assistance",
        "Training for your team",
        "30 days post-launch support",
      ],
      idealFor: [
        "Growing churches with member management needs",
        "Businesses requiring CRM integration",
        "Organizations tracking engagement data",
        "Teams needing training and strategy",
      ],
      featured: true,
    },
  ];

  const addOns = [
    "Additional pages: $75-$150 per page",
    "E-commerce functionality: Custom quote",
    "Custom integrations: Starting at $300",
    "Advanced member portal: Custom quote",
    "Mobile app development: Custom quote",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Choose the package that fits your needs. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative bg-[#1a2642] border rounded-2xl p-8 ${
                  pkg.featured
                    ? "border-[#00d4d4] shadow-2xl shadow-[#00d4d4]/20 lg:scale-105"
                    : "border-[#00d4d4]/20"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#00d4d4] to-[#33dddd] text-[#0f1729] text-sm font-bold px-6 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-5xl font-bold text-[#00d4d4] mb-3">{pkg.price}</div>
                  <p className="text-lg text-gray-400 mb-2">{pkg.subtitle}</p>
                  <p className="text-sm text-gray-500">{pkg.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-lg">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.03 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00d4d4] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-[#0f1729]/50 rounded-lg border border-[#00d4d4]/10">
                  <h4 className="text-white font-semibold mb-3 text-sm">Perfect For:</h4>
                  <ul className="space-y-2">
                    {pkg.idealFor.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start space-x-2">
                        <span className="text-[#00d4d4] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <GlowButton
                  to="/contact"
                  variant={pkg.featured ? "primary" : "secondary"}
                  className="w-full text-lg"
                >
                  Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </GlowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 px-4 relative bg-[#0f1729]/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-Ons & Customization</h2>
            <p className="text-xl text-gray-400">
              Need something specific? We can customize any package to fit your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8"
          >
            <ul className="space-y-4">
              {addOns.map((addon, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00d4d4] flex-shrink-0 mt-0.5" />
                  <span>{addon}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-[#00d4d4]/20 text-center">
              <p className="text-gray-400 mb-4">Need a custom solution?</p>
              <GlowButton to="/contact" variant="primary">
                Request Custom Quote
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly Maintenance Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Monthly Maintenance Plans
            </h2>
            <p className="text-xl text-gray-400">
              Available after your 30-day post-launch support period
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "$50",
                period: "per month",
                features: [
                  "Security updates",
                  "Performance monitoring",
                  "Monthly backup",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "$100",
                period: "per month",
                features: [
                  "Everything in Basic",
                  "2 hours of content updates",
                  "Weekly backups",
                  "Priority email support",
                  "Monthly analytics report",
                ],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "$200",
                period: "per month",
                features: [
                  "Everything in Professional",
                  "5 hours of content updates",
                  "Daily backups",
                  "Phone & email support",
                  "Quarterly strategy session",
                  "Advanced monitoring",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-[#1a2642] border rounded-lg p-6 ${
                  plan.featured
                    ? "border-[#00d4d4] shadow-lg shadow-[#00d4d4]/10"
                    : "border-[#00d4d4]/20"
                }`}
              >
                {plan.featured && (
                  <div className="bg-[#00d4d4] text-[#0f1729] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#00d4d4]">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00d4d4] flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-[#1a2642] to-[#2d3e5c] border border-[#00d4d4]/20 rounded-lg p-8 text-center"
          >
            <MessageSquare className="w-12 h-12 text-[#00d4d4] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Not Sure Which Plan to Choose?</h3>
            <p className="text-gray-400 mb-6">
              We'll help you select the perfect package and maintenance plan for your specific needs.
            </p>
            <GlowButton to="/contact" variant="primary">
              Schedule a Consultation
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative bg-[#0f1729]/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the 30-day post-launch support?",
                answer:
                  "We're available to fix any bugs, make minor adjustments, and answer questions for 30 days after your site goes live. This ensures your website is running perfectly before transitioning to optional maintenance.",
              },
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes! We offer flexible payment plans for both packages. Contact us to discuss options that work for your budget.",
              },
              {
                question: "How long does it take to build a website?",
                answer:
                  "Starter packages typically take 2-3 weeks. Growth packages take 4-6 weeks depending on complexity. We'll provide a detailed timeline during your consultation.",
              },
              {
                question: "Do I own my website?",
                answer:
                  "Absolutely. You own 100% of your website, content, and all assets. We simply provide the expertise to build and maintain it.",
              },
              {
                question: "Can I upgrade my package later?",
                answer:
                  "Yes! You can start with the Starter Package and upgrade to Growth Package features anytime as your needs evolve.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 hover:border-[#00d4d4]/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss which package is right for you
            </p>
            <GlowButton to="/contact" variant="primary" className="text-lg px-10 py-4">
              Start Your Project <ArrowRight className="inline-block ml-2" />
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

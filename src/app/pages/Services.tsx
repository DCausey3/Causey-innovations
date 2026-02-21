import { motion } from "motion/react";
import { Code2, Database, BarChart3, Wrench, CheckCircle2, Globe, Smartphone, Zap, Search, FileText, Users, Mail, LineChart, Shield, Clock, Headphones } from "lucide-react";
import { GlowButton } from "../components/GlowButton";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Custom-built websites that represent your brand with excellence",
      features: [
        "Custom design tailored to your brand",
        "Mobile-optimized for all devices",
        "Fast loading performance",
        "SEO-ready structure",
        "User-friendly content management",
        "Accessibility compliant",
      ],
      highlights: [
        { icon: Globe, text: "Responsive Design" },
        { icon: Smartphone, text: "Mobile-First" },
        { icon: Zap, text: "Lightning Fast" },
        { icon: Search, text: "SEO Optimized" },
      ],
    },
    {
      icon: Database,
      title: "Database & Integration",
      description: "Powerful backend systems that keep your organization connected",
      features: [
        "Custom form builder systems",
        "Member tracking databases",
        "CRM integration (Salesforce, HubSpot, etc.)",
        "Email automation setup",
        "Secure data storage",
        "API integrations",
      ],
      highlights: [
        { icon: FileText, text: "Smart Forms" },
        { icon: Users, text: "Member Management" },
        { icon: Mail, text: "Email Automation" },
        { icon: Database, text: "Secure Storage" },
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Understand your audience and measure what matters",
      features: [
        "Visitor behavior tracking",
        "Conversion rate monitoring",
        "Custom event tracking",
        "Engagement metrics dashboard",
        "Growth trend reporting",
        "A/B testing capabilities",
      ],
      highlights: [
        { icon: LineChart, text: "Real-Time Data" },
        { icon: BarChart3, text: "Custom Reports" },
        { icon: Users, text: "Audience Insights" },
        { icon: Zap, text: "Performance Metrics" },
      ],
    },
    {
      icon: Wrench,
      title: "Monthly Maintenance",
      description: "Ongoing support to keep your website secure and current",
      features: [
        "Security patches and updates",
        "Performance monitoring",
        "Content updates and changes",
        "Hosting assistance",
        "Backup management",
        "Priority technical support",
      ],
      highlights: [
        { icon: Shield, text: "Security First" },
        { icon: Clock, text: "Always Updated" },
        { icon: Zap, text: "Fast Response" },
        { icon: Headphones, text: "Priority Support" },
      ],
    },
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions that go beyond just building websites
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 px-4 relative ${
            index % 2 === 1 ? "bg-[#0f1729]/50" : ""
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="w-16 h-16 rounded-xl bg-[#00d4d4]/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#00d4d4]" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00d4d4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <GlowButton to="/contact" variant="primary">
                  Get Started
                </GlowButton>
              </motion.div>

              {/* Highlights Cards */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-2 gap-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {service.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 hover:border-[#00d4d4]/50 transition-all"
                  >
                    <highlight.icon className="w-10 h-10 text-[#00d4d4] mb-4" />
                    <p className="text-white font-semibold">{highlight.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-[#0f1729] to-[#1a2642]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Causey Innovations?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just developers—we're partners in your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Church & Business Focused",
                description:
                  "We understand the unique needs of churches and small businesses. Our solutions are tailored specifically for your context.",
              },
              {
                title: "Systems, Not Just Sites",
                description:
                  "We build comprehensive digital infrastructure—not just pretty websites. Every solution is designed for long-term scalability.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees, no surprises. Our pricing is clear, competitive, and designed to deliver maximum value for your investment.",
              },
              {
                title: "Data-Driven Approach",
                description:
                  "We believe in measurable results. Track your growth, understand your audience, and make informed decisions with powerful analytics.",
              },
              {
                title: "Ongoing Partnership",
                description:
                  "We're with you for the long haul. From initial strategy to ongoing maintenance, we're your dedicated technology partner.",
              },
              {
                title: "Proven Track Record",
                description:
                  "Our clients see real results: increased engagement, better organization, and sustainable growth. Let our work speak for itself.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 hover:border-[#00d4d4]/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400">{reason.description}</p>
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
              Let's build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton to="/contact" variant="primary" className="text-lg px-10 py-4">
                Start Your Project
              </GlowButton>
              <GlowButton to="/pricing" variant="secondary" className="text-lg px-10 py-4">
                View Pricing
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

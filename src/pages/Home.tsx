import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { GlowButton } from "../components/GlowButton";
import { Code2, Database, BarChart3, Wrench, CheckCircle2, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Logo } from "../components/Logo";

export function Home() {
  const [cablesAnimated, setCablesAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setCablesAnimated(true), 500);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Animated Cables */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          {/* Animated Circuit Cables */}
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* Left cables */}
            <motion.line
              x1="0"
              y1="300"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.6 : 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.line
              x1="0"
              y1="400"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.7 : 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.line
              x1="0"
              y1="500"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.6 : 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />

            {/* Right cables */}
            <motion.line
              x1="1200"
              y1="300"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.6 : 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.line
              x1="1200"
              y1="400"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.7 : 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.line
              x1="1200"
              y1="500"
              x2="600"
              y2="400"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.6 : 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />

            {/* Central hub circle */}
            <motion.circle
              cx="600"
              cy="400"
              r="80"
              fill="none"
              stroke="#00d4d4"
              strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.8 : 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
            <motion.circle
              cx="600"
              cy="400"
              r="60"
              fill="none"
              stroke="#00d4d4"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: cablesAnimated ? 1 : 0, opacity: cablesAnimated ? 0.5 : 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            />

            {/* Glowing circles on cable endpoints */}
            {[
              [0, 300],
              [0, 400],
              [0, 500],
              [1200, 300],
              [1200, 400],
              [1200, 500],
            ].map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="#00d4d4"
                initial={{ opacity: 0 }}
                animate={{ opacity: cablesAnimated ? [0.4, 1, 0.4] : 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <Logo className="h-32 w-32 md:h-40 md:w-40" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00d4d4]"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0,212,212,0.3)",
                    "0 0 40px rgba(0,212,212,0.6)",
                    "0 0 20px rgba(0,212,212,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            CAUSEY<span className="text-[#00d4d4]">INNOVATIONS</span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Building Digital Infrastructure That Connects.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Websites designed to grow your organization, track engagement, and build meaningful connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlowButton to="/contact" variant="primary">
              Start Your Project
            </GlowButton>
            <GlowButton to="/pricing" variant="secondary">
              View Pricing
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We build comprehensive digital solutions that go beyond just websites
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Professional Design",
                description: "Custom, mobile-responsive websites that represent your brand with excellence",
              },
              {
                icon: Database,
                title: "Database Integration",
                description: "Powerful data systems for member tracking, forms, and CRM connectivity",
              },
              {
                icon: BarChart3,
                title: "Analytics & Tracking",
                description: "Understand visitor behavior and measure engagement with detailed insights",
              },
              {
                icon: Wrench,
                title: "Ongoing Support",
                description: "Monthly maintenance, security updates, and dedicated priority support",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 hover:border-[#00d4d4]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4d4]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#00d4d4]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Websites Matter Section */}
      <section className="py-24 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Your Website Matters
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Your website is more than a digital brochure—it's the foundation of your organization's digital infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  "First impressions matter: 75% of people judge credibility based on website design",
                  "24/7 accessibility: Your website works while you sleep",
                  "Data-driven growth: Track what's working and what's not",
                  "Automated connections: Let technology handle repetitive tasks",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#00d4d4] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Zap, title: "Fast Performance", value: "3x faster" },
                { icon: Shield, title: "Secure & Reliable", value: "99.9% uptime" },
                { icon: TrendingUp, title: "Scalable Growth", value: "Grow with you" },
                { icon: CheckCircle2, title: "SEO Optimized", value: "Get found" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#00d4d4] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the package that fits your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter Package",
                price: "$800",
                description: "Perfect for small churches and new businesses",
                features: [
                  "5-page professional website",
                  "Mobile responsive design",
                  "Contact form integration",
                  "Basic SEO setup",
                  "30 days post-launch support",
                ],
              },
              {
                name: "Growth Package",
                price: "Starting at $1,200",
                description: "For growing businesses and member-focused churches",
                features: [
                  "Custom website design",
                  "Database integration",
                  "Analytics & tracking setup",
                  "CRM/email integration",
                  "Strategy session included",
                  "30 days post-launch support",
                ],
                featured: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`bg-[#1a2642] border rounded-lg p-8 ${
                  plan.featured
                    ? "border-[#00d4d4] shadow-lg shadow-[#00d4d4]/20"
                    : "border-[#00d4d4]/20"
                }`}
              >
                {plan.featured && (
                  <div className="bg-[#00d4d4] text-[#0f1729] text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-[#00d4d4] mb-4">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00d4d4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <GlowButton
                  to="/pricing"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  Learn More
                </GlowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Real results from real organizations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Causey Innovations transformed our online presence. Our visitor engagement increased by 300% in the first three months.",
                author: "Pastor Michael Johnson",
                organization: "Grace Community Church",
              },
              {
                quote:
                  "The database integration has been a game-changer for managing our congregation. Everything is organized and accessible.",
                author: "Sarah Williams",
                organization: "Faith Baptist Church",
              },
              {
                quote:
                  "Professional, reliable, and they truly understand what small businesses need. Highly recommend their services.",
                author: "David Chen",
                organization: "Chen & Associates",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-6 hover:border-[#00d4d4]/50 transition-all"
              >
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#00d4d4] opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-[#00d4d4]/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Digital Infrastructure?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help your organization grow and connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton to="/contact" variant="primary" className="text-lg px-10 py-4">
                Start Your Project <ArrowRight className="inline-block ml-2" />
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
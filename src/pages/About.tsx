import { motion } from "motion/react";
import { Target, Heart, Lightbulb, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { GlowButton } from "../components/GlowButton";
import headshot from "../assets/Headshot.jpeg";

export function About() {
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
              Innovation With Purpose.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Building digital infrastructure that empowers churches and businesses to grow and connect
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-white mb-6">
                   Built with Purpose
                </h2>

                <div className="space-y-6 text-gray-400">

                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            About the Founder
                        </h3>
                        <p>
                            My name is <b>Damariel Causey</b>, a graduate of the University of Florida
                            with a Bachelor’s degree in Computer Science and a professional Software Engineer.
                            Technology has always been more than a career for me — it’s a tool for impact.
                        </p>
                        <p className="mt-4">
                            Causey Innovations represents who I am. My last name is Causey, but I’ve
                            always believed in going above and beyond to innovate. I saw too many
                            churches and small businesses with powerful missions being limited by
                            outdated systems or overpriced solutions. I started Causey Innovations
                            to change that.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            The Mission
                        </h3>
                        <p>
                            We primarily serve churches and small businesses that want to grow but
                            may not have the resources to spend three times the cost for enterprise-level systems.
                        </p>
                        <p className="mt-4">
                            Inspired by Isaiah 43:19 — “See, I am doing a new thing…” — we believe
                            technology should help organizations move forward, not stay stuck in the past.
                        </p>

                        <p className="mt-4 font-medium text-white">That means building:</p>

                        <ul className="list-disc list-inside mt-3 space-y-2">
                            <li>Modern websites</li>
                            <li>Admin portals</li>
                            <li>CRM systems</li>
                            <li>Secure databases</li>
                            <li>Analytics & growth tracking</li>
                        </ul>

                        <p className="mt-4">
                            We don’t just build websites. We build digital infrastructure that becomes
                            the centerpiece of your organization’s growth.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            The Vision
                        </h3>
                        <p>
                            Technology should not be a burden. It should be a bridge — connecting
                            people, streamlining operations, and expanding your reach.
                        </p>
                        <p className="mt-4">
                            If you're ready to advance your organization to the next level,
                            we’d love to partner with you.
                        </p>
                    </div>

                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a2642] to-[#2d3e5c] border border-[#00d4d4]/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                    <div className="flex flex-col flex-center items-center ">
                        <img
                            src={headshot}
                            alt="Damariel Causey - Founder of Causey Innovations"
                            className="w-40 h-40 rounded-full object-cover border-4 border-[#00d4d4]/30 shadow-lg mb-4"
                        />
                        <p className="text-white font-semibold text-lg">
                            Damariel Causey
                        </p>
                        <p className="text-gray-400 text-sm">
                            Founder & Lead Software Engineer
                        </p>
                    </div>

                  <p className="text-gray-300 text-lg italic">
                    "Technology should empower your mission, not complicate it."
                  </p>
                  <p className="text-[#00d4d4] font-semibold mt-4">— Causey Innovations Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Purpose-Driven",
                description:
                  "We believe in work that matters. Every project we take on serves a meaningful purpose—helping churches reach their communities and businesses grow sustainably.",
              },
              {
                icon: Heart,
                title: "People First",
                description:
                  "Technology is a tool, not the goal. We prioritize relationships, clear communication, and understanding your unique needs before we write a single line of code.",
              },
              {
                icon: Lightbulb,
                title: "Innovation & Excellence",
                description:
                  "We stay on the cutting edge of web technology while maintaining a commitment to quality. Modern solutions built with precision and care.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8 hover:border-[#00d4d4]/50 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-[#00d4d4]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#00d4d4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-400">
              We're not just another web development company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Specialized Focus",
                description:
                  "We specifically serve churches and small businesses. This focus means we deeply understand your challenges, your audience, and what solutions work best in your context.",
              },
              {
                icon: TrendingUp,
                title: "Systems Over Sites",
                description:
                  "Anyone can build a website. We build comprehensive digital infrastructure—databases, analytics, integrations—that scale with your growth and adapt to your changing needs.",
              },
              {
                icon: Award,
                title: "Transparent & Affordable",
                description:
                  "Premium quality doesn't have to mean premium prices. We offer enterprise-level solutions at prices that make sense for churches and small organizations.",
              },
              {
                icon: Heart,
                title: "Long-Term Partnership",
                description:
                  "We're invested in your success beyond launch day. Our optional maintenance plans and ongoing support mean you always have expert help when you need it.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8 hover:border-[#00d4d4]/50 transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#00d4d4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">
              A proven approach to building digital infrastructure that works
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We start by understanding your goals, audience, and challenges. What are you trying to achieve? Who are you trying to reach? What's working and what's not?",
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Based on our discovery, we create a custom design and technical plan. You'll see mockups, wireframes, and a clear roadmap before development begins.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your website using modern, scalable technology. Throughout development, we test rigorously to ensure everything works perfectly across all devices.",
              },
              {
                step: "04",
                title: "Launch & Training",
                description:
                  "We handle all the technical details of launch and provide comprehensive training so you can confidently manage your new website.",
              },
              {
                step: "05",
                title: "Support & Growth",
                description:
                  "Your 30-day support period ensures a smooth transition. After that, optional maintenance plans keep your site secure, updated, and growing with you.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8 hover:border-[#00d4d4]/50 transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#00d4d4]/10 border-2 border-[#00d4d4] flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#00d4d4]">{phase.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-[#00d4d4] flex-shrink-0 mt-2" />
                </div>
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
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to take your organization's digital presence to the next level?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton to="/contact" variant="primary" className="text-lg px-10 py-4">
                Start Your Project
              </GlowButton>
              <GlowButton to="/portfolio" variant="secondary" className="text-lg px-10 py-4">
                View Our Work
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

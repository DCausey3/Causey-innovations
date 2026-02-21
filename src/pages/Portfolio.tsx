import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react";
import { GlowButton } from "../components/GlowButton";
import { useState } from "react";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "churches", label: "Churches" },
    { id: "businesses", label: "Businesses" },
      { id: "Weddings", label: "Weddings" },
  ];

  const projects = [
    {
      title: "East Conference Lay Organization ",
      category: "churches",
      description: "Complete website redesign with member portal and event management system",
      image: "church modern building",
      stats: [
        { icon: TrendingUp, value: "300%", label: "Engagement Increase" },
        { icon: Users, value: "2,500+", label: "Active Members" },
        { icon: Clock, value: "4 weeks", label: "Delivery Time" },
      ],
      tags: ["Website Design", "Member Portal", "Database Integration"],
      results:
        "Grace Community Church saw a 300% increase in online engagement within the first 3 months. The new member portal streamlined communication and event registration.",
    },
    {
      title: "The Causey Union",
      category: "Wedding",
      description: "Modern website with integrated giving platform and sermon archive",
      image: "church contemporary interior",
      stats: [
        { icon: TrendingUp, value: "150%", label: "Online Giving Growth" },
        { icon: Users, value: "1,200+", label: "Monthly Visitors" },
        { icon: Clock, value: "3 weeks", label: "Delivery Time" },
      ],
      tags: ["E-commerce", "Content Management", "Analytics"],
      results:
        "Online giving increased by 150% and the sermon archive became one of the most visited sections, with over 1,200 monthly visitors.",
    },
    // {
    //   title: "Chen & Associates",
    //   category: "businesses",
    //   description: "Professional service website with CRM integration and client portal",
    //   image: "modern office workspace",
    //   stats: [
    //     { icon: TrendingUp, value: "85%", label: "Lead Conversion" },
    //     { icon: Users, value: "500+", label: "Clients Managed" },
    //     { icon: Clock, value: "5 weeks", label: "Delivery Time" },
    //   ],
    //   tags: ["CRM Integration", "Client Portal", "Lead Generation"],
    //   results:
    //     "The integrated CRM system improved lead tracking by 85% and the client portal reduced administrative workload by 40%.",
    // },
    // {
    //   title: "Summit Ridge Church",
    //   category: "churches",
    //   description: "Multi-campus website with location-specific content and volunteer management",
    //   image: "mountain church landscape",
    //   stats: [
    //     { icon: TrendingUp, value: "200%", label: "Volunteer Signups" },
    //     { icon: Users, value: "3,800+", label: "Weekly Visitors" },
    //     { icon: Clock, value: "6 weeks", label: "Delivery Time" },
    //   ],
    //   tags: ["Multi-location", "Volunteer System", "Custom Design"],
    //   results:
    //     "Volunteer signups increased 200% with the new streamlined system, and the multi-campus structure improved user experience across all locations.",
    // },
    // {
    //   title: "Riverside Community Center",
    //   category: "businesses",
    //   description: "Event booking platform with payment processing and calendar integration",
    //   image: "community center event",
    //   stats: [
    //     { icon: TrendingUp, value: "250%", label: "Booking Increase" },
    //     { icon: Users, value: "800+", label: "Monthly Bookings" },
    //     { icon: Clock, value: "5 weeks", label: "Delivery Time" },
    //   ],
    //   tags: ["Booking System", "Payment Integration", "Calendar Sync"],
    //   results:
    //     "Online bookings increased 250% and payment processing automation saved 20 hours per week in administrative time.",
    // },
    // {
    //   title: "Trinity Church",
    //   category: "churches",
    //   description: "Bilingual website with live streaming and small group management",
    //   image: "diverse congregation worship",
    //   stats: [
    //     { icon: TrendingUp, value: "400%", label: "Online Viewers" },
    //     { icon: Users, value: "1,800+", label: "Small Group Members" },
    //     { icon: Clock, value: "4 weeks", label: "Delivery Time" },
    //   ],
    //   tags: ["Bilingual", "Live Streaming", "Group Management"],
    //   results:
    //     "Live stream viewers grew 400% and the small group management system organized 1,800+ members across 120 groups.",
    // },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Real results for real organizations. See how we've helped churches and businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#00d4d4] text-[#0f1729] shadow-lg shadow-[#00d4d4]/50"
                    : "bg-[#1a2642] text-gray-300 border border-[#00d4d4]/20 hover:border-[#00d4d4]/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-xl overflow-hidden hover:border-[#00d4d4]/50 transition-all group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-[#2d3e5c] to-[#1a2642] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#00d4d4]/10 flex items-center justify-center">
                        <Users className="w-10 h-10 text-[#00d4d4]" />
                      </div>
                      <p className="text-gray-400 text-sm">{project.image}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#00d4d4]/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-[#00d4d4]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00d4d4]/10 text-[#00d4d4] text-xs rounded-full border border-[#00d4d4]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[#0f1729]/50 rounded-lg border border-[#00d4d4]/10">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-5 h-5 text-[#00d4d4] mx-auto mb-2" />
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="border-t border-[#00d4d4]/20 pt-4">
                    <p className="text-sm text-gray-400 italic">{project.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Metrics Section */}
      <section className="py-20 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results That Matter
            </h2>
            <p className="text-xl text-gray-400">
              Average improvements across all our client projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "235%", label: "Average Engagement Increase" },
              { value: "10,000+", label: "Combined Monthly Visitors" },
              { value: "4.5 weeks", label: "Average Delivery Time" },
              { value: "100%", label: "Client Satisfaction Rate" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8 text-center hover:border-[#00d4d4]/50 transition-all"
              >
                <p className="text-5xl font-bold text-[#00d4d4] mb-3">{metric.value}</p>
                <p className="text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The team at Causey Innovations didn't just build us a website—they built us a complete digital infrastructure. Our member engagement has never been higher.",
                author: "Pastor Sarah Mitchell",
                organization: "Grace Community Church",
                role: "Senior Pastor",
              },
              {
                quote:
                  "Professional, responsive, and they truly understand what small businesses need. Our new website has been instrumental in our 40% revenue growth this year.",
                author: "David Chen",
                organization: "Chen & Associates",
                role: "Founder & CEO",
              },
              {
                quote:
                  "From strategy to launch, everything was seamless. The analytics dashboard has given us insights we never had before. Highly recommend!",
                author: "Rev. Michael Johnson",
                organization: "Faith Baptist Church",
                role: "Lead Pastor",
              },
              {
                quote:
                  "The volunteer management system has transformed how we coordinate our teams. What used to take hours now takes minutes. Game-changer!",
                author: "Jennifer Martinez",
                organization: "Summit Ridge Church",
                role: "Operations Director",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg p-8 hover:border-[#00d4d4]/50 transition-all"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#00d4d4] opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic text-lg">{testimonial.quote}</p>
                <div className="border-t border-[#00d4d4]/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-[#00d4d4]">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-transparent to-[#0f1729]/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help your organization grow
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

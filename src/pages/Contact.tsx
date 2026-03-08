import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { GlowButton } from "../components/GlowButton";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Let's Build Something Great
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your digital presence? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-8">
                  Have questions? Want to discuss your project? We'd love to hear from you.
                </p>
              </div>

                <div className="space-y-6">

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-[#00d4d4]" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Email</h3>
                            <p className="text-gray-400">causeyd1@outlook.com</p>
                            <p className="text-sm text-gray-500">Response within 24 hours</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-[#00d4d4]" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Phone</h3>
                            <p className="text-gray-400">(352) 284-1736</p>
                            <p className="text-sm text-gray-500">By appointment</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-[#00d4d4]" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Location</h3>
                            <p className="text-gray-400">Serving clients nationwide</p>
                            <p className="text-sm text-gray-500">Remote-first</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00d4d4]/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-[#00d4d4]" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Availability</h3>
                            <p className="text-gray-400">Evenings & Weekends</p>
                            <p className="text-sm text-gray-500">Consultations by appointment</p>
                        </div>
                    </div>

                    {/* Response Box */}
                    <div className="mt-8 p-6 bg-[#1a2642] border border-[#00d4d4]/20 rounded-lg">
                        <h3 className="text-white font-semibold mb-3">Quick Response Guarantee</h3>
                        <p className="text-gray-400 text-sm">
                            Most inquiries receive a response within 24 hours. For project consultations
                            or urgent questions, feel free to include your phone number in the message.
                        </p>
                    </div>


                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#1a2642] border border-[#00d4d4]/20 rounded-2xl p-8 relative overflow-hidden">
                {/* Circuit pattern background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#00d4d4" />
                      <line x1="2" y1="2" x2="18" y2="2" stroke="#00d4d4" strokeWidth="0.5" />
                      <line x1="2" y1="2" x2="2" y2="18" stroke="#00d4d4" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#circuit)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-[#00d4d4]/10 border border-[#00d4d4]/30 rounded-lg"
                    >
                      <p className="text-[#00d4d4] font-semibold flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Thank you! We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1729] border border-[#00d4d4]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00d4d4] focus:outline-none focus:ring-2 focus:ring-[#00d4d4]/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1729] border border-[#00d4d4]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00d4d4] focus:outline-none focus:ring-2 focus:ring-[#00d4d4]/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-white font-semibold mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1729] border border-[#00d4d4]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00d4d4] focus:outline-none focus:ring-2 focus:ring-[#00d4d4]/20 transition-all"
                          placeholder="Your Church or Business"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-white font-semibold mb-2">
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1729] border border-[#00d4d4]/20 rounded-lg text-white focus:border-[#00d4d4] focus:outline-none focus:ring-2 focus:ring-[#00d4d4]/20 transition-all"
                        >
                          <option value="">Select a range</option>
                          <option value="under-800">Under $800</option>
                          <option value="800-1200">$800 - $1,200 (Starter)</option>
                          <option value="1200-2500">$1,200 - $2,500 (Growth)</option>
                          <option value="2500-plus">$2,500+ (Custom)</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-[#0f1729] border border-[#00d4d4]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00d4d4] focus:outline-none focus:ring-2 focus:ring-[#00d4d4]/20 transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 rounded border-[#00d4d4]/20 bg-[#0f1729] text-[#00d4d4] focus:ring-[#00d4d4]/20"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-400">
                        I agree to be contacted by Causey Innovations regarding my project inquiry. We respect
                        your privacy and will never share your information.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-[#00d4d4] text-[#0f1729] rounded-lg font-bold text-lg transition-all hover:bg-[#33dddd] hover:shadow-lg hover:shadow-[#00d4d4]/50 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-20 px-4 bg-[#0f1729]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-400">Our simple, transparent process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "We Review",
                description: "We'll review your inquiry and reach out within 24 hours",
              },
              {
                step: "2",
                title: "Discovery Call",
                description: "Free 30-minute consultation to understand your needs",
              },
              {
                step: "3",
                title: "Proposal",
                description: "Detailed proposal with timeline, features, and pricing",
              },
              {
                step: "4",
                title: "Let's Build",
                description: "Once approved, we start building your digital infrastructure",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00d4d4]/10 border-2 border-[#00d4d4] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#00d4d4]">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Prefer a Different Approach?</h2>
            <p className="text-gray-400 mb-8">We're flexible! Reach out however you're most comfortable.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:causeyd1@outlook.com"
                className="px-8 py-3 bg-[#1a2642] border border-[#00d4d4]/20 text-[#00d4d4] rounded-lg font-semibold transition-all hover:bg-[#00d4d4]/10 hover:border-[#00d4d4]/50 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us Directly</span>
              </a>
              <a
                href="tel:+13522841736"
                className="px-8 py-3 bg-[#1a2642] border border-[#00d4d4]/20 text-[#00d4d4] rounded-lg font-semibold transition-all hover:bg-[#00d4d4]/10 hover:border-[#00d4d4]/50 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CauseyInnovations
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We are a <span className="font-semibold text-cyan-600">mission-driven technology partner</span> dedicated 
                to empowering businesses with innovative, scalable solutions. Our team combines deep technical expertise 
                with a client-first mindset to deliver exceptional results.
              </p>
              <p>
                Whether you're a startup looking to build your first web application or an established business 
                seeking to modernize your IT infrastructure, we bring the <span className="font-semibold text-blue-700">experience, 
                adaptability, and modern solutions</span> you need to succeed.
              </p>
              <p>
                Our approach is simple: listen, innovate, and deliver. We don't just build technology—we build 
                relationships and long-term partnerships that drive growth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-cyan-500/20" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-t-4 border-cyan-500"
            >
              <div className="text-sm text-gray-600 mb-1">Our Mission</div>
              <div className="font-bold text-gray-900 text-lg">
                Empowering businesses through<br />innovative technology
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

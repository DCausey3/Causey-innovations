import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/bfec93286552f489d4053ffa1323501694d29193.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      {/* Animated background elements */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-6"
            >
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    <img
                        src={logo}
                        alt="CauseyInnovations Logo"
                        className="h-16 w-16 rounded-xl"
                    />
                </div>
            </motion.div>

          {/*<div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30">*/}
          {/*  <span className="text-cyan-300 text-sm font-medium">CauseyInnovations</span>*/}
          {/*</div>*/}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative Technology Solutions<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              That Scale With You
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Web Development
          </p>

          <motion.button
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/bfec93286552f489d4053ffa1323501694d29193.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="CauseyInnovations Logo" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CauseyInnovations
                </h3>
              </Link>
            </motion.div>
            <p className="text-blue-200 mb-6">
              Innovative technology solutions that scale with your business.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-blue-200 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-cyan-400 transition-colors">IT Support</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-cyan-400 transition-colors">Automation</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-cyan-400 transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-blue-200 hover:text-cyan-400 transition-colors">Our Process</Link></li>
              <li><Link to="/pricing" className="text-blue-200 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © {currentYear} CauseyInnovations. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
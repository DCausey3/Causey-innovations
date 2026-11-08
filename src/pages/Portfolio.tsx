import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Users, Clock, ShieldCheck, Zap, Smartphone, Database } from "lucide-react";
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
            title: "East Conference Lay Organization",
            category: "churches",
            description: "A centralized digital hub designed to unify 17 counties and streamline district communication.",
            image: "/eastconferencelay.png",
            link: "https://eastconferencelay.org",
            stats: [
                { icon: Users, value: "17", label: "Districts Supported" },
                { icon: Clock, value: "Scalable", label: "Cloud Infrastructure" },
                { icon: TrendingUp, value: "Instant", label: "Resource Access" },
            ],
            tags: ["React & TypeScript", "AWS Amplify", "Responsive Design"],
            results: "Engineered to provide each district with a dedicated landing page while maintaining a unified conference identity.",
        },
        {
            title: "Florida Conference Lay Organization",
            category: "churches",
            description: "A digital home for the Florida Conference Lay Organization and its member districts.",
            image: null,
            link: "https://floridaconferencelay.org/",
            stats: [
                { icon: Users, value: "Connected", label: "Conference Community" },
                { icon: Clock, value: "Always On", label: "Online Access" },
                { icon: TrendingUp, value: "Centralized", label: "Resources" },
            ],
            tags: ["Web Design", "Responsive Design"],
            results: "A central online destination for conference information and resources.",
        },
        {
            title: "West Coast Conference Lay Organization",
            category: "churches",
            description: "A dedicated website for the West Coast Conference Lay Organization.",
            image: null,
            link: "https://www.westcoastconferencelay.org/",
            stats: [
                { icon: Users, value: "Connected", label: "Conference Community" },
                { icon: Clock, value: "Always On", label: "Online Access" },
                { icon: TrendingUp, value: "Centralized", label: "Resources" },
            ],
            tags: ["Web Design", "Responsive Design"],
            results: "A central online destination for conference information and resources.",
        },
        {
            title: "The Causey Union",
            category: "Weddings",
            description: "A sophisticated event management platform built for high-traffic guest coordination.",
            image: "/thecauseyunion.png",
            link: null,
            stats: [
                { icon: Users, value: "Custom", label: "Guest Management" },
                { icon: Clock, value: "Real-time", label: "Updates" },
                { icon: TrendingUp, value: "Secure", label: "Data Handling" },
            ],
            tags: ["Event Logistics", "Custom UI/UX", "Database Integration", "Admin Portal"],
            results: "Successfully streamlined guest RSVPs and event scheduling into a single, cohesive digital experience.",
        },
    ];

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="w-full bg-[#0f1729] min-h-screen text-white">
            {/* Hero Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        Our Work
                    </motion.h1>
                    <p className="text-xl text-gray-400">
                        Purpose-built digital solutions for organizations that lead.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-full border transition-all ${
                                selectedCategory === cat.id
                                    ? "bg-[#00d4d4] text-black border-[#00d4d4]"
                                    : "border-gray-700 text-gray-400 hover:border-[#00d4d4]"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-4 container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        whileHover={{ y: -5 }}
                        className="bg-[#1a2642] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00d4d4]/50 transition-all"
                    >
                        <div className="relative h-64 bg-[#0f1729] overflow-hidden">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a2642] to-[#0f1729] p-8 text-center">
                                    <div>
                                        <div className="text-sm uppercase tracking-[0.3em] text-[#00d4d4] mb-3">Conference Website</div>
                                        <div className="text-2xl font-bold">{project.title}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#00d4d4] hover:text-white transition-colors text-sm font-bold mb-4"
                                >
                                    Visit Live Site <ArrowUpRight className="w-4 h-4" />
                                </a>
                            ) : (
                                <p className="text-sm text-amber-300 mb-4">
                                    This wedding website is no longer live.
                                </p>
                            )}
                            <div className="grid grid-cols-3 gap-2 bg-[#0f1729] p-4 rounded-lg mb-4">
                                {project.stats.map((s, i) => (
                                    <div key={i} className="text-center">
                                        <s.icon className="w-4 h-4 mx-auto mb-1 text-[#00d4d4]" />
                                        <div className="font-bold text-sm">{s.value}</div>
                                        <div className="text-[10px] uppercase text-gray-500">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 italic border-t border-gray-800 pt-4">{project.results}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Performance Standards Section */}
            <section className="py-20 px-4 bg-[#0f1729]/50">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold mb-12">The CauseyInnovations Standard</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, value: "99.9%", label: "Uptime Reliability" },
                            { icon: Zap, value: "< 2s", label: "Avg. Load Speed" },
                            { icon: Smartphone, value: "100%", label: "Mobile Optimized" },
                            { icon: Database, value: "Secure", label: "AWS Architecture" },
                        ].map((metric, i) => (
                            <div key={i} className="p-8 bg-[#1a2642] rounded-xl border border-gray-800">
                                <metric.icon className="w-8 h-8 text-[#00d4d4] mx-auto mb-4" />
                                <div className="text-3xl font-bold">{metric.value}</div>
                                <div className="text-gray-400 text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section (Replaces Testimonials) */}
            <section className="py-20 px-4 container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12">Our Commitment</h2>
                <div className="space-y-6">
                    {[
                        { title: "Mission Driven", desc: "We don't just build websites; we build digital infrastructures that foster community and regional growth." },
                        { title: "Future Proof", desc: "Every line of code is written with scalability in mind, ensuring your investment lasts for years to come." },
                        { title: "Local Partnership", desc: "As a Florida-based firm, we are committed to the success of our local districts and churches." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-[#1a2642] border-l-4 border-[#00d4d4] rounded-r-xl">
                            <h4 className="font-bold text-[#00d4d4] mb-1">{item.title}</h4>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, MapPin, Github, Terminal, Database, Server, Cpu, Globe, ArrowUpRight, Calculator } from 'lucide-react';
import idCardImg from './assets/student_id.png';

export default function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const GlitchMask = ({ width = "120px" }: { width?: string }) => (
        <div style={{ width: width }} className="relative h-5 overflow-hidden border border-lime-400/30 bg-zinc-950 font-mono text-[11px] text-lime-400 group-hover:border-lime-400 transition-colors">
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[1px] z-10"></div>
            <Marquee speed={400} gradient={false} className="opacity-80 z-0">
                <span className="mr-2">X#X@#4271XX393XX@</span>
                <span className="mr-2">0526XX54XX81XX</span>
                <span className="mr-2">@$#_X9#X</span>
            </Marquee>
            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-0 right-1 w-1 h-full bg-lime-400 z-20"
            />
        </div>
    );

    return (
        <div className="relative min-h-screen bg-[#09090b] text-zinc-300 p-4 md:p-8 font-sans selection:bg-lime-400 selection:text-black pb-40 overflow-hidden">

            {/* 1. GLOBALNY SZUM (Grain) */}
            <div
                className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.15] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 2. LATARKA (Mouse tracking) */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(163, 230, 53, 0.06), transparent 80%)`,
                }}
            />

            {/* SIATKA BENTO */}
            <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 xl:gap-10 auto-rows-[minmax(240px,auto)] relative z-10 pt-10 md:pt-20">

                {/* --- 1. ID CARD / PROFILE --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-2 md:row-span-2 relative z-20">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.08} scale={1.03} transitionSpeed={1500} className="h-full">
                        <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">

                            {/* Skan legitymacji - W PRAWYM DOLNYM ROGU */}
                            <div className="absolute bottom-[-30px] right-[-30px] w-[380px] md:w-[420px] rotate-[-12deg] transition-all duration-700 group-hover:rotate-[-6deg] group-hover:scale-[1.05] group-hover:-translate-x-6 group-hover:-translate-y-8 z-0 opacity-40 group-hover:opacity-90 origin-bottom-right">
                                <img
                                    src={idCardImg}
                                    alt="AGH Student ID"
                                    className="w-full h-auto grayscale-[80%] contrast-125 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.9)]"
                                />
                                <div className="absolute top-[67%] left-[17%] z-10"><GlitchMask width="110px" /></div>
                                <div className="absolute top-[77%] left-[17%] z-10"><GlitchMask width="150px" /></div>
                                <motion.div animate={{ opacity: [0.1, 0.3, 0.1], x: [0, 2, -2, 0] }} transition={{ duration: 0.2, repeat: Infinity }} className="absolute top-[40%] right-[10%] w-[120px] h-[150px] bg-lime-400/10 backdrop-blur-[2px] rounded-lg mix-blend-overlay" />
                            </div>

                            {/* TEKST I KONTAKT */}
                            <div className="relative z-30 flex flex-col h-full justify-between pointer-events-none">
                                <div className="mt-4 pointer-events-auto">
                                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-2 leading-none drop-shadow-2xl">
                                        Katarzyna<br />Piskorz
                                    </h1>
                                    <p className="text-lime-400 font-mono text-sm md:text-base mt-6 relative w-fit drop-shadow-lg">
                                        &gt; Computer Science Student @ AGH
                                        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity }} className="absolute bottom-0 -right-4 h-full w-2 bg-lime-400" />
                                    </p>
                                </div>

                                <div className="space-y-4 font-mono text-sm mt-12 bg-zinc-950/70 p-5 rounded-2xl backdrop-blur-md border border-zinc-800/80 w-fit pointer-events-auto shadow-2xl">
                                    <a href="mailto:kassimma@icloud.com" className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-transform">
                                        <Mail size={18} className="text-lime-400" /> kassimma@icloud.com
                                    </a>
                                    <a href="tel:+48608148287" className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-transform">
                                        <Phone size={18} className="text-lime-400" /> +48 608 148 287
                                    </a>
                                    <div className="flex items-center gap-3 opacity-70">
                                        <MapPin size={18} className="text-lime-400" /> Kraków, Poland
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>

                {/* --- 2. SUMMARY --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.06} scale={1.04} transitionSpeed={1500} className="h-full">
                        <div className="h-full bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Professional Summary</h2>
                                <Cpu className="text-zinc-700 group-hover:text-lime-400 transition-colors" size={24} />
                            </div>
                            <p className="text-base md:text-xl leading-relaxed text-zinc-100 font-light">
                                Software Engineer focused on backend architecture and <span className="text-lime-400 font-medium bg-lime-400/20 px-1.5 py-0.5 rounded group-hover:bg-lime-400 group-hover:text-black transition-colors">system reliability</span>.
                                Passionate about <span className="text-lime-400 font-medium bg-lime-400/20 px-1.5 py-0.5 rounded group-hover:bg-lime-400 group-hover:text-black transition-colors">automation</span>,
                                infrastructure health, and optimizing developer workflows. Experienced in managing normalized databases and building proactive tooling
                                to reduce operational complexity and streamline <span className="text-lime-400 font-medium bg-lime-400/20 px-1.5 py-0.5 rounded group-hover:bg-lime-400 group-hover:text-black transition-colors">incident resolution</span>.
                            </p>
                        </div>
                    </Tilt>
                </motion.div>

                {/* --- 3. EDUCATION --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-1 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.25} scale={1.06} transitionSpeed={1200} className="h-full">
                        <div className="h-full bg-lime-400 text-black rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(163,230,53,0.1)]">
                            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Education</h2>
                            <div>
                                <h3 className="font-black text-2xl leading-tight mb-2">AGH University</h3>
                                <p className="font-mono text-xs opacity-80 mb-6">2024 – Present | Sem. 4</p>
                                <p className="text-sm font-medium leading-snug">B.Sc. in Computer Science (Faculty of Computing)</p>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>

                {/* --- 4. SKILLS --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-1 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.08} scale={1.04} transitionSpeed={1500} className="h-full">
                        <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2.5">
                                {['Bash', 'UNIX/Linux', 'Python', 'SQL', 'Git', 'APIs', 'CI/CD Basics', 'Log Analysis', 'PHP', 'MySQL'].map((skill) => (
                                    <span key={skill} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 text-xs rounded-full font-mono text-zinc-300 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 cursor-default transition-all">
        {skill}
    </span>
                                ))}
                            </div>
                        </div>
                    </Tilt>
                </motion.div>

                {/* --- PRZERWA NA WYMUSZENIE SCROLLA --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 mt-16 mb-4 flex items-end gap-4 z-10">
                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Selected Projects</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent mb-3"></div>
                </motion.div>

                {/* --- PROJECT 1: Retro Web App --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.15} glareColor="#f97316" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/lago0na/WDAI-Projekt" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-6">
                                    <Globe className="text-zinc-500 group-hover:text-orange-400 transition-colors" size={32} />
                                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                                        <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Retro VHS Web Platform</h3>
                                    <div className="text-sm text-zinc-400 mb-6 leading-relaxed space-y-2">
                                        <p>Developed a full-stack web application for retro movie reservations featuring a custom neo-brutalist UI design.</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Implemented secure authentication using JWT with refresh token rotation and RBAC.</li>
                                            <li>Engineered a dynamic shopping cart system and interactive review module with server-side validation.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-orange-400 font-mono bg-orange-400/20 px-2 py-1 rounded">#React</span>
                                        <span className="text-xs text-orange-400 font-mono bg-orange-400/20 px-2 py-1 rounded">#TypeScript</span>
                                        <span className="text-xs text-orange-400 font-mono bg-orange-400/20 px-2 py-1 rounded">#JWT</span>
                                        <span className="text-xs text-orange-400 font-mono bg-orange-400/20 px-2 py-1 rounded">#REST API</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>

                {/* --- PROJECT 2: Darwin World --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.15} glareColor="#a3e635" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/kassimma123/PO_2025_CZW11-30_PISKORZ_KOMAR" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-green-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-6">
                                    <Terminal className="text-zinc-500 group-hover:text-lime-400 transition-colors" size={32} />
                                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-lime-500 group-hover:border-lime-500 transition-all">
                                        <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Darwin World Ecosystem Sim</h3>
                                    <div className="text-sm text-zinc-400 mb-6 leading-relaxed space-y-2">
                                        <p>Architected a sophisticated, highly customizable evolutionary simulation application using advanced OOP design patterns.</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Implemented complex genetic algorithms managing animal reproduction, mutation, and survival mechanics based on energy consumption.</li>
                                            <li>Engineered the "FOMO" psychological variant, implementing complex spatial algorithms to simulate crowd-following behaviors.</li>
                                            <li>Built a real-time tracking system to visualize population statistics and dominant genotypes.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-lime-400 font-mono bg-lime-400/20 px-2 py-1 rounded">#Java</span>
                                        <span className="text-xs text-lime-400 font-mono bg-lime-400/20 px-2 py-1 rounded">#OOP</span>
                                        <span className="text-xs text-lime-400 font-mono bg-lime-400/20 px-2 py-1 rounded">#JavaFX</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>

                {/* --- PROJECT 3: Furniture DB --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.15} glareColor="#4f46e5" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/kassimma123/Furniture_Company_DB" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-6">
                                    <Database className="text-zinc-500 group-hover:text-indigo-400 transition-colors" size={32} />
                                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                                        <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">ERP Furniture Mfg Database</h3>
                                    <div className="text-sm text-zinc-400 mb-6 leading-relaxed space-y-2">
                                        <p>Designed and implemented a comprehensive, 3NF-normalized relational database for a manufacturing company.</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Wrote complex schema structures including computational columns, foreign keys, and over 20 specific data integrity constraints (CHECK, UNIQUE).</li>
                                            <li>Modeled multi-layered business processes spanning inventory management, production planning, HR capacity, and client orders.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-indigo-400 font-mono bg-indigo-400/20 px-2 py-1 rounded">#SQL Server</span>
                                        <span className="text-xs text-indigo-400 font-mono bg-indigo-400/20 px-2 py-1 rounded">#T-SQL</span>
                                        <span className="text-xs text-indigo-400 font-mono bg-indigo-400/20 px-2 py-1 rounded">#Relational DB</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>

                {/* --- TOOLING & AUTOMATION BLOCK --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.15} glareColor="#06b6d4" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/kassimma123" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {/* Header z ikonami - Strzałka po prawej */}
                                <div className="flex justify-between items-start mb-6">
                                    <Terminal className="text-zinc-500 group-hover:text-cyan-400 transition-colors" size={32} />
                                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                                        <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">System Utilities & Scripting</h3>
                                    <div className="text-sm text-zinc-400 mb-6 leading-relaxed space-y-2">
                                        <p>A collection of scripts designed to enhance system observability and automate administrative tasks.</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Developed **Python Log Parsers** for rapid root-cause debugging and error pattern extraction.</li>
                                            <li>Engineered **Bash scripts** for automated backups and system health monitoring.</li>
                                            <li>Built data scraping tools to automate database population and normalization.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-cyan-400 font-mono bg-cyan-400/20 px-2 py-1 rounded">#Python</span>
                                        <span className="text-xs text-cyan-400 font-mono bg-cyan-400/20 px-2 py-1 rounded">#Bash</span>
                                        <span className="text-xs text-cyan-400 font-mono bg-cyan-400/20 px-2 py-1 rounded">#Automation</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>

                {/* --- PROJECT 4: Differential Equations --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.15} glareColor="#ec4899" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/kassimma123/Differential_and_difference_equations" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-6">
                                    <Calculator className="text-zinc-500 group-hover:text-pink-400 transition-colors" size={32} />
                                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 transition-all">
                                        <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Differential Equation Solver</h3>
                                    <div className="text-sm text-zinc-400 mb-6 leading-relaxed space-y-2">
                                        <p>A technical tool utilizing advanced mathematical libraries to solve and visualize complex numerical equations.</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Implemented numerical methods for solving differential and difference equations.</li>
                                            <li>Leveraged scientific computing libraries for robust calculations and data visualization.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-pink-400 font-mono bg-pink-400/20 px-2 py-1 rounded">#Python</span>
                                        <span className="text-xs text-pink-400 font-mono bg-pink-400/20 px-2 py-1 rounded">#NumPy</span>
                                        <span className="text-xs text-pink-400 font-mono bg-pink-400/20 px-2 py-1 rounded">#SciPy</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>

                {/* --- 8. AVAILABILITY --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
                        <div className="h-full bg-zinc-800/40 border-2 border-dashed border-zinc-700 rounded-3xl p-8 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-white mb-4">Availability & Requirements</h2>
                                <ul className="text-sm text-zinc-400 list-none space-y-2.5 font-mono">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div> &gt; EU Citizen</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div> &gt; Shift rotations (7 AM – 8 PM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div> &gt; 24/7 on-call support</li>
                                </ul>
                            </div>
                            <Server size={80} className="text-zinc-700 opacity-40" />
                        </div>
                    </Tilt>
                </motion.div>

                {/* --- 9. GITHUB / SOCIAL LINKS --- */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="md:col-span-2 z-10">
                    <Tilt perspective={800} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={true} glareMaxOpacity={0.2} glareColor="#a3e635" scale={1.04} transitionSpeed={1500} className="h-full">
                        <a href="https://github.com/kassimma123" target="_blank" rel="noopener noreferrer" className="block h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300 group cursor-pointer">
                            <Github className="group-hover:scale-125 transition-transform duration-300" size={36} />
                            <span className="font-bold text-2xl tracking-tight">Check my GitHub</span>
                            <span className="font-mono text-sm opacity-60">&gt; View full repository list</span>
                        </a>
                    </Tilt>
                </motion.div>

            </div>
        </div>
    );
}
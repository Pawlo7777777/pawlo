import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Award, Users, Coffee, ArrowRight, Star, Briefcase, Sparkles, Rocket, Pen } from 'lucide-react';

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const featuredProjects = [
    {
      title: "Funeral Services Management",
      description: "A comprehensive full-stack e-commerce solution featuring real-time inventory management, secure payment processing with PayMongo, and an intuitive admin dashboard",
      tech: ["React", "PHP", "MySQL", "WebSocket API", "OAuth", "PayMongo"],
      gradient: "from-purple-500 to-pink-500",
      category: "Web System"
    },
    {
      title: "NSTP Attendance Monitoring",
      description: "The **NSTP Monitoring System using QR Code** is a digital solution that tracks student attendance and participation through QR code scanning for efficient and accurate monitoring",
      tech: ["React", "PHP", "OAuth", "MySQL"],
      gradient: "from-blue-500 to-cyan-500",
      category: "Web App"
    },
    {
      title: "Waste Detection Management",
      description: "Waste Detection Management in Python is a computer-vision system that uses trained models to automatically detect and classify waste into categories (residual, non-biodegradable, recyclable, compostable), enabling automated sorting, tracking, and reporting for efficient waste management.",
      tech: ["Python", "TensorFlow", "Pandas", "Numpy"],
      gradient: "from-orange-500 to-red-500",
      category: "AI"
    }
  ];

  const recentProjects = [
    {
      title: "NSTP Monitoring App",
      description: "The NSTP Monitoring using Android App (Java) is a mobile system that tracks student attendance and participation in NSTP activities through QR code scanning for efficient and accurate monitoring.",
      tech: ["Java", "Firebase", "ZXing"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Simple Calculator",
      description: "A Web-Based Calculator is an online tool built using HTML, CSS, and JavaScript that allows users to perform basic or advanced arithmetic operations directly in a web browser without installing any software.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Hospital Management System",
      description: "A web-based application that manages hospital operations such as patient records, appointments, staff management, and billing, providing a seamless interface for users with React on the frontend, PHP for server-side logic, and MySQL for database management.",
      tech: ["React", "PHP", "MySQL"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Restaurant Ordering System",
      description: "Complete restaurant management solution with online ordering, table reservations, and kitchen display",
      tech: ["React", "Express.js", "PayMongo", "MySQL"],
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend Development", icon: <Zap className="w-6 h-6" />, items: ["PHP", "Node.js", "Java", "Python", "MySQL", "API"] },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, items: ["Adobe PhotoShop", "Prototyping", "Design Systems"] },
    { name: "CI/CD Development", icon: <Pen className="w-6 h-6" />, items: ["Git", "Github"] }
  ];

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: "20", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, value: "20", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, value: "3", label: "Years Experience" },
    { icon: <Coffee className="w-8 h-8" />, value: "100+", label: "Cups of Coffee" }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-slate-800/50' : 'bg-transparent'}`}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                PV.
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-cyan-400 transition-all duration-300 relative group font-medium ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                      }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-cyan-400 transition-colors">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 hover:bg-slate-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        {/* Multiple animated orbs with different speeds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid"></div>

        {/* Interactive cursor follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full filter blur-3xl pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 animate-fade-in-up backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block animate-gradient bg-300">
              Paolo Villanueva
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">Full Stack Developer</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">UI/UX Designer</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">Creative Thinker</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">Problem Solver</span>
          </div>

          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Passionate about crafting exceptional digital experiences through clean code,
            intuitive design, and innovative solutions that make a difference.
          </p>

          <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Specializing in modern web technologies, responsive design, and building scalable applications
            that users love and businesses rely on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </a>
            <a href="#contact" className="group px-8 py-4 border-2 border-cyan-500 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-2">
                Let's Talk
                <Mail className="w-5 h-5" />
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/Pawlo7777777" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/paolo-villanueva-85167a387/" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:paolovillanueva7777777@gmail.com" }
            ].map((social, idx) => (
              <a key={idx} href={social.href} className="group relative p-3 bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <div className="w-2.5 sm:w-3 h-8 sm:h-10 border-2 border-cyan-500/50 rounded-full flex justify-center items-start overflow-hidden">
            <div className="w-1 h-2 sm:h-3 bg-cyan-500 rounded-full mt-1 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              <Rocket className="w-4 h-4" />
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Turning Ideas Into Reality
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A passionate developer dedicated to creating meaningful digital experiences
            </p>
          </div>

          {/* About Text with enhanced styling */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <div className="relative">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm a Full Stack Developer with over 2 years of experience building web applications
                  that combine beautiful design with powerful functionality. My journey in tech started
                  with a curiosity about how things work, which evolved into a passion for creating
                  solutions that make people's lives easier.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Throughout my career, I've had the privilege of working with startups, agencies, and
                  established companies, helping them bring their digital visions to life. I believe in
                  writing clean, maintainable code and creating user experiences that are not just
                  functional, but delightful.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I'm always
                  excited to take on new challenges and collaborate on innovative projects.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My approach combines technical expertise with creative problem-solving, ensuring
                  that every project I work on is built to scale, optimized for performance, and
                  designed with the end user in mind.
                </p>
              </div>
            </div>
          </div>

          {/* Stats with enhanced animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center overflow-hidden transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills with enhanced effects */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/50 to-transparent transition-all duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{skill.name}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {skill.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-900/50 rounded-lg px-3 py-2 hover:bg-slate-900/70 transition-colors duration-200">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              <Star className="w-4 h-4" />
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Showcasing my best work - from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/50 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                  {/* Animated grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-950/70 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-slate-950/90 backdrop-blur-sm p-4 rounded-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-lg text-xs text-cyan-400 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 md:py-32 px-4 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">More Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Recent Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Exploring diverse challenges across different domains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/60 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900/50 rounded text-xs text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
          </p>
          <p className="text-slate-400 mb-12">
            Whether you need a complete web application, want to improve your existing platform,
            or just want to chat about technology, I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/Pawlo7777777" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/paolo-villanueva-85167a387/" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:paolovillanueva7777777@gmail.com" }
            ].map((social, idx) => (
              <a key={idx} href={social.href} className="group relative p-5 bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                <div className="relative">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          <a href="mailto:your.email@example.com" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="relative flex items-center gap-3">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Paolo Villanueva
              </div>
              <p className="text-slate-400 text-sm">Building the future, one line of code at a time.</p>
            </div>

            <div className="flex gap-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>© 2025 Paolo Villanueva. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, 15px) scale(1.05);
          }
        }

        @keyframes grid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(64px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300 {
          background-size: 300% 300%;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-grid {
          animation: grid 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}
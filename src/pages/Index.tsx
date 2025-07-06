
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import FeatureCard from '@/components/FeatureCard';
import { MessageSquare, Code, Play, Github, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add small delay before starting animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "API Integration", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-arcade-dark pt-16">
      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        
        <div className={`mt-16 mb-12 text-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Sufian Pranto</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Full-stack developer passionate about creating innovative web solutions and beautiful user experiences.
          </p>
        </div>
        
        <Terminal />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 mb-16">
          <FeatureCard 
            icon={<MessageSquare size={28} />} 
            title="Frontend Development" 
            description="Creating responsive and interactive user interfaces with modern frameworks" 
            delay="delay-100" 
          />
          
          <FeatureCard 
            icon={<Code size={28} />} 
            title="Backend Development" 
            description="Building robust server-side applications and APIs" 
            delay="delay-300" 
          />
          
          <FeatureCard 
            icon={<Play size={28} />} 
            title="Full-Stack Solutions" 
            description="End-to-end development from concept to deployment" 
            delay="delay-500" 
          />
        </div>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16">
          <div className={`text-center mb-12 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-arcade-terminal border border-gray-800 rounded-xl p-6 hover:border-arcade-purple/50 transition-all duration-300 opacity-0 animate-slide-up delay-${(index + 1) * 100}`}
              >
                <div className="h-48 bg-gradient-to-br from-arcade-purple/20 to-arcade-pink/20 rounded-lg mb-4 flex items-center justify-center">
                  <Code size={48} className="text-arcade-purple/50" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-arcade-purple/20 text-arcade-purple text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-arcade-purple hover:text-arcade-pink transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-arcade-purple hover:text-arcade-pink transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className={`text-center mb-12 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-arcade-purple/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-arcade-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-sm">sufian@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-arcade-purple/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-arcade-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-arcade-purple/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-arcade-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-sm">Your City, Country</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-arcade-terminal rounded-xl p-6 border border-gray-800">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple resize-none transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-arcade-purple to-arcade-pink text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Sufian Pranto. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-arcade-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-arcade-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

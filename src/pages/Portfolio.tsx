
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-arcade-dark pt-16">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Showcase of my work and projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder portfolio items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-arcade-terminal rounded-lg p-6 border border-gray-800 hover:border-arcade-purple/50 transition-colors"
              >
                <div className="h-40 bg-gradient-to-br from-arcade-purple/20 to-arcade-pink/20 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project {item}</h3>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

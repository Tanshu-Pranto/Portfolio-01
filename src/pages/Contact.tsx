
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-arcade-dark pt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Get in touch with me
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-arcade-purple" size={24} />
                <span>sufian@example.com</span>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-arcade-purple" size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="text-arcade-purple" size={24} />
                <span>Your Location</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-arcade-terminal rounded-lg p-6 border border-gray-800">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple"
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
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple"
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
                    className="w-full px-3 py-2 bg-arcade-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-arcade-purple resize-none"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

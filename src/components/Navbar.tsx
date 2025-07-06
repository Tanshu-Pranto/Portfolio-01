import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    path: '/',
    label: 'Profile'
  }, {
    name: 'Portfolio',
    path: '/portfolio',
    label: 'Portfolio'
  }, {
    name: 'Contact',
    path: '/contact',
    label: 'Contact'
  }];
  const toggleMenu = () => setIsOpen(!isOpen);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-arcade-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <NavLink to="/" className="text-xl font-bold gradient-text">Sufian Pranto</NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
            isActive
          }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-arcade-purple bg-arcade-purple/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}>
                {item.label}
              </NavLink>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white p-2" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-arcade-dark border-t border-gray-800">
              {navItems.map(item => <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={({
            isActive
          }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'text-arcade-purple bg-arcade-purple/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}>
                  {item.label}
                </NavLink>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
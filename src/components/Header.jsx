import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    // If clicking Contact from Why Us page, go back to home first
    if (currentPage === 'why-us' && sectionId === 'contact') {
      onNavigate('home');
      // Wait a moment for the page to render, then scroll to contact
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Determine which links to show based on current page
  const getNavLinks = () => {
    if (currentPage === 'why-us') {
      return [
        { label: 'Home', id: 'home' },
        { label: 'Why Us', id: 'why-us', highlight: true },
        { label: 'Contact', id: 'contact' },
      ];
    }
    return [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Products', id: 'products' },
      { label: 'Why Us', id: 'why-us', highlight: true },
      { label: 'Contact', id: 'contact' },
    ];
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Why Us', id: 'why-us', highlight: true },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ES</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">Enterprise Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {getNavLinks().map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  link.highlight
                    ? 'px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:scale-105'
                    : activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
            {getNavLinks().map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  link.highlight
                    ? 'px-4 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md'
                    : activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2 px-6 py-2 bg-linear-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
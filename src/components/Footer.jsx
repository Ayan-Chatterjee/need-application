import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Integrations', 'API Docs'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Guides', 'Community', 'Support', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ES</span>
              </div>
              <span className="text-xl font-bold">Enterprise Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering businesses worldwide with innovative technology solutions. Transform your vision into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+18001234567" className="hover:text-blue-400 transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:support@enterprise.com" className="hover:text-blue-400 transition-colors">
                  support@enterprise.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p>123 Business Avenue</p>
                  <p>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left - Copyright & Social */}
          <div className="space-y-4 flex-1">
            <p className="text-gray-400 text-sm">
              © {currentYear} Enterprise Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Trust Badges */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
              <span className="text-blue-400 font-bold">✓</span>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
              <span className="text-blue-400 font-bold">✓</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
              <span className="text-blue-400 font-bold">✓</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-md mx-auto lg:mx-0">
            <h4 className="text-lg font-bold text-white mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Credit */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Crafted with ❤️ by Enterprise Solutions | {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

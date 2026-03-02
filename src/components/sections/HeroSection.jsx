/**
 * Hero Section Component
 * Main hero section with headline and CTA
 */

import { ArrowRight } from 'lucide-react';
import HeroBgDecorations from '../shared/HeroBgDecorations';

export const HeroSection = ({ 
  title, 
  description, 
  primaryBtnText = 'Let\'s Make It Awesome',
  secondaryBtnText = 'See What We\'ve Built',
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  companies = [] 
}) => {
  return (
    <section id="home" className="bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden">
      <HeroBgDecorations />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
              >
                {primaryBtnText}
              </button>
              <button 
                onClick={onSecondaryClick}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {secondaryBtnText}
              </button>
            </div>

            {/* Trust Indicators */}
            {companies.length > 0 && (
              <div className="pt-4">
                <p className="text-sm text-blue-100 mb-3">Real companies. Real websites. Real Results.</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {companies.map((company, idx) => (
                    <div key={idx} className="h-10 w-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-xs font-semibold">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Visual - Placeholder */}
          <div className="relative h-96 lg:h-full min-h-80">
            <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-400 rounded-2xl opacity-30 blur-2xl"></div>
            <div className="relative bg-linear-to-br from-white from-5% via-blue-50 via-50% to-indigo-50 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-50 h-full flex flex-col items-center justify-center shadow-2xl">
              <div className="text-center space-y-6 relative z-10">
                {/* Hero Illustration Placeholder */}
                <div className="text-6xl">🚀</div>
                <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Scale?
                </h3>
                <div className="h-1 w-12 bg-linear-to-r from-blue-400 to-indigo-400 rounded-full mx-auto"></div>
                <p className="text-gray-700 font-semibold text-base">Thousands of businesses already did</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

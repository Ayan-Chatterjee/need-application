/**
 * Features Section Component
 * For displaying feature/benefit cards
 */

import { Zap } from 'lucide-react';
import FeatureCard from '../cards/FeatureCard';

export const FeaturesSection = ({ title, description, features, columnCount = 2 }) => {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 ${gridClass[columnCount]} gap-12`}>
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <Zap className="text-white" size={24} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-1 mt-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-blue-600 font-medium flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

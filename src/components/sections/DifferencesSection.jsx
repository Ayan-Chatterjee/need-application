/**
 * Differences/Why Choose Us Section
 * Grid of differentiators
 */

import FeatureCard from '../cards/FeatureCard';

const iconMap = {
  Code: require('lucide-react').Code,
  Rocket: require('lucide-react').Rocket,
  Shield: require('lucide-react').Shield,
  BarChart3: require('lucide-react').BarChart3,
  Smartphone: require('lucide-react').Smartphone,
  Zap: require('lucide-react').Zap,
  Clock: require('lucide-react').Clock,
  Target: require('lucide-react').Target,
};

export const DifferencesSection = ({ title, description, items }) => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FeatureCard
                key={index}
                icon={Icon}
                title={item.title}
                description={item.description}
                stats={item.stats}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferencesSection;

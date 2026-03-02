/**
 * Process Section Component
 * Display process steps
 */

import ProcessCard from '../cards/ProcessCard';

const iconMap = {
  Lightbulb: require('lucide-react').Lightbulb,
  Layers: require('lucide-react').Layers,
  Code: require('lucide-react').Code,
  CheckCircle: require('lucide-react').CheckCircle,
  Rocket: require('lucide-react').Rocket,
  TrendingUp: require('lucide-react').TrendingUp,
};

export const ProcessSection = ({ title, description, processes }) => {
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
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              step={process.step}
              title={process.title}
              description={process.description}
              isLast={index === processes.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

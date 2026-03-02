/**
 * Statistics Section Component
 * Displays key metrics/stats
 */

import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const iconComponents = {
  TrendingUp,
  Users,
  Award,
  Zap,
};

export const StatisticsSection = ({ stats }) => {
  return (
    <section className="bg-gray-900 text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconComponents[stat.icon];
            return (
              <div key={index} className="text-center">
                {Icon && <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />}
                <h4 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

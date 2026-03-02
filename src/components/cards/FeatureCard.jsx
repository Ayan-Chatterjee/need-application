/**
 * Feature Card Component
 * Reusable card for features and benefits
 */

import { Zap } from 'lucide-react';

const iconMap = {
  Code: () => require('lucide-react').Code,
  Rocket: () => require('lucide-react').Rocket,
  Shield: () => require('lucide-react').Shield,
  BarChart3: () => require('lucide-react').BarChart3,
  Smartphone: () => require('lucide-react').Smartphone,
  Zap: () => require('lucide-react').Zap,
  Clock: () => require('lucide-react').Clock,
  Target: () => require('lucide-react').Target,
};

export const FeatureCard = ({ 
  icon: IconComponent, 
  title, 
  description, 
  benefits = null,
  stats = null,
  color = null 
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
      {color ? (
        <div className={`w-16 h-16 bg-linear-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
      ) : (
        <div className="mb-6">
          <IconComponent className="w-8 h-8 text-blue-600" />
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {benefits && (
        <ul className="space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
      
      {stats && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm font-semibold text-blue-600">{stats}</span>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;

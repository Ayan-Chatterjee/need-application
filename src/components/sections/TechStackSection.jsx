/**
 * Tech Stack Section Component
 */

import TechCard from '../cards/TechCard';

export const TechStackSection = ({ title, description, techs }) => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techs.map((item, index) => (
            <TechCard key={index} tech={item.tech} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

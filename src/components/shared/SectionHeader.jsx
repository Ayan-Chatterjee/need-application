/**
 * Reusable Section Header Component
 * Used across pages for consistent section titles
 */

export const SectionHeader = ({ badge, title, description, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className="inline-block px-6 py-3 bg-blue-300 bg-opacity-60 border border-blue-200 rounded-full text-base font-bold text-blue-900 shadow-lg mb-6">
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

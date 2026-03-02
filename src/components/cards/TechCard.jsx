/**
 * Tech Stack Card Component
 * For displaying technologies/tools
 */

export const TechCard = ({ tech, desc }) => {
  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{tech}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default TechCard;

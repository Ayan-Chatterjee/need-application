/**
 * Product Category Card Component
 */

export const ProductCard = ({ icon: Icon, name, description, color, borderColor, textColor }) => {
  return (
    <div
      className={`${color} ${borderColor} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}
    >
      <div className={`${textColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <button className={`${textColor} font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200`}>
        Learn More
        <span className="text-xl">→</span>
      </button>
    </div>
  );
};

export default ProductCard;

import PropTypes from 'prop-types';

/**
 * Reusable Card Component
 * Used for products, features, and content containers
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Card style: 'default', 'gradient', 'colored'
 * @param {string} props.color - Color scheme for colored variant
 * @param {boolean} props.hoverable - Enable hover effects
 * @param {string} props.className - Additional CSS classes
 */
const Card = ({
  children,
  variant = 'default',
  color = 'blue',
  hoverable = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-2xl p-6 lg:p-10 transition-all duration-300';
  
  const hoverClasses = hoverable ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : '';

  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-lg',
    gradient: 'bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-md',
    colored: getColoredVariant(color),
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Get colored variant classes based on color prop
 */
function getColoredVariant(color) {
  const colorMap = {
    blue: 'bg-blue-50 border-2 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-2 border-green-200 text-green-900',
    purple: 'bg-purple-50 border-2 border-purple-200 text-purple-900',
    yellow: 'bg-yellow-50 border-2 border-yellow-200 text-yellow-900',
    pink: 'bg-pink-50 border-2 border-pink-200 text-pink-900',
    indigo: 'bg-indigo-50 border-2 border-indigo-200 text-indigo-900',
  };

  return colorMap[color] || colorMap.blue;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'gradient', 'colored']),
  color: PropTypes.oneOf(['blue', 'green', 'purple', 'yellow', 'pink', 'indigo']),
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;

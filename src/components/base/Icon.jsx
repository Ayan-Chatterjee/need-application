import PropTypes from 'prop-types';

/**
 * Reusable Icon Component
 * Wrapper for lucide-react icons with size and color variants
 * 
 * @param {Object} props - Component props
 * @param {React.ElementType} props.icon - Lucide React icon component
 * @param {string} props.size - Icon size (xs, sm, md, lg, xl, 2xl)
 * @param {string} props.color - Icon color (text-{color})
 * @param {string} props.strokeWidth - SVG stroke width
 * @param {boolean} props.responsive - Apply responsive sizing
 * @param {string} props.className - Additional CSS classes
 */
const Icon = ({
  icon: IconComponent,
  size = 'md',
  color = 'text-gray-700',
  strokeWidth = 2,
  responsive = false,
  className = '',
  ...props
}) => {
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10',
  };

  const responsiveSize = responsive ? 'md:w-6 md:h-6 lg:w-8 lg:h-8' : '';
  const sizeClass = sizeMap[size] || sizeMap.md;

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={`${sizeClass} ${color} ${responsiveSize} ${className}`}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  responsive: PropTypes.bool,
  className: PropTypes.string,
};

export default Icon;

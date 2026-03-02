import PropTypes from 'prop-types';

/**
 * Reusable Badge Component
 * Compact component for badges, pills, and status indicators
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.variant - Badge style (solid, outline, soft)
 * @param {string} props.color - Badge color (blue, green, red, yellow, purple, pink, gray)
 * @param {string} props.size - Badge size (sm, md, lg)
 * @param {boolean} props.isRounded - Use full rounded (pill shape)
 * @param {React.ElementType} props.icon - Optional icon component
 * @param {string} props.className - Additional CSS classes
 */
const Badge = ({
  children,
  variant = 'solid',
  color = 'blue',
  size = 'md',
  isRounded = true,
  icon: IconComponent,
  className = '',
  ...props
}) => {
  const colorVariants = {
    blue: {
      solid: 'bg-blue-100 text-blue-800',
      outline: 'border border-blue-300 text-blue-800',
      soft: 'bg-blue-50 text-blue-700',
    },
    green: {
      solid: 'bg-green-100 text-green-800',
      outline: 'border border-green-300 text-green-800',
      soft: 'bg-green-50 text-green-700',
    },
    red: {
      solid: 'bg-red-100 text-red-800',
      outline: 'border border-red-300 text-red-800',
      soft: 'bg-red-50 text-red-700',
    },
    yellow: {
      solid: 'bg-yellow-100 text-yellow-800',
      outline: 'border border-yellow-300 text-yellow-800',
      soft: 'bg-yellow-50 text-yellow-700',
    },
    purple: {
      solid: 'bg-purple-100 text-purple-800',
      outline: 'border border-purple-300 text-purple-800',
      soft: 'bg-purple-50 text-purple-700',
    },
    pink: {
      solid: 'bg-pink-100 text-pink-800',
      outline: 'border border-pink-300 text-pink-800',
      soft: 'bg-pink-50 text-pink-700',
    },
    gray: {
      solid: 'bg-gray-100 text-gray-800',
      outline: 'border border-gray-300 text-gray-800',
      soft: 'bg-gray-50 text-gray-700',
    },
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs font-medium',
    md: 'px-3 py-1 text-sm font-medium',
    lg: 'px-4 py-2 text-base font-medium',
  };

  const roundedClass = isRounded ? 'rounded-full' : 'rounded';
  const colorClass = colorVariants[color]?.[variant] || colorVariants.blue.solid;
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <span
      className={`inline-flex items-center gap-2 ${sizeClass} ${colorClass} ${roundedClass} ${className}`}
      {...props}
    >
      {IconComponent && (
        <IconComponent
          className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}
        />
      )}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline', 'soft']),
  color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'gray']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isRounded: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default Badge;

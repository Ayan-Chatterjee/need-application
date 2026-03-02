import PropTypes from 'prop-types';

/**
 * Reusable Button Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.isLoading - Loading state
 * @param {string} props.className - Additional CSS classes
 * @param {function} props.onClick - Click handler
 * @param {string} props.type - HTML button type
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600',
    ghost: 'text-gray-700 hover:text-blue-600 hover:bg-gray-100',
  };

  const baseClasses = 'rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center justify-center gap-2 whitespace-nowrap';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
      {...props}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;

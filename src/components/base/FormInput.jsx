import PropTypes from 'prop-types';

/**
 * Reusable FormInput Component
 * Handles text inputs, emails, phone, textarea with built-in icons
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type: text, email, tel, textarea
 * @param {React.Component} props.icon - Icon component to display
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Show required asterisk
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.register - react-hook-form register function
 * @param {string} props.name - Field name
 */
const FormInput = ({
  label,
  type = 'text',
  icon: Icon,
  placeholder,
  error,
  required = false,
  className = '',
  register,
  name,
  ...props
}) => {
  const baseInputClasses = 'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition';
  const textareaClasses = type === 'textarea' ? 'resize-none' : '';
  const hasIconClasses = Icon ? 'pl-10' : 'pl-4';
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3.5 text-gray-400" size={20} />
        )}
        
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            rows="4"
            className={`${baseInputClasses} ${textareaClasses} ${hasIconClasses} ${errorClasses} ${className}`}
            {...register?.(name)}
            {...props}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className={`${baseInputClasses} ${hasIconClasses} ${errorClasses} ${className}`}
            {...register?.(name)}
            {...props}
          />
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password', 'textarea']),
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
};

export default FormInput;

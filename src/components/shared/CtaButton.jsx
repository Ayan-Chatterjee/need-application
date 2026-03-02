/**
 * Call-to-Action Button Component
 * Reusable CTA with variants
 */

import { ArrowRight } from 'lucide-react';

export const CtaButton = ({ variant = 'primary', icon = true, children, ...props }) => {
  const baseStyles = 'px-8 py-4 font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-white text-blue-600 hover:bg-gray-100',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
    gradient: 'bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl',
    outline: 'border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
      {icon && variant !== 'outline' && <ArrowRight size={20} />}
    </button>
  );
};

export default CtaButton;

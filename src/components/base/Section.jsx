import PropTypes from 'prop-types';

/**
 * Reusable Section Component
 * Wrapper for page sections with consistent padding and background
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.bgColor - Background color
 * @param {string} props.className - Additional CSS classes
 */
const Section = ({
  children,
  id,
  bgColor = 'bg-white',
  className = '',
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${bgColor} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
};

export default Section;

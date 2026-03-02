import PropTypes from 'prop-types';

/**
 * Reusable Grid Component
 * Responsive grid layout wrapper for consistent grid layouts
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Grid content
 * @param {number} props.cols - Number of columns on desktop
 * @param {number} props.colsMd - Number of columns on tablet
 * @param {number} props.colsSm - Number of columns on mobile
 * @param {string} props.gap - Gap between grid items (Tailwind spacing)
 * @param {string} props.className - Additional CSS classes
 */
const Grid = ({
  children,
  cols = 3,
  colsMd = 2,
  colsSm = 1,
  gap = 'gap-6',
  className = '',
  ...props
}) => {
  const gridColsClass = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  }[cols] || 'lg:grid-cols-3';

  const gridColsMdClass = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[colsMd] || 'md:grid-cols-2';

  const gridColsSmClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }[colsSm] || 'grid-cols-1';

  return (
    <div
      className={`grid ${gridColsSmClass} ${gridColsMdClass} ${gridColsClass} ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  colsMd: PropTypes.oneOf([1, 2, 3, 4]),
  colsSm: PropTypes.oneOf([1, 2, 3]),
  gap: PropTypes.string,
  className: PropTypes.string,
};

export default Grid;

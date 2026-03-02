const ShimmerCard = ({ width = 'w-full', height = 'h-48' }) => {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg overflow-hidden`}>
      <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </div>
  );
};

const ShimmerText = ({ width = 'w-3/4', height = 'h-4' }) => {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer`}></div>
  );
};

const ShimmerProductGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4">
          <ShimmerCard height="h-40" />
          <ShimmerText width="w-2/3" />
          <ShimmerText width="w-1/2" />
        </div>
      ))}
    </div>
  );
};

const ShimmerSection = ({ lines = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: lines }).map((_, i) => (
        <ShimmerText key={i} width={i === 0 ? 'w-1/3' : 'w-full'} />
      ))}
    </div>
  );
};

export { ShimmerCard, ShimmerText, ShimmerProductGrid, ShimmerSection };

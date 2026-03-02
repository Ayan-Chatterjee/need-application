/**
 * Process Step Card Component
 * For displaying process/workflow steps
 */

export const ProcessCard = ({ step, title, description, icon: IconComponent, isLast = false }) => {
  return (
    <>
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="shrink-0">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-indigo-600">
              <span className="text-2xl font-bold text-white">{step}</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        {!isLast && (
          <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default ProcessCard;

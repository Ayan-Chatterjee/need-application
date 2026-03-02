/**
 * Call-to-Action Section Component
 */

import CtaButton from '../shared/CtaButton';

export const CtaSection = ({ title, description, primaryBtnText, secondaryBtnText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton variant="gradient" onClick={onPrimaryClick}>
            {primaryBtnText}
          </CtaButton>
          <CtaButton variant="outline" icon={false} onClick={onSecondaryClick}>
            {secondaryBtnText}
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

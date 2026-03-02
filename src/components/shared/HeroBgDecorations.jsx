/**
 * Hero Background Decorations
 * Animated gradient blobs for hero sections
 */

export const HeroBgDecorations = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </>
  );
};

export default HeroBgDecorations;

import { useState, useEffect } from 'react';
import { ShimmerProductGrid } from './Shimmer';
import { Package, Zap, Shield, BarChart3, Headphones, Settings } from 'lucide-react';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Premium Solutions',
      description: 'Comprehensive enterprise solutions tailored to your business needs',
      icon: Package,
      color: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
    },
    {
      id: 2,
      name: 'Performance Analytics',
      description: 'Real-time insights and analytics to drive informed decision-making',
      icon: BarChart3,
      color: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
    },
    {
      id: 3,
      name: 'Advanced Security',
      description: 'Enterprise-grade security protocols to protect your business data',
      icon: Shield,
      color: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
    },
    {
      id: 4,
      name: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience',
      icon: Zap,
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-600',
    },
    {
      id: 5,
      name: '24/7 Support',
      description: 'Round-the-clock customer support and assistance',
      icon: Headphones,
      color: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
    },
    {
      id: 6,
      name: 'Customization',
      description: 'Flexible solutions that adapt to your unique requirements',
      icon: Settings,
      color: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-600',
    },
  ];

  const filteredCategories =
    selectedCategory === 'all' ? categories : categories.filter((cat) => cat.id === parseInt(selectedCategory));

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of enterprise solutions designed to elevate your business
          </p>
        </div>

        {loading ? (
          <ShimmerProductGrid count={6} />
        ) : (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                View All
              </button>
              {categories.slice(0, 3).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id.toString())}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === cat.id.toString()
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className={`${category.color} ${category.borderColor} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}
                  >
                    <div className={`${category.textColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-700 mb-6">{category.description}</p>
                    <button className={`${category.textColor} font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200`}>
                      Learn More
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;

import { TrendingUp, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' },
    { icon: Users, label: 'Happy Clients', value: '2000+' },
    { icon: Award, label: 'Awards Won', value: '50+' },
    { icon: Zap, label: 'Uptime', value: '99.9%' },
  ];

  const features = [
    {
      title: 'It Actually Works',
      description: 'No fluff. No crashing. No "we\'ll fix it next quarter." Your website just works, all the time.',
      benefits: ['Always up', 'Super fast', 'Mobile-friendly'],
    },
    {
      title: 'Actually Secure',
      description: 'Your customer data is protected like it matters (because it does). We take this seriously.',
      benefits: ['Bank-level security', 'Your data is safe', 'We follow the rules'],
    },
    {
      title: 'Plays Nice With Others',
      description: 'Need to connect it to other tools? Done. We don\'t make it painful.',
      benefits: ['Works with tools you use', 'API access', 'Custom integrations'],
    },
    {
      title: 'Actually Makes Money',
      description: 'Real numbers. Real growth. People actually buy your stuff because your website doesn\'t scare them away.',
      benefits: ['More sales', 'Better customers', 'Real ROI'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Website Sucks? Let's Fix It! 🚀
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                  Got an outdated website that looks like it's from 2005? We'll make it actually good. No fluff, just real results that actually work.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                  Let's Make It Awesome
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  See What We've Built
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4">
                <p className="text-sm text-blue-100 mb-3">Real companies. Real websites. Real Results.</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="h-10 w-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-xs font-semibold">
                    TechCorp
                  </div>
                  <div className="h-10 w-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-xs font-semibold">
                    StartupCo
                  </div>
                  <div className="h-10 w-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-xs font-semibold">
                    GrowthHub
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full min-h-80">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-400 rounded-2xl opacity-30 blur-2xl"></div>
              <div className="relative bg-linear-to-br from-white from-5% via-blue-50 via-50% to-indigo-50 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-50 h-full flex flex-col items-center justify-center shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-indigo-200 rounded-full opacity-10 blur-2xl"></div>
                
                <div className="text-center space-y-6 relative z-10">
                  {/* Icon with glow */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-30 blur-lg animate-pulse"></div>
                    <div className="relative bg-linear-to-br from-blue-500 to-blue-600 rounded-full p-4 text-white">
                      <Zap className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Main heading */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      Ready to Stop Losing Money?
                    </h3>
                  </div>

                  {/* Subheading with divider */}
                  <div className="space-y-3">
                    <p className="text-gray-700 font-semibold text-base">Thousands of businesses already did</p>
                    <div className="h-1 w-12 bg-linear-to-r from-blue-400 to-indigo-400 rounded-full mx-auto"></div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 py-4">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">No hidden fees • Transparent pricing</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">We actually answer your calls</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200 shadow-lg hover:scale-105 transform">
                      Get Started (Yes, Really)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What You Actually Get (No BS)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real features that solve real problems. Not buzzwords on a slide deck.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                      <Zap className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <ul className="space-y-1 mt-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-blue-600 font-medium flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tired of Your Garbage Website?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Seriously, let's talk. We'll tell you exactly what's wrong, how to fix it, and how much it'll cost. No surprise bills.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
            Let's Chat (Free Call)
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

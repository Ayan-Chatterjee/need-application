import {
  Code,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Award,
  CheckCircle,
  Star,
  Clock,
  Target,
  Lightbulb,
  ArrowRight,
  Smartphone,
  BarChart3,
  Layers,
} from 'lucide-react';

const WhyUs = () => {
  const whyChooseUs = [
    {
      icon: Code,
      title: 'We Actually Know Code',
      description:
        'Our developers didn\'t learn from YouTube tutorials. They actually build stuff. React, Node, databases - the whole thing. Clean code, not spaghetti code.',
      stats: '15+ Years of Real Work',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Rocket,
      title: 'Your Site Won\'t Be Slow (Yay!)',
      description:
        'Slow websites are basically dead websites. Ours load in seconds, not minutes. Your visitors won\'t rage-quit.',
      stats: '2-Second Load Time',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Your Data Is Actually Protected',
      description:
        'We take security seriously. No hackers stealing your customer emails. Not on our watch. Real protection, not theater.',
      stats: 'Bank-Level Security',
      color: 'from-green-500 to-green-600',
    },
  ];

  const customerBenefits = [
    {
      icon: BarChart3,
      title: 'People Actually Buy Your Stuff',
      description: 'A pretty website that nobody buys from is just decoration. We make websites that make money.',
    },
    {
      icon: Smartphone,
      title: 'Works on Phones (Obviously)',
      description: 'Your customers have phones. We make sure your site looks good on them. Revolutionary, we know.',
    },
    {
      icon: Zap,
      title: 'Google Won\'t Hate You',
      description: 'Google ranks fast, secure websites higher. We build those. Better rankings = more customers finding you.',
    },
    {
      icon: Shield,
      title: 'No Ransomware Nightmares',
      description: 'SSL, backups, monitoring - all the boring security stuff that prevents disasters. You\'re welcome.',
    },
    {
      icon: Clock,
      title: 'Deadlines Are Sacred',
      description: 'We say it, we do it. No excuses. If we say 4 weeks, it\'s 4 weeks. Period.',
    },
    {
      icon: Target,
      title: 'We Get Your Business',
      description: 'We don\'t just build cool code. We understand your goals and build toward them. Real strategy, not guessing.',
    },
  ];

  const ourProcess = [
    {
      step: '01',
      title: 'We Ask Questions (A Lot)',
      description: 'We actually listen to what you want. Crazy concept, right?',
      icon: Lightbulb,
    },
    {
      step: '02',
      title: 'We Show You Designs',
      description: 'Pretty pictures on paper. You say yes or no. Simple.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'We Build It',
      description: 'Real code. Real features. Nothing janky.',
      icon: Code,
    },
    {
      step: '04',
      title: 'We Break It (On Purpose)',
      description: 'Testing is just trying to break it before your customers do.',
      icon: CheckCircle,
    },
    {
      step: '05',
      title: 'We Launch It',
      description: 'It goes live. Everyone cheers. You sleep better at night.',
      icon: Rocket,
    },
    {
      step: '06',
      title: 'We Keep It Working',
      description: 'We stick around. Bugs? Fixed. Updates? Done. We\'re not ghosts.',
      icon: TrendingUp,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'Founder & CEO',
      image: '👩‍💼',
      rating: 5,
      text: 'They actually delivered. No excuses, no delays. Our sales went up because our website stopped looking like it was built in 1999. Worth every penny.',
    },
    {
      name: 'Michael Chen',
      company: 'Digital Ventures',
      role: 'Marketing Director',
      image: '👨‍💼',
      rating: 5,
      text: 'They got it. They understood what we needed and didn\'t try to upsell us stuff we don\'t. Refreshing, honestly.',
    },
  ];

  const techHighlights = [
    { tech: 'React 19+', desc: 'Modern, fast, works everywhere' },
    { tech: 'Next.js 14+', desc: 'Full-stack power in one framework' },
    { tech: 'TypeScript', desc: 'Less bugs, more boring meetings' },
    { tech: 'Tailwind CSS', desc: 'Pretty fast' },
    { tech: 'Python', desc: 'Powerful backend language' },
    { tech: 'PostgreSQL', desc: 'Database that actually works' },
    { tech: 'AWS & Google Cloud', desc: 'Servers that don\'t crash' },
    { tech: 'Docker & K8s', desc: 'Fancy automation stuff' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-3 bg-blue-300 bg-opacity-60 border border-blue-200 rounded-full text-base font-bold text-blue-900 shadow-lg">
              🌟 Why We're Actually Different (Not Boring Reasons)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Build Websites That Work
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              No sales pitch. No fluff. Just real results from real developers who actually know what they're doing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 justify-center">
                Let's Get Started <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Show Me Your Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three real reasons. No made-up nonsense. Just what makes us actually good.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-blue-600">{item.stats}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Actually Get
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real benefits that actually matter to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300"
                >
                  <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Actually Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six steps. No surprises. We tell you what happens when.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-indigo-600">
                        <span className="text-2xl font-bold text-white">{process.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                  </div>
                  {index < ourProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built With Real Tech (Not Outdated Garbage)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern tools for modern problems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.tech}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Stop Wasting Your Money on Bad Websites
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We actually know what we're doing. Let's chat about your project. First call is free. No pressure. No sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-200 shadow-lg transform hover:scale-105 inline-flex items-center gap-2 justify-center">
              Let's Talk (Free) <ArrowRight size={20} />
            </button>
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              See Our Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;

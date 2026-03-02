import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const CallbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form Data:', data);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will call you back shortly.',
      });
      
      reset();
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Request a Callback
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to assist you. Fill out the form and we'll get back to you within 24 hours.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Quick response from our team',
                'Personalized solutions for your needs',
                'No obligation consultations',
                'Expert guidance and support',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={18} className="text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">support@enterprise.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: 'Name can only contain letters and spaces',
                      },
                    })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} /> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s()+-]*$/,
                        message: 'Invalid phone number format',
                      },
                      minLength: {
                        value: 10,
                        message: 'Phone number must be at least 10 digits',
                      },
                    })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} /> {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={20} />
                  <textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    {...register('message', {
                      maxLength: {
                        value: 500,
                        message: 'Message cannot exceed 500 characters',
                      },
                    })}
                    rows="4"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="text-green-600" size={20} />
                  ) : (
                    <AlertCircle className="text-red-600" size={20} />
                  )}
                  <p
                    className={`font-medium ${
                      submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 disabled:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  'Request Callback'
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                We'll never share your information. Privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ArrowRight, Flame } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import HeroSection from '@/components/HeroSection';

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'half' | 'yearly'>('monthly');

  const pricing = {
    monthly: 1200,
    quarterly: 3000,
    half: 5000,
    yearly: 8000,
  };

  const getAddOns = (cycle: keyof typeof pricing) => {
    const isMonthly = cycle === 'monthly';
    return [
      { label: 'Steam Access', value: isMonthly ? '₹300/month' : 'Free' },
      { label: 'Personal Training', value: 'Free' },
      { label: 'Diet Counseling', value: 'Free' },
      { label: 'Locker Access', value: isMonthly ? '₹100/month' : 'Free' },
    ];
  };

  const plan = {
    name: "All Access",
    description: "Comprehensive fitness membership for every need.",
    icon: Flame,
    features: [
      "Access to gym floor",
      "All group classes",
      "Yoga, Zumba & CrossFit sessions",
      "Expert trainers",
      "Health monitoring tools",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="MEMBERSHIP PLAN"
        subtitle="Flexible and affordable fitness access tailored for you"
        showCTA={false}
        height="h-96"
      />

      {/* Membership Plan Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-5xl mx-auto">
          {/* Billing Toggle */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">Choose Your Plan</h2>
            <div className="inline-flex flex-wrap justify-center bg-black rounded-lg p-1 border border-border gap-2">
              {(['monthly', 'quarterly', 'half', 'yearly'] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-4 py-2 text-sm rounded-md font-medium transition-all duration-200 ${
                    billingCycle === cycle
                      ? 'bg-saffron text-black'
                      : 'text-gray-text hover:text-white'
                  }`}
                >
                  {cycle === 'half' ? 'Half-Yearly' : cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-2 border-saffron p-6 sm:p-8 rounded-2xl bg-black text-white shadow-xl"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-saffron mb-4">
                <plan.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">{plan.name}</h3>
              <p className="text-gray-text text-sm sm:text-base">{plan.description}</p>

              <div className="mt-4 mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  ₹{pricing[billingCycle].toLocaleString('en-IN')}
                </span>
                <span className="text-gray-text ml-2">
                  /{billingCycle === 'monthly' ? 'month' : billingCycle === 'quarterly' ? '3 months' : billingCycle === 'half' ? '6 months' : 'year'}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 text-sm sm:text-base">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-saffron flex-shrink-0 mt-0.5" />
                  <span className="text-gray-text">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Add-Ons</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                {getAddOns(billingCycle).map((addon, index) => (
                  <li key={index} className="flex justify-between text-gray-text">
                    <span>{addon.label}</span>
                    <span className="font-semibold text-white">{addon.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CTAButton
              variant="primary"
              className="w-full text-center"
              icon={ArrowRight}
            >
              Choose Plan
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Membership;

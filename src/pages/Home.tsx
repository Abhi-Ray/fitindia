import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Target,
  ArrowRight,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CTAButton from '@/components/CTAButton';
import Seo from '@/components/Seo';

const Home = () => {
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const stats = [
    { number: "500+", label: "Happy Members", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "5+", label: "Expert Trainers", icon: Dumbbell },
    { number: "6", label: "Days Gym Access", icon: Clock }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and strength with our state-of-the-art equipment and expert guidance."
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve your cardiovascular health with our diverse range of cardio equipment."
    },
    {
      icon: Target,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific fitness goals."
    },
    {
      icon: Zap,
      title: "Zumba Classes",
      description: "Join energetic group fitness classes including yoga, Zumba, and HIIT."
    },
    {
      icon: Shield,
      title: "Nutrition Coaching",
      description: "Get personalized Indian diet plans designed for your fitness journey."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a supportive fitness community that motivates and inspires you."
    }
  ];

  const testimonials = [
    {
      name: "Neha Jain",
      location: "Pithampur",
      rating: 5,
      text: "Joining FitZone Pithampur was the best decision I made this year! I've lost 10kg and feel more energetic than ever.",
      image: "/t1.jpg"
    },
    {
      name: "Raj Verma",
      location: "Pithampur",
      rating: 5,
      text: "State-of-the-art equipment and personal trainers who truly care. Highly recommended!",
      image: "/t2.jpg"

    },
    {
      name: "Sneha Kulkarni",
      location: "Pithampur",
      rating: 5,
      text: "The yoga and cardio classes are excellent. FitZone has become a part of my daily life!",
      image: "/t3.jpg"

    }
  ];
  

  return (
    <div className="min-h-screen">
      <Seo
        title="Fit India Gym - Premium Fitness Studio in Pithampur"
        description="Transform your fitness journey at Fit India Gym - Premium gym with expert trainers, personalized diet plans, and modern equipment in the heart of India."
      />
      {/* Hero Section */}
      <HeroSection
        title="TRANSFORM YOUR BODY, ELEVATE YOUR LIFE"
        subtitle="Join India's premier fitness studio where fitness meets passion. Expert trainers, modern equipment, and personalized nutrition plans await you."
      />

      {/* Stats Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-saffron" />
                  </div>
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-4xl font-bold text-white mb-2 font-heading"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-text font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Services</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Discover a complete fitness experience with our comprehensive range of services
              designed to help you achieve your health and fitness goals.
            </p>
          </motion.div>

          <motion.div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-gym group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-saffron rounded-lg mb-4 group-hover:bg-saffron-light transition-colors">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-gray-text">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/about">
              <CTAButton variant="primary" icon={ArrowRight}>
                Learn More About Us
              </CTAButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">What Our Members Say</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Real stories from real people who transformed their lives at Fit India Gym
            </p>
          </motion.div>

          <motion.div
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-gym text-center"
              >
                <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-text mb-4 italic">"{testimonial.text}"</p>
                
                <h4 className="font-semibold text-white font-heading">{testimonial.name}</h4>
                <p className="text-sm text-gray-text">{testimonial.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron to-saffron-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Join thousands of satisfied members who have transformed their lives at Fit India Gym.
              Your fitness transformation starts here!
            </p>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

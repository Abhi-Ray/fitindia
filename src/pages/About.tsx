import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, Users, Award, Star, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import trainer1 from '@/assets/trainer-1.jpg';

const About = () => {
  const missionRef = useRef(null);
  const trainersRef = useRef(null);
  const valuesRef = useRef(null);
  
  const missionInView = useInView(missionRef, { once: true });
  const trainersInView = useInView(trainersRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });



  const values = [
    {
      icon: Heart,
      title: "Passion for Fitness",
      description: "We live and breathe fitness, inspiring others to embrace a healthy lifestyle through our genuine passion."
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Every member gets a personalized plan designed to achieve their specific fitness and health goals."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "We believe in the power of community to motivate, support, and celebrate each other's achievements."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards in equipment, training, and member experience at all times."
    }
  ];

  const achievements = [
    "500+  Members",
    "5+ Certified Trainers",
    "5+ Years of Excellence",
    "Award-winning Gym of the Year 2023",
    "10,000+ Happy Members",
    "24/7 Premium Facilities"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="ABOUT Fit India Gym"
        subtitle="Empowering lives through fitness since 2019. We're more than a gym - we're your fitness family."
        showCTA={false}
        height="h-96"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">Our Story</h2>
              <p className="text-lg text-gray-text mb-6">
                Fit India Gym was born from a simple vision: to create a fitness destination 
                where every Indian can transform their health and unlock their potential. 
                Founded in 2019 by fitness enthusiasts who understood the unique needs of 
                Indian fitness culture.
              </p>
              <p className="text-lg text-gray-text mb-6">
                We started with a single location in Mumbai and have grown into one of 
                India's most trusted fitness brands. Our approach combines modern fitness 
                techniques with traditional Indian wellness practices, creating a unique 
                and effective fitness experience.
              </p>
              <p className="text-lg text-gray-text">
                Today, we're proud to have helped thousands of members achieve their 
                fitness goals while building a strong, supportive community that celebrates 
                every victory, no matter how small.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-dark-bg rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-saffron flex-shrink-0" />
                  <span className="text-white font-medium">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="card-gym"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron rounded-full mb-4">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Our Mission</h3>
              </div>
              <p className="text-gray-text text-center leading-relaxed">
                To democratize fitness in India by providing world-class facilities, 
                expert guidance, and affordable memberships that make health and wellness 
                accessible to every Indian, regardless of their fitness level or background.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-gym"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron rounded-full mb-4">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Our Vision</h3>
              </div>
              <p className="text-gray-text text-center leading-relaxed">
                To be India's most trusted fitness partner, creating a healthier nation 
                by inspiring millions to embrace fitness as a lifestyle, building stronger 
                communities one workout at a time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Values</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              The principles that guide everything we do at Fit India Gym
            </p>
          </motion.div>

          <motion.div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron/10 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-saffron" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-text">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default About;
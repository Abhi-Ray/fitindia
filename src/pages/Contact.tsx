import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Youtube, 
  Facebook,
  MessageCircle
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CTAButton from '@/components/CTAButton';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8718074703'],
      action: 'tel:+918718074703'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['CC Power Square, Pithampur Behind Yashika Palace Hotel'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 5:00 AM - 10:00 AM', 'Mon-Sat: 5:00 PM - 10:00 PM'],
      action: null
    }
  ];

  const whatsappNumber = "918718074703";
  
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about Fit India Gym memberships and services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="GET IN TOUCH"
        subtitle="Ready to start your fitness journey? We're here to help you every step of the way. Reach out to us today!"
        showCTA={false}
        height="h-96"
      />

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                  Contact Information
                </h2>
                <p className="text-gray-text mb-8">
                  Get in touch with us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-6 bg-dark-bg rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-saffron rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2 font-heading">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-text text-sm">
                            {info.action && detailIndex === 0 ? (
                              <a
                                href={info.action}
                                className="hover:text-saffron transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center space-y-6 mt-12"
              >
                <h3 className="text-2xl font-semibold text-white font-heading">
                  Quick Actions
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <CTAButton
                    variant="outline"
                    icon={MessageCircle}
                    onClick={handleWhatsApp}
                    className="justify-center min-w-48"
                  >
                    WhatsApp Us Now
                  </CTAButton>
                  <CTAButton
                    variant="secondary"
                    href="tel:+918718074703"
                    className="justify-center min-w-48"
                  >
                    Call Now: +91 8718074703
                  </CTAButton>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Find Us Here
            </h2>
            <p className="text-gray-text">
              Visit our gym located in the heart of Pithampur
            </p>
          </motion.div>

          {/* Embedded Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d641.8912143822687!2d75.68727123241891!3d22.603733237980787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM2JzEyLjUiTiA3NcKwNDEnMTQuNyJF!5e0!3m2!1sen!2sin!4v1753694566782!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fit India Gym Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
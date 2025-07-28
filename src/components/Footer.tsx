import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Youtube, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-saffron mb-4">
              <Dumbbell className="h-8 w-8" />
              <span className="font-heading font-bold text-xl">Fit India Gym</span>
            </Link>
            <p className="text-gray-text mb-6 max-w-md">
              Transform your fitness journey with India's premier fitness studio. 
              Expert trainers, modern equipment, and personalized nutrition plans 
              to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fit_india_gym_pithampur?igsh=dTZoYmd1djg2dG5m" className="text-gray-text hover:text-saffron transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-text hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-text hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="text-gray-text hover:text-white transition-colors">Membership</Link></li>
              <li><Link to="/diet" className="text-gray-text hover:text-white transition-colors">Diet Plans</Link></li>
              <li><Link to="/gallery" className="text-gray-text hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-text hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-text">
                <Phone className="h-5 w-5 text-saffron" />
                <span>+91 8718074703</span>
              </div>
             
              <div className="flex items-start space-x-3 text-gray-text">
                <MapPin className="h-5 w-5 text-saffron mt-1" />
                <span>CC Power Square, Pithampur Behind Yashika Palace Hotel</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Gym Hours</h4>
              <div className="text-gray-text text-sm space-y-1">
                <div>Mon - Sat: 5:00 AM - 10:00 AM</div>
                <div>Mon - Sat: 5:00 PM - 10:00 PM</div>

              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-gray-text">
          <p>&copy; 2025 Fit India Gym. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import Seo from '@/components/Seo';

// 🖼 Local branch images
import garage1 from '@/assets/gallery/garage1.jpeg';
import garage2 from '@/assets/gallery/garage2.jpeg';
import garage3 from '@/assets/gallery/garage3.jpeg';
import garage4 from '@/assets/gallery/garage4.jpeg';

import fit1 from '@/assets/gallery/fit1.jpeg';
import fit2 from '@/assets/gallery/fit2.jpeg';
import fit3 from '@/assets/gallery/fit3.jpeg';
import fit4 from '@/assets/gallery/fit4.jpeg';
import fit5 from '@/assets/gallery/fit5.jpeg';
import fit6 from '@/assets/gallery/fit6.jpeg';
import fit7 from '@/assets/gallery/fit7.jpeg';
import fit8 from '@/assets/gallery/fit8.jpeg';

import cosmos1 from '@/assets/gallery/cosmos1.jpeg';
import cosmos2 from '@/assets/gallery/cosmos2.jpeg';
import cosmos3 from '@/assets/gallery/cosmos3.jpeg';
import cosmos4 from '@/assets/gallery/cosmos4.jpeg';

// 🏆 Transformation images
import trans1 from '/trans1.jpeg';
import trans2 from '/trans2.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 📌 Combined gallery list
  const galleryItems = [
    // Fitness Garage Gym
    { id: 1, src: garage1, alt: 'Fitness Garage Gym - Interior', category: 'garage', title: 'Fitness Garage Gym' },
    { id: 2, src: garage2, alt: 'Fitness Garage Gym - Training Area', category: 'garage', title: 'Fitness Garage Gym' },
    { id: 3, src: garage3, alt: 'Fitness Garage Gym - Equipment', category: 'garage', title: 'Fitness Garage Gym' },
    { id: 4, src: garage4, alt: 'Fitness Garage Gym - Workout Session', category: 'garage', title: 'Fitness Garage Gym' },

    // Fit India Gym (Main)
    { id: 5, src: fit1, alt: 'Fit India Gym - Entrance', category: 'fit-india', title: 'Fit India Gym' },
    { id: 6, src: fit2, alt: 'Fit India Gym - Interior', category: 'fit-india', title: 'Fit India Gym' },
    { id: 7, src: fit3, alt: 'Fit India Gym - Training Zone', category: 'fit-india', title: 'Fit India Gym' },
    { id: 8, src: fit4, alt: 'Fit India Gym - Strength Training', category: 'fit-india', title: 'Fit India Gym' },
    { id: 9, src: fit5, alt: 'Fit India Gym - Cardio Area', category: 'fit-india', title: 'Fit India Gym' },
    { id: 10, src: fit6, alt: 'Fit India Gym - Workout Area', category: 'fit-india', title: 'Fit India Gym' },
    { id: 11, src: fit7, alt: 'Fit India Gym - Body Transformation', category: 'fit-india', title: 'Fit India Gym' },
    { id: 12, src: fit8, alt: 'Fit India Gym - Gym Floor', category: 'fit-india', title: 'Fit India Gym' },

    // Fit India Gym Cosmos
    { id: 13, src: cosmos1, alt: 'Fit India Gym Cosmos - Interior', category: 'cosmos', title: 'Fit India Gym Cosmos' },
    { id: 14, src: cosmos2, alt: 'Fit India Gym Cosmos - Workout Area', category: 'cosmos', title: 'Fit India Gym Cosmos' },
    { id: 15, src: cosmos3, alt: 'Fit India Gym Cosmos - Equipment Zone', category: 'cosmos', title: 'Fit India Gym Cosmos' },
    { id: 16, src: cosmos4, alt: 'Fit India Gym Cosmos - Members Training', category: 'cosmos', title: 'Fit India Gym Cosmos' },
  ];

  // 🏆 Transformation data
  const transformations = [
    {
      id: 1,
      beforeImage: trans2,
      afterImage: trans1,
      title: "Amazing Transformation",
      description: "Months of dedication and hard work",
      name: "Member Success Story"
    }
    // Add more transformations as needed
  ];

  const filteredGallery = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredGallery.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Fit India Gym Gallery - Explore Our Fitness Centers"
        description="Explore the gallery of Fit India Gym's branches. See our state-of-the-art equipment, training areas, and vibrant fitness community in action."
      />
      
      {/* Hero Section */}
      <HeroSection
        title="GALLERY"
        subtitle="Explore our three branches and their world-class facilities."
        showCTA={false}
        height="h-96"
      />

      {/* Transformation Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              INCREDIBLE <span className="text-saffron">TRANSFORMATIONS</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Witness the amazing journeys of our members who transformed their lives through dedication and our expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      BEFORE
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                      <img
                        src={transformation.beforeImage}
                        alt="Before transformation"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="absolute -top-2 -left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      AFTER
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                      <img
                        src={transformation.afterImage}
                        alt="After transformation"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Transformation Details */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-saffron font-semibold mb-2">
                    {transformation.description}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {transformation.name}
                  </p>
                </div>

                {/* Success Metrics */}
                {/* <div className="mt-6 pt-6 border-t border-gray-600">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-saffron">-15kg</div>
                      <div className="text-xs text-gray-400">Weight Loss</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-saffron">+25%</div>
                      <div className="text-xs text-gray-400">Muscle Gain</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-saffron">6mo</div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6 text-lg">
              Ready to start your own transformation journey?
            </p>
            <button className="bg-saffron hover:bg-orange-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 mt-10 px-4">
        {['all', 'garage', 'fit-india', 'cosmos'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? 'bg-saffron text-black'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {cat === 'all'
              ? 'All'
              : cat === 'garage'
              ? 'Fitness Garage Gym'
              : cat === 'fit-india'
              ? 'Fit India Gym'
              : 'Fit India Gym Cosmos'}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={filteredGallery[selectedImage].src}
              alt={filteredGallery[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 text-white">
              <h3 className="font-semibold">{filteredGallery[selectedImage].title}</h3>
              <p className="text-sm text-gray-300">
                {selectedImage + 1} of {filteredGallery.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
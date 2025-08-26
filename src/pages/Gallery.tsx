import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

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
      {/* Hero Section */}
      <HeroSection
        title="GALLERY"
        subtitle="Explore our three branches and their world-class facilities."
        showCTA={false}
        height="h-96"
      />

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

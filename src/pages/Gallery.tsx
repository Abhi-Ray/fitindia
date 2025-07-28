import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Award, Calendar } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import gymGallery1 from '@/assets/gym-gallery-1.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Indian man lifting weights',
      category: 'equipment',
      title: 'Strength Training'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/7675007/pexels-photo-7675007.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Group yoga class',
      category: 'classes',
      title: 'Group Yoga Session'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/8660278/pexels-photo-8660278.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Indian woman in gym',
      category: 'transformations',
      title: 'Personal Fitness Journey'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Cardio machines in gym',
      category: 'equipment',
      title: 'Advanced Cardio Zone'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Indian gym interior',
      category: 'facilities',
      title: 'Modern Gym Setup'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Gym trainer helping client',
      category: 'transformations',
      title: 'Trainer Support'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/4662344/pexels-photo-4662344.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Fitness class in India',
      category: 'classes',
      title: 'Energetic Classes'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Indian bodybuilder training',
      category: 'equipment',
      title: 'Heavy Lifting Area'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Functional gym space',
      category: 'facilities',
      title: 'Functional Training Zone'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Fitness transformation photo',
      category: 'transformations',
      title: 'Visible Progress'
    }
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
        title="GALLERY & TRANSFORMATIONS"
        subtitle="Witness the transformation stories and explore our world-class facilities through our visual journey."
        showCTA={false}
        height="h-96"
      />


      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    {item.type === 'video' && (
                      <div className="flex items-center text-saffron">
                        <Play className="h-4 w-4 mr-1" />
                        <span className="text-sm">Video</span>
                      </div>
                    )}
                  </div>
                  
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-black ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
         
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filteredGallery[selectedImage].src}
              alt={filteredGallery[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-1">{filteredGallery[selectedImage].title}</h3>
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
import { useState, useEffect } from 'react';

const images = [
  {
    src: 'client/public/mainimg/App UI.webp',
    alt: 'App UI Design Showcase'
  },
  {
    src: 'client/public/mainimg/Dashboard.webp',
    alt: 'Dashboard Design Showcase'
  },
  {
    src: 'client/public/mainimg/StryxBranding.webp',
    alt: 'Stryx Branding Showcase'
  },
  {
    src: 'client/public/mainimg/widgets.webp',
    alt: 'Widgets Design Showcase'
  }
];

export default function FadeKenBurnsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full h-[250px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Images with fade and Ken Burns effect */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-8000 ease-in-out ${
              index === currentIndex ? 'scale-105' : 'scale-100'
            }`}
            style={{
              transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 8s ease-in-out, opacity 1s ease-in-out'
            }}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-0 right-0 bottom-4 flex justify-between items-center pointer-events-none px-4">
        <button
          onClick={goToPrevious}
          aria-label="Previous image"
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 rounded-full backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15.41 7.89437L14 6.48438L8 12.4844L14 18.4844L15.41 17.0744L10.83 12.4844L15.41 7.89437Z" fill="#ffffff"/>
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          aria-label="Next image"
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 rounded-full backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8.59 7.89437L10 6.48438L16 12.4844L10 18.4844L8.59 17.0744L13.17 12.4844L8.59 7.89437Z" fill="#ffffff"/>
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause indicator (subtle) */}
      <div className="absolute top-4 right-4 opacity-30">
        {isPlaying ? (
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        ) : (
          <div className="w-2 h-2 bg-white rounded-full" />
        )}
      </div>
    </div>
  );
}
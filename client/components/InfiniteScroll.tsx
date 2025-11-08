import { useEffect, useRef } from 'react';

const logos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/9eb99f437526d97a848abd1aea01b21bd870126b?placeholderIfAbsent=true",
    alt: "Client logo 1"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/8112c555dfb26477bc18966d22b09ab2b5a35946?placeholderIfAbsent=true",
    alt: "Client logo 2"
  },
  {
    component: () => (
      <div className="text-white font-semibold text-lg sm:text-xl tracking-tight">
        Oven Studio<span className="text-red-600">.</span>
      </div>
    )
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/18bddb9443178959bc0f0b3d6a5b7ca259a3b575?placeholderIfAbsent=true",
    alt: "Client logo 3"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/8e9ea82075aaee244158020740820e95c1676b01?placeholderIfAbsent=true",
    alt: "Client logo 4"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/f444c7b3ee48cf0ebb6a2070dd6c9addf8d2a85f?placeholderIfAbsent=true",
    alt: "Client logo 5"
  }
];

export default function InfiniteScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    const speed = 50; // pixels per second
    let animationId: number;
    let startTime = Date.now();
    let singleSetWidth = 0;

    // Calculate width of a single set of logos
    const calculateSingleSetWidth = () => {
      const firstChild = content.firstElementChild as HTMLElement;
      if (firstChild) {
        singleSetWidth = firstChild.offsetWidth;
      }
    };

    // Wait for content to render
    setTimeout(calculateSingleSetWidth, 100);

    const animate = () => {
      if (singleSetWidth === 0) {
        calculateSingleSetWidth();
      }

      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // convert to seconds
      
      // Calculate position using modulo for seamless loop
      const totalDistance = elapsed * speed;
      const position = totalDistance % singleSetWidth;
      
      // Apply transform
      content.style.transform = `translateX(-${position}px)`;
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle resize
    const handleResize = () => calculateSingleSetWidth();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderLogos = (key: string) => (
    <div key={key} className="flex items-center gap-8 lg:gap-12 py-4 opacity-70 whitespace-nowrap flex-shrink-0">
      {logos.map((logo, index) => (
        <div key={index}>
          {logo.component ? (
            <logo.component />
          ) : (
            <img 
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-8"
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div 
        ref={contentRef}
        className="flex"
        style={{ width: 'max-content' }}
      >
        {/* Render multiple sets for seamless scrolling */}
        {renderLogos('set-1')}
        {renderLogos('set-2')}
        {renderLogos('set-3')}
      </div>
    </div>
  );
}
'use client';

import { useState, useRef, useEffect } from 'react';

export default function Carousel() {
  const slides = [
    {
      id: 1,
      title: "Happy Harry's",
      caption: 'Modern E-commerce Platform',
      image: '/images/mockups/hh_mockup1.png',
    },
    {
      id: 2,
      title: 'First Choice Haircutters',
      caption: 'Trendy Salon Website',
      image: '/images/mockups/fc_mockup1.png',
    },
    {
      id: 3,
      title: 'Siravista',
      caption: 'Highend Custom Web Design',
      image: '/images/mockups/siravista_mockup1.png',
    },
    {
      id: 4,
      title: 'Beaute Lia Hair',
      caption: 'Custom Membership Management System',
      image: '/images/mockups/mms_mockup1.png',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const endX = e.clientX;
    handleDragEnd(startX, endX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    handleDragEnd(startX, endX);
  };

  const handleDragEnd = (start: number, end: number) => {
    setIsDragging(false);
    const diff = start - end;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  return (
    <div className="w-full">
      {/* Navigation Arrows - Outside Container */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={handlePrevious}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-all duration-200"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full h-64 md:h-80 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full flex items-center justify-center relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

            </div>
          ))}
        </div>

        {/* Slide indicators - Bottom Center */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? 'bg-black w-8 h-2'
                  : 'bg-black/40 hover:bg-black/60 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Title and Caption - Changes with slide */}
      <div className="mt-2 text-start transition-all duration-500">
        <h3 className="text-medium md:text-4xl font-bold text-black uppercase">
          {slides[current].title}
        </h3>
        <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
          {slides[current].caption}
        </p>
      </div>

      {/* Slide counter */}
      <div className="text-start text-sm text-gray-400">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}

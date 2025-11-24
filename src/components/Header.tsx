'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const opacity = Math.min(scrolled / 300, 1); // Transition over 300px
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setShowCircle(false);
      setShowNavItems(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 1000); // Match animation duration
    } else {
      setIsOpen(true);
      setShowCircle(true);
      setTimeout(() => {
        setShowNavItems(true);
      }, 1100); // 0.3s delay + 0.8s circle animation
    }
  };

  const navLinks = [
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Get Started' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative w-48 h-16 flex items-start">
            <Link href="/" className="relative w-full h-full block">
              <Image
                src="/images/logo/logo_initial.svg"
                alt="BWS Logo"
                width={180}
                height={64}
                className="absolute inset-0 transition-opacity duration-300 -top-[12px] -left-[42px]"
                style={{ opacity: 1 - scrollOpacity }}
              />
              <Image
                src="/images/logo/logo_scroll.svg"
                alt="BWS Logo Scroll"
                width={180}
                height={64}
                className="absolute inset-0 transition-opacity duration-300 -top-[12px] -left-[42px]"
                style={{ opacity: scrollOpacity }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-teal-800"
                >
                  {link.label}
                </a>
              ))}
              <button className="ml-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 transition duration-150 ease-in-out"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-12 w-12 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 18h16'} />
                {!isOpen && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h8" className="middle-stroke" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sliding Panel Animation */}
      {(isOpen || isClosing) && (
        <div className={`fixed top-16 left-0 w-[75%] md:hidden ${isClosing ? 'slide-up-left-panel' : 'slide-down-left-panel'}`} />
      )}

      {(isOpen || isClosing) && (
        <div className={`fixed right-0 w-[75%] md:hidden ${isClosing ? 'slide-up-right-panel' : 'slide-down-right-panel'}`} />
      )}

      {/* Circle Reveal Animation */}
      {showCircle && (
        <div className="circle-reveal" />
      )}

      {/* Animated Nav Items */}
      {showNavItems && (
        <div className="fixed inset-0 md:hidden z-50 top-[50vh] flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`nav-item nav-item-${index + 1} text-2xl font-bold text-[#FFE8D6] hover:text-emerald-700 transition-colors duration-200 pointer-events-auto cursor-pointer`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

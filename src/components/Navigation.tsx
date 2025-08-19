import React, { useState, useEffect } from "react";

export default function FlexibleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element)?.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const navItems = [
 
    { label: "Kontakt", href: "/contact" },
    
    { label: "Leistungen", href: "/leistungen" },
       { label: "Startseite", href: "/" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a 
              href="/" 
              className="flex items-center"
              onClick={handleNavClick}
            >
              <img 
                src="/images/cropped-gif.webp" 
                alt="Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6 xl:space-x-8" dir="rtl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 lg:px-4 xl:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base xl:text-lg font-medium transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-all duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2' : 'translate-y-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-2' : 'translate-y-3'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="px-3 pt-3 pb-4 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
              style={{
                animationDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
import  { useState, useEffect } from "react";

export default function FlexibleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
const borderAnimationStyles = `
  .animated-border {
    position: relative;
    overflow: hidden;
  }

  .animated-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #F2A057;
    transition: width 0.3s ease;
    z-index: 1;
  }

  .animated-border::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 0;
    background-color: #F2A057;
    transition: height 0.3s ease 0.15s;
    z-index: 1;
  }

  .animated-border:hover::before,
  .animated-border.active::before {
    width: 100%;
  }

  .animated-border:hover::after,
  .animated-border.active::after {
    height: 100%;
  }

  .animated-border:hover .border-bottom,
  .animated-border.active .border-bottom {
    width: 100%;
    transition-delay: 0.3s;
  }

  .animated-border:hover .border-left,
  .animated-border.active .border-left {
    height: 100%;
    transition-delay: 0.45s;
  }

  .border-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #F2A057;
    transition: width 0.3s ease;
    z-index: 1;
  }

  .border-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #F2A057;
    transition: height 0.3s ease;
    z-index: 1;
  }

  .mobile-menu-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  .mobile-menu-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

// إضافة الـ CSS في head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = borderAnimationStyles;
  document.head.appendChild(styleSheet);
}
  // Handle hydration and URL changes
  useEffect(() => {
    setIsMounted(true);
    
    // Function to update active item based on current pathname
    const updateActiveItem = () => {
      if (typeof window !== 'undefined') {
        setActiveItem(window.location.pathname);
      }
    };

    // Set initial active item
    updateActiveItem();

    // Listen for navigation changes (back/forward buttons)
    const handlePopState = () => {
      updateActiveItem();
    };

   

    window.addEventListener('popstate', handlePopState);
    
    // Check for URL changes periodically (fallback for programmatic navigation)
    const interval = setInterval(() => {
      if (window.location.pathname !== activeItem) {
        updateActiveItem();
      }
    }, 100);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearInterval(interval);
    };
  }, [activeItem]);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // منع التمرير عند فتح القائمة
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    setIsOpen(false);
    
    // Force update after a short delay to ensure navigation completed
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.location.pathname !== href) {
        setActiveItem(window.location.pathname);
      }
    }, 50);
  };

  // Alternative method: Check if current path matches any nav item
  const getCurrentActiveItem = () => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const matchingItem = navItems.find(item => item.href === currentPath);
      return matchingItem ? currentPath : null; // إرجاع null إذا لم يوجد تطابق
    }
    return activeItem;
  };

  if (!isMounted) {
    return null;
  }

  const currentActiveItem = getCurrentActiveItem();

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a 
                href="/" 
                className="flex items-center hover:scale-105 transition-transform duration-300"
                onClick={() => handleNavClick("/")}
              >
                <img 
                  src="/images/cropped-gif.webp" 
                  alt="Enohm GmbH Logo"
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
    {navItems.map((item) => {
      const isActive = currentActiveItem === item.href;
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={() => handleNavClick(item.href)}
          className={`
            animated-border ${isActive ? 'active' : ''}
            px-4 py-2 lg:px-6 lg:py-3 rounded-lg text-sm lg:text-base xl:text-lg font-medium
            transition-all duration-300 whitespace-nowrap transform hover:scale-105
            ${isActive
              ? 'text-[#F2A057]'
              : 'text-[#1d4b73] hover:text-[#F2A057]'
            }
          `}
        >
          {item.label}
          <span className="border-bottom"></span>
          <span className="border-left"></span>
        </a>
      );
    })}
  </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-[#1d4b73] hover:text-[#F2A057] hover:bg-[#F2A057]/5 focus:outline-none focus:ring-2 focus:ring-[#F2A057] focus:ring-offset-2 transition-all duration-300"
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
      </nav>

      {/* Mobile Navigation Menu - Full Screen */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* White Background */}
          <div className="w-full h-full bg-white">
            {/* Navigation Content */}
        <div className="flex flex-col  h-full px-6">
              <div className="space-y-2 mt-12 ">
                {navItems.map((item, index) => {
                  const isActive = currentActiveItem === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`
                        block px-8 py-4  rounded-xl text-2xl font-semibold transition-all duration-300 
                        mobile-menu-enter mobile-menu-enter-active
                        ${isActive 
                          ? 'text-[#F2A057]' 
                          : 'text-[#1d4b73]'
                        }
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              
              {/* Close Button */}
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}
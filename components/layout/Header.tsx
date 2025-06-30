'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDesktopServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDesktopServicesOpen(false);
    }, 300);
  };

  const services = [
    {
      title: "Financial Management & Strategy",
      href: "/services/financial-management-strategy"
    },
    {
      title: "Analytics, Automation & Modelling",
      href: "/services/analytics-automation-modelling"
    },
    {
      title: "Operational Efficiency",
      href: "/services/operational-efficiency"
    },
    {
      title: "Capacity Building & Training",
      href: "/services/capacity-building-training"
    },
    {
      title: "Combined Packages",
      href: "/services/combined-packages"
    }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-2'
          : 'bg-white dark:bg-gray-900 py-2'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-64 h-10">
              <Image
                src="/bd-logo-black33.webp"
                alt="BUSINESS DIPLOMAT Logo"
                priority
                className="object-contain"
              />
            </div>
            {/*<span className="text-xl md:text-2xl font-bold text-[#0B3C5D]">
              BUSINESS DIPLOMAT
              <span className="block text-sm font-medium text-[#328CC1]">
                Consulting Services
              </span>
            </span>*/}
          </Link>

          {/* Desktop and Tablet Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Home
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center text-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDesktopServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.href} 
                      className="block px-4 py-2 text-sm lg:text-base hover:bg-gray-100 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Team
            </Link>
            <Link
              href="/values"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Values
            </Link>
            <Link
              href="/careers"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Contact
            </Link>
          </nav>

          <Button
            variant="default"
            className="hidden md:flex bg-[#0B3C5D] hover:bg-[#0a325d] text-white text-sm lg:text-base"
          >
            <Link href="/contact">Book Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 px-4 bg-background mt-4 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    isServicesOpen && "rotate-90"
                  )} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block text-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/team"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/values"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Values
              </Link>
              <Link
                href="/careers"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="default"
                className="w-full bg-[#0B3C5D] hover:bg-[#0a325d] text-white mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact" className="w-full">
                  Book Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
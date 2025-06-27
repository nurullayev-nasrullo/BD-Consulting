'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    
    if (!hasConsented) {
      // Show the banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const closeConsent = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  We use cookies to enhance your browsing experience, serve personalized 
                  ads or content, and analyze our traffic. By clicking "Accept All", you 
                  consent to our use of cookies.
                </p>
              </div>
              <button 
                onClick={closeConsent} 
                className="ml-4 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close cookie consent"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={acceptEssential}
              className="text-sm whitespace-nowrap"
            >
              Essential Only
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-[#0B3C5D] hover:bg-[#0a325d] text-white text-sm whitespace-nowrap"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
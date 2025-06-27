'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    id: 1,
    title: 'Data Analytics & Risk Management',
    industry: 'Enterprise Solutions',
    description: 'Advanced analytics capabilities for risk assessment, compliance monitoring, and data-driven decision making.',
    features: [
      'Real-time risk monitoring',
      'Predictive analytics',
      'Automated compliance reporting'
    ],
    color: 'border-l-[#0B3C5D]',
    bgGradient: 'from-[#0B3C5D]/10',
    icon: '📊'
  },
  {
    id: 2,
    title: 'Process Automation & Optimization',
    industry: 'Business Operations',
    description: 'Intelligent automation solutions to streamline operations and enhance business efficiency.',
    features: [
      'Workflow automation',
      'Process optimization',
      'Performance monitoring'
    ],
    color: 'border-l-[#328CC1]',
    bgGradient: 'from-[#328CC1]/10',
    icon: '⚙️'
  },
  {
    id: 3,
    title: 'Digital Transformation',
    industry: 'Technology Solutions',
    description: 'Comprehensive digital solutions to modernize your business and drive innovation.',
    features: [
      'Cloud integration',
      'System modernization',
      'Digital strategy development'
    ],
    color: 'border-l-[#006400]',
    bgGradient: 'from-[#006400]/10',
    icon: '🚀'
  }
];

const CaseStudiesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === capabilities.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? capabilities.length - 1 : current - 1));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(nextSlide, 6000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isPaused, nextSlide]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Solution Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive suite of solutions designed to transform your business operations.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {capabilities.map((capability) => (
                <div key={capability.id} className="w-full flex-shrink-0 px-4">
                  <Card className={cn(
                    "border-l-4 overflow-hidden",
                    capability.color
                  )}>
                    <CardContent className="p-0">
                      <div className={cn(
                        "p-6 bg-gradient-to-r to-transparent",
                        capability.bgGradient
                      )}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                              {capability.industry}
                            </span>
                            <h3 className="text-xl font-bold">{capability.title}</h3>
                          </div>
                          <span className="text-3xl">{capability.icon}</span>
                        </div>
                        <p className="text-muted-foreground mb-6">{capability.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium">Key Features:</h4>
                          <ul className="space-y-1">
                            {capability.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className="mr-2 text-[#006400]">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            aria-label="Previous capability"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            aria-label="Next capability"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {capabilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-[#0B3C5D]" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-[#0B3C5D] text-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white"
          >
            <Link href="/contact" className="flex items-center">
              Discuss Your Requirements <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
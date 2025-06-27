'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Briefcase } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const steps = 60;
      const interval = duration / steps;
      const increment = end / steps;
      let currentCount = 0;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);
  
  return (
    <span ref={nodeRef} className="text-4xl font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

const MetricsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const metrics = [
    { 
      icon: <TrendingUp className="w-10 h-10 text-[#0B3C5D]" />,
      value: 95,
      suffix: '%',
      label: 'Client Satisfaction Rate',
      description: 'Our clients consistently rate our services as exceptional.'
    },
    { 
      icon: <CheckCircle2 className="w-10 h-10 text-[#328CC1]" />,
      value: 50,
      suffix: '+',
      label: 'Successful Projects',
      description: 'Successfully delivered transformative solutions across various industries.'
    },
    { 
      icon: <Briefcase className="w-10 h-10 text-[#006400]" />,
      value: 12,
      suffix: '+',
      label: 'Industries Served',
      description: 'Wide-ranging expertise across multiple sectors and verticals.'
    },
    { 
      icon: <Users className="w-10 h-10 text-[#90EE90]" />,
      value: 85,
      suffix: '%',
      label: 'ROI Improvement',
      description: 'Average return on investment improvement for our clients.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At BUSINESS DIPLOMAT, we measure our success through the tangible 
            results we deliver to our clients.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <Counter 
                end={metric.value} 
                suffix={metric.suffix} 
                duration={2000 + (index * 500)}
              />
              <h3 className="text-lg font-medium mt-2 mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
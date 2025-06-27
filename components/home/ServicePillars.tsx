'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  BarChart4, 
  Workflow, 
  GraduationCap, 
  Package, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isHovered: boolean;
  onHover: () => void;
  iconBg: string;
  bgColor: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  href, 
  isHovered, 
  onHover,
  iconBg,
  bgColor
}: ServiceCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl border p-6 transition-all duration-300",
        isHovered 
          ? "border-[#328CC1] shadow-lg" 
          : "border-gray-200 shadow-sm",
        bgColor
      )}
      whileHover={{ y: -5 }}
      onMouseEnter={onHover}
      layout
    >
      <div 
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          iconBg
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button 
        variant="ghost" 
        className="p-0 text-[#0B3C5D] hover:text-[#328CC1] hover:bg-transparent"
      >
        <Link href={href} className="flex items-center">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
};

const ServicePillars = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Financial Management & Strategy',
      description: 'Comprehensive financial solutions to strengthen your business foundation and prepare for growth.',
      icon: <DollarSign className="text-white h-6 w-6" />,
      href: '/services/financial-management-strategy',
      iconBg: 'bg-[#0B3C5D]',
      bgColor: 'bg-[#E6F3FF]'
    },
    {
      title: 'Analytics, Automation & Modelling',
      description: 'Risk-focused analytics and automation solutions that strengthen business resilience.',
      icon: <BarChart4 className="text-white h-6 w-6" />,
      href: '/services/analytics-automation-modelling',
      iconBg: 'bg-[#328CC1]',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline operations and eliminate bottlenecks for sustainable performance improvement.',
      icon: <Workflow className="text-white h-6 w-6" />,
      href: '/services/operational-efficiency',
      iconBg: 'bg-[#006400]',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      title: 'Capacity Building & Training',
      description: 'Empower your team with essential skills in finance, data analysis, and leadership.',
      icon: <GraduationCap className="text-white h-6 w-6" />,
      href: '/services/capacity-building-training',
      iconBg: 'bg-[#0B3C5D]',
      bgColor: 'bg-[#E6F3FF]'
    },
    {
      title: 'Combined Packages',
      description: 'Comprehensive solutions that combine multiple services for maximum impact and value.',
      icon: <Package className="text-white h-6 w-6" />,
      href: '/services/combined-packages',
      iconBg: 'bg-[#328CC1]',
      bgColor: 'bg-[#E8F5E9]'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 mx-auto" style={{ width: '70%' }}>
          <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
          <p className="text-muted-foreground">
            We provide comprehensive solutions across five core service areas to address 
            the full spectrum of your business challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              iconBg={service.iconBg}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
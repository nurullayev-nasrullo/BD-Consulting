'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Rocket, 
  ShoppingCart, 
  FileText, 
  CheckCircle2,
  Star,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CombinedPackagesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const packages = [
    {
      icon: Rocket,
      title: "Startup Boost Package",
      description: "Comprehensive solution for new businesses to launch strongly with solid financial foundation.",
      includes: [
        "Budgeting & forecasting setup",
        "Investment readiness preparation",
        "Business dashboard creation",
        "Financial health assessment",
        "Basic internal controls setup"
      ],
      ideal: "New businesses and startups seeking comprehensive launch support",
      duration: "4-6 weeks",
      color: "text-[#0B3C5D]",
      bgColor: "from-[#0B3C5D]/10"
    },
    {
      icon: ShoppingCart,
      title: "Retail Business Optimization",
      description: "Tailored solution combining analytics, customer insights, and operational efficiency for retail businesses.",
      includes: [
        "Sales analytics & customer segmentation",
        "Inventory analysis & optimization",
        "Cash flow diagnostics",
        "Performance KPI framework",
        "Supply chain analytics"
      ],
      ideal: "Retail and wholesale businesses looking to optimize operations",
      duration: "6-8 weeks",
      color: "text-[#328CC1]",
      bgColor: "from-[#328CC1]/10"
    },
    {
      icon: FileText,
      title: "Executive Insights Report",
      description: "Complete strategic business audit across finance, data, operations and growth potential.",
      includes: [
        "Full financial health assessment",
        "Operational efficiency analysis",
        "Data & analytics review",
        "Growth potential evaluation",
        "Executive summary with action plan"
      ],
      ideal: "Established businesses seeking comprehensive strategic review",
      duration: "3-4 weeks",
      color: "text-[#006400]",
      bgColor: "from-[#006400]/10"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Combined Service Packages
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive solutions that combine multiple services for maximum impact 
              and value, tailored to specific business needs and industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                <Link href="/contact" className="flex items-center">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully designed packages that combine complementary services 
              for comprehensive business transformation.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${pkg.bgColor} to-transparent flex items-center justify-center mb-4`}>
                      <pkg.icon className={`h-8 w-8 ${pkg.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-[#006400]">What's Included:</h4>
                        <ul className="space-y-1">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 text-[#006400] mr-2 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-[#0B3C5D]">Ideal For:</h4>
                        <p className="text-sm text-muted-foreground mb-2">{pkg.ideal}</p>
                        <p className="text-sm font-medium text-[#328CC1]">Duration: {pkg.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Package Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Packages?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our combined packages offer significant advantages over individual services, 
              providing integrated solutions and better value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Package className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
              <h3 className="font-medium mb-2">Integrated Approach</h3>
              <p className="text-sm text-muted-foreground">
                Services work together for maximum synergy and impact
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Star className="h-8 w-8 text-[#328CC1] mx-auto mb-3" />
              <h3 className="font-medium mb-2">Better Value</h3>
              <p className="text-sm text-muted-foreground">
                Significant cost savings compared to individual services
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <CheckCircle2 className="h-8 w-8 text-[#006400] mx-auto mb-3" />
              <h3 className="font-medium mb-2">Faster Results</h3>
              <p className="text-sm text-muted-foreground">
                Coordinated delivery for quicker implementation
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FileText className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
              <h3 className="font-medium mb-2">Comprehensive Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Address multiple business areas simultaneously
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package Option */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#E6F3FF] to-[#F8FBFF] rounded-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We can create a tailored package that combines any of our services 
                to meet your specific business needs and objectives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0B3C5D] mb-1">Flexible</div>
                  <p className="text-sm text-muted-foreground">Mix and match services</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#328CC1] mb-1">Scalable</div>
                  <p className="text-sm text-muted-foreground">Adjust scope as needed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#006400] mb-1">Tailored</div>
                  <p className="text-sm text-muted-foreground">Designed for your industry</p>
                </div>
              </div>
              
              <Button className="bg-[#0B3C5D] hover:bg-[#0a325d] text-white">
                <Link href="/contact">
                  Discuss Custom Package
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h2>
              <p className="text-white/90">
                Choose the package that best fits your needs or let us create a custom solution.
              </p>
            </div>
            <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
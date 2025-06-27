'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GraduationCap, 
  BarChart4, 
  Users, 
  CheckCircle2,
  BookOpen,
  Award,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CapacityBuildingTrainingPage() {
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

  const services = [
    {
      icon: GraduationCap,
      title: "Finance for Non-Financial Managers",
      description: "Practical sessions teaching business owners and managers how to read financials and make data-informed decisions.",
      format: "Interactive workshops and hands-on exercises",
      duration: "2-3 days intensive or weekly sessions",
      color: "text-[#0B3C5D]"
    },
    {
      icon: BarChart4,
      title: "Excel, Power BI & Data Literacy Training",
      description: "Beginner-to-advanced workshops helping your team become data-literate and independent with reporting.",
      format: "Hands-on training with real business scenarios",
      duration: "1-2 weeks with ongoing support",
      color: "text-[#328CC1]"
    },
    {
      icon: Users,
      title: "Leadership & Governance for SMEs",
      description: "Interactive training covering accountability, internal controls, and ethical leadership for scaling businesses.",
      format: "Leadership workshops and case studies",
      duration: "3-5 days with follow-up sessions",
      color: "text-[#006400]"
    }
  ];

  const benefits = [
    "Improved financial literacy across your organization",
    "Enhanced data analysis capabilities",
    "Stronger leadership and governance practices",
    "Reduced dependency on external consultants",
    "Better decision-making at all levels",
    "Increased operational efficiency"
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
              Capacity Building & Training
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower your team with essential skills in finance, data analysis, and leadership 
              to drive sustainable business growth and independence.
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

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training solutions designed to build internal capabilities 
              and reduce dependency on external support.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm text-[#006400] mb-1">Format:</h4>
                        <p className="text-sm text-muted-foreground">{service.format}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm text-[#006400] mb-1">Duration:</h4>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Invest in Training?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Building internal capabilities is one of the most cost-effective ways to 
                ensure long-term business success and operational independence.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#006400] mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <BookOpen className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#0B3C5D] mb-1">500+</div>
                <p className="text-sm text-muted-foreground">Professionals Trained</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Award className="h-8 w-8 text-[#328CC1] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#328CC1] mb-1">95%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Target className="h-8 w-8 text-[#006400] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#006400] mb-1">80%</div>
                <p className="text-sm text-muted-foreground">Skill Improvement</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Users className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#0B3C5D] mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Companies Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Training Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in practical, hands-on learning that can be immediately 
              applied to real business situations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                1
              </div>
              <h3 className="font-medium mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Evaluate current skill levels and identify specific training needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                2
              </div>
              <h3 className="font-medium mb-2">Customization</h3>
              <p className="text-sm text-muted-foreground">
                Tailor training content to your industry and business context.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                3
              </div>
              <h3 className="font-medium mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Interactive sessions with real-world examples and exercises.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                4
              </div>
              <h3 className="font-medium mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing support and resources to reinforce learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to Empower Your Team?</h2>
              <p className="text-white/90">
                Let's discuss how our training programs can build your internal capabilities.
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
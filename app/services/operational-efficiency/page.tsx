'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Workflow, 
  BarChart4, 
  Package, 
  CheckCircle2,
  Target,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OperationalEfficiencyPage() {
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
      icon: Workflow,
      title: "Business Process Mapping",
      description: "Identify bottlenecks in your workflows (sales, procurement, performance management) and reengineer them for simplicity and speed.",
      benefits: ["Streamlined workflows", "Reduced processing time", "Improved efficiency"],
      color: "text-[#0B3C5D]"
    },
    {
      icon: Target,
      title: "KPI and Performance Metrics Framework",
      description: "Define measurable goals across departments (sales, marketing, finance) and create comprehensive reporting tools.",
      benefits: ["Clear performance targets", "Data-driven decisions", "Departmental alignment"],
      color: "text-[#328CC1]"
    },
    {
      icon: Package,
      title: "Inventory & Supply Chain Analytics",
      description: "Analyse stock levels, turnover, supplier performance, and optimize reordering using simple yet effective metrics.",
      benefits: ["Optimized inventory levels", "Better supplier relationships", "Cost reduction"],
      color: "text-[#006400]"
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
              Operational Efficiency & Process Improvement
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Streamline your operations, eliminate bottlenecks, and optimize performance 
              across all business functions for sustainable growth.
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Process Improvement Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help businesses identify inefficiencies, streamline operations, 
              and implement performance measurement systems that drive continuous improvement.
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
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-[#006400]">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[#006400] mr-2 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven approach to operational improvement that ensures 
              sustainable results and measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                1
              </div>
              <h3 className="font-medium mb-2">Current State Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Map existing processes and identify inefficiencies and bottlenecks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                2
              </div>
              <h3 className="font-medium mb-2">Process Redesign</h3>
              <p className="text-sm text-muted-foreground">
                Design optimized workflows that eliminate waste and improve flow.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                3
              </div>
              <h3 className="font-medium mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Deploy new processes with proper training and change management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                4
              </div>
              <h3 className="font-medium mb-2">Monitor & Optimize</h3>
              <p className="text-sm text-muted-foreground">
                Track performance and continuously refine for ongoing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Expected Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our operational efficiency improvements typically deliver measurable results 
              within the first quarter of implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0B3C5D] mb-2">25-40%</div>
              <h3 className="text-lg font-medium mb-2">Process Time Reduction</h3>
              <p className="text-muted-foreground">Average reduction in process completion time</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#328CC1] mb-2">15-30%</div>
              <h3 className="text-lg font-medium mb-2">Cost Savings</h3>
              <p className="text-muted-foreground">Operational cost reduction through efficiency gains</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#006400] mb-2">90%+</div>
              <h3 className="text-lg font-medium mb-2">Process Compliance</h3>
              <p className="text-muted-foreground">Improvement in process adherence and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to Optimize Your Operations?</h2>
              <p className="text-white/90">
                Let's identify opportunities to streamline your processes and boost efficiency.
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
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  FileText, 
  Globe, 
  CheckCircle2,
  Calculator,
  PieChart,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function FinancialManagementStrategyPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
      icon: TrendingUp,
      title: "Business Financial Health Assessment",
      description: "Comprehensive review of income statements, balance sheets, and cash flow to identify risks and opportunities.",
      value: "Clear report with specific recommendations to improve profitability and reduce costs.",
      color: "text-[#0B3C5D]"
    },
    {
      icon: Calculator,
      title: "Budgeting & Forecasting Toolkit",
      description: "Custom financial models and templates for projecting income, expenses, and cash flow.",
      value: "Confident planning with better spending decisions and risk anticipation.",
      color: "text-[#328CC1]"
    },
    {
      icon: Target,
      title: "Investment Readiness Audit",
      description: "Prepare for investor conversations with robust financial models and due diligence documents.",
      value: "Equipped to attract investment and negotiate effectively.",
      color: "text-[#006400]"
    },
    {
      icon: Shield,
      title: "Internal Control & Audit Setup",
      description: "Implement financial controls including approval workflows and reconciliation standards.",
      value: "Build investor trust while keeping finances clean and secure.",
      color: "text-[#0B3C5D]"
    },
    {
      icon: Globe,
      title: "Cross-Border Payment & Tax Efficiency",
      description: "Structure international payments and transfers with minimal tax leakage and compliance risk.",
      value: "Save money and avoid legal issues in cross-border operations.",
      color: "text-[#328CC1]"
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
              Financial Management & Strategy
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive financial solutions to strengthen your business foundation, 
              improve profitability, and prepare for sustainable growth.
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
            <h2 className="text-3xl font-bold mb-6">Our Financial Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From financial health assessments to investment readiness, we provide 
              the strategic financial guidance your business needs to thrive.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-[#006400]">Value to You:</h4>
                      <p className="text-sm text-muted-foreground">{service.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure your financial strategy 
              aligns with your business objectives and growth plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                1
              </div>
              <h3 className="font-medium mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive review of your current financial position and processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                2
              </div>
              <h3 className="font-medium mb-2">Strategy Design</h3>
              <p className="text-sm text-muted-foreground">
                Develop tailored financial strategies aligned with your business goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                3
              </div>
              <h3 className="font-medium mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Execute the strategy with proper controls and monitoring systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                4
              </div>
              <h3 className="font-medium mb-2">Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring and refinement for sustained performance.
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
              <h2 className="text-2xl font-bold mb-2">Ready to Strengthen Your Financial Foundation?</h2>
              <p className="text-white/90">
                Let's discuss how our financial management services can drive your business growth.
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
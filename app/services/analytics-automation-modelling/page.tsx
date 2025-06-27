'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  AlertTriangle, 
  BarChart4, 
  Shield, 
  Bot, 
  FileText, 
  TrendingUp,
  CheckCircle2,
  Eye,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AnalyticsAutomationModellingPage() {
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
      icon: AlertTriangle,
      title: "Business Risk Diagnostics & KPI Optimization",
      description: "Analyse operational, sales, and customer data to identify critical risk indicators and performance gaps.",
      value: "Empowers informed decision-making through risk-aware metrics and proactive vulnerability management.",
      color: "text-[#0B3C5D]"
    },
    {
      icon: BarChart4,
      title: "Sales & Customer Risk Analytics Dashboard",
      description: "Interactive dashboards tracking revenue trends while highlighting churn risk and pricing inconsistencies.",
      value: "Early identification of revenue-at-risk and customer attrition for targeted interventions.",
      color: "text-[#328CC1]"
    },
    {
      icon: TrendingUp,
      title: "Financial & Credit Risk Assessment Tools",
      description: "Build tools to quantify creditworthiness, monitor payment patterns, and detect early signs of default.",
      value: "Strengthens credit controls and portfolio resilience, reducing financial distress likelihood.",
      color: "text-[#006400]"
    },
    {
      icon: Shield,
      title: "Fraud Detection & Prevention Systems",
      description: "Deploy ML-enabled anomaly detection to identify high-risk transactions and behavioral inconsistencies.",
      value: "Reduces fraud-related losses through real-time detection and preventive controls.",
      color: "text-[#0B3C5D]"
    },
    {
      icon: FileText,
      title: "Automated Risk Reporting & Regulatory Compliance",
      description: "Automate recurring reports using SQL, Python, Alteryx ensuring audit-readiness and regulatory compliance.",
      value: "Minimizes manual error and compliance risk while freeing up leadership time.",
      color: "text-[#328CC1]"
    },
    {
      icon: Eye,
      title: "Market & Demand Volatility Forecasting",
      description: "Deploy ML models to anticipate demand shifts using historical data and market signals.",
      value: "Improves strategic planning by reducing exposure to market uncertainty and demand misalignment.",
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
              Analytics, Automation & Modelling
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Risk-focused capabilities that transform data into actionable insights, 
              automate critical processes, and strengthen your business resilience.
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
            <h2 className="text-3xl font-bold mb-6">Risk-Focused Analytics Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our analytics and automation services are designed with risk management at their core, 
              helping you identify, quantify, and mitigate business risks proactively.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge tools and technologies to deliver robust, 
              scalable analytics and automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Bot className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
              <h4 className="font-medium">Machine Learning</h4>
              <p className="text-sm text-muted-foreground mt-2">AI/ML models for prediction and detection</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BarChart4 className="h-8 w-8 text-[#328CC1] mx-auto mb-3" />
              <h4 className="font-medium">Power BI</h4>
              <p className="text-sm text-muted-foreground mt-2">Interactive dashboards and reporting</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Zap className="h-8 w-8 text-[#006400] mx-auto mb-3" />
              <h4 className="font-medium">Python & SQL</h4>
              <p className="text-sm text-muted-foreground mt-2">Data processing and automation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FileText className="h-8 w-8 text-[#0B3C5D] mx-auto mb-3" />
              <h4 className="font-medium">APIs & Integration</h4>
              <p className="text-sm text-muted-foreground mt-2">Seamless system connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Risk Management?</h2>
              <p className="text-white/90">
                Let's discuss how our analytics solutions can strengthen your business resilience.
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
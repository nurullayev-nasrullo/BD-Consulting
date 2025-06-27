'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Briefcase, Users, Trophy, Clock } from 'lucide-react';
import ApplicationDialog from '@/components/careers/ApplicationDialog';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openPositions = [
    {
      title: 'Senior Data Analyst',
      department: 'Analytics Team',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      description: 'We are seeking an experienced Data Analyst to join our growing analytics team. The ideal candidate will have strong expertise in financial modeling and data visualization.',
    },
    {
      title: 'Business Transformation Consultant',
      department: 'Consulting Team',
      location: 'London, UK / Tashkent, UZ',
      type: 'Full-time',
      description: 'Looking for a seasoned consultant with experience in business process optimization and digital transformation projects.',
    },
    {
      title: 'Technology Solutions Architect',
      department: 'Technology Team',
      location: 'Tashkent, UZ',
      type: 'Full-time',
      description: 'Seeking a solutions architect to design and implement innovative technology solutions for our clients.',
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: Trophy,
      title: 'Growth Opportunities',
      description: 'Clear career progression and professional development support'
    },
    {
      icon: Clock,
      title: 'Flexible Working',
      description: 'Hybrid working model with flexible hours'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Be part of a dynamic team dedicated to transforming businesses through 
              innovative solutions and cutting-edge technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we provide an opportunity to make a real impact 
              while growing your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <benefit.icon className="h-12 w-12 text-[#328CC1]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our current opportunities and find your next career move.
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                        <div className="space-y-2">
                          <p className="flex items-center text-muted-foreground">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {position.department} | {position.type}
                          </p>
                          <p className="text-muted-foreground">{position.location}</p>
                        </div>
                        <p className="mt-4">{position.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button 
                          className="w-full md:w-auto"
                          onClick={() => setSelectedJob(position.title)}
                        >
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ApplicationDialog 
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ''}
      />
    </div>
  );
}
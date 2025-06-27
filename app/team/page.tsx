'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Timur Juraev',
      title: 'Founder and CEO',
      email: 'tjuraev@business-diplomat.com',
      contact: '+44 (0) 754 2838 158',
      linkedin: 'https://www.linkedin.com/in/tjuraev/',
      expertise:
        'High quality Analytics and Financial Modelling deliverables in the audit of UK TIER 1 banks and top AWM firms.',
      image: '/Temurjon-Juraev1.jpg',
    },
    {
      name: 'Khusan Raymjonov',
      title: 'Co-Founder and CFO',
      email: 'kraymjonov@business-diplomat.com',
      contact: '+44 (0) 781 0582 954',
      linkedin: 'https://www.linkedin.com/in/khusan-r-8ab72310b/',
      expertise:
        'Internal controls enhancement, Delivered multiple external audit projects for FTSE 100 companies',
      image: '/Khusan-Raymjonov.jpg',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
              Our Team
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Meet the experts behind BUSINESS DIPLOMAT, bringing
              decades of experience in analytics, business transformation, and
              industry expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines deep industry knowledge, technical
              expertise, and a passionate commitment to delivering
              transformative solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#0B3C5D] font-medium mb-4">
                      {member.title}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-[#328CC1] mr-3" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-[#328CC1] transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-[#328CC1] mr-3" />
                        <a
                          href={`tel:${member.contact.replace(/\s/g, '')}`}
                          className="text-muted-foreground hover:text-[#328CC1] transition-colors"
                        >
                          {member.contact}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Linkedin className="h-5 w-5 text-[#328CC1] mr-3" />
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-[#328CC1] transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Areas of Expertise</h4>
                      <p className="text-muted-foreground">
                        {member.expertise}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Team Structure</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our organization is structured to deliver maximum value to our
              clients, with specialized teams focused on specific domains and
              technologies.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col items-center p-6 border-b border-gray-200">
                <div className="w-40 h-40 rounded-full bg-[#0B3C5D] flex items-center justify-center text-white text-xl font-bold mb-3 p-4 text-center">
                  Leadership Team
                </div>
                <p className="text-sm text-muted-foreground">
                  Strategic direction and executive oversight
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-32 h-32 rounded-full bg-[#328CC1] flex items-center justify-center text-white text-lg font-bold mb-3 p-4 text-center">
                    Analytics Team
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Data scientists and business analysts
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-32 h-32 rounded-full bg-[#328CC1] flex items-center justify-center text-white text-lg font-bold mb-3 p-4 text-center">
                    Technology Team
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Engineers and architects
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-32 h-32 rounded-full bg-[#328CC1] flex items-center justify-center text-white text-lg font-bold mb-3 p-4 text-center">
                    Consulting Team
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Domain experts and solution consultants
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <div className="w-32 h-32 rounded-full bg-[#006400] flex items-center justify-center text-white text-lg font-bold p-4 text-center">
                  Client Success
                </div>
              </div>

              <p className="text-center mt-4 text-muted-foreground">
                Our client-centric structure ensures all teams collaborate
                seamlessly to deliver integrated solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned in key financial centers to serve our
              global client base.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* London Office */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[300px]">
                <Image
                  src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
                  alt="London Financial District"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">London</h3>
                    <p className="text-white/90">Financial Hub</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-lg font-medium mb-4">UK Headquarters</p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#328CC1] mr-3 shrink-0 mt-1" />
                    11 Baddow Close, Dagenham, London, UK RM10 9PS
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 text-[#328CC1] mr-3" />
                    +44 (0) 754 2838 158
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tashkent Office */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[300px]">
                <Image
                  src="/orig.webp"
                  alt="Tashkent Business District"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Tashkent</h3>
                    <p className="text-white/90">Innovation Center</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-lg font-medium mb-4">Technology Hub</p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#328CC1] mr-3 shrink-0 mt-1" />
                    International Business Center, Amir Temur Avenue, Tashkent,
                    Uzbekistan
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 text-[#328CC1] mr-3" />
                    +998 71 123 4567
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Join Our Growing Team</h2>
              <p className="text-white/90 max-w-xl">
                Be part of a dynamic team solving complex business challenges
                with innovative solutions.
              </p>
            </div>
            <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
              <Link href="/careers" className="flex items-center">
                Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
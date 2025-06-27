'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  HandshakeIcon,
  Target,
  Heart,
  Scale,
  UserPlus,
  Share2,
  Rocket,
  Zap,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ValuesPage() {
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

  const values = [
    {
      title: "Integrity",
      icon: Shield,
      description: "We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our interactions.",
      principles: [
        {
          icon: Scale,
          title: "Ethical Business Practices",
          description: "We maintain unwavering ethical standards in all business dealings and decision-making processes."
        },
        {
          icon: Heart,
          title: "Trust & Transparency",
          description: "We build lasting relationships through open communication and consistent delivery on our promises."
        },
        {
          icon: Target,
          title: "Accountability",
          description: "We take responsibility for our actions and their impact on our clients and communities."
        }
      ]
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "We believe in the power of working together, fostering an environment where diverse perspectives lead to innovative solutions.",
      principles: [
        {
          icon: HandshakeIcon,
          title: "Partnership Focus",
          description: "We work alongside our clients as true partners, sharing knowledge and expertise."
        },
        {
          icon: UserPlus,
          title: "Inclusive Environment",
          description: "We value diverse perspectives and create space for all voices to be heard."
        },
        {
          icon: Share2,
          title: "Knowledge Sharing",
          description: "We actively share insights and best practices across teams and with clients."
        }
      ]
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description: "We continuously push boundaries, embrace new technologies, and pioneer creative solutions to complex challenges.",
      principles: [
        {
          icon: Rocket,
          title: "Forward Thinking",
          description: "We anticipate future trends and proactively develop solutions for tomorrow's challenges."
        },
        {
          icon: Zap,
          title: "Creative Problem-Solving",
          description: "We approach each challenge with fresh perspectives and innovative thinking."
        },
        {
          icon: RefreshCw,
          title: "Continuous Improvement",
          description: "We constantly evolve our methods and solutions to deliver better results."
        }
      ]
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
              Our Values
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The core principles that guide our actions, shape our culture, and define our 
              commitment to excellence in everything we do.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <value.icon className="h-8 w-8 text-[#0B3C5D]" />
                          <h2 className="text-2xl font-bold">{value.title}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {value.description}
                        </p>
                      </div>
                      
                      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {value.principles.map((principle, pIndex) => (
                          <div 
                            key={pIndex}
                            className="bg-gradient-to-br from-[#E6F3FF] to-[#F8FBFF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <principle.icon className="h-6 w-6 text-[#328CC1] mb-4" />
                            <h3 className="font-bold mb-2">{principle.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {principle.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Values in Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how our values translate into tangible benefits for our clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#E6F3FF] to-[#F8FBFF] p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="h-12 w-12 text-[#0B3C5D] mb-4" />
              <h3 className="text-xl font-bold mb-2">Client Trust</h3>
              <p className="text-muted-foreground">
                Our commitment to integrity has earned us long-term partnerships with 
                leading organizations across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#E8F5E9] to-[#F8FBF8] p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="h-12 w-12 text-[#328CC1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Shared Success</h3>
              <p className="text-muted-foreground">
                Through collaboration, we've helped our clients achieve breakthrough 
                results and sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#F5F5F5] to-[#FFFFFF] p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="h-12 w-12 text-[#006400] mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                Our innovative approach has delivered transformative solutions that 
                drive real business value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Experience Our Values in Action</h2>
              <p className="text-white/90">
                Let's discuss how our values-driven approach can benefit your business.
              </p>
            </div>
            <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
              <Link href="/contact" className="flex items-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
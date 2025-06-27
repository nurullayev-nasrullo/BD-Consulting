'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Building2 } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: Building2,
      title: "International Best Practices",
      description: "Help Central Asian businesses adopt international best practices",
      color: "from-[#0B3C5D] to-[#1e5a8a]"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Deliver data-driven and efficient business decisions",
      color: "from-[#328CC1] to-[#4a9fd1]"
    },
    {
      icon: Target,
      title: "Growth-Oriented Organizations",
      description: "Build disciplined, professional, and growth-oriented organizations",
      color: "from-[#006400] to-[#228B22]"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#0B3C5D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#328CC1] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#006400] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to transforming the business landscape across Central Asia through 
            strategic consulting and innovative solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${mission.color} rounded-xl mb-6 shadow-lg`}>
                  <mission.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0B3C5D] transition-colors duration-300">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#0B3C5D] via-[#328CC1] to-[#006400] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/bd-logo-white.webp"
                alt="BUSINESS DIPLOMAT Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              {/*<div>
                <h3 className="text-xl font-bold text-white">
                  BUSINESS DIPLOMAT
                </h3>
                <p className="text-sm text-[#90EE90]">Consulting Services</p>
              </div>*/}
            </div>
            <p className="text-gray-300">
              Transforming businesses through intelligent solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/105999579/admin/dashboard" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="hover:text-[#90EE90] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#90EE90] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#90EE90] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/financial-management-strategy" className="text-gray-300 hover:text-white transition-colors">
                  Financial Management & Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/analytics-automation-modelling" className="text-gray-300 hover:text-white transition-colors">
                  Analytics, Automation & Modelling
                </Link>
              </li>
              <li>
                <Link href="/services/operational-efficiency" className="text-gray-300 hover:text-white transition-colors">
                  Operational Efficiency
                </Link>
              </li>
              <li>
                <Link href="/services/capacity-building-training" className="text-gray-300 hover:text-white transition-colors">
                  Capacity Building & Training
                </Link>
              </li>
              <li>
                <Link href="/services/combined-packages" className="text-gray-300 hover:text-white transition-colors">
                  Combined Packages
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/values" className="text-gray-300 hover:text-white transition-colors">
                  Values
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-[#90EE90] shrink-0 mt-1" />
              <p className="text-gray-300">11 Baddow Close, Dagenham, London, UK RM10 9PS</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-[#90EE90] shrink-0" />
              <a href="mailto:info@business-diplomat.com" className="text-gray-300 hover:text-white transition-colors">
                info@business-diplomat.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-[#90EE90] shrink-0" />
              <a href="tel:+447542838158" className="text-gray-300 hover:text-white transition-colors">
                +44 (0) 754 2838 158
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BUSINESS DIPLOMAT Consulting Services. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="hover:text-white transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
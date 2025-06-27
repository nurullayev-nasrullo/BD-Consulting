'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  Send,
  Calendar,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { sendEmail } from '@/lib/email';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().min(2, { message: "Company name is required." }),
  serviceInterest: z.string().min(1, { message: "Please select a service." }),
  projectType: z.enum(["new", "existing", "expansion"], {
    required_error: "Please select a project type.",
  }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  preferredContact: z.enum(["email", "phone"], {
    required_error: "Please select a preferred contact method.",
  }),
});

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: "",
      projectType: "new",
      budget: "",
      message: "",
      preferredContact: "email"
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Send notification email using the template
      await sendEmail({
        to_email: 'info@business-diplomat.com',
        cc_email: 'tjuraev@business-diplomat.com',
        subject: 'New Consultation Request',
        message: `
          New consultation request received:
          
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone || 'Not provided'}
          Company: ${data.company}
          Service Interest: ${data.serviceInterest}
          Project Type: ${data.projectType}
          Budget: ${data.budget}
          
          Message:
          ${data.message}
          
          Preferred Contact Method: ${data.preferredContact}
        `,
        template_id: 'template_g71ipiu'
      });

      setIsSubmitted(true);
      toast({
        title: "Consultation Request Received",
        description: "Thank you for reaching out. We'll contact you within 24 hours.",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
    }
  };

  const nextStep = async () => {
    if (currentStep === 1) {
      const isValid = await form.trigger(['name', 'email', 'company']);
      if (isValid) setCurrentStep(2);
    } else if (currentStep === 2) {
      const isValid = await form.trigger(['serviceInterest', 'projectType', 'budget']);
      if (isValid) setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to transform your business? Schedule a consultation with our team
              of experts to discuss your unique challenges and opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Book a Consultation</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below to schedule a personalized consultation with our team.
                </p>

                {!isSubmitted ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Step 1: Basic Information */}
                      {currentStep === 1 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-medium">1</div>
                            <div className="ml-3">
                              <h3 className="font-semibold">Basic Information</h3>
                              <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                            </div>
                          </div>

                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Acme Corp" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )}

                      {/* Step 2: Project Information */}
                      {currentStep === 2 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-medium">2</div>
                            <div className="ml-3">
                              <h3 className="font-semibold">Project Information</h3>
                              <p className="text-sm text-muted-foreground">Tell us about your project needs</p>
                            </div>
                          </div>

                          <FormField
                            control={form.control}
                            name="serviceInterest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service of Interest</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="financial-management">Financial Management & Strategy</SelectItem>
                                    <SelectItem value="analytics-automation">Analytics, Automation & Modelling</SelectItem>
                                    <SelectItem value="operational-efficiency">Operational Efficiency</SelectItem>
                                    <SelectItem value="capacity-building">Capacity Building & Training</SelectItem>
                                    <SelectItem value="combined-packages">Combined Packages</SelectItem>
                                    <SelectItem value="not-sure">Not Sure</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>Project Type</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="new" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        New project
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="existing" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Existing project improvement
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="expansion" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Expansion or scaling
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget Range</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="below-10k">Below $10,000</SelectItem>
                                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                    <SelectItem value="above-100k">Above $100,000</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )}

                      {/* Step 3: Additional Details */}
                      {currentStep === 3 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-medium">3</div>
                            <div className="ml-3">
                              <h3 className="font-semibold">Additional Details</h3>
                              <p className="text-sm text-muted-foreground">Provide more information about your needs</p>
                            </div>
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Please describe your project, challenges, and what you hope to achieve..." 
                                    className="min-h-32"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="preferredContact"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>Preferred Contact Method</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-row space-x-4"
                                  >
                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="email" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Email
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="phone" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Phone
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex items-center space-x-2 mt-2">
                            <FileText className="h-5 w-5 text-[#328CC1]" />
                            <p className="text-sm text-muted-foreground">
                              Need to upload files? You can share documents during your consultation.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8 pt-4 border-t">
                        {currentStep > 1 ? (
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={prevStep}
                          >
                            Back
                          </Button>
                        ) : (
                          <div></div>
                        )}

                        {currentStep < 3 ? (
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            className="bg-[#0B3C5D] hover:bg-[#0a325d]"
                          >
                            Next Step
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            className="bg-[#0B3C5D] hover:bg-[#0a325d]"
                          >
                            <Send className="mr-2 h-4 w-4" /> Submit Request
                          </Button>
                        )}
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex justify-center items-center space-x-2 mt-6">
                        <div className={`h-2 w-2 rounded-full ${currentStep >= 1 ? 'bg-[#0B3C5D]' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-2 rounded-full ${currentStep >= 2 ? 'bg-[#0B3C5D]' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-2 rounded-full ${currentStep >= 3 ? 'bg-[#0B3C5D]' : 'bg-gray-300'}`}></div>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#006400]/10 text-[#006400] mb-4">
                      <CheckIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your consultation request has been received. One of our experts will 
                      contact you within 24 hours to schedule your personalized consultation.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Submit Another Request
                      </Button>
                      <Button 
                        className="bg-[#0B3C5D] hover:bg-[#0a325d]"
                        onClick={() => window.location.href = '/'}
                      >
                        Return to Home
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <div className="bg-[#0B3C5D] text-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#90EE90] mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-white/80">11 Baddow Close, Dagenham, London, UK RM10 9PS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-[#90EE90] mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:info@business-diplomat.com" className="text-white/80 hover:text-white transition-colors">
                          info@business-diplomat.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#90EE90] mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <a href="tel:+447542838158" className="text-white/80 hover:text-white transition-colors">
                          +44 (0) 754 2838 158
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-[#90EE90] mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#328CC1] text-white text-sm mr-3 shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Initial Contact</p>
                        <p className="text-sm text-muted-foreground">
                          We'll reach out within 24 hours to confirm your request.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#328CC1] text-white text-sm mr-3 shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Consultation Scheduling</p>
                        <p className="text-sm text-muted-foreground">
                          We'll find a convenient time for your consultation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#328CC1] text-white text-sm mr-3 shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Discovery Session</p>
                        <p className="text-sm text-muted-foreground">
                          Our experts will learn about your specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#328CC1] text-white text-sm mr-3 shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Proposal Delivery</p>
                        <p className="text-sm text-muted-foreground">
                          We'll provide a customized solution proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Check icon component
const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};
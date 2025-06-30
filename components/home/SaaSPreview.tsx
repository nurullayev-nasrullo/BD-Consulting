'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, BellRing } from 'lucide-react';

const SaaSPreview = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here we'll add actual API integration when the backend is ready
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      
      toast({
        title: "Success!",
        description: "You'll be notified when our platform launches.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-[#0B3C5D]/10 text-[#0B3C5D] px-3 py-1 rounded-full mb-2">
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold mb-4">
            BUSINESS DIPLOMAT Intelligence Platform
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive SaaS solution for business intelligence and process automation
            is coming soon. Be the first to experience the future of business transformation.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
          
          <img
            src="/demo-prevew.webp"
            alt="BUSINESS DIPLOMAT Intelligence Platform Preview"
            className="w-full h-auto object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Transform Your Business Intelligence
            </h3>
            <p className="mb-4 text-white/90 max-w-xl">
              An all-in-one platform for data analysis, process automation, and business 
              intelligence designed for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-white text-[#0B3C5D] hover:bg-white/90"
                  >
                    <span className="flex items-center">
                      Try Demo Version <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Try Demo Version</DialogTitle>
                    <DialogDescription>
                      Join our exclusive demo program and be the first to experience the BUSINESS DIPLOMAT Intelligence Platform.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll notify you when the demo is available.
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#0B3C5D] hover:bg-[#0a325d]"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Request Demo Access <BellRing className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#E6F3FF] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Data Analytics Engine</h4>
            <p className="text-muted-foreground">
              Advanced analytics capabilities powered by machine learning to extract actionable insights.
            </p>
          </div>
          
          <div className="bg-[#E8F5E9] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Process Automation</h4>
            <p className="text-muted-foreground">
              Streamline workflows and automate repetitive tasks with intelligent automation tools.
            </p>
          </div>
          
          <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Executive Dashboards</h4>
            <p className="text-muted-foreground">
              Real-time visualization and reporting for data-driven decision making at all levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPreview;
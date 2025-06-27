'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/lib/email';

interface ApplicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function ApplicationDialog({ isOpen, onClose, jobTitle }: ApplicationDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification email
      await sendEmail({
        to_email: 'info@business-diplomat.com',
        subject: `New Job Application: ${jobTitle}`,
        message: `
          New job application received:
          
          Position: ${jobTitle}
          Name: ${formData.fullName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          
          Cover Letter:
          ${formData.coverLetter}
        `
      });

      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch soon!",
      });
      
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Please fill out the form below to submit your application.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume (PDF) *</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf"
              required
              onChange={handleFileChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're interested in this position..."
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
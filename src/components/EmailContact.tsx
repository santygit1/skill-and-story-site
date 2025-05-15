
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// EmailJS integration for contact form
// Replace these with your actual EmailJS service details when available
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // You'll need to replace this with your actual service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // You'll need to replace this with your actual template ID
const EMAILJS_USER_ID = "YOUR_USER_ID"; // You'll need to replace this with your actual user ID

/**
 * To integrate EmailJS:
 * 1. Sign up at emailjs.com and create an account
 * 2. Create a service (e.g., Gmail, Outlook, etc.)
 * 3. Create an email template with variables like {{name}}, {{email}}, {{subject}}, {{message}}
 * 4. Get your User ID from the integration section
 * 5. Replace the placeholder constants above with your actual details:
 *    - EMAILJS_SERVICE_ID: Your EmailJS service ID (e.g., "service_abc123")
 *    - EMAILJS_TEMPLATE_ID: Your EmailJS template ID (e.g., "template_xyz789")
 *    - EMAILJS_USER_ID: Your EmailJS user ID (e.g., "user_def456")
 * 6. Uncomment the emailjs.sendForm code in the sendEmail function
 */

const EmailContact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would uncomment this code and use your actual EmailJS details
      // await emailjs.sendForm(
      //   EMAILJS_SERVICE_ID,
      //   EMAILJS_TEMPLATE_ID,
      //   formRef.current!,
      //   EMAILJS_USER_ID
      // );

      // For demo purposes, simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        variant: "destructive",
        title: "Message failed to send",
        description: "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <form ref={formRef} onSubmit={sendEmail}>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Message subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-portfolio-accent hover:bg-portfolio-blue"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EmailContact;


import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Smile } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS integration placeholder - Replace with your actual EmailJS setup
    /*
    To integrate EmailJS:
    1. Sign up at emailjs.com and create a service, template, and get your user ID
    2. Install emailjs-com package (already installed)
    3. Replace the placeholders below with your actual EmailJS credentials:
       - EMAILJS_SERVICE_ID: Your EmailJS service ID (e.g., 'service_abc123')
       - EMAILJS_TEMPLATE_ID: Your EmailJS template ID (e.g., 'template_xyz789')
       - EMAILJS_USER_ID: Your EmailJS user ID (e.g., 'user_def456')
    
    Example implementation:
    
    import emailjs from 'emailjs-com';
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your service ID
        'YOUR_TEMPLATE_ID',    // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Santhosh Kumar',
        },
        'YOUR_USER_ID'         // Replace with your user ID
      );
      
      toast({
        title: "Message sent! 🎉",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error sending your message. Please try again.",
      });
    }
    */
    
    try {
      // Simulating emailjs integration for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent! 🎉",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'santy.santhoshkumar5002@gmail.com',
      href: 'mailto:santy.santhoshkumar5002@gmail.com'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 7305570956',
      href: 'tel:+917305570956'
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-blue/10 via-creamy-beige/20 to-peach/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-cosmic-purple mb-4">Get In Touch</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in-up bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif text-cosmic-purple">Send a Message</CardTitle>
                  <CardDescription className="text-cosmic-purple/60">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-cosmic-purple">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-sky-blue/30 focus:border-cosmic-blue rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-cosmic-purple">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-sky-blue/30 focus:border-cosmic-blue rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-cosmic-purple">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-sky-blue/30 focus:border-cosmic-blue rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-cosmic-purple">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-sky-blue/30 focus:border-cosmic-blue rounded-xl bg-white/50 backdrop-blur-sm resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-3 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="animate-fade-in-up bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-cosmic-purple text-center">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((item, index) => (
                  <div key={index} className="group">
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-sky-blue/20 transition-all duration-200 cursor-pointer"
                      >
                        <div className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue p-2 rounded-full">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cosmic-purple group-hover:text-cosmic-blue transition-colors">{item.label}</h4>
                          <p className="text-cosmic-purple/70">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-3 rounded-xl">
                        <div className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue p-2 rounded-full">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cosmic-purple">{item.label}</h4>
                          <p className="text-cosmic-purple/70">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <Card className="animate-fade-in-up bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-cosmic-purple text-center">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {/* GitHub - Replace with your actual GitHub profile URL */}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-cosmic-purple/30 text-cosmic-purple hover:bg-cosmic-purple hover:text-white transition-all duration-300 rounded-xl group"
                  >
                    <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                  
                  {/* LinkedIn - Replace with your actual LinkedIn profile URL */}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue hover:text-white transition-all duration-300 rounded-xl group"
                  >
                    <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                
                {/* Instructions for updating social links */}
                <div className="mt-4 p-4 bg-sky-blue/10 rounded-xl">
                  <p className="text-xs text-cosmic-purple/60 text-center">
                    💡 Update the URLs above with your actual GitHub and LinkedIn profiles in the ContactSection.tsx file
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fun Quote */}
            <div className="text-center p-6 bg-gradient-to-r from-peach/20 to-sky-blue/20 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Smile className="w-8 h-8 text-cosmic-purple mx-auto mb-2" />
              <p className="text-cosmic-purple font-serif italic">
                "Let's build something amazing together!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

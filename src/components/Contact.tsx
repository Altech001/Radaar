import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have a question? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-600">contact@radaar.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-600">+(256) 723-4560</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Live Chat</h4>
                <p className="text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Your name" required />
            <Input type="email" placeholder="Your email" required />
            <Textarea placeholder="Your message" className="h-32" required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
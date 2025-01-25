import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Check your email for company information. We'll be in touch soon!",
    });
    setIsDialogOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent border-b border-gray-400 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className={`text-3xl font-bold  text-primary  animate-fade-in ${isScrolled ? 'text-primary animate-fade-in duration-1' : 'text-opacity-0'}`}>Radaar</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#features" className="text-neutral hover:text-primary transition-colors">Features</a>
                <a href="#about" className="text-neutral hover:text-primary transition-colors">About</a>
                <a href="#projects" className="text-neutral hover:text-primary transition-colors">Projects</a>
                <a href="#testimonials" className="text-neutral hover:text-primary transition-colors">Testimonials</a>
                <a href="#contact" className="text-neutral hover:text-primary transition-colors">Contact</a>
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-neutral-dark">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Features</a>
              <a href="#about" className="block px-3 py-2 text-neutralhover:text-primary transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Projects</a>
              <a href="#testimonials" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Contact</a>
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full mt-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="sm:max-w-[425px] bg-neutral-dark border-primary/20">
          <AlertDialogHeader>
            <AlertDialogTitle className=' text-white'>Get Started with Radaar</AlertDialogTitle>
            <AlertDialogDescription className=' text-white'>
              Fill out the form below and we'll send you detailed information about our services.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-neutral-dark/50 border-primary/20 text-white"
            />
            <Input
            className="bg-neutral-dark/50 border-primary/20 text-white"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Textarea
            className="bg-neutral-dark/50 border-primary/20 text-white"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className=' bg-neutral-dark text-white hover:bg-neutral'>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Navbar;
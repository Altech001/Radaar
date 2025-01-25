import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = () => {
    if (email && name && message) {
      toast({
        title: "Request submitted!",
        description: "Check your email for company information. We'll be in touch soon!",
      });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-tech-dark/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"}`}
    >
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#2D1B69]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block">
                <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  Innovate • Transform • Lead
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your <br />
                Digital <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                Empowering businesses with cutting-edge solutions that drive growth and innovation
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-8">
                From AI-driven analytics to cloud infrastructure, we're your partner in digital transformation. Join the future of technology with our expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 transform hover:scale-105">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-neutral-dark border-primary/20">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-2xl text-white">Let's Get Started</AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className="space-y-4 mt-4">
                          <Input
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-neutral-dark/50 border-primary/20 text-white"
                          />
                          <Input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-neutral-dark/50 border-primary/20 text-white"
                          />
                          <Input
                            placeholder="How can we help you?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-neutral-dark/50 border-primary/20 text-white"
                          />
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-neutral-dark text-white hover:bg-neutral">Cancel</AlertDialogCancel>
                      <Button onClick={handleSubmit} className="bg-primary hover:bg-primary-dark">Submit</Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant="outline" size="lg" className="border-primary/20 bg-transparent text-white hover:bg-primary/10">
                  Talk to Us 
                </Button>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
                  alt="Tech Innovation"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary/20 w-full h-full rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-light/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </motion.div>
  );
};

export default Hero;
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Radaar</h3>
            <p className="text-gray-400">Empowering businesses with innovative solutions for tomorrow's challenges.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#documentation" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-primary transition-colors">Support</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Radaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
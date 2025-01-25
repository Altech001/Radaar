import { User, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Radaar has transformed our development process. Their innovative solutions have increased our productivity by 200%.",
  },
  {
    name: "Michael Chen",
    role: "Founder of StartupX",
    content: "Working with Radaar was a game-changer for our startup. Their expertise and dedication are unmatched.",
  },
  {
    name: "Emily Davis",
    role: "Product Manager at InnovateCo",
    content: "The team at Radaar consistently delivers exceptional results. They're truly leaders in the tech industry.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">Trusted by leading companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-neutral-900/50 p-8 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="text-primary mb-4" size={32} />
              <p className="mb-6 text-gray-300">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-4">
                  <User className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
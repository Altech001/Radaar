import { Target, Users, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize digital transformation through innovative solutions and unparalleled expertise."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate technologists committed to delivering excellence in every project."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To be the global leader in technological innovation and digital solutions that shape the future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4">About Radaar</h2>
          <p className="text-neutral max-w-2xl mx-auto">
            We're more than just a tech company. We're your partner in digital transformation,
            committed to delivering innovative solutions that drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-400 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">{value.title}</h3>
              <p className="text-neutral">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border border-gray-400 rounded backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
              <p className="text-neutral-dark">Projects Completed</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
              <p className="text-neutral-dark">Happy Clients</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">7+</h4>
              <p className="text-neutral-dark">Countries Served</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-neutral-dark">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
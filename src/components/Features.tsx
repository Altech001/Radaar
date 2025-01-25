import { Monitor, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "Powerful Dashboard",
      description: "Get real-time insights and analytics with our intuitive dashboard interface."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security measures to protect your sensitive data and privacy."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized performance ensuring quick response times and smooth operation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4">Why Choose Radaar?</h2>
          <p className="text-neutral max-w-2xl mx-auto">Discover the features that make us stand out from the competition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-400 shadow-md hover:bg-grayhover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
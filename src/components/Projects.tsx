import { Code, Globe, Shield, PaintBucket, Fingerprint, CodeXml } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Web Application Development",
      description: "We Develop user friendly web applications meeting customer needs",
      icon: CodeXml,
      stats: "20+ Deployments"
    },{
      title: "Graphics Design",
      description: "Offering creative solutions for visual communication",
      icon: PaintBucket,
      stats: "30+ Deployments"
    },{
      title: "Domain Registration",
      description: "Hosting , Domain and SSL Certificates",
      icon: Fingerprint,
      stats: "10+ Deployments"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom software solutions for large-scale businesses",
      icon: Globe,
      stats: "50+ Deployments"
    },
    {
      title: "Security Systems",
      description: "Advanced cybersecurity implementations",
      icon: Shield,
      stats: "99.9% Success Rate"
    },
    {
      title: "Cloud Infrastructure",
      description: "Hosting Scalable cloud architecture and deployment",
      icon: Code,
      stats: "100+ Users Served"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4">Our Services Offered</h2>
          <p className="text-neutral">Delivering excellence across industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <project.icon className="w-12 h-12 text-primary mb-6" />
              
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">{project.title}</h3>
              <p className="text-neutral mb-6">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{project.stats}</span>
                <span className="text-primary group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
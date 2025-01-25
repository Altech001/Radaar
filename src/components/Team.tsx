import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Azuum Baker",
    role: "CEO & Founder",
    image: "/public/balance.png",
  },
  {
    name: "CodeWithAltech",
    role: "CTO",
    image: "/public/balance.png",
  },
  {
    name: "Faturn Baker",
    role: "Lead Developer",
    image: "/public/balance.png",
  },
  {
    name: "Azuum Baker",
    role: "Product Manager",
    image: "/public/balance.png",
  },
];

const Team = () => {
  return (
    <section className="sectionrelative ">
      <div className="container ">
    
        <div className="text-center mb-16 animate-fade-up">
          {/* <h2 className="text-4xl font-bold text-neutral-dark mb-4">Our Services Offered</h2> */}
          <h2 className="text-4xl font-bold text-neutral-dark mb-4">Our Team</h2>
          <p className="text-neutral">Dedicated Team At Delivering Excellence</p>
        </div>
        <div className="grid grid-cols-1  border rounded border-gray-200 backdrop-blur-sm shadow-sm m-5 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className="relative mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-netural-dark ">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
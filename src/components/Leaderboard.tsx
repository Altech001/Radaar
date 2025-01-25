import { Trophy, Star, Award } from 'lucide-react';

const Leaderboard = () => {
  const leaders = [
    {
      rank: 1,
      name: "TechCorp Solutions",
      score: "98%",
      achievement: "Top Innovation Partner",
      icon: Trophy
    },
    {
      rank: 2,
      name: "Digital Dynamics",
      score: "95%",
      achievement: "Excellence in Delivery",
      icon: Star
    },
    {
      rank: 3,
      name: "Future Systems",
      score: "92%",
      achievement: "Best Collaboration",
      icon: Award
    }
  ];

  return (
    <section id="leaderboard" className="py-20 bg-transparent backdrop-blur-sm text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl text-black font-bold mb-4">Our Top Partners</h2>
          <p className="text-gray-400">Recognizing excellence in innovation and collaboration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 border border-gray-400 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-bold text-primary">#{leader.rank}</span>
                <leader.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-800 mb-4">Success Rate: {leader.score}</p>
              <div className="text-gray-400 text-sm font-medium">{leader.achievement}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
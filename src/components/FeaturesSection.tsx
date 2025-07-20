import { Brain, Wifi, Zap, Shield, Smartphone, Timer, Star, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Dental Intelligence",
    description: "Advanced neural networks analyze your brushing patterns and provide real-time guidance for optimal oral health.",
    gradient: "from-cyber-purple to-samsung-blue"
  },
  {
    icon: Zap,
    title: "Quantum Sonic Technology",
    description: "42,000 high-frequency vibrations per minute powered by quantum resonance for superior plaque removal.",
    gradient: "from-electric-blue to-neon-cyan"
  },
  {
    icon: Smartphone,
    title: "Galaxy Ecosystem Sync",
    description: "Seamlessly connects with your Samsung Galaxy devices for comprehensive health tracking and insights.",
    gradient: "from-samsung-blue to-samsung-blue-light"
  },
  {
    icon: Shield,
    title: "UltraClean Protection",
    description: "Military-grade antimicrobial coating with UV-C sterilization ensures 99.99% bacteria elimination.",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Timer,
    title: "Smart Timer Pro",
    description: "Precision timing with quadrant mapping ensures every area of your mouth gets perfect attention.",
    gradient: "from-orange-500 to-amber-400"
  },
  {
    icon: Cpu,
    title: "5G Connected Health",
    description: "Real-time data sync with Samsung Health and your dentist through secure 5G connectivity.",
    gradient: "from-purple-500 to-pink-400"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-samsung-blue rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple rounded-full opacity-5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Revolutionary Features</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Next-Generation</span>
            <br />
            Dental Technology
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature is engineered with precision to deliver an unparalleled oral care experience 
            that adapts to your unique needs and lifestyle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="premium-card group cursor-pointer hover:shadow-tech"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Feature Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/10 group-hover:to-white/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
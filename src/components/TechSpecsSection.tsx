import { CheckCircle, Cpu, Zap, Wifi, Battery } from 'lucide-react';

const specs = [
  {
    category: "Performance",
    icon: Zap,
    items: [
      { label: "Vibration Frequency", value: "42,000 VPM" },
      { label: "Cleaning Modes", value: "8 Smart Modes" },
      { label: "Pressure Sensor", value: "360° Adaptive" },
      { label: "Timer Precision", value: "Quadrant Mapping" }
    ]
  },
  {
    category: "Connectivity",
    icon: Wifi,
    items: [
      { label: "Wireless Protocol", value: "5G + WiFi 6E" },
      { label: "Galaxy Integration", value: "Native Sync" },
      { label: "Cloud Storage", value: "Unlimited" },
      { label: "Real-time Updates", value: "OTA Ready" }
    ]
  },
  {
    category: "Intelligence",
    icon: Cpu,
    items: [
      { label: "AI Processor", value: "Neural Engine Pro" },
      { label: "Learning Algorithm", value: "Adaptive ML" },
      { label: "Pattern Recognition", value: "Advanced" },
      { label: "Health Insights", value: "Predictive" }
    ]
  },
  {
    category: "Power & Design",
    icon: Battery,
    items: [
      { label: "Battery Life", value: "30 Days" },
      { label: "Charging Method", value: "Wireless + USB-C" },
      { label: "Water Resistance", value: "IPX8 Premium" },
      { label: "Materials", value: "Titanium Grade" }
    ]
  }
];

export const TechSpecsSection = () => {
  return (
    <section className="py-24 bg-gradient-space relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Technical Excellence</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
            <span className="gradient-text">Engineering</span> Perfection
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every specification pushed to the absolute limit. No compromises in the pursuit of oral health excellence.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div
              key={spec.category}
              className="glass-card rounded-3xl p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-tech p-3 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">
                  {spec.category}
                </h3>
              </div>

              {/* Spec Items */}
              <div className="space-y-6">
                {spec.items.map((item, itemIndex) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-start group/item"
                    style={{ animationDelay: `${(index * 150) + (itemIndex * 50)}ms` }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-primary group-hover/item:text-accent transition-colors duration-300" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-primary-foreground transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-primary-foreground group-hover/item:text-primary transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 glass-card rounded-2xl p-6">
            <div className="text-primary-foreground">
              <div className="text-sm font-medium opacity-80">Starting at</div>
              <div className="text-3xl font-bold gradient-text">$299</div>
            </div>
            <div className="w-px h-12 bg-border opacity-30" />
            <div className="text-primary-foreground">
              <div className="text-sm font-medium opacity-80">Available</div>
              <div className="text-lg font-semibold">Q2 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
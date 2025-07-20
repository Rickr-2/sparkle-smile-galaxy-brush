import { ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/samsung-toothbrush-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-space">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-samsung-blue opacity-20 blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-cyber-purple opacity-15 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-neon-cyan opacity-25 blur-lg animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 slide-in-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Zap className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-primary">Revolutionary Technology</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">SAMSUNG</span>
                <br />
                <span className="text-foreground">SmartBrush</span>
                <br />
                <span className="text-3xl lg:text-4xl font-light text-muted-foreground">Pro Max Ultra</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the future of dental care with AI-powered precision, 
                quantum cleaning technology, and seamless Galaxy ecosystem integration.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="font-medium">99.9% Plaque Removal</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">Galaxy Connected</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Wireless Charging</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Pre-Order Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-tech">
                Watch Demo
              </Button>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold gradient-text">$299</span>
              <span className="text-lg text-muted-foreground line-through">$499</span>
              <span className="px-2 py-1 bg-destructive text-destructive-foreground rounded-md text-sm font-medium">
                40% OFF
              </span>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative slide-in-right">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Samsung SmartBrush Pro Max Ultra"
                className="w-full h-auto max-w-2xl mx-auto object-contain float pulse-glow rounded-3xl"
              />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute top-10 -left-10 glass-card rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Connected</span>
              </div>
            </div>
            
            <div className="absolute bottom-20 -right-10 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="space-y-1">
                <div className="text-sm font-medium">Cleaning Progress</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-tech rounded-full w-3/4" />
                  </div>
                  <span className="text-xs">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
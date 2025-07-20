import { ArrowRight, Gift, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Gift className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Limited Time Offer</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Pre-Order Now &<br />
              <span className="text-accent">Save 40%</span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Be among the first to experience the future of dental care. 
              Limited quantities available for early adopters.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">4.9</span>
              </div>
              <p className="text-white/70">Beta User Rating</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">10K+</span>
              </div>
              <p className="text-white/70">Pre-Orders</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gift className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">40%</span>
              </div>
              <p className="text-white/70">Launch Discount</p>
            </div>
          </div>

          {/* Pre-order Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8 group">
                Pre-Order
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-3">
              No payment required. Cancel anytime before shipping.
            </p>
          </div>

          {/* Price Comparison */}
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">Retail Price</div>
              <div className="text-2xl font-bold text-white/50 line-through">$499</div>
            </div>
            
            <div className="w-px h-12 bg-white/20" />
            
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">Pre-Order Price</div>
              <div className="text-3xl font-bold text-accent">$299</div>
            </div>
            
            <div className="w-px h-12 bg-white/20" />
            
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">You Save</div>
              <div className="text-2xl font-bold text-green-400">$200</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-70">
            <div className="text-white/60 text-sm">30-Day Return Policy</div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-white/60 text-sm">2-Year Warranty</div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-white/60 text-sm">Free Shipping</div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-white/60 text-sm">Samsung Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
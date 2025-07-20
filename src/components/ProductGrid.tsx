import { useState, useEffect } from 'react';
import { Star, ShoppingCart, Zap, Shield, Clock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import productUltra from '@/assets/product-ultra.jpg';
import productPro from '@/assets/product-pro.jpg';
import productEssential from '@/assets/product-essential.jpg';
import productKids from '@/assets/product-kids.jpg';

interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  rpm: number;
  price: number;
  original_price?: number;
  features: any; // Using any to handle JSONB from database
  specifications: any; // Using any to handle JSONB from database
  stock_quantity: number;
  is_featured: boolean;
  image_url: string;
}

interface ProductGridProps {
  onAddToCart: (productId: string) => void;
  user: any;
}

// Temporary mapping for product images
const productImages: Record<string, string> = {
  'SB-2024-ULTRA': productUltra,
  'SB-2024-PRO': productPro,
  'SB-2024-ESS': productEssential,
  'SB-2024-KIDS': productKids,
};

const featureIcons: Record<string, any> = {
  'AI Dental Intelligence': Shield,
  'Quantum Sonic Technology': Zap,
  'Galaxy Ecosystem Sync': Wifi,
  'Smart Timer Pro': Clock,
  'Smart Sonic Technology': Zap,
  'Galaxy Health Sync': Wifi,
  'Pressure Sensor': Shield,
  'Smart Timer': Clock,
  'Sonic Cleaning': Zap,
  'Basic Timer': Clock,
  'Samsung Health': Wifi,
  'Kid-Safe Sonic': Shield,
  'Gamification App': Star,
};

export const ProductGrid = ({ onAddToCart, user }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('price', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading products",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product: Product) => {
    if (!user) {
      toast({
        title: "Please login",
        description: "You need to login to add items to cart.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Check if item already exists in cart
      const { data: existingItem } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single();

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id);

        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: product.id,
            quantity: 1,
          });

        if (error) throw error;
      }

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
      
      onAddToCart(product.id);
    } catch (error: any) {
      toast({
        title: "Error adding to cart",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <section id="products" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Loading Products...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-gradient-premium">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Product Lineup</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Choose Your</span>
            <br />
            Perfect SmartBrush
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From professional-grade performance to family-friendly options, 
            discover the Samsung SmartBrush model that fits your lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const discountPercentage = product.original_price 
              ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
              : 0;

            return (
              <Card 
                key={product.id}
                className="premium-card group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured Badge */}
                {product.is_featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-hero text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="destructive">
                      -{discountPercentage}%
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={productImages[product.model] || product.image_url}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* RPM Display */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">
                      {product.rpm.toLocaleString()} RPM
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {(Array.isArray(product.features) ? product.features : []).slice(0, 3).map((feature, featureIndex) => {
                        const IconComponent = featureIcons[feature] || Star;
                        return (
                          <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <IconComponent className="w-3 h-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold gradient-text">
                      ${product.price}
                    </span>
                    {product.original_price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.original_price}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full btn-hero group/btn"
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock_quantity === 0}
                  >
                    {product.stock_quantity === 0 ? (
                      'Out of Stock'
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </CardFooter>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
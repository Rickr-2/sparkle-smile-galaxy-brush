import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TechSpecsSection } from '@/components/TechSpecsSection';
import { CTASection } from '@/components/CTASection';
import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import { CartSidebar } from '@/components/CartSidebar';
import { CheckoutPage } from '@/components/CheckoutPage';

interface CartItem {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    model: string;
    price: number;
    image_url: string;
  };
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'checkout' | 'order-complete'>('home');
  const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);
  const [orderId, setOrderId] = useState<string>('');

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCartCount(session.user.id);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCartCount(session.user.id);
      } else {
        setCartItemsCount(0);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchCartCount = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('quantity')
        .eq('user_id', userId);

      if (error) throw error;

      const totalItems = data?.reduce((sum, item) => sum + item.quantity, 0) || 0;
      setCartItemsCount(totalItems);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  const handleAddToCart = () => {
    if (user) {
      fetchCartCount(user.id);
    }
  };

  const handleCartUpdate = () => {
    if (user) {
      fetchCartCount(user.id);
    }
  };

  const handleCheckout = (items: CartItem[]) => {
    setCheckoutItems(items);
    setCurrentView('checkout');
    setIsCartOpen(false);
  };

  const handleOrderComplete = (newOrderId: string) => {
    setOrderId(newOrderId);
    setCurrentView('order-complete');
    setCartItemsCount(0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCheckoutItems([]);
  };

  if (currentView === 'checkout') {
    return (
      <CheckoutPage
        cartItems={checkoutItems}
        user={user}
        onBack={() => setIsCartOpen(true)}
        onOrderComplete={handleOrderComplete}
      />
    );
  }

  if (currentView === 'order-complete') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-space">
        <div className="text-center text-white max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-white/80 mb-6">
            Thank you for your purchase. Your Samsung SmartBrush will be shipped soon.
          </p>
          <p className="text-sm text-white/60 mb-8">Order ID: {orderId}</p>
          <button
            onClick={handleBackToHome}
            className="btn-hero"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <div className="pt-16"> {/* Add padding for fixed header */}
        <div id="home">
          <HeroSection />
        </div>
        <div id="products">
          <ProductGrid onAddToCart={handleAddToCart} user={user} />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="specs">
          <TechSpecsSection />
        </div>
        <CTASection />
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        user={user}
        onCartUpdate={handleCartUpdate}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;

import { useState } from "react";
import { ShoppingBag, Plus, Minus, Star, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export const HealthStore = () => {
  const [cart, setCart] = useState<Record<number, number>>({});
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Whisper Ultra Soft",
      nameTamil: "விஸ்பர் அல்ட்ரா சாஃப்ட்",
      price: 299,
      originalPrice: 350,
      rating: 4.5,
      image: "🩷",
      description: "Extra soft, comfortable protection",
      descriptionTamil: "மிகவும் மென்மையான பாதுகாப்பு",
      inStock: true,
      fastDelivery: true,
      pack: "Pack of 20",
    },
    {
      id: 2,
      name: "Stayfree Secure",
      nameTamil: "ஸ்டேஃப்ரீ சிக்யூர்",
      price: 249,
      originalPrice: 299,
      rating: 4.3,
      image: "💜",
      description: "All-day comfort and protection",
      descriptionTamil: "நாள் முழுவதும் வசதி மற்றும் பாதுகாப்பு",
      inStock: true,
      fastDelivery: false,
      pack: "Pack of 16",
    },
    {
      id: 3,
      name: "Sofy AntiBacteria",
      nameTamil: "சாஃபி ஆன்டிபேக்டீரியா",
      price: 199,
      originalPrice: 249,
      rating: 4.4,
      image: "🤍",
      description: "Antibacterial protection",
      descriptionTamil: "பாக்டீரியா எதிர்ப்பு பாதுகாப்பு",
      inStock: true,
      fastDelivery: true,
      pack: "Pack of 14",
    },
    {
      id: 4,
      name: "Carefree Flexia",
      nameTamil: "கேர்ஃப்ரீ ஃப்ளெக்ஸியா",
      price: 149,
      originalPrice: 179,
      rating: 4.2,
      image: "💚",
      description: "Flexible and comfortable",
      descriptionTamil: "நெகிழ்வுத்தன்மை மற்றும் வசதி",
      inStock: false,
      fastDelivery: false,
      pack: "Pack of 12",
    },
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    toast({
      title: "Added to cart",
      description: "Product has been added to your cart",
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product?.price || 0) * count;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Health Store</h1>
            <h2 className="text-lg opacity-90">உடல்நலக் கடை</h2>
            <p className="text-sm opacity-80 mt-1">Discreet delivery • Safe products</p>
          </div>
          <div className="relative">
            <ShoppingBag className="h-8 w-8" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                {getTotalItems()}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Sanitary Products</h3>
          <p className="text-sm text-muted-foreground">பட்டைகள்</p>
        </div>

        {products.map((product) => (
          <Card key={product.id} className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="text-4xl">{product.image}</div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.nameTamil}</p>
                      <p className="text-xs text-muted-foreground mt-1">{product.pack}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">₹{product.price}</span>
                        <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <p className="text-xs text-muted-foreground mb-3">{product.descriptionTamil}</p>

                  <div className="flex items-center gap-2 mb-3">
                    {product.inStock ? (
                      <Badge variant="secondary" className="text-xs">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                    )}
                    {product.fastDelivery && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Truck className="h-3 w-3" />
                        Fast Delivery
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    {cart[product.id] ? (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium px-2">{cart[product.id]}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          className="h-8 w-8 p-0"
                          disabled={!product.inStock}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant={product.inStock ? "default" : "outline"}
                        size="sm"
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className="flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Summary */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-20 left-4 right-4 z-10">
          <Card className="shadow-strong bg-card border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{getTotalItems()} items</p>
                  <p className="text-sm text-muted-foreground">Total: ₹{getTotalPrice()}</p>
                </div>
                <Button variant="hero" className="px-6">
                  Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
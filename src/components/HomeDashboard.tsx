import { ShoppingBag, Phone, MapPin, Heart, Shield, MessageCircle, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.png";

interface HomeDashboardProps {
  onNavigate: (section: string) => void;
}

export const HomeDashboard = ({ onNavigate }: HomeDashboardProps) => {
  const quickActions = [
    {
      id: "store",
      icon: ShoppingBag,
      title: "Order Pads",
      titleTamil: "பேட்ஸ் ஆர்டர்",
      description: "Sanitary products delivered discreetly",
      color: "bg-primary",
      variant: "hero" as const,
    },
    {
      id: "emergency",
      icon: Shield,
      title: "Emergency SOS",
      titleTamil: "அவசரகால SOS",
      description: "Instant help when you need it",
      color: "bg-destructive",
      variant: "emergency" as const,
    },
    {
      id: "health",
      icon: Heart,
      title: "Health Tips",
      titleTamil: "உடல்நலக் குறிப்புகள்",
      description: "Expert advice for your wellbeing",
      color: "bg-accent",
      variant: "accent" as const,
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "Chat with Counselor",
      titleTamil: "ஆலோசகருடன் அரட்டை",
      description: "Confidential support available",
      color: "bg-secondary",
      variant: "secondary" as const,
    },
  ];

  const secondaryActions = [
    { icon: MapPin, title: "Track Order", titleTamil: "ஆர்டர் கண்காணிப்பு" },
    { icon: Calendar, title: "Period Tracker", titleTamil: "மாதவிடாய் கண்காணிப்பு" },
    { icon: Phone, title: "Helpline", titleTamil: "உதவி எண்" },
    { icon: Zap, title: "Quick Tips", titleTamil: "விரைவு குறிப்புகள்" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-b-3xl shadow-strong">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">வணக்கம்! Welcome</h1>
            <p className="text-white/90">How can we support you today?</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 -mt-8 mb-6">
        <Card className="overflow-hidden shadow-soft">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Empowering Women" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-center">
                <div className="text-white p-4">
                  <p className="text-sm font-medium">Daily Motivation</p>
                  <p className="text-xs opacity-90">
                    "உன் வலிமையை நம்பு - Believe in your strength"
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.id} className="overflow-hidden shadow-soft hover:shadow-strong transition-shadow">
                <CardContent className="p-4">
                  <Button
                    variant={action.variant}
                    className="w-full h-auto flex-col gap-3 py-6 px-4"
                    onClick={() => onNavigate(action.id)}
                  >
                    <Icon className="h-8 w-8" />
                    <div className="text-center">
                      <div className="font-semibold text-sm">{action.title}</div>
                      <div className="text-xs opacity-90">{action.titleTamil}</div>
                    </div>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Secondary Actions */}
      <div className="px-6">
        <h2 className="text-lg font-semibold mb-4 text-foreground">More Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {secondaryActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex-col gap-2 py-4 px-3"
                onClick={() => onNavigate(action.title.toLowerCase().replace(' ', '-'))}
              >
                <Icon className="h-5 w-5 text-primary" />
                <div className="text-center">
                  <div className="text-xs font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.titleTamil}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
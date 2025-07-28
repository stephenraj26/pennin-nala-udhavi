import { Home, Heart, Shield, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const NavigationBar = ({ activeTab, onTabChange }: NavigationBarProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home", labelTamil: "முகப்பு" },
    { id: "health", icon: Heart, label: "Health", labelTamil: "ஆரோக்கியம்" },
    { id: "safety", icon: Shield, label: "Safety", labelTamil: "பாதுகாப்பு" },
    { id: "profile", icon: User, label: "Profile", labelTamil: "சுயவிவரம்" },
    { id: "settings", icon: Settings, label: "Settings", labelTamil: "அமைப்புகள்" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg bg-card/80 z-50">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
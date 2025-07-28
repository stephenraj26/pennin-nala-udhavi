import { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { HomeDashboard } from "@/components/HomeDashboard";
import { EmergencyScreen } from "@/components/EmergencyScreen";
import { HealthStore } from "@/components/HealthStore";
import { UserProfile } from "@/components/UserProfile";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const handleNavigate = (section: string) => {
    if (section === "emergency") {
      setActiveTab("safety");
    } else if (section === "store") {
      setActiveTab("health");
    } else {
      setActiveTab(section);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeDashboard onNavigate={handleNavigate} />;
      case "health":
        return <HealthStore />;
      case "safety":
        return <EmergencyScreen />;
      case "profile":
        return <UserProfile />;
      default:
        return <HomeDashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderContent()}
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;

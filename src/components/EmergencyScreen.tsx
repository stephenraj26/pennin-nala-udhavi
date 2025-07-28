import { useState } from "react";
import { Shield, Phone, MapPin, Volume2, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const EmergencyScreen = () => {
  const [sosActivated, setSosActivated] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();

  const handleSOS = () => {
    setSosActivated(true);
    setCountdown(5);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          triggerEmergency();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "SOS Activated",
      description: "Emergency services will be contacted in 5 seconds. Tap cancel to abort.",
      variant: "destructive",
    });
  };

  const triggerEmergency = () => {
    // Simulate emergency services activation
    toast({
      title: "Emergency Alert Sent",
      description: "Your location and alert have been sent to emergency contacts and local authorities.",
      variant: "destructive",
    });
    setSosActivated(false);
  };

  const cancelSOS = () => {
    setSosActivated(false);
    setCountdown(0);
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled.",
    });
  };

  const emergencyActions = [
    {
      icon: Phone,
      title: "Fake Call",
      titleTamil: "போலி அழைப்பு",
      description: "Pretend to receive an important call",
      action: () => toast({ title: "Fake Call Started", description: "Your phone will ring with a fake call" }),
    },
    {
      icon: MapPin,
      title: "Share Location",
      titleTamil: "இடம் பகிர்தல்",
      description: "Send your location to trusted contacts",
      action: () => toast({ title: "Location Shared", description: "Your location has been sent to emergency contacts" }),
    },
    {
      icon: Volume2,
      title: "Loud Alarm",
      titleTamil: "சத்தமான அலாரம்",
      description: "Activate loud alarm to draw attention",
      action: () => toast({ title: "Alarm Activated", description: "Loud alarm is now active" }),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Emergency SOS</h1>
          <h2 className="text-lg text-muted-foreground">அவசரகால SOS</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Press and hold the SOS button for immediate help
          </p>
        </div>

        {/* Main SOS Button */}
        <div className="text-center mb-8">
          {sosActivated ? (
            <div className="space-y-4">
              <div className="relative">
                <Button
                  variant="destructive"
                  size="lg"
                  className="w-40 h-40 rounded-full text-2xl font-bold animate-pulse"
                  disabled
                >
                  <div className="text-center">
                    <AlertTriangle className="h-12 w-12 mb-2" />
                    <div>SOS</div>
                    <div className="text-lg">{countdown}</div>
                  </div>
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={cancelSOS}
                className="w-full"
              >
                Cancel SOS
              </Button>
            </div>
          ) : (
            <Button
              variant="emergency"
              size="lg"
              className="w-40 h-40 rounded-full text-xl font-bold shadow-strong"
              onMouseDown={handleSOS}
              onTouchStart={handleSOS}
            >
              <div className="text-center">
                <Shield className="h-12 w-12 mb-2" />
                <div>SOS</div>
                <div className="text-sm font-normal">Hold to activate</div>
              </div>
            </Button>
          )}
        </div>

        {/* Emergency Actions */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
          {emergencyActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-auto py-4"
                    onClick={action.action}
                  >
                    <Icon className="h-6 w-6 text-destructive" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-sm text-muted-foreground">{action.titleTamil}</div>
                      <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contacts */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription>
              Your trusted contacts who will be notified during emergencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium">Mom (அம்மா)</div>
                  <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                </div>
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium">Sister (அக்கா)</div>
                  <div className="text-sm text-muted-foreground">+91 87654 32109</div>
                </div>
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <Button variant="outline" className="w-full mt-3">
                Add Emergency Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
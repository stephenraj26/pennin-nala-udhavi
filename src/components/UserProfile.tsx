import { User, MapPin, Phone, Heart, Shield, Edit, Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const UserProfile = () => {
  const userStats = [
    { label: "Orders Placed", labelTamil: "ஆர்டர்கள்", value: "12", icon: Heart },
    { label: "Emergency Contacts", labelTamil: "அவசர தொடர்புகள்", value: "3", icon: Shield },
    { label: "Health Articles Read", labelTamil: "கட்டுரைகள்", value: "25", icon: Calendar },
  ];

  const recentOrders = [
    { id: "PN001", product: "Whisper Ultra Soft", date: "2024-01-20", status: "Delivered" },
    { id: "PN002", product: "Stayfree Secure", date: "2024-01-15", status: "In Transit" },
    { id: "PN003", product: "Sofy AntiBacteria", date: "2024-01-10", status: "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Priya Sharma</h1>
            <h2 className="text-lg opacity-90">பிரியா ஷர்மா</h2>
            <p className="text-sm opacity-80">priya.sharma@example.com</p>
          </div>
          <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-4">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.labelTamil}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Personal Information */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>உங்கள் தனிப்பட்ட தகவல்கள்</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    123 Anna Nagar, Chennai, Tamil Nadu
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Age</p>
                  <p className="text-sm text-muted-foreground">25 years</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription>அவசரகால தொடர்புகள்</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Mom (அம்மா)</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <Badge variant="secondary">Primary</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Sister (அக்கா)</p>
                <p className="text-sm text-muted-foreground">+91 87654 32109</p>
              </div>
              <Badge variant="outline">Secondary</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Add Emergency Contact
            </Button>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Recent Orders
            </CardTitle>
            <CardDescription>சமீபத்திய ஆர்டர்கள்</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-sm text-muted-foreground">Order #{order.id} • {order.date}</p>
                </div>
                <Badge 
                  variant={order.status === "Delivered" ? "secondary" : "outline"}
                  className={order.status === "Delivered" ? "bg-green-100 text-green-700" : ""}
                >
                  {order.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Preferences
            </CardTitle>
            <CardDescription>விருப்பத்தேர்வுகள்</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">Order updates and health tips</p>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English + Tamil</p>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Privacy Settings</p>
                <p className="text-sm text-muted-foreground">Location and data sharing</p>
              </div>
              <Button variant="outline" size="sm">
                Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
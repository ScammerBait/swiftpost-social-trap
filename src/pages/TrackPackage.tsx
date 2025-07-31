import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";

const TrackPackage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-logistics-navy mb-4">
              Track Your Package from Canada
            </h1>
            <p className="text-muted-foreground">
              Enter your tracking number to see where your Canadian package is right now
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Package Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter tracking number (e.g., SP123456789CA-NG)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button>Track Now</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-logistics-blue mr-3" />
                  <div>
                    <h3 className="font-semibold">Sample Package - iPhone 15 Pro Max</h3>
                    <p className="text-sm text-muted-foreground">From Toronto, Canada to Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-logistics-green rounded-full mr-3"></div>
                    <span>Shipped from Apple Store Canada</span>
                    <span className="ml-auto text-muted-foreground">3 days ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-logistics-green rounded-full mr-3"></div>
                    <span>Cleared customs in Nigeria</span>
                    <span className="ml-auto text-muted-foreground">1 day ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3 animate-pulse"></div>
                    <span>Ready for delivery in Lagos</span>
                    <span className="ml-auto text-muted-foreground">Today</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">🇨🇦 Popular Items from Canada</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• iPhone 15 Pro Max</div>
                  <div>• MacBook Pro</div>
                  <div>• Canada Goose Jackets</div>
                  <div>• Maple Syrup (Premium)</div>
                  <div>• Beats Headphones</div>
                  <div>• Canadian Vitamins</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPackage;
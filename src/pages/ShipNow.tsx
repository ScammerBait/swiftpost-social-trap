import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, DollarSign, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";

const ShipNow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-logistics-navy mb-4">
              Send Packages from Canada to Nigeria
            </h1>
            <p className="text-muted-foreground">
              Fast, secure, and reliable shipping from Canada to any location in Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>📦 Standard Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">5-7 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Starting Price:</span>
                    <span className="font-medium">₦25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Weight:</span>
                    <span className="font-medium">10kg</span>
                  </div>
                  <Button className="w-full">Choose Standard</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Express Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Starting Price:</span>
                    <span className="font-medium">₦45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Weight:</span>
                    <span className="font-medium">15kg</span>
                  </div>
                  <Button className="w-full bg-logistics-orange">Choose Express</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ship Your Package</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>From (Canada)</Label>
                    <Input placeholder="Sender address in Canada" />
                  </div>
                  <div>
                    <Label>To (Nigeria)</Label>
                    <Input placeholder="Receiver address in Nigeria" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Weight (kg)</Label>
                    <Input type="number" placeholder="Package weight" />
                  </div>
                  <div>
                    <Label>Value (₦)</Label>
                    <Input type="number" placeholder="Package value" />
                  </div>
                  <div>
                    <Label>Package Type</Label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                      <option>Electronics</option>
                      <option>Clothing</option>
                      <option>Documents</option>
                      <option>Food Items</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Calculate Shipping Cost
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <Truck className="w-8 h-8 mx-auto mb-2 text-logistics-blue" />
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">2-7 business days</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-logistics-green" />
              <h3 className="font-semibold mb-1">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Up to ₦1,000,000</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-logistics-orange" />
              <h3 className="font-semibold mb-1">Real-time Tracking</h3>
              <p className="text-sm text-muted-foreground">24/7 updates</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-logistics-navy" />
              <h3 className="font-semibold mb-1">Best Rates</h3>
              <p className="text-sm text-muted-foreground">Competitive pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipNow;
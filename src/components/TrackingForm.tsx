import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Package, Loader2, MapPin } from "lucide-react";

interface FormData {
  full_name: string;
  address: string;
  state: string;
  phone: string;
}

const TrackingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    address: "",
    state: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getLocation = (): Promise<{ latitude: number; longitude: number; accuracy: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser."));
        return;
      }

      setIsGettingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsGettingLocation(false);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        (error) => {
          setIsGettingLocation(false);
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get geolocation
      let geoData = null;
      try {
        geoData = await getLocation();
        toast({
          title: "Location Access Granted",
          description: "Thank you for allowing location access for accurate delivery.",
        });
      } catch (geoError) {
        console.log("Geolocation denied or failed:", geoError);
        toast({
          title: "Location Access",
          description: "Location access denied. We'll use your address for delivery.",
          variant: "destructive"
        });
      }

      // Submit form data
      const response = await fetch('/functions/v1/submit-delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          geolocation: geoData
        }),
      });

      if (response.ok) {
        toast({
          title: "Package Information Updated! 📦",
          description: "Your delivery information has been confirmed. You'll receive updates via SMS.",
        });
        
        // Reset form
        setFormData({
          full_name: "",
          address: "",
          state: "",
          phone: ""
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue confirming your delivery. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-logistics-blue to-primary-glow rounded-full flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-logistics-navy">Confirm Delivery Details</CardTitle>
        <CardDescription>
          Please confirm your delivery information to complete your package tracking setup.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name</Label>
            <Input
              id="full_name"
              type="text"
              value={formData.full_name}
              onChange={(e) => handleInputChange("full_name", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address</Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your full delivery address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="Enter your state"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="bg-logistics-light p-3 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-logistics-navy">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Location Services</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              We'll request your location to provide accurate delivery estimates.
            </p>
          </div>

          <Button 
            type="submit" 
            variant="logistics" 
            className="w-full"
            disabled={isSubmitting || isGettingLocation}
          >
            {isSubmitting || isGettingLocation ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {isGettingLocation ? "Getting Location..." : "Confirming Details..."}
              </>
            ) : (
              "Confirm Delivery Information"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TrackingForm;
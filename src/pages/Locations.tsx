import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Header from "@/components/Header";

const Locations = () => {
  const canadaLocations = [
    {
      city: "Toronto",
      address: "1247 Bay Street, Suite 400, Toronto, ON M5R 3K4",
      phone: "+1 (416) 555-0123",
      hours: "Mon-Fri: 8AM-6PM EST"
    },
    {
      city: "Vancouver",
      address: "789 Robson Street, Vancouver, BC V6Z 1A1",
      phone: "+1 (604) 555-0124",
      hours: "Mon-Fri: 8AM-6PM PST"
    },
    {
      city: "Montreal",
      address: "456 Rue Sainte-Catherine, Montreal, QC H3B 1A7",
      phone: "+1 (514) 555-0125",
      hours: "Mon-Fri: 8AM-6PM EST"
    }
  ];

  const nigeriaLocations = [
    {
      city: "Lagos",
      address: "Plot 15, Bode Thomas Street, Surulere, Lagos State",
      phone: "+234 1 555 0100",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
    },
    {
      city: "Abuja",
      address: "Suite 200, Aminu Kano Crescent, Wuse II, FCT Abuja",
      phone: "+234 9 555 0101",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
    },
    {
      city: "Port Harcourt",
      address: "12 Aba Road, GRA Phase II, Port Harcourt, Rivers State",
      phone: "+234 84 555 0102",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    },
    {
      city: "Kano",
      address: "45 Murtala Mohammed Way, Fagge, Kano State",
      phone: "+234 64 555 0103",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-logistics-navy mb-4">
            Our Locations Across Canada & Nigeria
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our offices for shipping services, package pickup, or customer support. 
            We're here to help you send and receive packages between Canada and Nigeria.
          </p>
        </div>

        <div className="space-y-12">
          {/* Canada Locations */}
          <div>
            <h2 className="text-2xl font-bold text-logistics-navy mb-6 flex items-center">
              🇨🇦 Canada Locations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {canadaLocations.map((location, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-logistics-blue" />
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Nigeria Locations */}
          <div>
            <h2 className="text-2xl font-bold text-logistics-navy mb-6 flex items-center">
              🇳🇬 Nigeria Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nigeriaLocations.map((location, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-base">
                      <MapPin className="w-4 h-4 mr-2 text-logistics-orange" />
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-logistics-light to-white">
            <CardHeader>
              <CardTitle className="text-center">Need Help Finding Us?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center space-x-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-logistics-blue" />
                  <span>nigeria@swiftpost-logistics.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-logistics-blue" />
                  <span>+234-1-SWIFT-99</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Call or email us for directions, operating hours, or to schedule a pickup
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Locations;
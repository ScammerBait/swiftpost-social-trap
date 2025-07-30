import { Truck, User, MapPin, Package, DollarSign, Shield } from "lucide-react";
import { Card } from "./ui/card";

const DeliveryInfo = () => {
  return (
    <Card className="p-4 mb-6 bg-gradient-to-r from-blue-50 to-logistics-light border-logistics-blue/20">
      <h3 className="font-semibold text-logistics-navy mb-3 flex items-center">
        <Package className="w-4 h-4 mr-2" />
        Package Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <div className="flex items-center">
            <User className="w-3 h-3 mr-2 text-logistics-blue" />
            <span className="text-muted-foreground">Driver:</span>
            <span className="ml-1 font-medium">Mike S. - ⭐ 4.8 rating</span>
          </div>
          
          <div className="flex items-center">
            <Truck className="w-3 h-3 mr-2 text-logistics-blue" />
            <span className="text-muted-foreground">Vehicle:</span>
            <span className="ml-1 font-medium">Delivery Van #SP-4521</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-2 text-logistics-blue" />
            <span className="text-muted-foreground">From:</span>
            <span className="ml-1 font-medium">Regional Distribution Center</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <DollarSign className="w-3 h-3 mr-2 text-logistics-green" />
            <span className="text-muted-foreground">Insured Value:</span>
            <span className="ml-1 font-medium">$500.00</span>
          </div>
          
          <div className="flex items-center">
            <Shield className="w-3 h-3 mr-2 text-logistics-green" />
            <span className="text-muted-foreground">Delivery Type:</span>
            <span className="ml-1 font-medium">Signature Required</span>
          </div>
          
          <div className="flex items-center">
            <Package className="w-3 h-3 mr-2 text-logistics-orange" />
            <span className="text-muted-foreground">Contents:</span>
            <span className="ml-1 font-medium">Important Document</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
        <span className="text-yellow-800">⚠️ Weather Advisory: Slight delays possible due to current weather conditions in your area.</span>
      </div>
    </Card>
  );
};

export default DeliveryInfo;
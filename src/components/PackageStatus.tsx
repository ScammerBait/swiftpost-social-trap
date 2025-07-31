import { Package, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const PackageStatus = () => {
  const trackingNumber = "SP" + Math.random().toString(36).substr(2, 9).toUpperCase();
  
  const statusSteps = [
    { label: "iPhone 15 Pro Max Shipped from Canada", completed: true, icon: Package },
    { label: "Cleared Nigeria Customs", completed: true, icon: CheckCircle2 },
    { label: "Arrived in Lagos - Ready for You!", completed: true, icon: Package },
    { label: "Delivered to Your Hands", completed: false, icon: CheckCircle2 }
  ];

  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-logistics-light to-white border-logistics-orange/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-logistics-navy">📱 Your iPhone 15 Pro Max Status</h3>
          <p className="text-sm text-muted-foreground">Tracking: <span className="font-mono font-medium">{trackingNumber}-CA-NG</span></p>
        </div>
        <Badge variant="outline" className="bg-logistics-orange text-white border-logistics-orange pulse-urgent">
          <AlertTriangle className="w-3 h-3 mr-1" />
          URGENT - Final Day!
        </Badge>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center text-logistics-red mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span className="font-medium">🚨 Last Chance to Get Your iPhone!</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Your iPhone 15 Pro Max from Canada is ready for delivery in Lagos but we need to confirm your details NOW or it goes back to Canada!
        </p>
      </div>

      <div className="space-y-3">
        {statusSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
              step.completed 
                ? 'bg-logistics-green text-white' 
                : index === 3 ? 'bg-logistics-orange text-white pulse-urgent' : 'bg-gray-200 text-gray-400'
            }`}>
              <step.icon className="w-3 h-3" />
            </div>
            <span className={`text-sm ${step.completed ? 'text-logistics-navy font-medium' : 'text-muted-foreground'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-logistics-red/10 border border-logistics-red/20 rounded-md">
        <div className="flex items-center text-logistics-red text-sm font-medium">
          <AlertTriangle className="w-4 h-4 mr-2" />
          ⏰ Get Your iPhone Today Before 6:00 PM
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Your ₦850,000 iPhone package will be sent back to Canada if you don't confirm within 24 hours!
        </p>
      </div>
    </Card>
  );
};

export default PackageStatus;
import { Shield, Award, Globe, Lock, Star, CheckCircle2 } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    { icon: Shield, label: "SSL Secured", subtext: "256-bit encryption" },
    { icon: Award, label: "Industry Leader", subtext: "Since 2015" },
    { icon: Globe, label: "50+ Countries", subtext: "Worldwide delivery" },
    { icon: Star, label: "4.8/5 Rating", subtext: "2M+ customers" }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Money-Back Guarantee",
    "24/7 Customer Support",
    "Package Insurance Included"
  ];

  return (
    <div className="space-y-6">
      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {indicators.map((item, index) => (
          <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm border border-logistics-blue/10">
            <item.icon className="w-6 h-6 mx-auto text-logistics-blue mb-1" />
            <div className="text-xs font-medium text-logistics-navy">{item.label}</div>
            <div className="text-xs text-muted-foreground">{item.subtext}</div>
          </div>
        ))}
      </div>

      {/* Security Notice */}
      <div className="bg-logistics-light border border-logistics-blue/20 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Lock className="w-4 h-4 text-logistics-blue mr-2" />
          <span className="text-sm font-medium text-logistics-navy">Secure Delivery Confirmation</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Your information is protected with bank-level security. We use advanced encryption to ensure your data remains safe.
        </p>
      </div>

      {/* Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center text-xs text-logistics-navy">
            <CheckCircle2 className="w-3 h-3 text-logistics-green mr-2 flex-shrink-0" />
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
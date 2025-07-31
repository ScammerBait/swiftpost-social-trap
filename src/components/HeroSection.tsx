import { Truck, Clock, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-logistics-navy to-logistics-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🎁 Your Amazing iPhone 15 Pro Max from Canada is Here!
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Brand new iPhone 15 Pro Max + FREE AirPods Pro (worth ₦850,000) waiting for you in Lagos! 
            Just confirm your details to receive it today - very simple and fast!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">📱 Latest iPhone 15 Pro Max</h3>
            <p className="text-blue-100 text-sm">Brand new from Apple Store Canada</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">🎧 FREE AirPods Pro</h3>
            <p className="text-blue-100 text-sm">Bonus gift - no extra cost!</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">💰 Worth ₦850,000</h3>
            <p className="text-blue-100 text-sm">High value premium package</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">🇨🇦 Direct from Canada</h3>
            <p className="text-blue-100 text-sm">Premium Canadian electronics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
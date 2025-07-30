import { Truck, Clock, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-logistics-navy to-logistics-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Package is Ready for Delivery
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We need to confirm your delivery details to ensure your package reaches you safely.
            Please verify the information below.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-blue-100 text-sm">Express shipping worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-blue-100 text-sm">Track your package 24/7</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Secure Handling</h3>
            <p className="text-blue-100 text-sm">Your package is protected</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Global Network</h3>
            <p className="text-blue-100 text-sm">Worldwide delivery coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
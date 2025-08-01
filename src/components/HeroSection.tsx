import { Truck, Clock, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-logistics-navy to-logistics-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Electronics Delivery Service
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional international shipping from Canada to Nigeria. 
            Secure delivery confirmation required for high-value electronics packages.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Express Delivery</h3>
            <p className="text-blue-100 text-sm">Fast international shipping</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Same Day Processing</h3>
            <p className="text-blue-100 text-sm">Quick verification and delivery</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Secure Handling</h3>
            <p className="text-blue-100 text-sm">Protected high-value items</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">International Service</h3>
            <p className="text-blue-100 text-sm">Canada to Nigeria delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
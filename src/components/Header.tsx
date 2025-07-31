import { Phone, Mail, Truck, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-logistics-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <span>+234-1-SWIFT-99 (Nigeria Hotline)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                <span>nigeria@swiftpost-logistics.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>24/7 Nigeria Support</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Canada to Nigeria Express</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-logistics-orange to-logistics-blue p-2 rounded-lg mr-3 shadow-md">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-logistics-navy font-inter">SwiftPost Logistics</h1>
              <p className="text-sm text-muted-foreground">🇨🇦➡️🇳🇬 Bringing Canada's Best to Nigeria Since 2015</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="text-logistics-navy hover:text-logistics-orange transition-colors">Track Package</a>
            <a href="#" className="text-logistics-navy hover:text-logistics-orange transition-colors">Ship Now</a>
            <a href="#" className="text-logistics-navy hover:text-logistics-orange transition-colors">Locations</a>
            <a href="#" className="text-logistics-navy hover:text-logistics-orange transition-colors">Support</a>
            <a href="#" className="text-logistics-navy hover:text-logistics-orange transition-colors">Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
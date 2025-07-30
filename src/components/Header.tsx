import { Package, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1-800-SWIFT-99</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@swiftpost.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Customer Support Available</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-logistics-blue to-primary-glow rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-logistics-navy">
                SwiftPost Logistics
              </h1>
              <p className="text-sm text-muted-foreground">Delivering Excellence Worldwide</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Track Package</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrackingForm from "@/components/TrackingForm";
import PackageStatus from "@/components/PackageStatus";
import CountdownTimer from "@/components/CountdownTimer";
import DeliveryInfo from "@/components/DeliveryInfo";
import TrustIndicators from "@/components/TrustIndicators";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <section className="py-12 bg-logistics-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-logistics-navy mb-4 font-inter">
              🚨 LAST CHANCE - Your iPhone 15 Pro Max Package from Canada!
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Your expensive electronics package from Canada has arrived in Lagos! This is our 
              <span className="font-semibold text-logistics-red"> FINAL delivery attempt. Confirm your details now</span> or this ₦850,000 package will go back to Canada tomorrow!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <CountdownTimer />
            <PackageStatus />
            <DeliveryInfo />
            
            <div className="mb-8">
              <TrustIndicators />
            </div>
            
            <TrackingForm />
          </div>
        </div>
      </section>

      <footer className="bg-logistics-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Package Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Express Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Claims</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p>&copy; 2024 SwiftPost Logistics Inc. All rights reserved.</p>
                <p className="text-blue-200 text-sm mt-1">
                  Headquarters: 1247 Corporate Blvd, Suite 400, Chicago, IL 60601 | License #SP-2015-4789
                </p>
              </div>
              <div className="text-sm text-blue-200">
                <span>Follow us: </span>
                <a href="#" className="hover:text-white transition-colors mx-1">Facebook</a>
                <a href="#" className="hover:text-white transition-colors mx-1">Twitter</a>
                <a href="#" className="hover:text-white transition-colors mx-1">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

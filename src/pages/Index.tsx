import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrackingForm from "@/components/TrackingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <section className="py-16 bg-logistics-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-logistics-navy mb-4">
              Package Awaiting Delivery Confirmation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your package has arrived at our local facility and is ready for delivery. 
              Please confirm your delivery details below to complete the process.
            </p>
          </div>
          
          <TrackingForm />
        </div>
      </section>

      <footer className="bg-logistics-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SwiftPost Logistics. All rights reserved.</p>
          <p className="text-blue-200 text-sm mt-2">Trusted delivery partner worldwide</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

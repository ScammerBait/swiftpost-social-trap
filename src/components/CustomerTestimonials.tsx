import { Card } from "./ui/card";
import { Star } from "lucide-react";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Chioma Okafor",
      location: "Victoria Island, Lagos",
      rating: 5,
      comment: "Received my iPhone from Canada within 2 days. Professional service and secure delivery process.",
      date: "2 days ago"
    },
    {
      name: "Emeka Nwosu", 
      location: "Lekki Phase 1",
      rating: 5,
      comment: "SwiftPost handled all the customs documentation perfectly. Very impressed with their efficiency.",
      date: "1 week ago"
    },
    {
      name: "Fatima Abdullahi",
      location: "Ikeja GRA",
      rating: 5,
      comment: "Fast international delivery to Lagos. The tracking system kept me informed every step of the way.",
      date: "3 days ago"
    }
  ];

  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
      <h3 className="font-semibold text-logistics-navy mb-4 text-center">
        Recent Customer Reviews - Lagos Area
      </h3>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-sm">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">{testimonial.date}</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">{testimonial.comment}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Showing 3 of 247 recent reviews for Lagos deliveries
        </p>
      </div>
    </Card>
  );
};

export default CustomerTestimonials;
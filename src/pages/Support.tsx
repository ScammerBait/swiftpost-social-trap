import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock, HelpCircle, Package } from "lucide-react";
import Header from "@/components/Header";

const Support = () => {
  const faqs = [
    {
      question: "How long does shipping from Canada to Nigeria take?",
      answer: "Standard shipping takes 5-7 business days, while Express shipping takes 2-3 business days."
    },
    {
      question: "What items can I ship from Canada to Nigeria?",
      answer: "Electronics, clothing, food items, documents, and most consumer goods. Some restrictions apply for certain items."
    },
    {
      question: "How much does it cost to ship to Nigeria?",
      answer: "Shipping costs start from ₦25,000 for standard delivery and ₦45,000 for express, depending on weight and size."
    },
    {
      question: "Can I track my package in real-time?",
      answer: "Yes! All packages come with real-time tracking. You'll receive SMS and email updates throughout the journey."
    },
    {
      question: "What if my package is damaged or lost?",
      answer: "All packages are fully insured up to ₦1,000,000. We'll investigate and provide compensation for any damages or losses."
    },
    {
      question: "Do I need to pay customs duties?",
      answer: "Yes, customs duties may apply depending on the item type and value. We'll help you understand any fees before shipping."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-logistics-navy mb-4">
            Customer Support
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need help with your package or have questions? We're here to assist you 24/7. 
            Get quick answers or contact our support team directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Options */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Nigeria: +234-1-SWIFT-99</p>
                  <p className="font-medium">Canada: +1-800-SWIFT-POST</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">nigeria@swiftpost-logistics.com</p>
                  <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Start Live Chat
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Average wait time: 2 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <p><strong>Nigeria:</strong> Mon-Sat 8AM-8PM</p>
                  <p><strong>Canada:</strong> Mon-Fri 8AM-6PM EST</p>
                  <p className="text-muted-foreground">Emergency support available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+234 or +1" />
                    </div>
                    <div>
                      <Label htmlFor="tracking">Tracking Number (if applicable)</Label>
                      <Input id="tracking" placeholder="SP123456789CA-NG" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select id="subject" className="w-full px-3 py-2 border border-input bg-background rounded-md">
                      <option>General Inquiry</option>
                      <option>Package Tracking</option>
                      <option>Delivery Issue</option>
                      <option>Billing Question</option>
                      <option>Damaged Package</option>
                      <option>Customs/Duties</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your issue or question in detail..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-logistics-navy mb-6 text-center flex items-center justify-center">
            <HelpCircle className="w-6 h-6 mr-2" />
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <Card className="mt-8 bg-logistics-red/10 border-logistics-red/20">
          <CardContent className="p-6 text-center">
            <Package className="w-8 h-8 mx-auto mb-3 text-logistics-red" />
            <h3 className="font-semibold text-logistics-red mb-2">Package Emergency?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If your package is urgent or there's a delivery emergency, call our 24/7 hotline
            </p>
            <Button variant="outline" className="border-logistics-red text-logistics-red hover:bg-logistics-red hover:text-white">
              Call Emergency Line: +234-1-URGENT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
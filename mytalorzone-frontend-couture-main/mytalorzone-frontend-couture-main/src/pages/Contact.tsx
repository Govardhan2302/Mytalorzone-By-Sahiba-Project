import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="animate-fadeIn">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6 text-secondary">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="animate-fadeIn">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-secondary" />
                  <p className="text-gray-600">123 Fashion Street, Style City</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-secondary" />
                  <p className="text-gray-600">+1 234 567 8900</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-secondary" />
                  <p className="text-gray-600">contact@mytalorzone.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
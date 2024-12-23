import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-8 text-center">About Us</h1>
        
        <Card className="mb-8 animate-fadeIn">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Mytalorzone By Sahiba, where fashion meets personalization. Founded with a passion for creating unique, 
              custom-fitted garments, we've been transforming the way people experience fashion since our inception.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We strive to provide exceptional tailoring services that combine traditional craftsmanship with modern style, 
              ensuring each piece perfectly fits both your body and personality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-primary rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Quality First</h3>
                <p className="text-gray-600">Premium materials and expert craftsmanship</p>
              </div>
              <div className="text-center p-4 bg-primary rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Custom Fit</h3>
                <p className="text-gray-600">Tailored to your unique measurements</p>
              </div>
              <div className="text-center p-4 bg-primary rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Style</h3>
                <p className="text-gray-600">Contemporary designs with timeless appeal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
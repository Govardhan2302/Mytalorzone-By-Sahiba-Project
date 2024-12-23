import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-primary to-primary-dark">
      <div className="absolute inset-0 bg-black/5" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            Discover Your Perfect Style
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Creative, unique, and diverse clothing for the modern woman. From traditional to western, we craft pieces that celebrate your individuality.
          </p>
          <div className="space-x-4">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg"
            >
              View Collections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
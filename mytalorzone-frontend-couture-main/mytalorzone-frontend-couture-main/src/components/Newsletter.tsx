import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, new arrivals, and fashion inspiration.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
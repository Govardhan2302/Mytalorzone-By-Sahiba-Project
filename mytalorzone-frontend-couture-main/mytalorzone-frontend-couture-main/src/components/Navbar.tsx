import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-secondary">
              Mytalorzone By Sahiba
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#collections" className="text-gray-700 hover:text-secondary transition-colors">
              Collections
            </a>
            <a href="#about" className="text-gray-700 hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors">
              Contact
            </a>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                Home
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
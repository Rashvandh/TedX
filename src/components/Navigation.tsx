import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.png";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SPEAKERS", href: "#speakers" },
  { name: "TEAM", href: "#team" },
  { name: "CONTACTS", href: "#contacts" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center h-12">
            <img 
              src={logo} 
              alt="TEDxKPRCAS Logo" 
              className="h-full w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              REGISTER
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              REGISTER
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

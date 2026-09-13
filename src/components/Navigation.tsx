import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const links = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-foreground font-medium tracking-tight text-lg z-10 relative group">
          Lakshmi
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:lakshmiincharam@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-light transition-colors"
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Nav Simple - just a contact button to keep it minimal */}
        <div className="md:hidden">
           <a
            href="mailto:lakshmiincharam@gmail.com"
            className="text-xs font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}

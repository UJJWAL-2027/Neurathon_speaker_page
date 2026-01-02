import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Lineup", href: "/#lineup" },
    { name: "Gallery", href: "/gallery" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    
    // Smooth scroll for anchors
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (location !== "/") {
        // If we're not on home, wouter Link handles the route change,
        // but we might need to scroll after navigation.
        // This is a simplified approach.
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/80 backdrop-blur-md border-neon-cyan/20 py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="group cursor-pointer">
          <div className="text-2xl font-display font-black tracking-tighter italic flex items-center gap-2">
            <span className="text-neon-cyan group-hover:animate-pulse">SPARK</span>
            <span className="text-white text-lg font-normal tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">2025</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={cn(
              "font-mono text-sm uppercase tracking-widest hover:text-neon-cyan transition-colors relative group py-2",
              location === link.href ? "text-neon-cyan" : "text-white/80"
            )}>
              <span onClick={() => handleNavClick(link.href)}>{link.name}</span>
              <span className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300",
                location === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <a 
            href="https://tecnoesis.co.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta hover:text-black transition-all font-mono text-xs uppercase"
          >
            Tecnoesis Main
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div className={cn(
          "fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-2xl font-display uppercase tracking-widest text-white hover:text-neon-cyan">
              <span onClick={() => handleNavClick(link.href)}>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

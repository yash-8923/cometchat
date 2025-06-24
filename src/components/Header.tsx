import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navigationItems = [
    "Platform",
    "Solutions",
    "Developers",
    "Resources",
    "Pricing",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform ${
        isScrolled
          ? "bg-[#0A0914]/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "bg-[#0A0914]/60 backdrop-blur-sm"
      }`}
      style={{
        background: isScrolled
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(104, 82, 214, 0.1) 0%, rgba(10, 9, 20, 0.95) 50%)`
          : undefined,
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <div className="flex items-center group cursor-pointer">
            <div className="text-xl font-bold text-[#FAFAFF] transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF7F3E] group-hover:to-[#6852D6] group-hover:bg-clip-text relative">
              cometchat
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-xl font-bold bg-gradient-to-r from-[#FF7F3E] to-[#6852D6] bg-clip-text text-transparent animate-pulse">
                  cometchat
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with enhanced effects */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigationItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="nav-link text-[#FAFAFF] opacity-85 hover:text-[#FF7F3E] transition-all duration-500 text-sm font-semibold relative group magnetic transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F3E] to-[#6852D6] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF7F3E]/10 to-[#6852D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons with enhanced effects */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-[#FAFAFF] opacity-85 hover:text-[#FF7F3E] hover:bg-transparent text-sm font-semibold transition-all duration-500 magnetic hover:scale-105 highlight-effect relative overflow-hidden"
            >
              <span className="relative z-10">Log in</span>
            </Button>
            <Button className="bg-[#6852D6] text-[#FCFCFE] hover:bg-[#6852D6]/90 transition-all duration-500 text-sm font-semibold px-4 py-2 rounded-[10px] relative overflow-hidden interactive-button glow-effect magnetic border-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F3E]/20 to-[#6852D6]/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-[-20px] left-[37px] w-8 h-8 bg-[#D8D2F4] opacity-60 blur-[15px] rounded-full transform rotate-[145deg] animate-pulse"></div>
              <span className="relative z-10 text-shadow">Schedule a demo</span>
            </Button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-[#FF7F3E] transition-all duration-500 magnetic p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with enhanced animations */}
        <div
          className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="glass-effect rounded-2xl p-6 mt-4 border border-white/10">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[#FF7F3E] transition-all duration-500 py-2 px-4 rounded-lg hover:bg-white/5 magnetic relative group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transition: `all 0.5s ease-out ${index * 0.1}s`,
                  }}
                >
                  {item}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF7F3E]/10 to-[#6852D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FF7F3E] justify-start magnetic hover:translate-x-2 transition-all duration-300"
                >
                  Log in
                </Button>
                <Button className="bg-[#6852D6] text-white hover:bg-[#6852D6]/90 interactive-button">
                  Schedule a demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

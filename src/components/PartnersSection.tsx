import { useEffect, useState, useRef } from "react";

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: "AWS",
      component: <div className="text-[#FAFAFF] text-lg font-medium">AWS</div>,
    },
    
    {
      name: "10x Genomics",
      component: (
        <div className="flex items-center">
          <span className="text-[#FAFAFF] text-lg font-medium">10x</span>
          <span className="text-[#FAFAFF] text-sm ml-1">Genomics</span>
        </div>
      ),
    },
    {
      name: "Microsoft",
      component: (
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4 mr-2 transition-all duration-300 hover:scale-110">
            <div className="bg-[#FAFAFF] w-1.5 h-1.5 transition-all duration-300 hover:bg-[#FF7F3E]"></div>
            <div className="bg-[#FAFAFF] w-1.5 h-1.5 transition-all duration-300 hover:bg-[#6852D6]"></div>
            <div className="bg-[#FAFAFF] w-1.5 h-1.5 transition-all duration-300 hover:bg-[#FF7F3E]"></div>
            <div className="bg-[#FAFAFF] w-1.5 h-1.5 transition-all duration-300 hover:bg-[#6852D6]"></div>
          </div>
          <span className="text-[#FAFAFF] text-lg font-medium">Microsoft</span>
        </div>
      ),
    },
    {
      name: "NASSCOM",
      component: (
        <span className="text-[#FAFAFF] text-lg font-medium">NASSCOM</span>
      ),
    },
    {
      name: "Techstars",
      component: (
        <span className="text-[#FAFAFF] text-lg font-medium">techstars</span>
      ),
    },
    {
      name: "tekno point",
      component: (
        <div className="flex items-center">          
          <span className="text-[#FAFAFF] text-lg font-medium">tekno point</span>
        </div>
      ),
    },
    {
      name: "Cisco",
      component: (
        <div className="flex items-center">
        
          <span className="text-[#FAFAFF] text-lg font-medium ml-2">CISCO</span>
        </div>
      ),
    },
    {
      name: "Trinax",
      component: (
        <div className="flex items-center">
        
          <span className="text-[#FAFAFF] text-lg font-medium ml-2">Trinax</span>
        </div>
      ),
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#0A0914] py-16 relative overflow-hidden"
    >
      {/* Background cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6852D6] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-[#FF7F3E]/5 to-[#6852D6]/5 rounded-full blur-3xl"
          style={{
            left: "10%",
            top: "20%",
            animation: "cosmic-drift 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gradient-to-r from-[#6852D6]/5 to-[#FF7F3E]/5 rounded-full blur-3xl"
          style={{
            right: "15%",
            top: "60%",
            animation: "cosmic-drift 20s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-16 relative z-10">
        {/* Section title with animation */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-[#FAFAFF] text-lg font-medium opacity-60 mb-2">
            Trusted by industry leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF7F3E] to-[#6852D6] mx-auto rounded-full"></div>
        </div>

        {/* Partners logos with advanced animations */}
        <div className="flex justify-center items-center gap-16 opacity-55 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`h-8 flex items-center transition-all duration-700 cursor-pointer group magnetic ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden">
                {/* Main logo */}
                <div className="transition-all duration-500 transform group-hover:scale-110 group-hover:opacity-100 opacity-55">
                  {partner.component}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F3E]/20 to-[#6852D6]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 scale-150"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Tooltip */}
              <div
                className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0A0914] text-[#FAFAFF] text-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${hoveredIndex === index ? "visible" : "invisible"}`}
              >
                {partner.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0A0914]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated separator line */}
        <div
          className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6852D6]/20 to-transparent"></div>
        </div>

        {/* Stats or additional info */}
        <div
          className={`flex justify-center items-center gap-8 mt-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="text-center group">
            <div className="text-2xl font-bold text-[#FF7F3E] group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-sm text-[#FAFAFF] opacity-60">Partners</div>
          </div>
          <div className="w-px h-8 bg-[#6852D6]/20"></div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-[#6852D6] group-hover:scale-110 transition-transform duration-300">
              50M+
            </div>
            <div className="text-sm text-[#FAFAFF] opacity-60">End Users</div>
          </div>
          <div className="w-px h-8 bg-[#6852D6]/20"></div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-[#FF7F3E] group-hover:scale-110 transition-transform duration-300">
              190+
            </div>
            <div className="text-sm text-[#FAFAFF] opacity-60">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;

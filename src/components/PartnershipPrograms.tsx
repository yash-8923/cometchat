import { CheckCircle, Code2, Sunrise } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const PartnershipPrograms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const programs = [
    {
      icon: CheckCircle,
      title: "Affiliate partner program",
      description:
        "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
      color: "from-[#6852D6] to-[#8B5DFF]",
      accent: "#6852D6",
      features: [
        "Revenue Sharing",
        "Marketing Support",
        "Dedicated Account Manager",
      ],
      delay: 0.1,
    },
    {
      icon: Code2,
      title: "Technology partner program",
      description:
        "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
      color: "from-[#6852D6] to-[#45368D]",
      accent: "#45368D",
      features: ["Technical Resources", "Co-marketing", "Integration Support"],
      delay: 0.2,
    },
    {
      icon: Sunrise,
      title: "Start up growth program",
      description:
        "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
      color: "from-[#6852D6] to-[#B968A4]",
      accent: "#B968A4",
      features: ["Free Credits", "Mentorship", "Priority Support"],
      delay: 0.3,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#FAFAFF] py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(104, 82, 214, 0.03) 0%, #FAFAFF 50%),
          linear-gradient(135deg, #FAFAFF 0%, #F8F8FF 100%)
        `,
      }}
    >
      {/* Background patterns and effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <div
          className="absolute w-32 h-32 border border-[#6852D6]/10 rounded-full"
          style={{
            left: "10%",
            top: "20%",
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-[#6852D6]/5 to-[#45368D]/5 rounded-lg"
          style={{
            right: "15%",
            top: "30%",
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.1}deg)`,
          }}
        />
        <div
          className="absolute w-16 h-16 border-2 border-[#6852D6]/10 rotate-45"
          style={{
            left: "20%",
            bottom: "25%",
            transform: `translateY(${scrollY * 0.05}px) rotate(${45 + scrollY * 0.1}deg)`,
          }}
        />

        {/* Floating particles for light theme */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6852D6] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Large subtle gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#6852D6]/3 to-[#45368D]/3 rounded-full blur-3xl"
          style={{
            left: "-10%",
            top: "10%",
            animation: "cosmic-drift 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-[#B968A4]/2 to-[#6852D6]/2 rounded-full blur-3xl"
          style={{
            right: "-5%",
            bottom: "20%",
            animation: "cosmic-drift 25s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-16 relative z-10">
        {/* Section Header with enhanced animations */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-[#6852D6] text-[22px] font-medium mb-3 relative">
            <span className="relative z-10">Our programs</span>
            <div className="absolute inset-0 text-[#6852D6] blur-sm opacity-30">
              Our programs
            </div>
          </div>
          <h2 className="text-5xl font-medium text-[#14131D] leading-tight max-w-lg relative">
            <span className="bg-gradient-to-r from-[#14131D] via-[#14131D] to-[#6852D6] bg-clip-text text-transparent animate-gradient-move bg-[length:200%_100%]">
              Types of partnerships programs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6852D6] to-[#45368D] mt-4 rounded-full"></div>
        </div>

        {/* Programs Grid with advanced effects */}
        <div
          className={`grid grid-cols-3 gap-16 stagger-container ${isVisible ? "in-view" : ""}`}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="stagger-item group relative cursor-pointer"
              style={{ transitionDelay: `${program.delay}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card container with enhanced 3D effects */}
              <div className="relative h-full">
                {/* Background card with gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl blur-xl scale-110`}
                />

                {/* Main card */}
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full transition-all duration-700 group-hover:bg-white/90 group-hover:shadow-2xl group-hover:border-[#6852D6]/20 group-hover:-translate-y-4 group-hover:scale-105 relative overflow-hidden">
                  {/* Floating background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${program.color} rounded-full blur-2xl`}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-6 relative z-10">
                    {/* Icon with enhanced effects */}
                    <div className="relative">
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-2xl p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${program.accent}15, ${program.accent}25)`,
                        }}
                      >
                        <program.icon
                          className="w-7 h-7 transition-all duration-500 group-hover:scale-110"
                          style={{ color: program.accent }}
                        />
                      </div>

                      {/* Orbiting rings */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute inset-0 border-2 rounded-2xl"
                          style={{
                            borderColor: `${program.accent}30`,
                            animation: "rotate 4s linear infinite",
                          }}
                        />
                        <div
                          className="absolute inset-0 border border-dashed rounded-2xl"
                          style={{
                            borderColor: `${program.accent}20`,
                            animation: "rotate 6s linear infinite reverse",
                          }}
                        />
                      </div>

                      {/* Floating particles around icon */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{
                              background: program.accent,
                              animation: `rotate ${3 + i}s linear infinite`,
                              left: "50%",
                              top: "10%",
                              transformOrigin: "0 300%",
                              animationDelay: `${i * 0.8}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-[20px] font-semibold text-[#14131D] leading-tight transition-all duration-300 group-hover:text-[#6852D6] relative">
                        {program.title}
                        <span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${program.accent}, #6852D6)`,
                          }}
                        />
                      </h3>

                      <p className="text-[16px] text-[#14131D] opacity-75 leading-relaxed transition-all duration-300 group-hover:opacity-100">
                        {program.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        {program.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-[#14131D] opacity-70"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: program.accent }}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="w-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-4 group-hover:translate-y-0">
                      <button
                        className="w-full py-3 px-6 rounded-2xl font-medium transition-all duration-300 border-2 border-transparent hover:scale-105 interactive-button"
                        style={{
                          background: `linear-gradient(135deg, ${program.accent}, #6852D6)`,
                          color: "white",
                        }}
                      >
                        Learn More
                      </button>
                    </div>

                    {/* Card number */}
                    <div
                      className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 opacity-20 group-hover:opacity-100"
                      style={{
                        background: `${program.accent}20`,
                        color: program.accent,
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                  </div>
                </div>

                {/* 3D shadow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 transform translate-y-8 group-hover:translate-y-12 blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${program.accent}40, #6852D650)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#14131D] mb-4">
              Ready to choose your partnership path?
            </h3>
            <p className="text-[#14131D] opacity-70 mb-8">
              Join thousands of partners who are already growing their business
              with CometChat
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-[#6852D6] text-white rounded-2xl font-medium transition-all duration-300 hover:bg-[#6852D6]/90 hover:scale-105 interactive-button glow-effect">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-[#6852D6] text-[#6852D6] rounded-2xl font-medium transition-all duration-300 hover:bg-[#6852D6] hover:text-white hover:scale-105 magnetic">
                Compare Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPrograms;

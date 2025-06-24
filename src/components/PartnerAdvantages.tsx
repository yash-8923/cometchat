import {
  Scale,
  Coins,
  Presentation,
  Code2,
  Clock,
  BarChart,
  BookOpen,
  HelpCircle,
  CoinsIcon,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const PartnerAdvantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const advantages = [
    {
      icon: Scale,
      title: "Free credits",
      description: "Empowering partners to scale.",
      color: "from-[#FF7F3E] to-[#FFB590]",
      delay: 0.1,
    },
    {
      icon: Coins,
      title: "Revenue share",
      description: "Get monthly recurring revenues when you refer clients.",
      color: "from-[#6852D6] to-[#756CF7]",
      delay: 0.2,
    },
    {
      icon: Presentation,
      title: "Training and mentoring sessions",
      description: "Enabling partners to deliver the best experience.",
      color: "from-[#FF7F3E] to-[#FFC1A1]",
      delay: 0.3,
    },
    {
      icon: Code2,
      title: "Special developer access",
      description:
        "Get an all-access account to build unlimited PoCs for your clients.",
      color: "from-[#6852D6] to-[#B968A4]",
      delay: 0.4,
    },
    {
      icon: Clock,
      title: "Reduced time",
      description:
        "Deliver your products much faster with our partners' programs.",
      color: "from-[#FF7F3E] to-[#FFD2BB]",
      delay: 0.5,
    },
    {
      icon: BarChart,
      title: "Value addition to your users",
      description: "Enhanced capabilities and improved user experience.",
      color: "from-[#6852D6] to-[#45368D]",
      delay: 0.6,
    },
    {
      icon: BookOpen,
      title: "Knowledge sessions",
      description: "Access to product and market sessions.",
      color: "from-[#FF7F3E] to-[#FF6B35]",
      delay: 0.7,
    },
    {
      icon: HelpCircle,
      title: "On-demand support",
      description: "Technical assistance for implementation.",
      color: "from-[#6852D6] to-[#8B5DFF]",
      delay: 0.8,
    },
    {
      icon: CoinsIcon,
      title: "Significant passive income",
      description: "Generate sustainable revenue streams effortlessly.",
      color: "from-[#FF7F3E] to-[#FC8500]",
      delay: 0.9,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#0A0914] py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 127, 62, 0.02) 0%, #0A0914 50%)`,
      }}
    >
      {/* Background cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating cosmic particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF7F3E] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Large gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#FF7F3E]/5 to-[#6852D6]/5 rounded-full blur-3xl"
          style={{
            left: "-10%",
            top: "10%",
            animation: "cosmic-drift 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-[#6852D6]/3 to-[#FF7F3E]/3 rounded-full blur-3xl"
          style={{
            right: "-5%",
            bottom: "20%",
            animation: "cosmic-drift 20s ease-in-out infinite reverse",
          }}
        />

        {/* Animated mesh gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, #FF7F3E 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #6852D6 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #45368D 0%, transparent 50%)
            `,
            animation: "rotate 30s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-16 relative z-10">
        {/* Section Header with enhanced animations */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-[#FF7F3E] text-[22px] font-semibold mb-3 relative">
            <span className="relative z-10">Be a partner</span>
            <div className="absolute inset-0 text-[#FF7F3E] blur-sm opacity-50">
              Be a partner
            </div>
          </div>
          <h2 className="text-5xl font-semibold text-[#FAFAFF] leading-tight max-w-lg relative">
            <span className="bg-gradient-to-r from-[#FAFAFF] via-[#FAFAFF] to-[#FF7F3E] bg-clip-text text-transparent animate-gradient-move bg-[length:200%_100%]">
              CometChat partner advantages
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF7F3E] to-[#6852D6] mt-4 rounded-full"></div>
        </div>

        {/* Advantages Grid with stagger animation */}
        <div
          className={`grid grid-cols-3 gap-16 stagger-container ${isVisible ? "in-view" : ""}`}
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="stagger-item card-interactive group relative cursor-pointer magnetic"
              style={{ transitionDelay: `${advantage.delay}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl blur-xl scale-110`}
              />

              <div className="flex flex-col items-start gap-4 relative z-10 p-6 rounded-2xl transition-all duration-500 group-hover:bg-white/2 border border-transparent group-hover:border-white/5">
                {/* Icon with enhanced effects */}
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF7F3E]/12 p-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#FF7F3E]/20">
                    <advantage.icon className="w-5 h-5 text-[#FF7F3E] transition-all duration-500 group-hover:scale-110" />
                  </div>

                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-full border border-[#FF7F3E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                  {/* Orbiting particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#FF7F3E] rounded-full"
                        style={{
                          animation: `rotate ${2 + i}s linear infinite`,
                          left: "50%",
                          top: "10%",
                          transformOrigin: "0 250%",
                          animationDelay: `${i * 0.7}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content with enhanced typography */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-[20px] font-semibold text-[#FAFAFF] leading-tight transition-all duration-300 group-hover:text-[#FF7F3E] relative">
                    {advantage.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F3E] to-[#6852D6] transition-all duration-500 group-hover:w-full" />
                  </h3>
                  <p className="text-[18px] text-[#FAFAFF] opacity-75 leading-relaxed transition-all duration-300 group-hover:opacity-100">
                    {advantage.description}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#FF7F3E]"
                  >
                    <path
                      d="M7.5 15l5-5-5-5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                {/* Number indicator */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#FF7F3E]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold text-[#FF7F3E]">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* 3D tilt effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F3E]/5 to-[#6852D6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-1 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA with animation */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#FF7F3E]/10 to-[#6852D6]/10 rounded-2xl border border-white/5 hover:border-[#FF7F3E]/20 transition-all duration-500 group cursor-pointer">
            <div className="w-8 h-8 bg-[#FF7F3E]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#FF7F3E]"
              >
                <path
                  d="M8 1v14m7-7H1"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-[#FAFAFF] text-lg font-medium group-hover:text-[#FF7F3E] transition-colors duration-300">
              Ready to become a partner?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerAdvantages;

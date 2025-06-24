import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default
  const [isVisible, setIsVisible] = useState(false);
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

  const faqs = [
    {
      question: "How do I become a CometChat partner?",
      answer:
        "Becoming a CometChat partner is simple! Fill out our partner application form, and our team will review your submission. Once approved, you'll get access to our partner portal with all the resources you need to get started.",
      category: "Getting Started",
    },
    {
      question: "What benefits do I get as a partner?",
      answer:
        "Partners enjoy revenue sharing, free credits, marketing support, technical assistance, training sessions, and access to our dedicated partner portal with exclusive resources.",
      category: "Benefits",
    },
    {
      question:
        "What are the different types of partnership programs available?",
      answer:
        "We offer three main programs: Affiliate Partner Program for revenue sharing, Technology Partner Program for development teams, and Startup Growth Program for incubators and VCs.",
      category: "Programs",
    },
    {
      question: "How much commission do partners earn?",
      answer:
        "Commission rates vary based on the partnership type and volume. Our team will provide detailed information about earnings potential during the application process.",
      category: "Revenue",
    },
    {
      question: "Do you provide marketing support for partners?",
      answer:
        "Yes! We provide comprehensive marketing support including co-marketing opportunities, marketing materials, case studies, and dedicated account management.",
      category: "Support",
    },
    {
      question: "What technical support is available to partners?",
      answer:
        "Partners get priority technical support, access to our developer portal, comprehensive documentation, SDKs, APIs, and regular training sessions.",
      category: "Technical",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#FAFAFF] py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(185, 104, 164, 0.03) 0%, #FAFAFF 50%),
          linear-gradient(135deg, #FAFAFF 0%, #F8F8FF 100%)
        `,
      }}
    >
      {/* Enhanced Background Effects with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left blur orb with parallax */}
        <div
          className="absolute w-[534px] h-[457px] rounded-full opacity-20 blur-[180px]"
          style={{
            background:
              "linear-gradient(135deg, #FCB8A8, #B968A4, #756CF6, #6852D6)",
            left: "-185px",
            top: `${225 + scrollY * 0.1}px`,
            transform: `translateY(${scrollY * 0.05}px)`,
            animation: "blob-morph 15s ease-in-out infinite",
          }}
        />

        {/* Right blur orb with parallax */}
        <div
          className="absolute w-[544px] h-[469px] rounded-full opacity-15 blur-[200px]"
          style={{
            background:
              "linear-gradient(225deg, #756CF6, #B968A4, #FCB8A8, #6852D6)",
            right: "-400px",
            top: `${103 + scrollY * 0.15}px`,
            transform: `translateY(${scrollY * 0.08}px)`,
            animation: "blob-morph 20s ease-in-out infinite reverse",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute w-24 h-24 border border-[#6852D6]/10 rounded-full"
          style={{
            left: "15%",
            top: "20%",
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)`,
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-16 h-16 bg-gradient-to-br from-[#B968A4]/10 to-[#6852D6]/10 rounded-lg"
          style={{
            right: "20%",
            top: "30%",
            transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * -0.1}deg)`,
            animation: "float 6s ease-in-out infinite 2s",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #6852D6 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-16 relative z-10">
        {/* Section Header with enhanced animations */}
        <div
          className={`text-center mb-16 max-w-lg mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-[#FF7129] text-[22px] font-medium mb-3 relative">
            <span className="relative z-10">FAQ's</span>
            <div className="absolute inset-0 text-[#FF7129] blur-sm opacity-30">
              FAQ's
            </div>
          </div>
          <h2 className="text-5xl font-medium text-[#14131D] leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#14131D] via-[#14131D] to-[#6852D6] bg-clip-text text-transparent animate-gradient-move bg-[length:200%_100%]">
              We want to help you with all your doubts
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF7129] to-[#6852D6] mx-auto rounded-full"></div>
        </div>

        {/* FAQ List with advanced effects */}
        <div
          className={`max-w-4xl mx-auto space-y-6 stagger-container ${isVisible ? "in-view" : ""}`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`stagger-item group relative transition-all duration-700 ${
                openIndex === index ? "scale-105" : "hover:scale-102"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#6852D6]/5 via-[#B968A4]/5 to-[#FF7129]/5 rounded-3xl blur-xl opacity-0 transition-all duration-500 ${
                  openIndex === index
                    ? "opacity-100 scale-110"
                    : "group-hover:opacity-50"
                }`}
              />

              {/* Main FAQ card */}
              <div
                className={`glass-effect rounded-3xl border border-[#14131D]/8 overflow-hidden transition-all duration-700 ${
                  openIndex === index
                    ? "bg-white/90 border-[#6852D6]/20 shadow-2xl"
                    : "bg-[#14131D]/3 hover:bg-white/60 hover:border-[#6852D6]/10"
                }`}
              >
                {/* Question button with enhanced effects */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between focus:outline-none group relative overflow-hidden"
                >
                  {/* Question text */}
                  <div className="flex-1 pr-6">
                    {/* Category badge */}
                    <div
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 transition-all duration-300 ${
                        openIndex === index
                          ? "bg-[#6852D6]/20 text-[#6852D6]"
                          : "bg-[#14131D]/10 text-[#14131D]/60"
                      }`}
                    >
                      {faq.category}
                    </div>
                    <span
                      className={`text-[20px] font-semibold leading-snug block transition-all duration-500 ${
                        openIndex === index
                          ? "text-[#14131D]"
                          : "text-[#14131D] opacity-75 group-hover:opacity-100 group-hover:text-[#6852D6]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Enhanced icon with rotation and color change */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === index
                        ? "bg-[#6852D6]/20 text-[#6852D6] rotate-180 scale-110"
                        : "bg-[#14131D]/10 text-[#14131D]/60 hover:bg-[#6852D6]/10 hover:text-[#6852D6] hover:scale-110"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 transition-transform duration-300" />
                    )}
                  </div>

                  {/* Hover ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6852D6]/5 to-[#FF7129]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                {/* Answer section with smooth reveal */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pt-0">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6852D6]/20 to-transparent mb-6" />
                    <p
                      className={`text-[18px] text-[#14131D] opacity-75 leading-relaxed transition-all duration-700 delay-200 ${
                        openIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {faq.answer}
                    </p>

                    {/* Additional helpful links */}
                    <div
                      className={`mt-6 flex gap-4 transition-all duration-700 delay-300 ${
                        openIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <button className="text-[#6852D6] text-sm font-medium hover:text-[#FF7129] transition-colors duration-300 flex items-center gap-1">
                        <span>Learn more</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M3 6h6m-3-3l3 3-3 3"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="text-[#14131D]/60 text-sm font-medium hover:text-[#6852D6] transition-colors duration-300">
                        Contact support
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div
                  className={`h-1 bg-gradient-to-r from-[#6852D6] to-[#FF7129] transition-all duration-700 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* 3D shadow effect */}
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-700 transform ${
                  openIndex === index
                    ? "translate-y-4 opacity-20 blur-xl bg-[#6852D6]/20"
                    : "translate-y-2 opacity-0 blur-sm bg-[#14131D]/10"
                } -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="max-w-2xl mx-auto glass-effect rounded-3xl p-8 border border-[#6852D6]/10">
            <h3 className="text-2xl font-semibold text-[#14131D] mb-4">
              Still have questions?
            </h3>
            <p className="text-[#14131D] opacity-70 mb-6">
              Our partner success team is here to help you every step of the way
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-[#6852D6] text-white rounded-2xl font-medium transition-all duration-300 hover:bg-[#6852D6]/90 hover:scale-105 interactive-button glow-effect">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-[#6852D6] text-[#6852D6] rounded-2xl font-medium transition-all duration-300 hover:bg-[#6852D6] hover:text-white hover:scale-105 magnetic">
                Browse Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", color: "#1877F2" },
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "#0A66C2" },
    { icon: Instagram, name: "Instagram", href: "#", color: "#E4405F" },
    { icon: Twitter, name: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: Github, name: "GitHub", href: "#", color: "#333" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#0A0914] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(104, 82, 214, 0.05) 0%, #0A0914 50%),
          linear-gradient(135deg, #0A0914 0%, #0D0A16 100%)
        `,
      }}
    >
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Stars Pattern with Parallax */}
        {[
          { x: 205, y: 423, size: 1, opacity: 0.8, delay: 0 },
          { x: 270, y: 241, size: 1, opacity: 0.6, delay: 0.5 },
          { x: 94, y: 299, size: 1, opacity: 0.6, delay: 1 },
          { x: 154, y: 420, size: 1, opacity: 0.6, delay: 1.5 },
          { x: 35, y: 684, size: 1, opacity: 0.6, delay: 2 },
          { x: 1359, y: 182, size: 1, opacity: 0.6, delay: 2.5 },
          { x: 359, y: 395, size: 1.5, opacity: 0.8, delay: 3 },
          { x: 292, y: 536, size: 1.5, opacity: 0.7, delay: 3.5 },
          { x: 53, y: 532, size: 1, opacity: 0.8, delay: 4 },
          { x: 4, y: 361, size: 1.5, opacity: 0.7, delay: 4.5 },
        ].map((star, index) => (
          <div
            key={index}
            className="absolute bg-[#FAFAFF] rounded-full animate-pulse"
            style={{
              left: `${star.x}px`,
              top: `${star.y + scrollY * 0.1}px`,
              width: `${star.size * 4}px`,
              height: `${star.size * 4}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: "3s",
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
        ))}

        {/* Large Cosmic Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#6852D6]/5 to-[#FF7F3E]/5 rounded-full blur-3xl"
          style={{
            left: "-10%",
            top: "20%",
            animation: "cosmic-drift 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-[#FF7F3E]/3 to-[#6852D6]/3 rounded-full blur-3xl"
          style={{
            right: "-5%",
            bottom: "30%",
            animation: "cosmic-drift 30s ease-in-out infinite reverse",
          }}
        />

        {/* Enhanced Wavy Background with Animation */}
        <div className="absolute inset-x-0 top-0 h-[200px] overflow-hidden opacity-80">
          <svg
            className="absolute w-full h-full transition-transform duration-1000"
            viewBox="0 0 1440 817"
            fill="none"
            style={{
              transform: `translateX(-975px) translateY(${scrollY * 0.1}px)`,
            }}
          >
            <defs>
              <filter id="filter0_f_3001_905">
                <feGaussianBlur stdDeviation="100" />
              </filter>
              <linearGradient
                id="paint0_linear_3001_905"
                x1="121"
                y1="427"
                x2="1067"
                y2="313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6852D6" />
                <stop offset="1" stopColor="#6852D6" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3001_905"
                x1="1007.5"
                y1="397"
                x2="301"
                y2="372.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAFAFF" stopOpacity="0.26" />
                <stop offset="1" stopColor="#FAFAFF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_3001_905)">
              <path
                d="M187 459C272.5 270 780 247 1116.5 408.5"
                stroke="url(#paint0_linear_3001_905)"
                strokeWidth="200"
                className="animate-pulse"
              />
            </g>
            <path
              d="M1616.27 679.722C1604.95 466.693 1020.29 324.579 310.386 362.302C-399.513 400.025 -965.823 603.3 -954.503 816.329"
              stroke="url(#paint1_linear_3001_905)"
              strokeOpacity="0.14"
            />
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6852D6] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-16 pt-14 pb-10">
        {/* Logo Section with Animation */}
        <div
          className={`flex justify-center mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="group cursor-pointer">
            <div className="text-[#FAFAFF] text-2xl font-bold transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6852D6] group-hover:to-[#FF7F3E] group-hover:bg-clip-text relative">
              cometchat
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] bg-clip-text text-transparent animate-pulse">
                  cometchat
                </div>
              </div>
            </div>
            <div className="w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-500 group-hover:w-full mx-auto mt-2" />
          </div>
        </div>

        {/* Main Links Grid with Stagger Animation */}
        <div
          className={`grid grid-cols-5 gap-20 mb-14 stagger-container ${isVisible ? "in-view" : ""}`}
        >
          {/* Platform Section */}
          <div
            className="stagger-item"
            onMouseEnter={() => setHoveredSection("platform")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
              Platform
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  Features
                </h4>
                <ul className="space-y-4">
                  {[
                    "Chat & Messaging",
                    "Voice & Video Calls",
                    "Security & Compliance",
                    "Extensions",
                    "Features at a glance",
                    "Webhooks & Bots",
                    "Moderation",
                    "Analytics & Insights",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link relative group"
                      >
                        {item}
                        <span className="absolute -left-2 top-0 w-0 h-full border-l-2 border-[#FF7F3E] transition-all duration-300 group-hover:w-0 opacity-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  Implementation
                </h4>
                <ul className="space-y-4">
                  {["Widgets", "UI Kits", "SDKs & APIs"].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  Technologies
                </h4>
                <ul className="space-y-4">
                  {[
                    "React Chat SDK & API",
                    "Angular Chat SDK & API",
                    "Vue Chat SDK & API",
                    "IOS Swift Chat SDK & API",
                    "Android Kotlin Chat SDK & API",
                    "Android Java Chat SDK & API",
                    "React Native Chat SDK & API",
                    "Ionic/Capacitor Chat SDK & API",
                    "WordPress Chat SDK & API",
                    "Laravel/PHP Chat SDK & API",
                    "Flutter Chat SDK & API",
                    "Next.js Chat SDK & API",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div
            className="stagger-item"
            onMouseEnter={() => setHoveredSection("solutions")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  By Use cases
                </h4>
                <ul className="space-y-4">
                  {[
                    "Social Community",
                    "Marketplace",
                    "Healthcare",
                    "Education",
                    "Virtual Events",
                    "On-Demand Service",
                    "Dating Apps",
                    "Gaming",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  By Organization Type
                </h4>
                <ul className="space-y-4">
                  {["Enterprise", "Startups"].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Developers Section */}
          <div
            className="stagger-item"
            onMouseEnter={() => setHoveredSection("developers")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
              Developers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  Technologies documentation
                </h4>
                <ul className="space-y-4">
                  {[
                    "React",
                    "Angular",
                    "Vue",
                    "IOS Swift",
                    "Android Kotlin",
                    "Android Java",
                    "React Native",
                    "Ionic/Capacitor",
                    "WordPress",
                    "Laravel/PHP",
                    "Flutter",
                    "Next.js",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4 transition-all duration-300 hover:opacity-100">
                  Documentation
                </h4>
                <ul className="space-y-4">
                  {[
                    "Documentation",
                    "Product updates",
                    "Tutorials",
                    "Open-source Apps",
                    "Product status",
                    "Glossary",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Resources & Competitors Section */}
          <div
            className="stagger-item"
            onMouseEnter={() => setHoveredSection("resources")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="mb-10">
              <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
              </h3>
              <ul className="space-y-4">
                {[
                  "Customer stories",
                  "Blog",
                  "Give feedback",
                  "Community forum",
                  "Help center",
                  "Partners",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
                Competitors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
              </h3>
              <ul className="space-y-4">
                {["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Company Section */}
          <div
            className="stagger-item"
            onMouseEnter={() => setHoveredSection("company")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-[#6852D6] text-base font-semibold mb-6 relative group">
              Company
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6852D6] to-[#FF7F3E] transition-all duration-300 group-hover:w-full" />
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "About us",
                "Careers",
                "Partners",
                "Pricing",
                "Chat with us",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-[#FAFAFF] text-sm font-semibold opacity-55 mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#FAFAFF] text-sm opacity-75 hover:opacity-100 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-[#6852D6] group-hover:scale-110 transition-transform duration-300" />
                  <span>partners@cometchat.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#FAFAFF] text-sm opacity-75 hover:opacity-100 transition-all duration-300 group">
                  <Phone className="w-4 h-4 text-[#6852D6] group-hover:scale-110 transition-transform duration-300" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-[#FAFAFF] text-sm opacity-75 hover:opacity-100 transition-all duration-300 group">
                  <MapPin className="w-4 h-4 text-[#6852D6] group-hover:scale-110 transition-transform duration-300" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative mb-14">
          <div className="h-px bg-gradient-to-r from-transparent via-[#272730] to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#6852D6]/20 to-transparent blur-sm"></div>
        </div>

        {/* Bottom Section with Enhanced Effects */}
        <div
          className={`flex justify-between items-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center space-x-6">
            <span className="text-[#FAFAFF] text-sm font-semibold opacity-75">
              2023 © CometChat
            </span>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 hover:text-[#FF7F3E] transition-all duration-300 nav-link"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center gap-2 text-[#FAFAFF] text-sm font-semibold opacity-85 hover:opacity-100 transition-all duration-300 group magnetic"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <social.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-[#FF7F3E]" />
                <span className="group-hover:text-[#FF7F3E] transition-colors duration-300">
                  {social.name}
                </span>
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg -z-10"
                  style={{ background: social.color }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className={`mt-16 pt-8 border-t border-[#272730]/50 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-[#FAFAFF] text-lg font-semibold mb-2">
              Stay updated
            </h4>
            <p className="text-[#FAFAFF] text-sm opacity-70 mb-6">
              Get the latest partner updates and opportunities
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#FAFAFF]/5 border border-[#FAFAFF]/10 rounded-xl text-[#FAFAFF] placeholder:text-[#FAFAFF]/50 focus:outline-none focus:border-[#6852D6] focus:bg-[#FAFAFF]/10 transition-all duration-300 input-glow"
              />
              <button className="px-6 py-3 bg-[#6852D6] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#6852D6]/90 hover:scale-105 interactive-button glow-effect">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#6852D6] text-white rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#6852D6]/90 hover:scale-110 glow-effect z-50 ${
          scrollY > 500
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;

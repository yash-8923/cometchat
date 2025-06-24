import { useEffect, useRef, useState } from "react";

// 3D Card Component with realistic hover effects
export const Card3D = ({
  children,
  className = "",
  perspective = 1000,
}: {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / rect.height) * -10;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-all duration-300 ease-out ${className}`}
      style={{
        perspective: `${perspective}px`,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? "20px" : "0px"})`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
};

// Floating 3D Element
export const Float3D = ({
  children,
  intensity = 1,
  speed = 2,
}: {
  children: React.ReactNode;
  intensity?: number;
  speed?: number;
}) => {
  const [transform, setTransform] = useState("translateY(0px) rotateZ(0deg)");

  useEffect(() => {
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01 * speed;
      const y = Math.sin(time) * intensity * 10;
      const rotate = Math.sin(time * 0.5) * intensity * 2;
      setTransform(`translateY(${y}px) rotateZ(${rotate}deg)`);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [intensity, speed]);

  return (
    <div
      className="transition-transform duration-100 ease-out"
      style={{ transform }}
    >
      {children}
    </div>
  );
};

// Parallax Background Component
export const ParallaxBackground = ({
  children,
  speed = 0.5,
  className = "",
}: {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const elementTop = elementRef.current?.offsetTop || 0;
      const elementHeight = elementRef.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      const elementBottom = elementTop + elementHeight;
      const isInViewport =
        scrollTop < elementBottom && scrollTop + windowHeight > elementTop;

      if (isInViewport) {
        // Calculate relative scroll position for this element
        const relativeScroll = scrollTop - elementTop;
        // Apply parallax with controlled bounds
        const parallaxOffset = relativeScroll * (speed - 1);
        // Limit the offset to prevent content from moving too far
        const boundedOffset = Math.max(
          -elementHeight,
          Math.min(elementHeight, parallaxOffset),
        );
        setOffset(boundedOffset);
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

// 3D Interactive Button
export const Button3D = ({
  children,
  onClick,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <button
      className={`relative overflow-hidden transform-gpu transition-all duration-300 ease-out rounded-xl font-semibold ${className}`}
      style={{
        transform: `translateZ(${isPressed ? "0px" : "6px"}) scale(${isPressed ? "0.97" : "1"})`,
        boxShadow: isPressed
          ? "0 4px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.2)"
          : "0 12px 24px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
        padding: "12px 24px",
        minHeight: "48px",
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      {...props}
    >
      {/* Gradient overlay that follows mouse */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.8) 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            transform: "translateX(-100%)",
            animation: "shine 2s infinite",
          }}
        />
      </div>
    </button>
  );
};

// Mouse-following spotlight effect
export const MouseSpotlight = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 127, 62, 0.1) 0%, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

import { useEffect, useState, useCallback } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const { threshold = 0.1, rootMargin = "0px" } = options;

  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, threshold, rootMargin]);

  return { ref, isVisible };
};

export const useParallax = (speed: number = 0.5) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    transform: `translateY(${scrollY * speed}px)`,
    scrollY,
  };
};

export const useMouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = elementRef.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    elementRef.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (elementRef) {
        elementRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [elementRef]);

  return { ref, mousePosition };
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once to set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
};

export const useStaggeredReveal = (
  itemCount: number,
  options: ScrollAnimationOptions = {},
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false),
  );
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const { threshold = 0.1, rootMargin = "0px" } = options;

  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal items with stagger delay
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newArray = [...prev];
                newArray[index] = true;
                return newArray;
              });
            }, index * 100);
          });
          observer.unobserve(elementRef);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, threshold, rootMargin, visibleItems]);

  return { ref, visibleItems };
};

export const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    let lastTime = 0;
    let animationId: number;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      callback(deltaTime);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isRunning, callback]);

  return { start: () => setIsRunning(true), stop: () => setIsRunning(false) };
};

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    elementRef.addEventListener("mouseenter", handleMouseEnter);
    elementRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (elementRef) {
        elementRef.removeEventListener("mouseenter", handleMouseEnter);
        elementRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [elementRef]);

  return { ref, isHovered };
};

// Utility function to create magnetic effect
export const useMagnetic = (strength: number = 0.3) => {
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = elementRef.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setTransform(`translate3d(${x * strength}px, ${y * strength}px, 0)`);
    };

    const handleMouseLeave = () => {
      setTransform("translate3d(0, 0, 0)");
    };

    elementRef.addEventListener("mousemove", handleMouseMove);
    elementRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (elementRef) {
        elementRef.removeEventListener("mousemove", handleMouseMove);
        elementRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [elementRef, strength]);

  return { ref, transform };
};

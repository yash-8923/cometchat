// Animation and interaction utilities

export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          // Keep elements visible when they go out of view to prevent blank screen
          // Only remove if they're completely out of view
          if (
            entry.boundingClientRect.bottom < 0 ||
            entry.boundingClientRect.top > window.innerHeight
          ) {
            entry.target.classList.remove("in-view");
          }
        }
      });
    },
    {
      threshold: 0.05, // Reduced threshold for better responsiveness
      rootMargin: "100px", // Increased margin to trigger earlier
    },
  );

  // Observe all elements with animation classes
  const elementsToAnimate = document.querySelectorAll(
    ".animate-on-scroll, .stagger-container, .text-reveal",
  );
  elementsToAnimate.forEach((el) => observer.observe(el));

  return observer;
};

export const initMagneticElements = () => {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const { offsetWidth: width, offsetHeight: height } =
        element as HTMLElement;
      const { offsetX: x, offsetY: y } = e as MouseEvent;

      const moveX = (x - width / 2) * 0.15;
      const moveY = (y - height / 2) * 0.15;

      (element as HTMLElement).style.transform =
        `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", () => {
      (element as HTMLElement).style.transform = "translate(0px, 0px)";
    });
  });
};

export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll(".parallax-element");

  const handleScroll = () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      (element as HTMLElement).style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
};

export const initMouseTracker = () => {
  const trackerElements = document.querySelectorAll(".mouse-tracker");

  trackerElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    });
  });
};

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Performance optimized scroll handler
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Enhanced easing functions
export const easing = {
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeIn: (t: number) => t * t * t,
  bounce: (t: number) => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  },
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initScrollAnimations();
      initMagneticElements();
      initParallaxEffect();
      initMouseTracker();
    });
  } else {
    initScrollAnimations();
    initMagneticElements();
    initParallaxEffect();
    initMouseTracker();
  }
};

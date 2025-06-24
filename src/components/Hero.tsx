import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-[1440px] h-[646px] bg-[#0A0914] overflow-hidden mx-auto"
      style={{ flexShrink: 0 }}
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 w-[1440px] h-[788px]"
        style={{
          backgroundImage: 'url("")',
          left: "0px",
          top: "0px",
        }}
      />

      {/* Complex SVG Background with Mask and Gradients - Exact Figma Match */}
      <svg
        className="absolute w-[1440px] h-[785px]"
        style={{ left: "0px", top: "1px" }}
        width="1440"
        height="645"
        viewBox="0 0 1440 645"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3001_480"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1440"
          height="785"
        >
          <rect width="1440" height="785" fill="#D9D9D9"></rect>
        </mask>
        <g mask="url(#mask0_3001_480)">
          <g filter="url(#filter0_f_3001_480)">
            <ellipse
              cx="682.986"
              cy="244.584"
              rx="682.986"
              ry="244.584"
              transform="matrix(1.00192 -0.137298 0.114911 0.98072 -60.7529 347.546)"
              fill="url(#paint0_linear_3001_480)"
              fillOpacity="0.08"
              className="animate-cosmic-drift"
            />
          </g>
          <g
            style={{ mixBlendMode: "soft-light" }}
            filter="url(#filter1_f_3001_480)"
          >
            <ellipse
              cx="456.525"
              cy="381.264"
              rx="456.525"
              ry="381.264"
              transform="matrix(0.985328 -0.247988 0.237762 0.95308 575.392 -16.3032)"
              fill="#172365"
              fillOpacity="0.6"
              className="animate-pulse"
            />
          </g>
          <g
            style={{ mixBlendMode: "screen" }}
            filter="url(#filter2_f_3001_480)"
          >
            <ellipse
              cx="673.756"
              cy="308.056"
              rx="673.756"
              ry="308.056"
              transform="matrix(0.985328 -0.247988 0.237762 0.95308 -265.36 242.343)"
              fill="url(#paint1_linear_3001_480)"
              fillOpacity="0.16"
              className="animate-float"
            />
          </g>
          <g filter="url(#filter3_f_3001_480)">
            <ellipse
              cx="689.041"
              cy="292.975"
              rx="689.041"
              ry="292.975"
              transform="matrix(0.985328 -0.247988 0.237762 0.95308 173 284.074)"
              fill="#1D1765"
              fillOpacity="0.3"
              className="animate-blob-morph"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_3001_480"
            x="-120.921"
            y="148.34"
            width="1545.15"
            height="690.603"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="43.843"
              result="effect1_foregroundBlur_3001_480"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_3001_480"
            x="539.995"
            y="-263.76"
            width="1151.75"
            height="995.239"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="58.4574"
              result="effect1_foregroundBlur_3001_480"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_3001_480"
            x="-283.889"
            y="-56.6978"
            width="1511.29"
            height="851.118"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="43.843"
              result="effect1_foregroundBlur_3001_480"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_3001_480"
            x="122.126"
            y="-51.8957"
            width="1598.93"
            height="888.648"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="58.4574"
              result="effect1_foregroundBlur_3001_480"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear_3001_480"
            x1="802.779"
            y1="372.04"
            x2="277.533"
            y2="-32.8668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#944E6E"></stop>
            <stop offset="1" stopColor="#6D3500" stopOpacity="0.6"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_3001_480"
            x1="791.93"
            y1="468.588"
            x2="186.554"
            y2="103.072"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#944E6E"></stop>
            <stop offset="1" stopColor="#6D3500" stopOpacity="0.6"></stop>
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Planets - Exact Figma Positioning */}
      <div className="absolute top-[188px] left-[1244px] w-[33px] h-[32px] opacity-60">
        <svg
          width="124"
          height="125"
          viewBox="0 0 124 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float hover:scale-110 transition-transform duration-500"
        >
          <g opacity="0.6">
            <g filter="url(#filter0_f_3001_487)">
              <ellipse
                cx="62.1071"
                cy="62.3149"
                rx="14.768"
                ry="14.768"
                fill="#6852D6"
              ></ellipse>
            </g>
            <g filter="url(#filter1_f_3001_487)">
              <ellipse
                cx="60.5488"
                cy="63"
                rx="16"
                ry="16"
                fill="url(#paint0_linear_3001_487)"
              ></ellipse>
            </g>
            <g opacity="0.6" filter="url(#filter2_f_3001_487)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.2501 78.9998C66.1203 78.9998 72.5003 72.6198 72.5003 64.7496C72.5003 64.4644 72.4919 64.181 72.4754 63.8999C72.0653 70.4916 66.5894 75.7109 59.8944 75.7109C52.9325 75.7109 47.2888 70.0671 47.2888 63.1053C47.2888 56.4106 52.5077 50.9348 59.099 50.5244C58.8181 50.5079 58.5351 50.4995 58.2501 50.4995C50.38 50.4995 44 56.8795 44 64.7496C44 72.6198 50.38 78.9998 58.2501 78.9998Z"
                fill="#0A0914"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_487"
              x="0.285713"
              y="0.493477"
              width="123.643"
              height="123.643"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="23.5267"
                result="effect1_foregroundBlur_3001_487"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_3001_487"
              x="40.5488"
              y="43"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3001_487"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_3001_487"
              x="8.64037"
              y="15.1399"
              width="99.2195"
              height="99.2197"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="17.6798"
                result="effect1_foregroundBlur_3001_487"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_487"
              x1="82.1824"
              y1="44.7093"
              x2="46.9242"
              y2="62.991"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCB8A8"></stop>
              <stop offset="0.484375" stopColor="#B968A4"></stop>
              <stop offset="1" stopColor="#756CF7"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-[127px] left-[52px] w-[51px] h-[50px] opacity-20">
        <svg
          width="141"
          height="142"
          viewBox="0 0 141 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float hover:scale-105 transition-transform duration-700"
          style={{ animationDelay: "2s" }}
        >
          <g opacity="0.2">
            <g filter="url(#filter0_f_3001_493)">
              <ellipse
                cx="70.2927"
                cy="70.9295"
                rx="23.075"
                ry="23.075"
                fill="#6852D6"
              ></ellipse>
            </g>
            <g filter="url(#filter1_f_3001_493)">
              <ellipse
                cx="67.8576"
                cy="71.9999"
                rx="24.9999"
                ry="24.9999"
                fill="url(#paint0_linear_3001_493)"
              ></ellipse>
            </g>
            <g opacity="0.6" filter="url(#filter2_f_3001_493)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.4929 73.4103C85.8501 83.7077 77.2949 91.8605 66.8355 91.8605C55.9576 91.8605 47.1393 83.0422 47.1393 72.1643C47.1393 61.7051 55.2917 53.1501 65.5888 52.5069C65.151 52.4813 64.7099 52.4683 64.2658 52.4683C51.9687 52.4683 42 62.437 42 74.7341C42 87.0311 51.9687 96.9998 64.2658 96.9998C76.5629 96.9998 86.5316 87.0311 86.5316 74.7341C86.5316 74.2896 86.5186 73.8483 86.4929 73.4103Z"
                fill="#0A0914"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_493"
              x="0.164375"
              y="0.801094"
              width="140.257"
              height="140.257"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="23.5267"
                result="effect1_foregroundBlur_3001_493"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_3001_493"
              x="38.8577"
              y="43"
              width="58"
              height="58"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3001_493"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_3001_493"
              x="6.64037"
              y="17.1086"
              width="115.251"
              height="115.251"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="17.6798"
                result="effect1_foregroundBlur_3001_493"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_493"
              x1="101.66"
              y1="43.4208"
              x2="46.5691"
              y2="71.9859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCB8A8"></stop>
              <stop offset="0.484375" stopColor="#B968A4"></stop>
              <stop offset="1" stopColor="#756CF7"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-[214px] left-[236px] w-[18px] h-[18px] opacity-40">
        <svg
          width="111"
          height="111"
          viewBox="0 0 111 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float hover:scale-125 transition-transform duration-300"
          style={{ animationDelay: "1s" }}
        >
          <g opacity="0.4">
            <g filter="url(#filter0_f_3001_499)">
              <circle
                cx="55.3768"
                cy="55.6146"
                r="8.30701"
                fill="#6852D6"
              ></circle>
            </g>
            <g filter="url(#filter1_f_3001_499)">
              <ellipse
                cx="54.5"
                cy="56"
                rx="9"
                ry="9"
                fill="url(#paint0_linear_3001_499)"
              ></ellipse>
            </g>
            <g opacity="0.6" filter="url(#filter2_f_3001_499)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.2071 64.9997C57.6341 64.9997 61.2228 61.4109 61.2228 56.984C61.2228 56.824 61.2181 56.6651 61.2089 56.5075C60.9776 60.2146 57.8976 63.1498 54.1322 63.1498C50.2161 63.1498 47.0415 59.9752 47.0415 56.0591C47.0415 52.293 49.9776 49.2127 53.6856 48.9823C53.5273 48.973 53.3678 48.9683 53.2071 48.9683C48.7802 48.9683 45.1914 52.557 45.1914 56.984C45.1914 61.4109 48.7802 64.9997 53.2071 64.9997Z"
                fill="#0A0914"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_499"
              x="0.0164261"
              y="0.254219"
              width="110.721"
              height="110.721"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="23.5267"
                result="effect1_foregroundBlur_3001_499"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_3001_499"
              x="41.5"
              y="43"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3001_499"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_3001_499"
              x="9.83178"
              y="13.6086"
              width="86.7508"
              height="86.7505"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="17.6798"
                result="effect1_foregroundBlur_3001_499"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_499"
              x1="66.6689"
              y1="45.7115"
              x2="46.8361"
              y2="55.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCB8A8"></stop>
              <stop offset="0.484375" stopColor="#B968A4"></stop>
              <stop offset="1" stopColor="#756CF7"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute w-[1440px] h-[102px]"
        style={{
          background:
            "linear-gradient(3deg, #0A0914 2.27%, rgba(10, 9, 20, 0.00) 97.07%)",
          left: "0px",
          top: "681px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute w-[1440px] h-[775px]"
        style={{
          background:
            "linear-gradient(270deg, #000 -17.84%, rgba(0, 0, 0, 0.00) 11.68%), linear-gradient(270deg, rgba(0, 0, 0, 0.00) 90.82%, #000 106.47%)",
          mixBlendMode: "soft-light",
          left: "0px",
          top: "0px",
        }}
      />

      {/* Stars Pattern - Exact Figma Positioning */}
      <svg
        className="absolute w-[1389px] h-[803px]"
        style={{ left: "25px", top: "-68px" }}
        width="1389"
        height="646"
        viewBox="0 0 1389 646"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Individual stars with twinkle animation */}
        <circle
          cx="918"
          cy="234"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "0s" }}
        ></circle>
        <circle
          cx="920"
          cy="123"
          r="1"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></circle>
        <circle
          cx="744"
          cy="181"
          r="1"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        ></circle>
        <circle
          cx="804"
          cy="302"
          r="1"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></circle>
        <circle
          cx="685"
          cy="566"
          r="1"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        ></circle>
        <circle
          cx="1359"
          cy="114"
          r="1"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></circle>
        <circle
          cx="90"
          cy="98"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "3s" }}
        ></circle>
        <circle
          cx="204"
          cy="12"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "3.5s" }}
        ></circle>
        <circle
          cx="1075.5"
          cy="330.5"
          r="1.5"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "0.3s" }}
        ></circle>
        <circle
          cx="1115.5"
          cy="493.5"
          r="1.5"
          fill="#54535B"
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></circle>
        <circle
          cx="1200"
          cy="248"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.3s" }}
        ></circle>
        <circle
          cx="1052.5"
          cy="218.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.8s" }}
        ></circle>
        <circle
          opacity="0.5"
          cx="1099.5"
          cy="198.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.3s" }}
        ></circle>
        <circle
          cx="1316.5"
          cy="128.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.8s" }}
        ></circle>
        <circle
          cx="1128"
          cy="52"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "3.3s" }}
        ></circle>
        <circle
          opacity="0.5"
          cx="1316.5"
          cy="265.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></circle>
        <circle
          cx="1268"
          cy="414"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "0.7s" }}
        ></circle>
        <circle
          cx="1334.5"
          cy="496.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></circle>
        <circle
          cx="953"
          cy="543"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.7s" }}
        ></circle>
        <circle
          cx="1319"
          cy="623"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.2s" }}
        ></circle>
        <circle
          cx="1388"
          cy="585"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.7s" }}
        ></circle>
        <circle
          opacity="0.5"
          cx="161.5"
          cy="638.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "3.2s" }}
        ></circle>
        <circle
          cx="970.5"
          cy="274.5"
          r="1.5"
          fill="#45368D"
          className="animate-pulse"
          style={{ animationDelay: "0.1s" }}
        ></circle>
        <circle
          cx="901.5"
          cy="458.5"
          r="1.5"
          fill="#45368D"
          className="animate-pulse"
          style={{ animationDelay: "0.6s" }}
        ></circle>
        <circle
          cx="662"
          cy="464"
          r="1"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.1s" }}
        ></circle>
        <circle
          cx="827.5"
          cy="396.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "1.6s" }}
        ></circle>
        <circle
          cx="630.5"
          cy="125.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.1s" }}
        ></circle>
        <circle
          cx="743.5"
          cy="87.5"
          r="1.5"
          fill="#6852D6"
          className="animate-pulse"
          style={{ animationDelay: "2.6s" }}
        ></circle>
      </svg>

      {/* Large Comet Complex - ikadus */}
      <div className="absolute top-[376px] left-[1292px] w-[256px] h-[256px]">
        {/* Multiple blur layers for depth */}
        <svg
          className="absolute w-[256px] h-[256px] animate-float"
          style={{ filter: "blur(30px)", left: "0px", top: "0px" }}
          width="180"
          height="302"
          viewBox="0 0 180 302"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_543)">
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 345.535 98.2578)"
              fill="#B968A4"
            ></circle>
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 345.535 98.2578)"
              fill="url(#paint0_linear_3001_543)"
            ></circle>
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 345.535 98.2578)"
              fill="url(#paint1_linear_3001_543)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_543"
              x="0.735596"
              y="0.73584"
              width="376.063"
              height="376.063"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="30"
                result="effect1_foregroundBlur_3001_543"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_543"
              x1="5"
              y1="242"
              x2="256"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.140215" stopColor="#5343A5"></stop>
              <stop
                offset="0.460927"
                stopColor="#5343A5"
                stopOpacity="0.05"
              ></stop>
              <stop
                offset="0.587747"
                stopColor="#5343A5"
                stopOpacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_3001_543"
              x1="355"
              y1="-45"
              x2="85.5"
              y2="202"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.300261" stopColor="#FCB8A8"></stop>
              <stop
                offset="0.833024"
                stopColor="#FCB8A8"
                stopOpacity="0.12"
              ></stop>
              <stop offset="1" stopColor="#FCB8A8" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Heavy blur layer */}
        <svg
          className="absolute w-[256px] h-[256px] animate-pulse"
          style={{ filter: "blur(100px)", left: "0px", top: "0px" }}
          width="320"
          height="442"
          viewBox="0 0 320 442"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_544)">
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 485.535 238.258)"
              fill="#B968A4"
            ></circle>
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 485.535 238.258)"
              fill="url(#paint0_linear_3001_544)"
            ></circle>
            <circle
              cx="128"
              cy="128"
              r="128"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 485.535 238.258)"
              fill="url(#paint1_linear_3001_544)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_544"
              x="0.735596"
              y="0.73584"
              width="656.063"
              height="656.063"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_3001_544"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_544"
              x1="5"
              y1="242"
              x2="256"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.140215" stopColor="#5343A5"></stop>
              <stop
                offset="0.460927"
                stopColor="#5343A5"
                stopOpacity="0.05"
              ></stop>
              <stop
                offset="0.587747"
                stopColor="#5343A5"
                stopOpacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_3001_544"
              x1="355"
              y1="-45"
              x2="85.5"
              y2="202"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.300261" stopColor="#FCB8A8"></stop>
              <stop
                offset="0.833024"
                stopColor="#FCB8A8"
                stopOpacity="0.12"
              ></stop>
              <stop offset="1" stopColor="#FCB8A8" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Main comet body */}
        <svg
          className="absolute w-[256px] h-[256px] hover:scale-105 transition-transform duration-1000"
          style={{ left: "0px", top: "0px" }}
          width="120"
          height="242"
          viewBox="0 0 120 242"
          fill="none"
        >
          <circle
            cx="128"
            cy="128"
            r="128"
            transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 285.535 38.2578)"
            fill="#B968A4"
          ></circle>
          <circle
            cx="128"
            cy="128"
            r="128"
            transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 285.535 38.2578)"
            fill="url(#paint0_linear_3001_545)"
          ></circle>
          <circle
            cx="128"
            cy="128"
            r="128"
            transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 285.535 38.2578)"
            fill="url(#paint1_linear_3001_545)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_3001_545"
              x1="5"
              y1="242"
              x2="256"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.140215" stopColor="#5343A5"></stop>
              <stop
                offset="0.460927"
                stopColor="#5343A5"
                stopOpacity="0.05"
              ></stop>
              <stop
                offset="0.587747"
                stopColor="#5343A5"
                stopOpacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_3001_545"
              x1="355"
              y1="-45"
              x2="85.5"
              y2="202"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.300261" stopColor="#FCB8A8"></stop>
              <stop
                offset="0.833024"
                stopColor="#FCB8A8"
                stopOpacity="0.12"
              ></stop>
              <stop offset="1" stopColor="#FCB8A8" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Highlight effect */}
        <svg
          className="absolute w-[104px] h-[84px] animate-pulse"
          style={{ filter: "blur(20.5px)", left: "56px", top: "23px" }}
          width="132"
          height="145"
          viewBox="0 0 132 145"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_546)">
            <path
              d="M160.974 53.3127C121.048 18.8033 39.5196 64.2507 41.4031 103.578L83.0989 75.542C91.4133 69.9515 100.727 66.0151 110.53 63.9481L160.974 53.3127Z"
              fill="#FFD2BB"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_546"
              x="0.371094"
              y="0.0776367"
              width="201.603"
              height="144.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="20.5"
                result="effect1_foregroundBlur_3001_546"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        {/* Shadow effect */}
        <svg
          className="absolute w-[138px] h-[126px] opacity-40"
          style={{
            filter: "blur(25px)",
            left: "103px",
            top: "143px",
            mixBlendMode: "multiply",
          }}
          width="94"
          height="143"
          viewBox="0 0 94 143"
          fill="none"
        >
          <g
            style={{ mixBlendMode: "multiply" }}
            opacity="0.4"
            filter="url(#filter0_f_3001_547)"
          >
            <path
              d="M50.8881 131.817C114.378 178.852 212.228 122.767 212.346 50.8465L155.25 101.024C144.757 110.246 131.981 116.48 118.255 119.076L50.8881 131.817Z"
              fill="#B968A4"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_547"
              x="0.888184"
              y="0.84668"
              width="261.458"
              height="198.284"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_3001_547"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Blur Layer - Heavy with backdrop filter */}
      <svg
        className="absolute w-[200px] h-[200px] hover:scale-110 transition-transform duration-500"
        style={{
          filter: "blur(8.322147369384766px)",
          backdropFilter: "blur(8.322147369384766px)",
          left: "1352px",
          top: "546px",
        }}
        width="119"
        height="132"
        viewBox="0 0 119 132"
        fill="none"
      >
        <foreignObject
          x="-0.00489044"
          y="0.954338"
          width="261.584"
          height="261.584"
        >
          <div
            style={{
              backdropFilter: "blur(8.32px)",
              clipPath: "url(#bgblur_0_3001_548_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter="url(#filter0_f_3001_548)">
          <circle
            cx="100"
            cy="100"
            r="100"
            transform="matrix(-1 0 0 1 230.787 31.7461)"
            fill="url(#paint0_radial_3001_548)"
            style={{ mixBlendMode: "multiply" }}
          />
          <circle
            cx="100"
            cy="100"
            r="100"
            transform="matrix(-1 0 0 1 230.787 31.7461)"
            stroke="white"
            strokeWidth="28.2953"
            style={{ mixBlendMode: "multiply" }}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3001_548"
            x="-0.00489044"
            y="0.954338"
            width="261.584"
            height="261.584"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.32215"
              result="effect1_foregroundBlur_3001_548"
            />
          </filter>
          <clipPath
            id="bgblur_0_3001_548_clip_path"
            transform="translate(0.00489044 -0.954338)"
          >
            <circle
              cx="100"
              cy="100"
              r="100"
              transform="matrix(-1 0 0 1 230.787 31.7461)"
            />
          </clipPath>
          <radialGradient
            id="paint0_radial_3001_548"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(100 100) rotate(4.77832) scale(93.1398)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Medium Comet - udarvis */}
      <div className="absolute top-[478px] left-[694px] w-[80px] h-[80px]">
        {/* Blur effects */}
        <svg
          className="absolute w-[80px] h-[80px] animate-float"
          style={{
            filter: "blur(30px)",
            left: "0px",
            top: "0px",
            animationDelay: "1s",
          }}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_550)">
            <circle
              cx="100"
              cy="99.9999"
              r="39.9999"
              fill="url(#paint0_linear_3001_550)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_550"
              x="0.000244141"
              y="0"
              width="200"
              height="200"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="30"
                result="effect1_foregroundBlur_3001_550"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_550"
              x1="175.156"
              y1="64.2187"
              x2="96.0939"
              y2="151.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Heavy blur */}
        <svg
          className="absolute w-[80px] h-[80px] animate-pulse"
          style={{ filter: "blur(100px)", left: "0px", top: "0px" }}
          width="480"
          height="368"
          viewBox="0 0 480 368"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_551)">
            <circle
              cx="240"
              cy="240"
              r="39.9999"
              fill="url(#paint0_linear_3001_551)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_551"
              x="0.000244141"
              y="0"
              width="480"
              height="480"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_3001_551"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_551"
              x1="315.156"
              y1="204.219"
              x2="236.094"
              y2="291.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Main body */}
        <svg
          className="absolute w-[80px] h-[80px] hover:scale-110 transition-transform duration-500"
          style={{ left: "0px", top: "0px" }}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle
            cx="39.9999"
            cy="39.9999"
            r="39.9999"
            fill="url(#paint0_linear_3001_552)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_3001_552"
              x1="115.156"
              y1="4.21875"
              x2="36.0937"
              y2="91.8748"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Highlight */}
        <svg
          className="absolute w-[32px] h-[26px] animate-pulse"
          style={{ filter: "blur(10.5px)", left: "40px", top: "6px" }}
          width="75"
          height="70"
          viewBox="0 0 75 70"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_553)">
            <path
              d="M20.9997 23.4395C35.8425 16.252 56.7762 36.5645 53.0268 48.2832L52.2422 47.2819C44.3478 37.2072 34.0954 29.23 22.3893 24.0539L20.9997 23.4395Z"
              fill="#FBD3CD"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_553"
              x="-0.000244141"
              y="0.9375"
              width="74.4688"
              height="68.3457"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_3001_553"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        {/* Shadow */}
        <svg
          className="absolute w-[43px] h-[39px] opacity-40"
          style={{
            filter: "blur(25px)",
            left: "5px",
            top: "37px",
            mixBlendMode: "multiply",
          }}
          width="144"
          height="140"
          viewBox="0 0 144 140"
          fill="none"
        >
          <g
            style={{ mixBlendMode: "multiply" }}
            opacity="0.4"
            filter="url(#filter0_f_3001_554)"
          >
            <path
              d="M93.3434 88.0624C70.3747 97.1249 45.3748 72.2812 51.1561 50.5625L56.1947 58.1204C63.9432 69.7432 74.6709 79.0719 87.2569 85.1319L93.3434 88.0624Z"
              fill="#604BC5"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_554"
              x="0.312256"
              y="0.5625"
              width="143.031"
              height="139.417"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_3001_554"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Orbital Path */}
      <svg
        className="absolute w-[1211px] h-[260px] opacity-12"
        style={{
          transform: "rotate(-168.568deg)",
          left: "73px",
          top: "281px",
        }}
        width="1192"
        height="303"
        viewBox="0 0 1192 303"
        fill="none"
      >
        <path
          d="M597.315 43.519C413.254 77.5134 260.685 120.768 155.928 164.307C103.546 186.079 63.1435 207.911 36.7379 228.677C23.5347 239.06 13.8526 249.16 7.91682 258.832C1.98338 268.5 -0.189264 277.712 1.56324 286.349C3.31577 294.986 8.92711 302.723 18.2005 309.52C27.4778 316.32 40.3935 322.158 56.6832 326.988C89.2619 336.647 135.229 342.247 192.288 343.522C306.398 346.074 464.754 331.337 648.816 297.342C832.877 263.347 971.972 222.165 1063.25 180.702C1108.9 159.968 1142.56 139.176 1163.91 119.199C1185.27 99.2094 1194.22 80.1303 1190.7 62.7948C1187.18 45.4632 1171.5 31.2832 1143.96 20.8495C1116.44 10.4221 1077.22 3.79091 1026.9 1.4804C926.261 -3.14022 781.378 9.52407 597.315 43.519Z"
          stroke="url(#paint0_radial_3001_555)"
          strokeOpacity="0.12"
        />
        <path
          d="M597.315 43.519C413.254 77.5134 260.685 120.768 155.928 164.307C103.546 186.079 63.1435 207.911 36.7379 228.677C23.5347 239.06 13.8526 249.16 7.91682 258.832C1.98338 268.5 -0.189264 277.712 1.56324 286.349C3.31577 294.986 8.92711 302.723 18.2005 309.52C27.4778 316.32 40.3935 322.158 56.6832 326.988C89.2619 336.647 135.229 342.247 192.288 343.522C306.398 346.074 464.754 331.337 648.816 297.342C832.877 263.347 971.972 222.165 1063.25 180.702C1108.9 159.968 1142.56 139.176 1163.91 119.199C1185.27 99.2094 1194.22 80.1303 1190.7 62.7948C1187.18 45.4632 1171.5 31.2832 1143.96 20.8495C1116.44 10.4221 1077.22 3.79091 1026.9 1.4804C926.261 -3.14022 781.378 9.52407 597.315 43.519Z"
          stroke="url(#paint1_radial_3001_555)"
          strokeOpacity="0.12"
        />
        <defs>
          <radialGradient
            id="paint0_radial_3001_555"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(123.33 339.425) rotate(-43.8961) scale(331.523 1071.93)"
          >
            <stop stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_3001_555"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.1926 321.279) rotate(-66.1941) scale(48.9738 228.08)"
          >
            <stop stopColor="white" stopOpacity="0.6"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>

      {/* Orbital Star */}
      <svg
        className="absolute w-[8px] h-[8px] animate-spin"
        style={{
          transform: "rotate(-65.207deg)",
          left: "96px",
          top: "627px",
        }}
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
      >
        <path
          d="M0 7.3457C2.11061 5.48325 3.34521 2.8145 3.39312 4.64132e-05C5.12697 2.13979 7.73169 3.38566 10.4857 3.39253L10.7388 3.39316C8.49678 5.15438 7.23516 7.88992 7.34566 10.7388L7.1815 10.5465C5.39312 8.45076 2.75412 7.27458 0 7.3457Z"
          fill="#FAFAFF"
        ></path>
      </svg>

      {/* Small Planet */}
      <div className="absolute top-[188px] left-[847px] w-[18px] h-[18px] opacity-40">
        <svg
          width="112"
          height="111"
          viewBox="0 0 112 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float hover:scale-110 transition-transform duration-300"
          style={{ animationDelay: "1.5s" }}
        >
          <g opacity="0.4">
            <g filter="url(#filter0_f_3001_557)">
              <circle
                cx="56.1854"
                cy="55.6146"
                r="8.30701"
                fill="#6852D6"
              ></circle>
            </g>
            <g filter="url(#filter1_f_3001_557)">
              <ellipse
                cx="55.3086"
                cy="56"
                rx="9"
                ry="9"
                fill="url(#paint0_linear_3001_557)"
              ></ellipse>
            </g>
            <g opacity="0.6" filter="url(#filter2_f_3001_557)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.0157 64.9997C58.4427 64.9997 62.0314 61.4109 62.0314 56.984C62.0314 56.824 62.0267 56.6651 62.0175 56.5075C61.7862 60.2146 58.7062 63.1498 54.9408 63.1498C51.0247 63.1498 47.8501 59.9752 47.8501 56.0591C47.8501 52.293 50.7862 49.2127 54.4942 48.9823C54.3359 48.973 54.1764 48.9683 54.0157 48.9683C49.5888 48.9683 46 52.557 46 56.984C46 61.4109 49.5888 64.9997 54.0157 64.9997Z"
                fill="#0A0914"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_557"
              x="0.82502"
              y="0.254219"
              width="110.721"
              height="110.721"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="23.5267"
                result="effect1_foregroundBlur_3001_557"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_3001_557"
              x="42.3086"
              y="43"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3001_557"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_3001_557"
              x="10.6404"
              y="13.6086"
              width="86.7508"
              height="86.7505"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="17.6798"
                result="effect1_foregroundBlur_3001_557"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_557"
              x1="67.4775"
              y1="45.7115"
              x2="47.6447"
              y2="55.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCB8A8"></stop>
              <stop offset="0.484375" stopColor="#B968A4"></stop>
              <stop offset="1" stopColor="#756CF7"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Large Gaya Comet */}
      <div className="absolute top-[467px] left-[168px] w-[160px] h-[160px]">
        {/* Blur layers */}
        <svg
          className="absolute w-[160px] h-[160px] animate-float"
          style={{
            filter: "blur(60px)",
            left: "0px",
            top: "0px",
            animationDelay: "2s",
          }}
          width="400"
          height="299"
          viewBox="0 0 400 299"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_564)">
            <ellipse
              cx="200"
              cy="200"
              rx="80.0001"
              ry="79.9999"
              fill="url(#paint0_linear_3001_564)"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_564"
              x="-0.000144958"
              y="-0.000144958"
              width="400"
              height="400"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="60.0001"
                result="effect1_foregroundBlur_3001_564"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_564"
              x1="338.438"
              y1="147.187"
              x2="179.688"
              y2="310.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.118772" stopColor="#FFB590"></stop>
              <stop offset="0.419957" stopColor="#FF7F3E"></stop>
              <stop offset="1" stopColor="#45368D"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Heavy blur */}
        <svg
          className="absolute w-[160px] h-[160px] animate-pulse"
          style={{ filter: "blur(200px)", left: "0px", top: "0px" }}
          width="728"
          height="579"
          viewBox="0 0 728 579"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_565)">
            <ellipse
              cx="248"
              cy="480"
              rx="80.0001"
              ry="79.9999"
              fill="url(#paint0_linear_3001_565)"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_565"
              x="-232"
              y="-0.000488281"
              width="960.001"
              height="960.001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_3001_565"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_565"
              x1="386.438"
              y1="427.187"
              x2="227.688"
              y2="590.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.118772" stopColor="#FFB590"></stop>
              <stop offset="0.419957" stopColor="#FF7F3E"></stop>
              <stop offset="1" stopColor="#45368D"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Main body */}
        <svg
          className="absolute w-[160px] h-[160px] hover:scale-105 transition-transform duration-700"
          style={{ left: "0px", top: "0px" }}
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
        >
          <ellipse
            cx="80.0001"
            cy="79.9999"
            rx="80.0001"
            ry="79.9999"
            fill="url(#paint0_linear_3001_566)"
          ></ellipse>
          <defs>
            <linearGradient
              id="paint0_linear_3001_566"
              x1="218.438"
              y1="27.1875"
              x2="59.6878"
              y2="190.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.118772" stopColor="#FFB590"></stop>
              <stop offset="0.419957" stopColor="#FF7F3E"></stop>
              <stop offset="1" stopColor="#45368D"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Highlight */}
        <svg
          className="absolute w-[65px] h-[53px] animate-pulse"
          style={{ filter: "blur(21px)", left: "80px", top: "12px" }}
          width="149"
          height="138"
          viewBox="0 0 149 138"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_567)">
            <path
              d="M42 45.8789C71.6856 31.5039 113.553 72.1289 106.054 95.5664L104.736 93.8087C88.6421 72.3543 66.9305 55.7668 42 45.8789Z"
              fill="#FFC1A1"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_567"
              x="-4.95911e-05"
              y="0.87495"
              width="148.938"
              height="136.692"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="21"
                result="effect1_foregroundBlur_3001_567"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        {/* Shadow */}
        <svg
          className="absolute w-[86px] h-[79px] opacity-30"
          style={{
            filter: "blur(50px)",
            left: "15px",
            top: "64px",
            mixBlendMode: "multiply",
          }}
          width="287"
          height="215"
          viewBox="0 0 287 215"
          fill="none"
        >
          <g
            style={{ mixBlendMode: "multiply" }}
            opacity="0.3"
            filter="url(#filter0_f_3001_568)"
          >
            <path
              d="M186.625 175.375C140.688 193.5 90.6876 143.812 102.25 100.375L112.327 115.491C127.824 138.736 149.28 157.394 174.452 169.514L186.625 175.375Z"
              fill="#45368D"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_568"
              x="0.562378"
              y="0.374878"
              width="286.063"
              height="278.833"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="50.0001"
                result="effect1_foregroundBlur_3001_568"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute w-[1440px] h-[233px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10, 9, 20, 0.00) 0%, #0A0914 100%)",
          left: "0px",
          top: "413px",
        }}
      />

      {/* Partner Registration Form - FIXED Responsive Version */}
      <div
        className="w-full max-w-[528px] min-h-[434px] card-interactive mouse-tracker mx-auto lg:mx-0 lg:absolute lg:right-[10%] lg:top-[132px]"
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(250, 250, 255, 0.04)",
          background: "rgba(250, 250, 255, 0.08)",
          backdropFilter: "blur(50px)",
          padding: "32px",
          zIndex: 10,
        }}
      >
        {/* Form Content - FIXED Responsive Layout */}
        <h2
          className="text-[32px] font-semibold leading-[106%] text-[#FAFAFF] mb-8"
          style={{
            fontFamily:
              "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Become a partner
        </h2>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          {/* Full Name Input */}
          <div className="space-y-1.5">
            <label
              className="block text-base font-medium text-[#FAFAFF] opacity-75"
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Type your name here..."
              className="w-full p-[13px_16px] rounded-[14px] border border-white/10 bg-white/5 text-[#FAFAFF] placeholder:text-[#FAFAFF]/65 hover:border-white/20 focus:border-[#6852D6] focus:ring-2 focus:ring-[#6852D6]/20 transition-all duration-300"
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: "640",
                lineHeight: "112%",
                letterSpacing: "0.08px",
              }}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label
              className="block text-base font-medium text-[#FAFAFF] opacity-75"
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Email address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-75">
                <svg
                  className="w-[15px] h-[12px] fill-[#FAFAFF]"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                >
                  <path
                    d="M1.42243 3.45429C1.22247 3.31147 1.1225 3.24005 1.03533 3.23078C0.904983 3.21692 0.774344 3.28415 0.709861 3.39828C0.666743 3.47459 0.666745 3.5961 0.666748 3.83912V8.16087C0.66674 8.69751 0.666733 9.14042 0.696211 9.50122C0.726828 9.87595 0.792538 10.2204 0.957398 10.544C1.21306 11.0457 1.62101 11.4537 2.12277 11.7094C2.44633 11.8742 2.7908 11.9399 3.16553 11.9705C3.52632 12 3.96923 12 4.50587 12H11.4943C12.0309 12 12.4738 12 12.8346 11.9705C13.2094 11.9399 13.5538 11.8742 13.8774 11.7094C14.3792 11.4537 14.7871 11.0457 15.0428 10.544C15.2076 10.2204 15.2733 9.87595 15.304 9.50122C15.3334 9.14042 15.3334 8.69752 15.3334 8.16088V3.83912C15.3334 3.72001 15.3334 3.66045 15.3225 3.61886C15.2732 3.43084 15.0688 3.32374 14.8861 3.39021C14.8457 3.40491 14.7961 3.43924 14.6969 3.50789L9.53552 7.08129C9.16956 7.33544 8.84824 7.55859 8.48321 7.64707C8.16393 7.72446 7.8305 7.72201 7.51239 7.63993C7.1487 7.54609 6.8307 7.31824 6.46851 7.05874L1.42243 3.45429Z"
                    fill="#FAFAFF"
                  />
                  <path
                    d="M14.7553 1.84581C14.8784 1.76061 14.9399 1.71801 14.9777 1.64949C15.007 1.59629 15.0238 1.51203 15.0171 1.45163C15.0084 1.37386 14.9754 1.32251 14.9093 1.21982C14.656 0.826428 14.2916 0.501704 13.8774 0.29065C13.5538 0.12579 13.2094 0.0600801 12.8346 0.0294633C12.4738 -1.47695e-05 12.0309 -7.96811e-06 11.4943 2.74431e-07H4.50588C3.96924 -7.96811e-06 3.52633 -1.4772e-05 3.16553 0.0294633C2.7908 0.0600801 2.44633 0.12579 2.12277 0.29065C1.75009 0.480544 1.42795 0.755068 1.18299 1.0889C1.10593 1.19393 1.06739 1.24644 1.0547 1.32614C1.04477 1.38846 1.05863 1.47505 1.08752 1.53116C1.12446 1.60291 1.18854 1.64868 1.3167 1.74022L7.16677 5.91884C7.65158 6.26514 7.75446 6.32539 7.84551 6.34888C7.95154 6.37624 8.06269 6.37706 8.16911 6.35126C8.26049 6.32911 8.36425 6.27038 8.8541 5.93125L14.7553 1.84581Z"
                    fill="#FAFAFF"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Type your email..."
                className="w-full p-[13px_16px] pl-11 rounded-[14px] border border-white/10 bg-white/5 text-[#FAFAFF] placeholder:text-[#FAFAFF]/65 hover:border-white/20 focus:border-[#6852D6] focus:ring-2 focus:ring-[#6852D6]/20 transition-all duration-300"
                style={{
                  fontFamily:
                    "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: "640",
                  lineHeight: "112%",
                  letterSpacing: "0.08px",
                }}
              />
            </div>
          </div>

          {/* Company Name Input */}
          <div className="space-y-1.5">
            <label
              className="block text-base font-medium text-[#FAFAFF] opacity-75"
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Companies name
            </label>
            <input
              type="text"
              placeholder="Type your company's name..."
              className="w-full p-[13px_16px] rounded-[14px] border border-white/10 bg-white/5 text-[#FAFAFF] placeholder:text-[#FAFAFF]/65 hover:border-white/20 focus:border-[#6852D6] focus:ring-2 focus:ring-[#6852D6]/20 transition-all duration-300"
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: "640",
                lineHeight: "112%",
                letterSpacing: "0.08px",
              }}
            />
          </div>

          {/* Submit Button - Perfect Clean Design */}
          <div className="pt-4">
            <button
              type="submit"
              className="
                relative overflow-hidden
                inline-flex items-center justify-center
                w-[157px] h-[44px]
                px-4 py-3 gap-2.5
                rounded-xl
                bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]
                text-sm font-semibold text-white
                border-none cursor-pointer
                transition-all duration-200 ease-out
                hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-purple-400/50
                shadow-md shadow-purple-500/20
              "
              style={{
                fontFamily:
                  "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                letterSpacing: "0.40px",
                lineHeight: "150%",
              }}
            >
              {/* Clean highlight effect from Figma */}
              <div
                className="absolute w-10 h-10 rounded-full bg-[#D8D2F4] opacity-80 blur-[20px] pointer-events-none"
                style={{
                  left: "41.193px",
                  top: "-15.049px",
                }}
              />

              {/* Button text */}
              <span className="relative z-10 font-semibold">
                Submit application
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Left Side Udarvis Comet */}
      <div className="absolute top-[335px] left-[-60px] w-[120px] h-[120px]">
        {/* Blur layers */}
        <svg
          className="absolute w-[120px] h-[120px] animate-float"
          style={{
            filter: "blur(45px)",
            left: "0px",
            top: "0px",
            animationDelay: "0.5s",
          }}
          width="150"
          height="300"
          viewBox="0 0 150 300"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_590)">
            <circle
              cx="-5.72205e-05"
              cy="150"
              r="59.9999"
              fill="url(#paint0_linear_3001_590)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_590"
              x="-150"
              y="-8.39233e-05"
              width="300"
              height="300"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="45"
                result="effect1_foregroundBlur_3001_590"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_590"
              x1="112.734"
              y1="96.3281"
              x2="-5.85944"
              y2="227.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Heavy blur */}
        <svg
          className="absolute w-[120px] h-[120px] animate-pulse"
          style={{ filter: "blur(150px)", left: "0px", top: "0px" }}
          width="360"
          height="611"
          viewBox="0 0 360 611"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_591)">
            <circle
              cx="-5.72205e-05"
              cy="360"
              r="59.9999"
              fill="url(#paint0_linear_3001_591)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_591"
              x="-360"
              y="-0.000274658"
              width="720.001"
              height="720.001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_3001_591"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_3001_591"
              x1="112.734"
              y1="306.328"
              x2="-5.85944"
              y2="437.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Main body */}
        <svg
          className="absolute w-[120px] h-[120px] hover:scale-105 transition-transform duration-500"
          style={{ left: "0px", top: "0px" }}
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
        >
          <circle
            cx="-5.72205e-05"
            cy="59.9999"
            r="59.9999"
            fill="url(#paint0_linear_3001_592)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_3001_592"
              x1="112.734"
              y1="6.32812"
              x2="-5.85944"
              y2="137.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE5D8"></stop>
              <stop offset="0.123865" stopColor="#FFD2BB"></stop>
              <stop offset="1" stopColor="#604BC5"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Highlight */}
        <svg
          className="absolute w-[49px] h-[40px] animate-pulse"
          style={{ filter: "blur(15.75px)", left: "60px", top: "9px" }}
          width="81"
          height="103"
          viewBox="0 0 81 103"
          fill="none"
        >
          <g filter="url(#filter0_f_3001_593)">
            <path
              d="M-0.000378212 34.1592C22.2639 23.378 53.6644 53.8467 48.0403 71.4248L46.8634 69.9229C35.0217 54.8108 19.6431 42.845 2.08407 35.0809L-0.000378212 34.1592Z"
              fill="#FBD3CD"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_593"
              x="-31.5005"
              y="0.406219"
              width="111.703"
              height="102.519"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="15.75"
                result="effect1_foregroundBlur_3001_593"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        {/* Shadow */}
        <svg
          className="absolute w-[65px] h-[59px] opacity-40"
          style={{
            filter: "blur(37.5px)",
            left: "-52px",
            top: "55px",
            mixBlendMode: "multiply",
          }}
          width="88"
          height="210"
          viewBox="0 0 88 210"
          fill="none"
        >
          <g
            style={{ mixBlendMode: "multiply" }}
            opacity="0.4"
            filter="url(#filter0_f_3001_594)"
          >
            <path
              d="M12.5155 132.094C-21.9375 145.687 -59.4374 108.422 -50.7655 75.8438L-43.2076 87.1806C-31.5848 104.615 -15.4933 118.608 3.38576 127.698L12.5155 132.094Z"
              fill="#604BC5"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_3001_594"
              x="-127.031"
              y="0.843681"
              width="214.547"
              height="209.125"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="37.5"
                result="effect1_foregroundBlur_3001_594"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content Section - Exact Figma Layout */}
      <div
        className="absolute flex flex-col items-start gap-5 text-reveal"
        style={{
          width: "480px",
          left: "176px",
          top: "188px",
          height: "200px",
        }}
      >
        <h1
          className={`self-stretch text-[#FAFAFF] text-5xl font-semibold leading-[106%] ${isVisible ? "in-view" : ""}`}
          style={{
            fontFamily:
              "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          <span>Join the CometChat partner universe</span>
        </h1>
        <p
          className={`self-stretch text-[#FAFAFF] text-[22px] font-medium leading-[120%] tracking-[0.11px] opacity-75 ${isVisible ? "in-view" : ""}`}
          style={{
            fontFamily:
              "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          <span>
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </span>
        </p>
      </div>

      {/* Mouse tracking interactive element */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(255, 127, 62, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "all 0.1s ease-out",
          zIndex: 5,
        }}
      />
    </section>
  );
};

export default Hero;

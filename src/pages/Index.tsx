import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnersSection from "@/components/PartnersSection";
import PartnerAdvantages from "@/components/PartnerAdvantages";
import PartnershipPrograms from "@/components/PartnershipPrograms";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0914] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PartnersSection />
        <PartnerAdvantages />
        <PartnershipPrograms />
        <FAQ />

        {/* Pre-footer - Get started for free section */}
        <section className="relative min-h-[480px] bg-[#0A0914] py-20 overflow-hidden">
          {/* Background Stars Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary stars pattern */}
            <div className="absolute top-[20%] left-[14%] w-1 h-1 bg-[#FCFCFE] opacity-55 rounded-full"></div>
            <div className="absolute top-[15%] left-[19%] w-1 h-1 bg-[#FAFAFF] opacity-40 rounded-full"></div>
            <div className="absolute top-[19%] left-[7%] w-1 h-1 bg-[#FAFAFF] opacity-40 rounded-full"></div>
            <div className="absolute top-[26%] left-[11%] w-1 h-1 bg-[#FAFAFF] opacity-40 rounded-full"></div>
            <div className="absolute top-[43%] left-[2%] w-1 h-1 bg-[#FAFAFF] opacity-40 rounded-full"></div>
            <div className="absolute top-[11%] right-[6%] w-1 h-1 bg-[#FAFAFF] opacity-40 rounded-full"></div>
            <div className="absolute top-[25%] left-[25%] w-1.5 h-1.5 bg-[#FCFCFE] opacity-55 rounded-full"></div>
            <div className="absolute top-[34%] left-[21%] w-1.5 h-1.5 bg-[#FAFAFF] opacity-46 rounded-full"></div>
            <div className="absolute top-[33%] left-[4%] w-1 h-1 bg-[#FCFCFE] opacity-55 rounded-full"></div>
            <div className="absolute top-[23%] left-[0.3%] w-1.5 h-1.5 bg-[#FAFAFF] opacity-46 rounded-full"></div>

            {/* Colored stars pattern */}
            <div className="absolute top-[27%] left-[14%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[15%] left-[19%] w-1 h-1 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[19%] left-[7%] w-1 h-1 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[26%] left-[11%] w-1 h-1 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[43%] left-[2%] w-1 h-1 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[11%] right-[6%] w-1 h-1 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[25%] left-[25%] w-1.5 h-1.5 bg-[#45368D] rounded-full"></div>
            <div className="absolute top-[34%] left-[21%] w-1.5 h-1.5 bg-[#45368D] rounded-full"></div>
            <div className="absolute top-[33%] left-[4%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[23%] left-[0.3%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[39%] left-[12%] w-1.5 h-1.5 bg-[#6852D6] opacity-50 rounded-full"></div>

            {/* Right side stars */}
            <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[29%] right-[38%] w-1.5 h-1.5 bg-[#B15324] rounded-full"></div>
            <div className="absolute top-[20%] right-[17%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[18%] right-[27%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[16%] right-[29%] w-1.5 h-1.5 bg-[#6852D6] opacity-50 rounded-full"></div>
            <div className="absolute top-[0%] right-[29%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[7%] right-[11%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[1%] right-[8%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[21%] right-[8%] w-1.5 h-1.5 bg-[#6852D6] opacity-50 rounded-full"></div>
            <div className="absolute top-[30%] right-[12%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[35%] right-[7%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[48%] right-[16%] w-1.5 h-1.5 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[38%] right-[33%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[43%] right-[8%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[41%] right-[3%] w-1 h-1 bg-[#6852D6] rounded-full"></div>
            <div className="absolute top-[50%] right-[8%] w-1 h-1 bg-[#45368D] rounded-full"></div>
          </div>

          {/* Background Gradient Illustration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-full h-full"
              viewBox="0 0 1440 817"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  id="filter0_f_bg"
                  x="-104.111"
                  y="0.871094"
                  width="1463.88"
                  height="699.344"
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
                    stdDeviation="100"
                    result="effect1_foregroundBlur_bg"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_bg"
                  x1="121"
                  y1="426.972"
                  x2="1067"
                  y2="313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5852D6" />
                  <stop offset="1" stopColor="#5852D6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_bg"
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
              <g filter="url(#filter0_f_bg)">
                <path
                  d="M187 458.998C272.5 269.999 780 246.998 1116.5 408.498"
                  stroke="url(#paint0_linear_bg)"
                  strokeWidth="200"
                />
              </g>
              <path
                d="M1616.27 679.722C1604.95 466.693 1020.29 324.579 310.386 362.302C-399.513 400.025 -965.823 603.3 -954.503 816.329"
                stroke="url(#paint1_linear_bg)"
                strokeOpacity="0.14"
              />
            </svg>
          </div>

          {/* Left Floating Planet */}
          <div className="absolute -left-[213px] top-[50px] w-[395px] h-[395px] rotate-[-13.382deg] opacity-60 animate-float-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FCB8A8] via-[#B968A4] to-[#756CF7] blur-sm"></div>
          </div>

          {/* Left Blur Effects */}
          <div className="absolute left-[20px] top-[200px] w-[209px] h-[200px] rotate-[-4.369deg] opacity-40">
            <div className="w-full h-full rounded-full border-[28px] border-white bg-gradient-to-r from-white to-transparent blur-[8px] backdrop-blur-[8px]"></div>
          </div>

          {/* Right Floating Comet */}
          <div className="absolute right-[10%] bottom-[10%] w-[140px] h-[140px] animate-float">
            {/* Blur layers */}
            <div className="absolute inset-0 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#FFB590] via-[#FF7F3E] to-[#45368D] blur-[60px] opacity-80"></div>
            <div className="absolute inset-0 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#FFB590] via-[#FF7F3E] to-[#45368D] blur-[100px] opacity-60"></div>
            {/* Main comet */}
            <div className="absolute inset-0 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#FFB590] via-[#FF7F3E] to-[#45368D]"></div>
            {/* Highlight */}
            <div className="absolute top-[10px] right-[10px] w-[57px] h-[46px] bg-[#FFC1A1] rounded-full blur-[15px] opacity-70"></div>
            {/* Shadow */}
            <div className="absolute bottom-[10px] left-[13px] w-[75px] h-[69px] bg-[#45368D] opacity-30 mix-blend-multiply blur-[25px]"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-8 text-center">
            <div className="max-w-[640px] mx-auto space-y-8">
              {/* Title & Description */}
              <div className="space-y-4">
                <h2
                  className="text-[48px] sm:text-[40px] lg:text-[48px] font-semibold leading-[106%] text-[#FAFAFF]"
                  style={{
                    fontFamily:
                      "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Get started for free
                </h2>
                <p
                  className="max-w-[480px] mx-auto text-[22px] sm:text-[18px] lg:text-[22px] font-medium leading-[120%] tracking-[0.11px] text-[#FAFAFF] opacity-75"
                  style={{
                    fontFamily:
                      "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Build and test for as long as you need. Pick a plan when
                  you're ready.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  className="
                    flex items-center justify-center gap-2.5
                    px-4 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    text-sm font-semibold text-[#FAFAFF]
                    transition-all duration-300
                    hover:border-white/20 hover:bg-white/[0.04]
                    focus:outline-none focus:ring-2 focus:ring-white/20
                  "
                  style={{
                    fontFamily:
                      "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Start free trial
                </button>
                <button
                  className="
                    relative overflow-hidden
                    flex items-center justify-center gap-2.5
                    px-4 py-3
                    rounded-xl
                    bg-[#6852D6]
                    text-sm font-semibold text-[#FCFCFE]
                    transition-all duration-300
                    hover:bg-[#7863E0] hover:scale-[1.02]
                    focus:outline-none focus:ring-2 focus:ring-[#6852D6]/50
                  "
                  style={{
                    fontFamily:
                      "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {/* Highlight effect */}
                  <div className="absolute w-10 h-10 rounded-full bg-[#D8D2F4] opacity-80 blur-[20px] pointer-events-none -top-4 left-10"></div>
                  <span className="relative z-10">Schedule a demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;

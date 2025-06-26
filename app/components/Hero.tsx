import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden "
      aria-label="homepage section"
    >
      <div className="relative z-1 text-center px-6">
        <h1
          className="font-bold bg-gradient-to-r cursor-pointer select-none from-[#DAA520]  to-[#DAA520] bg-clip-text text-transparent transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_50px_rgba(255,215,0)]"
          style={{
            fontSize: "clamp(4rem, 12vw, 10rem)",
          }}
        >
          mbdeviant
        </h1>
        <p className="text-gray-300 cursor-default  text-sm md:text-lg mt-4">
          that&apos;s the name internet knows me by
        </p>
      </div>
    </section>
  );
}

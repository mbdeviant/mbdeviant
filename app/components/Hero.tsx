export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-8">
      <h1
        className="cursor-default font-bold bg-gradient-to-r from-orange-700 via-pink-700 to-purple-700 bg-clip-text text-transparent transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_50px_rgba(255,100,100)]"
        style={{
          fontSize: "clamp(3.5rem, 10vw, 8rem)",
          transform: "scale(1)",
        }}
      >
        mbdeviant
      </h1>
      <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-300">
        at least that&apos;s the name the internet knows me by
      </p>
    </section>
  );
}

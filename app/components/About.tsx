import QuestionMark from "./QuestionMark";

export default function About() {
  return (
    <section className="relative w-full flex flex-col z-2 cursor-default lg:flex-row items-center justify-center text-center lg:text-left px-8 py-20 gap-12 bg-transparent text-white">
      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
        <QuestionMark />
      </div>

      <div className="w-full lg:w-1/2 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#DAA520] to-[#FFD700] bg-clip-text text-transparent">
          About
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          full-stack developer building web applications focused on clarity,
          usability and not losing sanity. I like to keep things light, modern
          and lowercase. not everything needs to be flashy, but they should feel
          right. sometimes obsessed with the details most people scroll past.
        </p>
      </div>
    </section>
  );
}

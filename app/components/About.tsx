import QuestionMark from "./QuestionMark";

export default function About() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-8 py-20 gap-12 bg-black text-white">
      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
        <QuestionMark />
      </div>

      <div className="w-full lg:w-1/2 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          about me
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          full-stack developer building and deploying web applications. always
          looking for the best way to do something, in any context. the web is
          for everyone, and I build like it should be. also, I am allergic to
          upper-case letters.
        </p>
      </div>
    </section>
  );
}

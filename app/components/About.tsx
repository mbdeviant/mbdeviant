import QuestionMark from "./QuestionMark";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center text-center px-8 py-20 bg-black text-white">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          well, who am I?
        </h2>
        <QuestionMark />
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

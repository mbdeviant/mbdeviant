import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative w-full px-6 py-24 z-2 cursor-default text-white text-center bg-transparent">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#DAA520] mb-10 tracking-wide">
        Contact
      </h2>

      <p className="text-lg sm:text-xl mb-4 text-gray-300">
        Write me an e-mail at:
      </p>
      <a
        href="mailto:mbdeviant@gmail.com"
        className="text-2xl sm:text-3xl font-semibold text-[#DAA520] hover:underline mb-10 inline-block"
      >
        mbdeviant@gmail.com
      </a>

      <p className="text-lg sm:text-xl mt-10 mb-4 text-gray-300">
        or reach me through;
      </p>
      <div className="flex justify-center gap-8 mb-16">
        <a
          href="https://linkedin.com/in/mbdev-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#DAA520] transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/mbdeviant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#DAA520] transition"
        >
          <FaGithub size={30} />
        </a>
      </div>

      <hr className="border-gray-800 mb-6 w-3/4 mx-auto" />
      <p className="text-xs text-gray-600">© 2025 - mbdeviant</p>
    </section>
  );
}

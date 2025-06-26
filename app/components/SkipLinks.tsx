export default function SkipLinks() {
  return (
    <nav aria-label="Skip links">
      <a
        href="#home-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to homepage section
      </a>
      <a
        href="#about-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-12 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to about section
      </a>
      <a
        href="#projects-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-22 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to projects section
      </a>
      <a
        href="#tech-stack-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-32 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to tech stack section
      </a>
      <a
        href="#contact-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-42 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to contact section
      </a>
    </nav>
  );
}

export default function DocsSkipLinks() {
  return (
    <nav aria-label="Skip links">
      <a
        href="#project-title-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to project title
      </a>
      <a
        href="#overview-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-12 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to overview
      </a>
      <a
        href="#insights-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-22 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to insights
      </a>

      <a
        href="#build-notes-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-22 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to build notes
      </a>
      <a
        href="#summary-heading"
        className="sr-only focus:not-sr-only absolute left-2 top-22 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to summary
      </a>
    </nav>
  );
}

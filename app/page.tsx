import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

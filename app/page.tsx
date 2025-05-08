import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStackSection from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <TechStackSection />
      <Footer />
    </div>
  );
}

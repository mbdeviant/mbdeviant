import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}

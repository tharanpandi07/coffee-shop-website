import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <main>
      <Hero />
      <About />
      <Menu/>
      <Contact/>
    
    </main>
  );
}
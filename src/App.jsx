import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
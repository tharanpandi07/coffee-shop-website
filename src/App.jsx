import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loader onComplete={() => setLoading(false)} />
  ) : (
    <main>
      <Hero />
      {/* Next: About, Menu, Gallery and Contact sections */}
    </main>
  );
}
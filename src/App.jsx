import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

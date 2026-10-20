import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import CoffeeScene from "../components/CoffeeScene";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/coffee-poster.jpg"
      >
        <source src="/coffee-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readable text */}
      <div className="hero-overlay" />

      <Navbar />

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">
            <span className="eyebrow-line" />
            YOUR DAILY COFFEE RITUAL
          </p>

          <h1>
            A LITTLE
            <br />
            SLOWER.
            <br />
            <span className="hero-highlight">A LOT BETTER.</span>
          </h1>

          <p className="hero-description">
            Every cup tells a story. Discover the art of
            slowing down, one beautifully brewed coffee at a time.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="hero-button">
              Explore Our Menu
              <ArrowDownRight size={19} />
            </a>

            <a href="#about" className="hero-secondary">
              <span className="play-icon">
                <Play size={15} fill="currentColor" />
              </span>
              Our Story
            </a>
          </div>
        </motion.div>

        
        
      </div>

      <div className="hero-bottom">
        <a href="#about" className="scroll-indicator">
          <span className="scroll-dot" />
          SCROLL TO DISCOVER
        </a>

        <span className="hero-location">EST. WITH LOVE · BREWED DAILY</span>
      </div>
    </section>
  );
}
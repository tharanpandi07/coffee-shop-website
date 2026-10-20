import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-story" id="about">
      <motion.div
        className="about-image-wrap"
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
          alt="A warm and peaceful coffee shop"
          className="about-image"
        />

        <div className="about-image-caption">
          <Coffee size={17} />
          <span>YOUR EVERYDAY ESCAPE</span>
        </div>

        <p className="about-image-number">01 — OUR SPACE</p>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <p className="about-eyebrow">A LITTLE ABOUT US</p>

        <h2>
          Great coffee.
          <br />
          <span>Genuine moments.</span>
        </h2>

        <p className="about-description">
          At COFFE., we believe a great coffee experience is about
          more than what is in your cup. It is about how that cup
          makes you feel.
        </p>

        <p className="about-description">
          Inspired by the simple pleasure of slowing down, our
          philosophy brings together thoughtfully prepared coffee,
          inviting spaces, and the beauty of everyday rituals.
        </p>

        <p className="about-description">
          Whether you are starting your morning, catching up with
          a friend, or finding a quiet corner to think, we want
          every visit to feel special.
        </p>

        <div className="about-signature">
          <span />
          <p>Slow moments. Beautiful coffee.</p>
        </div>
      </motion.div>
    </section>
  );
}
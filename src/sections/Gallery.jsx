import { motion } from "framer-motion";
import "../styles/gallery.css";

const photos = [
  { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85", alt: "Warm, welcoming coffee shop interior", title: "A place to pause" },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85", alt: "Coffee shop counter and seating", title: "Made for moments" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85", alt: "Freshly brewed coffee", title: "The daily ritual" },
  { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=85", alt: "Barista preparing coffee", title: "Craft in every cup" },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <p className="gallery-eyebrow">LIFE AT COFFE.</p>
        <h2>Little moments, <em>beautifully brewed.</em></h2>
        <p>A glimpse into our space, our craft, and the moments that make us.</p>
      </div>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.figure className={`gallery-card gallery-card-${index + 1}`} key={photo.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

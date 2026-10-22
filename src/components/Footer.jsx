import { Coffee, ArrowUpRight } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home"><Coffee size={25} /><span>COFFE<span className="footer-gold">.</span></span></a>
          <p>A little slower, a lot better. Thoughtfully brewed coffee for the moments that matter.</p>
          <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg></a>
        </div>
        <div className="footer-column"><h3>Explore</h3><a href="#home">Home</a><a href="#about">Our Story</a><a href="#menu">Our Menu</a><a href="#gallery">Gallery</a></div>
        <div className="footer-column"><h3>Visit us</h3><p>Monday – Sunday</p><p>8:00 AM – 9:00 PM</p><a href="mailto:hello@coffe.com">hello@coffe.com <ArrowUpRight size={14} /></a></div>
        <div className="footer-note"><span>YOUR DAILY COFFEE RITUAL</span><h2>Good things<br /><em>take time.</em></h2><a href="#menu">Find your favourite <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} COFFE. All rights reserved.</span><a href="#home">Back to top ↑</a><span>Made with care & coffee.</span></div>
    </footer>
  );
}

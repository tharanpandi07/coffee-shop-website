import { useEffect } from "react";
import { Coffee } from "lucide-react";
import "../styles/loader.css";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-screen">
      <div className="loader-content">
        <div className="loader-icon">
          <Coffee size={42} />
        </div>

        <h1>COFFE<span>.</span></h1>
        <p>A LITTLE SLOWER. A LOT BETTER.</p>

        <div className="loader-track">
          <div className="loader-progress" />
        </div>
      </div>
    </div>
  );
}
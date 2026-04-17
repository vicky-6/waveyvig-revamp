import { useEffect } from "react";
import "./cursor.css";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="cursor-glow"></div>;
};

export default CursorGlow;
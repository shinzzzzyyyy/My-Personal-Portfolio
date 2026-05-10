// components/useCursor.js
import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;
    const move = (e) => {
      dot.style.left = e.clientX - 6 + "px";
      dot.style.top = e.clientY - 6 + "px";
      ring.style.left = e.clientX - 18 + "px";
      ring.style.top = e.clientY - 18 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}
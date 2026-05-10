// @ts-nocheck
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      const bar = document.getElementById("lp-progress");
      if (bar) bar.style.width = p + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return <div id="lp-progress" className="lp-progress" />;
}

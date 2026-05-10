// @ts-nocheck
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e) => { x = e.clientX; y = e.clientY; if (dot.current){ dot.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; }};
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    const id = requestAnimationFrame(loop);

    const grow = () => ring.current && (ring.current.style.width = "70px", ring.current.style.height = "70px");
    const shrink = () => ring.current && (ring.current.style.width = "42px", ring.current.style.height = "42px");
    document.querySelectorAll("a,button,.lp-proj,.lp-blog,.lp-skill").forEach(el => {
      el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink);
    });
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(id); };
  }, []);

  return (<>
    <div ref={dot} className="lp-cursor" />
    <div ref={ring} className="lp-cursor-ring" />
  </>);
}

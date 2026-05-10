// @ts-nocheck
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const links = [
  { id: "home", label: "Bosh sahifa" },
  { id: "about", label: "Men haqimda" },
  { id: "services", label: "Xizmatlar" },
  { id: "projects", label: "Loyihalar" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Bog‘lanish" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 200) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`lp-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="lp-container lp-nav-inner">
        <a href="#home" className="lp-logo" onClick={(e)=>{e.preventDefault();go("home");}}>
          <span className="lp-logo-dot" /> Asomiddin<span style={{color:"var(--gl-2)"}}>.</span>dev
        </a>

        <ul className="lp-nav-links">
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active===l.id?"active":""}
                 onClick={(e)=>{e.preventDefault();go(l.id);}}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{display:"flex",gap:10,alignItems:"center"}}>
         
          <button className="lp-burger" onClick={()=>setOpen(o=>!o)} aria-label="menu">
            {open ? <HiX size={20}/> : <HiMenuAlt4 size={20}/>}
          </button>
        </div>

        {open && (
          <div className="lp-mobile">
            {links.map(l=> <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault();go(l.id);}}>{l.label}</a>)}
            <Link to="/admin" onClick={()=>setOpen(false)} style={{color:"var(--gl-2)"}}>Admin Panel →</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";

const projects = [
  { img:p1, cat:"Dashboard", t:"Atlas Analytics", d:"Realtime SaaS analytics suite", size:"s-1" },
  { img:p3, cat:"Mobile UI", t:"Lumen Wallet", d:"Crypto wallet for the next generation", size:"s-2" },
  { img:p3, cat:"Mobile UI", t:"Lumen Wallet", d:"Crypto wallet for the next generation", size:"s-2" },
  { img:p4, cat:"AI Project", t:"Neuron OS", d:"Agentic workflow builder", size:"s-3" },
  { img:p2, cat:"Web App",   t:"Forge Studio", d:"Premium SaaS landing & marketing site", size:"s-4" },
  { img:p2, cat:"Web App",   t:"Forge Studio", d:"Premium SaaS landing & marketing site", size:"s-4" },
  { img:p5, cat:"CRM System", t:"Helix CRM",   d:"Enterprise sales pipeline platform",     size:"s-5" },
];

export default function Projects() {
  return (
    <section id="projects" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Loyihalarim</span>
          <h2 className="lp-h2">2019 — 2026 gacha qilingan eng sara loyihalar</h2>
          <p className="lp-sub">Mahalliy va xalqaro bizneslar uchun ishlab chiqilgan zamonaviy web platformalar, AI tizimlar, dashboardlar va avtomatlashtirish loyihalaridan saralangan ishlar to‘plami.</p>
        </div>

        <div className="lp-bento">
          {projects.map((p,i)=>(
            <motion.div key={i} className={`lp-proj ${p.size}`}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:i*.06}}>
              <img src={p.img} alt={p.t} loading="lazy"/>
              <div className="lp-proj-actions">
                <a href="#" aria-label="live"><FiExternalLink/></a>
                <a href="#" aria-label="github"><FiGithub/></a>
              </div>
              <div className="lp-proj-overlay">
                <span className="lp-proj-cat">{p.cat}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

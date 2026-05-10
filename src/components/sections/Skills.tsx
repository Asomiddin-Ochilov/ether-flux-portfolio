// @ts-nocheck
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiJavascript, SiMongodb, SiExpress, SiFirebase, SiGreensock, SiTypescript,SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { i:<FaHtml5/>, n:"HTML5", p:100 },
  { i:<FaCss3Alt/>, n:"CSS3", p:100 },
  { i:<SiJavascript/>, n:"JavaScript", p:100 },
  { i:<SiTypescript/>, n:"TypeScript", p:100 },
  { i:<FaReact/>, n:"React", p:100 },
  { i:<FaNodeJs/>, n:"Node.js", p:100 },
  { i:<SiMongodb/>, n:"MongoDB", p:100 },
  { i:<SiExpress/>, n:"Express", p:100 },
  { i:<SiFirebase/>, n:"Firebase", p:100 },
  { i:<SiGreensock/>, n:"GSAP", p:100 },
  { i:<FaFigma/>, n:"Figma", p:100 },
  { i:<SiOpenai/>, n:"AI Engineering", p:100 },
];

export default function Skills() {
  return (
    <section id="skills" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head center">
          <span className="lp-eyebrow">Texnologiyalar</span>
          <h2 className="lp-h2">Foydalanadigan texnologiyalarim.</h2>
          <p className="lp-sub">Yillar davomida shakllangan va real loyihalarda sinalgan texnologiyalar to‘plami. Trend ortidan quvish emas — tezkor, xavfsiz va sifatli mahsulot yaratishga xizmat qiladigan kuchli stack.</p>
        </div>

        <div className="lp-skills">
          {skills.map((s,i)=>(
            <motion.div key={i} className="lp-skill"
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:i*.04}}>
              <div className="ico">{s.i}</div>
              <h5>{s.n}</h5>
              <div className="lp-progress-ring" style={{["--p"]: s.p+"%"}}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

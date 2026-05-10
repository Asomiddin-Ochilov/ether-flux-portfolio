import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { HiArrowDownTray, HiArrowUpRight } from "react-icons/hi2";
import heroImg from "@/assets/img.png";

export default function Hero() {
  return (
    <section id="home" className="lp-hero">
      <div className="lp-container">
        <div className="lp-hero-grid">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            
            <h1>
              Full Stack <span className="accent">Web Developer</span>
              <br/> <span className="italic">+</span> Ai Specialist
            </h1>
            <p className="lead">
             Biznesingizni keyingi darajaga olib chiqadigan premium web saytlar, AI yechimlar va scalable tizimlar yarataman. 
Zamonaviy dizayn, yuqori tezlik va natijaga yo‘naltirilgan texnologiyalar.
            </p>
            <div className="lp-cta-row">
              <a href="#contact" className="lp-btn lp-btn-primary" onClick={(e)=>{e.preventDefault();document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});}}>
                Bog'lanish  <HiArrowUpRight/>
              </a>
              <a href="#projects" className="lp-btn lp-btn-ghost" onClick={(e)=>{e.preventDefault();document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});}}>
                 Portfolio <HiArrowDownTray/>
              </a>
            </div>
            <div className="lp-socials">
              <a href="#" aria-label="github"><FaGithub/></a>
              <a href="#" aria-label="linkedin"><FaLinkedinIn/></a>
              <a href="#" aria-label="x"><FaXTwitter/></a>
              <a href="#" aria-label="dribbble"><FaDribbble/></a>
            </div>

            <div className="lp-hero-stats">
              <div className="lp-hero-stat"><div className="num">7+</div><div className="lbl">Yillik Tajriba</div></div>
              <div className="lp-hero-stat"><div className="num">10+</div><div className="lbl">Yuborilgan loyihalar</div></div>
              <div className="lp-hero-stat"><div className="num">15+</div><div className="lbl">Baxtli mijozlar</div></div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}} style={{position:"relative"}}>
            <div className="lp-hero-orbit"/>
            <div className="lp-hero-tag t1"><span className="dot"/> Expressjs</div>
            <div className="lp-hero-tag t2">⚡ React · Node · GSAP</div>
            <div className="lp-hero-tag t3">Backend</div>
            <div className="lp-hero-card">
              <img src={heroImg} alt="Developer portrait" width={800} height={952}/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

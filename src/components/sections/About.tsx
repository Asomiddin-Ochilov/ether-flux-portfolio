import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="lp-section">
      <div className="lp-container">
        <div className="lp-about-grid">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
            <span className="lp-eyebrow">Men haqimda</span>
            <h2 className="lp-h2">Men Bizneslar Uchun CRM va AI ekotizimlar yarataman.</h2>
            <div className="lp-about-text">
              <p>
                Men — Fullstack Developer va AI Engineer sifatida bizneslar uchun zamonaviy web tizimlar, avtomatlashtirish yechimlari va sun’iy intellekt asosidagi mahsulotlar yarataman. Asosiy maqsadim — kompaniyalarning ish jarayonlarini tezlashtirish, xarajatlarni kamaytirish va raqamli o‘sishni ta’minlash.
              </p>
              <p>
              React, Node.js, AI tools, API architecture va zamonaviy web texnologiyalar yordamida tezkor, kengaytiriladigan va premium darajadagi mahsulotlar quraman.
              </p>
            </div>
          </motion.div>

          <motion.div className="lp-stats" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,delay:.15}}>
            {[
    { n: "07", l: "Yillik tajriba" },
    { n: "20+", l: "Muvaffaqiyatli loyihalar" },
    { n: "35+", l: "Mahalliy va xalqaro mijozlar" },
    { n: "AI", l: "Biznes avtomatlashtirish tizimlari" },
  ].map((s,i)=>(
              <div className="lp-stat-card" key={i} onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx",`${e.clientX-r.left}px`); e.currentTarget.style.setProperty("--my",`${e.clientY-r.top}px`);}}>
                <div className="n">{s.n}</div><div className="l">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

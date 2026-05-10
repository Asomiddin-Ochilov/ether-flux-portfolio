import { motion } from "framer-motion";

const items = [
 {
  y: "2025 — Hozir",
  r: "Fullstack va AI Mutaxassisi",
  co: "Inspiring School",
  d: "Fullstack dasturlash va AI yo‘nalishida yangi avlod dasturchilarini tayyorlash, zamonaviy texnologiyalar va real loyihalar asosida shogirtlar chiqarish bilan shug‘ullanaman."
},
  {
    y: "2024 — 2025",
    r: "Fullstack Developer",
    co: "Freelance",
    d: "Turli biznes va startup loyihalar uchun web tizimlar, dashboardlar va zamonaviy foydalanuvchi interfeyslarini ishlab chiqdim."
  },
  {
    y: "2023 — 2023",
    r: "Frontend Engineer",
    co: "WWW IT Academy",
    d: "Interaktiv va responsive web interfeyslar yaratish, performance optimizatsiyasi va foydalanuvchi tajribasini yaxshilash bilan shug‘ullandim."
  },
  {
    y: "2022 — 2023",
    r: "Frontend Developer",
    co: "Rounded LLC",
    d: "Kompaniya uchun zamonaviy frontend tizimlar, UI komponentlar va real loyihalar ustida ishladim."
  },
  {
    y: "2021 — 2022",
    r: "Frontend Web Developer",
    co: "IBS IT School",
    d: "Web dasturlash asoslari, frontend texnologiyalar va zamonaviy interfeyslar yaratish bo‘yicha tajriba orttirdim."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Tajriba</span>
          <h2 className="lp-h2">Tajriba va rivojlanish yo‘lim.</h2>
        </div>

        <div className="lp-tl">
          {items.map((e,i)=>(
            <motion.div key={i} className="lp-tl-item"
              initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.08}}>
              <div className="lp-tl-card">
                <div className="yr">{e.y}</div>
                <h4>{e.r}</h4>
                <div className="co">{e.co}</div>
                <p>{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

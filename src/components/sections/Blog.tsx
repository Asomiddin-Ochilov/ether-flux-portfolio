import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img:b1,
    c:"Dasturlash",
    t:"GSAP va Lenis yordamida 60fps animatsiya tizimi yaratish",
    d:"02 May, 2026 · 7 daqiqa o‘qish"
  },
  {
    img:b2,
    c:"Dizayn",
    t:"2026’da Glassmorphism — qachon foydali va qachon UX’ni buzadi",
    d:"18 Aprel, 2026 · 5 daqiqa o‘qish"
  },
  {
    img:b3,
    c:"AI",
    t:"AI ilovalar uchun zamonaviy interfeys va UX patternlar",
    d:"04 Aprel, 2026 · 9 daqiqa o‘qish"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Blog</span>
          <h2 className="lp-h2">Tajriba, texnologiya va kelajak haqidagi fikrlar.</h2>
          <p className="lp-sub">Dasturlash, AI, web texnologiyalar, animatsiyalar va zamonaviy raqamli mahsulotlar yaratish jarayoni haqida maqolalar, tajribalar va kuzatuvlar.</p>
        </div>

        <div className="lp-blogs">
          {posts.map((p,i)=>(
            <motion.article key={i} className="lp-blog"
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:i*.1}}>
              <div className="thumb"><img src={p.img} alt={p.t} loading="lazy"/></div>
              <div className="body">
                <span className="cat">{p.c}</span>
                <h4>{p.t}</h4>
                <div className="meta">{p.d}</div>
                <a href="#" className="more">Read article <HiArrowUpRight/></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

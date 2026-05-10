import { useState } from "react";
import { HiPlus } from "react-icons/hi2";

const data = [
  {
    t: "Web Dasturlash",
    d: "React, Next.js va zamonaviy Fullstack texnologiyalar asosida tezkor, xavfsiz va professional web tizimlar yarataman. Har bir loyiha kuchli arxitektura, yuqori performance va mukammal foydalanuvchi tajribasi bilan ishlab chiqiladi.",
    tags: ["React", "Next.js", "Node", "TypeScript"]
  },
  {
    t: "AI Yechimlar",
    d: "Biznes jarayonlarini avtomatlashtirish, sun’iy intellekt integratsiyasi va aqlli tizimlar yarataman. Modeldan tortib real mahsulotga integratsiyagacha bo‘lgan to‘liq AI yechimlar ishlab chiqaman.",
    tags: ["AI", "Automation", "Integratsiya"]
  },
  {
    t: "Dashboard Tizimlari",
    d: "Murakkab ma’lumotlarni sodda va tushunarli ko‘rinishga aylantiradigan analytics dashboardlar yarataman. Real-time grafikalar, role-based access va zamonaviy interfeyslar bilan.",
    tags: ["D3", "Charts", "Realtime"]
  },
  {
    t: "SaaS Platformalar",
    d: "MVP bosqichidan tortib katta masshtabgacha bo‘lgan SaaS tizimlar yarataman. Auth, billing, multi-tenant arxitektura va AI funksiyalarni to‘liq integratsiya qilaman.",
    tags: ["Stripe", "Auth", "AI"]
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Xizmatlar</span>
          <h2 className="lp-h2">G‘oyadan tayyor tizimgacha <br />  barchasi bir joyda.</h2>
          <p className="lp-sub">Men bizneslar uchun zamonaviy raqamli mahsulotlarni to‘liq ishlab chiqaman: strategiya, dizayn, dasturlash, AI integratsiya va avtomatlashtirishgacha. Har bir loyiha tezkor, premium va biznes natijasiga yo‘naltirilgan bo‘ladi.</p>
        </div>

        <div className="lp-acc">
          {data.map((s,i)=>(
            <div key={i} className={`lp-acc-item ${open===i?"open":""}`}>
              <div className="lp-acc-head" onClick={()=>setOpen(open===i?-1:i)}>
                <div className="l">
                  <span className="num">0{i+1}</span>
                  <h3>{s.t}</h3>
                </div>
                <span className="lp-acc-arrow"><HiPlus size={20}/></span>
              </div>
              <div className="lp-acc-body">
                <div className="lp-acc-inner">
                  {s.d}
                  <div className="lp-acc-tags">{s.tags.map(t=> <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

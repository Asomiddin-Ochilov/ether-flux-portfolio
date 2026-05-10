import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const data = [
  {
    q:"Ishlagan eng kuchli dasturchilarimdan biri. Loyihamizni juda qisqa vaqt ichida premium darajada tayyorlab berdi.",
    n:"Azizbek Karimov",
    r:"CEO · Nova Tech",
    a:"AK"
  },
  {
    q:"U shunchaki kod yozmaydi — foydalanuvchi tajribasini yaratadi. Har bir animatsiya va interfeys mukammal o‘ylangan.",
    n:"Javohir Rahimov",
    r:"UI/UX Director · Vision",
    a:"JR"
  },
  {
    q:"Yangi platforma ishga tushgach biznesimiz sezilarli darajada o‘sdi. Mijozlarimiz interfeysni juda yuqori baholadi.",
    n:"Sardor Tursunov",
    r:"Founder · AI Hub",
    a:"ST"
  },
  {
    q:"Figma’dan production’gacha bo‘lgan jarayon juda tez va sifatli bajarildi. Natija kutganimizdan ham yuqori chiqdi.",
    n:"Bekzod Aliyev",
    r:"Product Manager · Nexa",
    a:"BA"
  },
  {
    q:"Kuchli texnik bilim va zamonaviy dizayn didi birlashgan mutaxassis. Katta loyihalar uchun ishonchli hamkor.",
    n:"Mirjalol Xasanov",
    r:"CTO · Infinity Soft",
    a:"MX"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="lp-section">
      <div className="lp-container lp-testi-wrap">
        <div className="lp-section-head center">
          <span className="lp-eyebrow">Mijozlar fikri</span>
          <h2 className="lp-h2">Founderlar va jamoalar ishonchini qozongan tajriba.</h2>
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView={"auto"}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 2, slideShadows: false }}
          breakpoints={{ 640:{ slidesPerView:1.2 }, 980:{ slidesPerView:2.2 }, 1280:{ slidesPerView:2.6 } }}
        >
          {data.map((t,i)=>(
            <SwiperSlide key={i} style={{maxWidth:480}}>
              <div className="lp-testi">
                <div className="stars">★★★★★</div>
                <p>"{t.q}"</p>
                <div className="who">
                  <div className="av">{t.a}</div>
                  <div><div className="nm">{t.n}</div><div className="rl">{t.r}</div></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

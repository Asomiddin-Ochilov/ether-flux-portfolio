import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="lp-section">
      <div className="lp-container">
        <div className="lp-section-head center">
          <span className="lp-eyebrow">Aloqa</span>
          <h2 className="lp-h2">
            Biznesingizni birga avtomatlashtirishni boshlaymiz.
          </h2>
          <p className="lp-sub">
            G‘oya, loyiha yoki biznes muammo bormi? Men uni zamonaviy web va AI yechimlar orqali avtomatlashtirishga yordam beraman.
          </p>
        </div>

        <div className="lp-contact-grid">
          <form
            className="lp-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="lp-field">
                <label>Ism</label>
                <input required placeholder="Ismingiz" />
              </div>
              <div className="lp-field">
                <label>Email</label>
                <input type="email" required placeholder="example@gmail.com" />
              </div>
            </div>

            <div className="lp-field">
              <label>Loyiha turi</label>
              <input placeholder="AI tizim, SaaS platforma, CRM, avtomatlashtirish..." />
            </div>

            <div className="lp-field">
              <label>Biznes muammo / g‘oya</label>
              <textarea
                rows={5}
                required
                placeholder="Qanday jarayonni avtomatlashtirmoqchisiz yoki nima yaratmoqchisiz?"
              />
            </div>

            <button
              className="lp-btn lp-btn-primary"
              type="submit"
              style={{ alignSelf: "flex-start" }}
            >
              {sent ? "So‘rov yuborildi ✓" : "Boshlash →"}
            </button>
          </form>

          <div className="lp-info">
            <div className="lp-info-row">
              <div className="ic"><HiMail /></div>
              <div>
                <div className="lb">Email</div>
                <div className="vl">asomhon12345@gmail.com</div>
              </div>
            </div>

            <div className="lp-info-row">
              <div className="ic"><HiPhone /></div>
              <div>
                <div className="lb">Telefon</div>
                <div className="vl">+998 (91) 793 16 10</div>
              </div>
            </div>

            <div className="lp-info-row">
              <div className="ic"><HiLocationMarker /></div>
              <div>
                <div className="lb">Ish hududi</div>
                <div className="vl">Global / Masofaviy</div>
              </div>
            </div>

            <div>
              <div
                className="lb"
                style={{
                  color: "var(--txt-mut)",
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Social
              </div>

              <div className="lp-socials">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaDribbble /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
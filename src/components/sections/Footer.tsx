import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="lp-foot">
      <div className="lp-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 30,
          }}
        >
          <div style={{ maxWidth: 380 }}>
            <div className="lp-logo" style={{ marginBottom: 14 }}>
              <span className="lp-logo-dot" /> Asomiddin
              <span style={{ color: "var(--gl-2)" }}>.</span>dev
            </div>

            <p
              style={{
                color: "var(--txt-mut)",
                lineHeight: 1.65,
                fontSize: 14,
              }}
            >
              Mustaqil Fullstack va AI Engineer sifatida zamonaviy raqamli
              mahsulotlar, AI tizimlar va biznes avtomatlashtirish yechimlarini
              ishlab chiqaman.
            </p>
          </div>

          <div className="lp-socials">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>

        <div className="lp-foot-divider" />

        <div className="lp-foot-row">
          <div>© 2026 Barcha huquqlar himoyalangan.</div>
          <div>bog'lanish uchun +998 91 793 16 10 </div>
        </div>
      </div>
    </footer>
  );
}
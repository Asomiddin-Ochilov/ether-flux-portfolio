export default function Marquee() {
  const items = ["Design Engineering", "Motion Systems", "Product Strategy", "Generative UI", "3D Interfaces", "Performance"];
  return (
    <div className="lp-marquee">
      <div className="lp-marquee-track">
        {[...items, ...items, ...items].map((t,i)=> <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

import InfoCard from "./InfoCard";

export default function NikWork() {
  return (
    <section className="center_vertical_container" style={{ gap: "48px" }}>
      <h2 className="header_text fadeAnimation" style={{ fontSize: "60px" }}>WORK EXPERIENCE</h2>
      <div className="center_horizontal_container fadeAnimation" style={{ gap: "32px" }}>
        <InfoCard
          image="/img/logos/greensheart_logo.jpg"
          alt="GreenSHeart"
          title="Graphic Designer & Full Stack Developer at GreenSHeart Sdn Bhd"
          subtitle="2024-2025"
          year=""
        />
        <InfoCard
          image="/img/logos/kumon.png"
          alt="Kumon"
          title="Tutor at Kumon"
          subtitle="2022"
          year=""
        />
      </div>
    </section>
  );
}
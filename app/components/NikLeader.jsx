// components/nik_leader.tsx
import InfoCard from "./InfoCard";

export default function NikLeader() {
  return (
    <section className="center_vertical_container" style={{ gap: "48px" }}>
      <h2 className="header_text fadeAnimation" style={{ fontSize: "60px" }}>LEADERSHIP POSITIONS</h2>
      <div className="center_horizontal_container fadeAnimation" style={{ gap: "32px" }}>
        <InfoCard
          image="/img/logos/sekolahmmu.jpg"
          alt="Sekolah@MMU"
          title="Sekretariat of Sekolah@MMU Club"
          subtitle="2024–2026"
          year=""
        />
        <InfoCard
          image="/img/logos/gdg.png"
          alt="GDG"
          title="Technical Team of Google Developer Group on Campus at MMU"
          subtitle="2024–2025"
          year=""
        />
        <InfoCard
          image="/img/logos/permata.jpg"
          alt="Pusat PERMATApintar Logo"
          title="Multimedia Bureau at ASASIpintar, UKM"
          subtitle="2022–2023"
          year=""
        />
      </div>
    </section>
  );
}
'use client';

import { motion, Variants } from 'framer-motion';
import NikProfile from './NikProfile';
import NikSkills from './NikSkills';
import NikCoco from './NikCoco';
import InfoCard from './InfoCard';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  }),
};

export default function NikPageMobile() {
  return (
    <div
      style={{
        width: '100%',
        padding: '16px 20px 48px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px', // Increased gap to ensure clear separation
        position: 'relative',
      }}
    >
      {/* 👤 PROFILE & SKILLS CONTAINER WITH CLEAR FLOW ISOLATION */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '100%',
          position: 'relative',
          isolation: 'isolate', // Prevents internal absolute elements from escaping boundaries
        }}
      >
        <NikProfile />
        <NikSkills />
      </div>

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* ABOUT ME */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          custom={1}
        >
          <h2 className="resume-section-title">About Me</h2>
          <p className="body_text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155' }}>
            I am a quick and eager learner who grasps complex computer science concepts quickly. 
            Guided by principles of honesty, responsibility, and hard work, I am passionate about expanding my technical expertise in cybersecurity and software engineering. My ultimate goal is to gain hands-on experience and training to contribute meaningfully to Malaysia&apos;s computing sector.
          </p>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          custom={2}
        >
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-card-grid">
            <InfoCard
              image="/img/logos/mmu.jpg"
              alt="MMU Logo"
              title="Multimedia University (MMU), Cyberjaya"
              subtitle="Bachelor of Computer Science (Cybersecurity) | CGPA: 3.72"
              year="2023 – 2026"
            />
            <InfoCard
              image="/img/logos/asasi.png"
              alt="ASASIpintar Logo"
              title="ASASIpintar Programme, UKM"
              subtitle="Pre-University | CGPA: 4.00"
              year="2022 – 2023"
            />
            <InfoCard
              image="/img/logos/permata.jpg"
              alt="Pusat PERMATApintar Logo"
              title="Pusat PERMATApintar Negara"
              subtitle="SPM: 9A (7A+, 2A) | High School Diploma"
              year="2018 – 2021"
            />
          </div>
        </motion.section>

        {/* WORK EXPERIENCE */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          custom={3}
        >
          <h2 className="resume-section-title">Work Experience</h2>
          <div className="resume-card-grid">
            <InfoCard
              image="/img/logos/gamuda.png"
              alt="Gamuda"
              title="Digital Intern at ESG Department"
              subtitle="Gamuda Berhad"
              year="Current"
            />
            <InfoCard
              image="/img/logos/greensheart_logo.jpg"
              alt="GreenSHeart"
              title="Graphic Designer & Full Stack Developer"
              subtitle="GreenSHeart Sdn Bhd"
              year="2024 – 2025"
            />
            <InfoCard
              image="/img/logos/kumon.png"
              alt="Kumon"
              title="Mathematics & Academic Tutor"
              subtitle="Kumon Learning Centre"
              year="2022"
            />
          </div>
        </motion.section>

        {/* LEADERSHIP */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          custom={4}
        >
          <h2 className="resume-section-title">Leadership</h2>
          <div className="resume-card-grid">
            <InfoCard
              image="/img/logos/sekolahmmu.jpg"
              alt="Sekolah@MMU"
              title="Vice President II"
              subtitle="Sekolah@MMU Club"
              year="2025 – 2026"
            />
            <InfoCard
              image="/img/logos/permata.jpg"
              alt="PERMATA"
              title="Multimedia Bureau Executive"
              subtitle="ASASIpintar, UKM"
              year="2022 – 2023"
            />
          </div>
        </motion.section>

        {/* EXTRACURRICULAR ACTIVITIES */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          custom={5}
        >
          <NikCoco />
        </motion.div>
      </main>
    </div>
  );
}
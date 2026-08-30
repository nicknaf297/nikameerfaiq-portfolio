'use client';

import { motion } from 'framer-motion';

interface InfoCardProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  year?: string;
}

export default function InfoCard({ image, alt, title, subtitle, year }: InfoCardProps) {
  return (
    <motion.div 
      className="resume-card-vertical"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="resume-card-content">
        <img src={image} alt={alt} className="resume-card-img-top" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
          <div className="header_text" style={{ fontSize: '18px', lineHeight: '1.25' }}>{title}</div>
          <div className="body_text" style={{ fontSize: '15px', color: '#4b5563' }}>{subtitle}</div>
          {year && (
            <div className="body_text_italic" style={{ fontSize: '14px', color: '#6b7280', marginTop: '2px' }}>
              {year}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import IconLink from './IconLink';

export default function NikProfile() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      {/* Profile Avatar & Info */}
      <div className="center_vertical_container" style={{ gap: "10px", textAlign: "center" }}>
        <img 
          src="/img/profile_pic.JPG" 
          alt="Nik Ameer Faiq" 
          style={{ 
            width: '140px',
            height: '140px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: '3px solid #3d3d3d' 
          }}
        />
        <div>
          <h1 className="header_text" style={{ fontSize: "2rem", lineHeight: "1.1" }}>NIK AMEER FAIQ</h1>
          <h2 className="header_text" style={{ fontSize: "2rem", lineHeight: "1.1" }}>NIK MUHD ASLAN</h2>
          <p className="body_text_bold" style={{ fontSize: "1.1rem", color: "#C73659", marginTop: "3px" }}>
            Computer Science Intern
          </p>
        </div>
      </div>

      {/* Quick Contact Icons */}
      <div className="icons" style={{ justifyContent: 'center', gap: '18px', marginTop: '0px' }}>
        <IconLink icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />} link="mailto:nicknaf297@gmail.com" />
        <IconLink icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />} link="https://www.linkedin.com/in/nik-ameer-faiq-nik-muhd-aslan-3b7b912ab/" />
        <IconLink icon={<FontAwesomeIcon icon={faInstagram} size="lg" />} link="https://www.instagram.com/nik.amir__/" />
        <IconLink icon={<FontAwesomeIcon icon={faPhone} size="lg" />} link="tel:+60166672907" />
      </div>

      {/* Download Resume Button */}
      <a 
        href="https://www.linkedin.com/in/nik-ameer-faiq-nik-muhd-aslan-3b7b912ab/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          width: '100%', 
          height: '40px', 
          borderRadius: '6px', 
          gap: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#FFAC41',
          color: '#000000',
          fontFamily: 'var(--font-cp-bold), sans-serif',
          fontSize: '13px',
          textDecoration: 'none'
        }}
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>DOWNLOAD RESUME</span>
      </a>
    </motion.div>
  );
}
'use client';

import { motion } from 'framer-motion';
import MainOptionsMobile from '@/app/components/MainOptionsMobile';

export default function HomeMobile() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        padding: '20px 20px 60px 20px',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      <MainOptionsMobile
        pageLink="/nik"
        title="ABOUT ME"
        subtitle="Get To Know Me, Contacts & Resume"
        image="/img/main_nik.webp"
      />
      <MainOptionsMobile
        pageLink="/photos"
        title="PHOTOS"
        subtitle="Snap. Snap. Snap."
        image="/img/main_photo.webp"
      />
      <MainOptionsMobile
        pageLink="/projects"
        title="PROJECTS"
        subtitle="Personal Coding Projects"
        image="/img/main_project.webp"
      />
    </motion.div>
  );
}
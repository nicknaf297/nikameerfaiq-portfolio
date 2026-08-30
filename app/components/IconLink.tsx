'use client';

import { motion } from 'framer-motion';

interface IconLinkProps {
  icon: React.ReactNode;
  link: string;
}

export default function IconLink({ icon, link }: IconLinkProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: 'black', textDecoration: 'none' }}
    >
      <motion.div
        initial={{ color: "#000000" }}
        whileHover={{ scale: 1.2, color: "#FFAC41" }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.div>
    </a>
  );
}
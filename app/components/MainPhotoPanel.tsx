'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MainPhotoPanelProps {
  title: string;
  coverImage: string;
  description: string;
  onClick?: () => void;
}

export default function MainPhotoPanel({
  title,
  coverImage,
  description,
  onClick,
}: MainPhotoPanelProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.25 }}
      onClick={onClick}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3 / 2',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: 'none', /* Removed card border */
        background: '#1a1a1a',
      }}
    >
      {/* Background Cover Photo with Saturation Effect on Hover */}
      <motion.img
        src={coverImage}
        alt={title}
        variants={{
          initial: { scale: 1, filter: 'brightness(0.85) saturate(0.85)' },
          hover: { scale: 1.04, filter: 'brightness(0.95) saturate(1.1)' },
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Text Overlay at Bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 className="header_text" style={{ fontSize: '36px', letterSpacing: '1px' }}>
            {title}
          </h2>
          <span className="body_text_bold" style={{ fontSize: '13px', color: '#FFAC41', letterSpacing: '0.5px' }}>
            CLICK TO VIEW GALLERY &rarr;
          </span>
        </div>
        <p className="body_text" style={{ fontSize: '15px', color: '#ddd', marginTop: '6px', lineHeight: '1.4' }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
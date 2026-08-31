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
        background: '#1a1a1a',
      }}
    >
      {/* Background Cover Photo */}
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

      {/* Text Overlay with Increased Typography Sizes */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 65%, transparent 100%)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          boxSizing: 'border-box',
          color: '#ffffff',
          pointerEvents: 'none',
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {/* TITLE: Increased from 22px to 28px */}
          <h2 
            className="header_text" 
            style={{ 
              fontSize: '28px', 
              letterSpacing: '0.5px', 
              margin: 0,
              lineHeight: '1.1',
              color: '#ffffff',
            }}
          >
            {title}
          </h2>

          {/* CALL TO ACTION: Increased from 11px to 13px */}
          <span 
            className="body_text_bold" 
            style={{ 
              fontSize: '13px', 
              color: '#FFAC41', 
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            CLICK TO VIEW GALLERY &rarr;
          </span>
        </div>

        {/* DESCRIPTION: Increased from 13px to 15px */}
        <p 
          className="body_text" 
          style={{ 
            fontSize: '15px', 
            color: '#e2e8f0', 
            marginTop: '8px', 
            marginBottom: 0,
            lineHeight: '1.4',
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
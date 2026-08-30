'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

interface PopOutCardProps {
  titleName: string;
  subtitle: string;
  popupContent: React.ReactNode;
}

export default function PopOutCard({ titleName, subtitle, popupContent }: PopOutCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="pop-out-card"
        style={{ height: 'auto', minHeight: '120px', cursor: 'pointer' }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-content" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
          <div className="header_text" style={{ fontSize: '18px', lineHeight: '1.25' }}>
            {titleName}
          </div>
          <div className="body_text" style={{ fontSize: '15px', color: '#4b5563' }}>
            {subtitle}
          </div>
        </div>
      </motion.div>

      <Modal title={titleName} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {popupContent}
      </Modal>
    </>
  );
}
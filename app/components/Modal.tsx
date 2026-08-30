'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay" 
          onClick={onClose}
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(5px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
            }}
          >
            <div className="center_horizontal_container" style={{ justifyContent: "space-between" }}>
              <h2 className="title_text" style={{ fontSize: "25px" }}>{title}</h2>
              <motion.button 
                onClick={onClose} 
                style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}
                whileHover={{ scale: 1.12, color: "var(--Yellow, #FFAC41)" }}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </motion.button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
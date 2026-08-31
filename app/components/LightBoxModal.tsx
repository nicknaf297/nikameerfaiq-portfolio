'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  selectedIndex: number | null;
  images: string[];
  categoryId: string;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

export default function LightboxModal({
  selectedIndex,
  images,
  categoryId,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = selectedIndex !== null;

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      onNavigate((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      onNavigate((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  const handleDownload = async (imgSrc: string) => {
    try {
      const rawJpgSrc = imgSrc.replace(/\.webp$/i, '.jpg');

      const response = await fetch(rawJpgSrc);
      if (!response.ok) throw new Error('Raw JPG file not found');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      
      const fileName = rawJpgSrc.split('/').pop() || `${categoryId}-${Date.now()}.jpg`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.warn('Full-res JPG download failed, falling back to WebP:', error);
      
      // Fallback: download WebP if original JPG is missing
      const response = await fetch(imgSrc);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = imgSrc.split('/').pop() || `${categoryId}-${Date.now()}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Action Buttons Top Bar */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              zIndex: 1010,
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(images[selectedIndex]);
              }}
              className="body_text_bold"
              style={{
                background: '#FFAC41',
                color: '#111',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '13px',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                fontWeight: 600,
              }}
            >
              ⬇ DOWNLOAD
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Navigation Control Left */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            style={{
              position: 'absolute',
              left: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1010,
            }}
          >
            ‹
          </button>

          {/* Enlarged Photo Display */}
          <motion.img
            key={selectedIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={images[selectedIndex]}
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '6px',
            }}
          />

          {/* Navigation Control Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            style={{
              position: 'absolute',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1010,
            }}
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
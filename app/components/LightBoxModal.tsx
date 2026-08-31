'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface LightboxModalProps {
  selectedIndex: number | null;
  images: string[];
  categoryId: string;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function LightBoxModal({
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

  // Swipe detection handler
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      handleNext(); // Swiped left
    } else if (info.offset.x > 50) {
      handlePrev(); // Swiped right
    }
  };

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
      if (!response.ok) throw new Error('Raw JPG missing');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = rawJpgSrc.split('/').pop() || `${categoryId}-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
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
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Bar Controls */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
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
                padding: '8px 14px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              ⬇ DOWNLOAD
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Swipeable Image */}
          <motion.img
            key={selectedIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            src={images[selectedIndex]}
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '6px',
              touchAction: 'none',
            }}
          />

          {/* Desktop Chevron Navigation (Hidden on small screens) */}
          <button
            className="lightbox-nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </button>
          <button
            className="lightbox-nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </button>

          <style jsx>{`
            .lightbox-nav-btn {
              position: absolute;
              background: rgba(255, 255, 255, 0.1);
              border: none;
              color: #fff;
              border-radius: 50%;
              width: 48px;
              height: 48px;
              font-size: 24px;
              cursor: pointer;
              z-index: 1010;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .lightbox-nav-btn.left {
              left: 20px;
            }
            .lightbox-nav-btn.right {
              right: 20px;
            }
            @media (max-width: 640px) {
              .lightbox-nav-btn {
                display: none; /* Rely on swipe gestures on mobile */
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
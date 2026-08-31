'use client';

import { use, useState, useEffect, useCallback } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface GalleryData {
  title: string;
  description: string;
  images: string[];
}

const subGalleries: Record<string, GalleryData> = {
  concerts: {
    title: 'CONCERTS',
    description: 'Live musical performances, and stage lighting.',
    images: Array.from({ length: 55 }, (_, i) => `/img/photos_page/Events/Concert/${i + 1}.webp`),
  },
  weddings: {
    title: 'WEDDINGS',
    description: 'Special vows, ceremonies, and unforgettable moments.',
    images: [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
      (num) => `/img/photos_page/Events/Weddings/${num}.webp`
    ),
  },
  graduation: {
    title: 'GRADUATION',
    description: 'Campus achievements and memorable convocation ceremonies.',
    images: [4, 1, 3, 5, 6, 7, 8, 2].map(
      (num) => `/img/photos_page/Events/Gradutaion/${num}.webp`
    ),
  },
  sports: {
    title: 'SPORTS',
    description: 'Action shots and high-energy games.',
    images: Array.from({ length: 12 }, (_, i) => `/img/photos_page/Events/Sports/${i + 1}.webp`),
  },
  community: {
    title: 'COMMUNITY EVENTS',
    description: 'Dinners, Programmes, Cultural Meetups.',
    images: Array.from({ length: 8 }, (_, i) => `/img/photos_page/Events/Community Events/${i + 1}.webp`),
  },
};

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

export default function DynamicEventGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const gallery = subGalleries[resolvedParams.id] || {
    title: resolvedParams.id.toUpperCase(),
    description: 'Photo gallery collection.',
    images: [],
  };

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % gallery.images.length);
    }
  }, [selectedIndex, gallery.images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + gallery.images.length) % gallery.images.length);
    }
  }, [selectedIndex, gallery.images.length]);

  // Keyboard navigation (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Trigger browser image download
  const handleDownload = (imgSrc: string) => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = `${resolvedParams.id}-${Date.now()}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ width: '100%', padding: '24px 50px 60px 50px', boxSizing: 'border-box' }}>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        style={{ marginBottom: '32px' }}
      >
        <Link
          href="/photos/events"
          className="body_text_bold"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '13px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '8px',
            letterSpacing: '0.5px',
          }}
        >
          &larr; BACK TO EVENTS
        </Link>
        <h1 className="header_text" style={{ fontSize: '36px', color: '#111', margin: 0 }}>
          {gallery.title}
        </h1>
        <p className="body_text" style={{ fontSize: '15px', color: '#6b7280', marginTop: '6px' }}>
          {gallery.description}
        </p>
      </motion.div>

      {/* 4-COLUMN MASONRY PHOTO GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ columnCount: 4, columnGap: '20px', width: '100%' }}
      >
        {gallery.images.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(idx)}
            style={{
              breakInside: 'avoid',
              marginBottom: '20px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#1a1a1a',
              cursor: 'pointer',
            }}
          >
            <img
              src={imgSrc}
              alt={`${gallery.title} image ${idx + 1}`}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* LIGHTBOX OVERLAY WITH NEXT/PREV NAVIGATION */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
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
            {/* TOP BAR ACTION BUTTONS */}
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
                  handleDownload(gallery.images[selectedIndex]);
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
                onClick={() => setSelectedIndex(null)}
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

            {/* PREVIOUS BUTTON */}
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

            {/* ENLARGED PHOTO */}
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={gallery.images[selectedIndex]}
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '85vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '6px',
              }}
            />

            {/* NEXT BUTTON */}
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
    </div>
  );
}
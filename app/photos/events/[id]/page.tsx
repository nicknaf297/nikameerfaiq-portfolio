'use client';

import { use, useState } from 'react';
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
    images: [
      '/img/photos_page/Events/Concert/1.jpg',
      '/img/photos_page/Events/Concert/2.jpg',
      '/img/photos_page/Events/Concert/3.jpg',
      '/img/photos_page/Events/Concert/4.jpg',
      '/img/photos_page/Events/Concert/5.jpg',
      '/img/photos_page/Events/Concert/6.jpg',
      '/img/photos_page/Events/Concert/7.jpg',
      '/img/photos_page/Events/Concert/8.jpg',
      '/img/photos_page/Events/Concert/9.jpg',
      '/img/photos_page/Events/Concert/10.jpg',
      '/img/photos_page/Events/Concert/11.jpg',
      '/img/photos_page/Events/Concert/12.jpg',
      '/img/photos_page/Events/Concert/13.jpg',
      '/img/photos_page/Events/Concert/14.jpg',
      '/img/photos_page/Events/Concert/15.jpg',
      '/img/photos_page/Events/Concert/16.jpg',
      '/img/photos_page/Events/Concert/17.jpg',
      '/img/photos_page/Events/Concert/18.jpg',
      '/img/photos_page/Events/Concert/19.jpg',
      '/img/photos_page/Events/Concert/20.jpg',
      '/img/photos_page/Events/Concert/21.jpg',
      '/img/photos_page/Events/Concert/22.jpg',
      '/img/photos_page/Events/Concert/23.jpg',
      '/img/photos_page/Events/Concert/24.jpg',
      '/img/photos_page/Events/Concert/25.jpg',
      '/img/photos_page/Events/Concert/26.jpg',
      '/img/photos_page/Events/Concert/27.jpg',
      '/img/photos_page/Events/Concert/28.jpg',
      '/img/photos_page/Events/Concert/29.jpg',
      '/img/photos_page/Events/Concert/30.jpg',
      '/img/photos_page/Events/Concert/33.jpg',
      '/img/photos_page/Events/Concert/34.jpg',
      '/img/photos_page/Events/Concert/35.jpg',
      '/img/photos_page/Events/Concert/36.jpg',
      '/img/photos_page/Events/Concert/37.jpg',
      '/img/photos_page/Events/Concert/40.jpg',
      '/img/photos_page/Events/Concert/41.jpg',
      '/img/photos_page/Events/Concert/42.jpg',
      '/img/photos_page/Events/Concert/43.jpg',
      '/img/photos_page/Events/Concert/44.jpg',
      '/img/photos_page/Events/Concert/46.jpg',
      '/img/photos_page/Events/Concert/47.jpg',
      '/img/photos_page/Events/Concert/48.jpg',
      '/img/photos_page/Events/Concert/49.jpg',
      '/img/photos_page/Events/Concert/50.jpg',
      '/img/photos_page/Events/Concert/51.jpg',
      '/img/photos_page/Events/Concert/52.jpg',
      '/img/photos_page/Events/Concert/53.jpg',
      '/img/photos_page/Events/Concert/54.jpg',
      '/img/photos_page/Events/Concert/55.jpg',
    ],
  },
  weddings: {
    title: 'WEDDINGS',
    description: 'Special vows, ceremonies, and unforgettable moments.',
    images: [
      '/img/photos_page/Events/Weddings/1.jpg',
      '/img/photos_page/Events/Weddings/2.jpg',
      '/img/photos_page/Events/Weddings/5.jpg',
      '/img/photos_page/Events/Weddings/6.jpg',
      '/img/photos_page/Events/Weddings/7.jpg',
      '/img/photos_page/Events/Weddings/8.jpg',
      '/img/photos_page/Events/Weddings/9.jpg',
      '/img/photos_page/Events/Weddings/10.jpg',
      '/img/photos_page/Events/Weddings/11.jpg',
      '/img/photos_page/Events/Weddings/12.jpg',
      '/img/photos_page/Events/Weddings/13.jpg',
    ],
  },
  graduation: {
    title: 'GRADUATION',
    description: 'Campus achievements and memorable convocation ceremonies.',
    images: [
      '/img/photos_page/Events/Gradutaion/4.jpg',
      '/img/photos_page/Events/Gradutaion/1.jpg',
      '/img/photos_page/Events/Gradutaion/3.jpg',
      '/img/photos_page/Events/Gradutaion/5.jpg',
      '/img/photos_page/Events/Gradutaion/6.jpg',
      '/img/photos_page/Events/Gradutaion/7.jpg',
      '/img/photos_page/Events/Gradutaion/8.jpg',
      '/img/photos_page/Events/Gradutaion/2.jpg',
    ],
  },
  sports: {
    title: 'SPORTS',
    description: 'Action shots and high-energy games.',
    images: [
      '/img/photos_page/Events/Sports/4.jpg',
      '/img/photos_page/Events/Sports/1.jpg',
      '/img/photos_page/Events/Sports/2.jpg',
      '/img/photos_page/Events/Sports/3.jpg',
      '/img/photos_page/Events/Sports/5.jpg',
      '/img/photos_page/Events/Sports/6.jpg',
      '/img/photos_page/Events/Sports/7.jpg',
      '/img/photos_page/Events/Sports/8.jpg',
      '/img/photos_page/Events/Sports/9.jpg',
      '/img/photos_page/Events/Sports/10.jpg',
      '/img/photos_page/Events/Sports/11.jpg',
      '/img/photos_page/Events/Sports/12.jpg',
    ],
  },
  community: {
    title: 'COMMUNITY EVENTS',
    description: 'Dinners, Programmes, Cultural Meetups.',
    images: [
      '/img/photos_page/Events/Community Events/1.jpg',
      '/img/photos_page/Events/Community Events/2.jpg',
      '/img/photos_page/Events/Community Events/3.jpg',
      '/img/photos_page/Events/Community Events/4.JPG',
      '/img/photos_page/Events/Community Events/5.JPG',
      '/img/photos_page/Events/Community Events/6.JPG',
      '/img/photos_page/Events/Community Events/7.JPG',
      '/img/photos_page/Events/Community Events/8.JPG',
    ],
  },
};

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

export default function DynamicEventGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = subGalleries[resolvedParams.id] || {
    title: resolvedParams.id.toUpperCase(),
    description: 'Photo gallery collection.',
    images: [],
  };

  // Trigger browser image download
  const handleDownload = (imgSrc: string) => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = `${resolvedParams.id}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '24px 50px 60px 50px',
        boxSizing: 'border-box',
      }}
    >
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
        style={{
          columnCount: 4,
          columnGap: '20px',
          width: '100%',
        }}
      >
        {gallery.images.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(imgSrc)}
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
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* FULL-SCREEN LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
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
            {/* ACTION CONTROLS TOP BAR */}
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
              {/* DOWNLOAD BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(selectedImage);
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  letterSpacing: '0.5px',
                  fontWeight: 600,
                }}
              >
                <span>⬇</span> DOWNLOAD
              </button>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            </div>

            {/* ENLARGED PHOTO DISPLAY */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: smoothEase }}
              src={selectedImage}
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '6px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
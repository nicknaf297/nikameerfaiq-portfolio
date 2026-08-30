'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}

// Sample photo data structure (Replace src paths with your images in public/img/photos/)
const photosData: PhotoItem[] = [
  { id: '1', src: '/img/photos/sample1.jpg', alt: 'Event Photography', category: 'Events', title: 'Sekolah@MMU Event' },
  { id: '2', src: '/img/photos/sample2.jpg', alt: 'Street Shot', category: 'Street', title: 'Kuala Lumpur Night' },
  { id: '3', src: '/img/photos/sample3.jpg', alt: 'Portrait', category: 'Portraits', title: 'Campus Portrait' },
  { id: '4', src: '/img/photos/sample4.jpg', alt: 'Nature Shot', category: 'Nature', title: 'Sunset Views' },
];

const categories = ['All', 'Events', 'Street', 'Portraits', 'Nature'];

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? photosData
    : photosData.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: '1400px', margin: '40px auto 100px auto', padding: '0 32px' }}>
      {/* SECTION HEADER */}
      <h1 className="resume-section-title" style={{ fontSize: '32px' }}>
        PHOTOGRAPHY PORTFOLIO
      </h1>

      {/* CATEGORY FILTER BUTTONS */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '6px',
              border: '1.5px solid #3d3d3d',
              backgroundColor: selectedCategory === cat ? '#C73659' : '#fff',
              color: selectedCategory === cat ? '#fff' : '#000',
              fontFamily: 'var(--font-cp-bold), sans-serif',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PHOTO GRID */}
      <motion.div
        layout
        className="resume-card-grid"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}
      >
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setActivePhoto(photo)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: '4 / 3',
                background: '#1a1a1a',
                border: '1px solid #e2e8f0',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LIGHTBOX POPUP MODAL */}
      {activePhoto && (
        <div
          className="modal-overlay"
          onClick={() => setActivePhoto(null)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              padding: '20px',
              background: '#000',
              border: '1px solid #333',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className="header_text" style={{ fontSize: '18px', color: '#FFAC41' }}>
                {activePhoto.title || activePhoto.alt}
              </span>
              <button
                onClick={() => setActivePhoto(null)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '6px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { motion, Variants } from 'framer-motion';
import MainPhotoPanel from '@/app/components/MainPhotoPanel';
import { useRouter } from 'next/navigation';

interface CategoryPanel {
  id: string;
  title: string;
  coverImage: string;
  description: string;
}

const categories: CategoryPanel[] = [
  {
    id: 'events',
    title: 'EVENTS',
    coverImage: '/img/photos_page/events_cover.webp',
    description: 'Concerts, Weddings, Graduation, Marriage, Sports and Community Events.',
  },
  {
    id: 'travel',
    title: 'TRAVEL',
    coverImage: '/img/photos_page/travel_cover.webp',
    description: 'Nature & Bustling Cities.',
  },
  {
    id: 'lifestyle',
    title: 'LIFESTYLE',
    coverImage: '/img/photos_page/lifestyle_cover.webp',
    description: 'Human Acitvities and Everyday Aesthetics.',
  },
  {
    id: 'architecture',
    title: 'ARCHITECTURE',
    coverImage: '/img/photos_page/arch_cover.webp',
    description: 'Urban Geometry, Structures, and Modern Design.',
  },
];

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function PhotoViewMobile() {
  const router = useRouter();

  return (
    <div
      style={{
        width: '100%',
        padding: '16px 20px 32px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: '#fff',
          borderRadius: '8px',
          padding: '12px 0px',
          display: 'grid',
          gridTemplateColumns: '1fr 180px',
          gap: '16px',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p 
            className="body_text" 
            style={{ 
              fontSize: '12px', 
              lineHeight: '1.4', 
              color: '#334155', 
              margin: 0 
            }}
          >
            Beyond computer science, photography is a big passion. It is my medium for capturing moments, and preserving memories I aspire to keep forever.
          </p>

          <div
            style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}
          >
            <div className="body_text" style={{ fontSize: '11px', color: '#6b7280' }}>
              📍 Based in Selangor, Malaysia
            </div>
            <div className="body_text" style={{ fontSize: '11px', color: '#6b7280' }}>
              📷 Gear: Fujifilm XT30ii, Canon D5000
            </div>
          </div>
        </div>

        <div
          style={{
            width: '180px',
            aspectRatio: '4 / 5',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#111',
            justifySelf: 'end',
          }}
        >
          <img
            src="/img/photos_page/main.webp"
            alt="Nik Ameer Faiq Photography"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.2)',
              display: 'block',
            }}
          />
        </div>
      </motion.div>

      {/* STACKED CATEGORY PANELS */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
          >
            <MainPhotoPanel
              title={cat.title}
              coverImage={cat.coverImage}
              description={cat.description}
              onClick={() => router.push(`/photos/${cat.id}`)}
            />
          </motion.div>
        ))}
      </main>
    </div>
  );
}
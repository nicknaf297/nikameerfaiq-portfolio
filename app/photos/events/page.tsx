'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface SubCategory {
  id: string;
  title: string;
  coverImage: string;
}

const eventSubCategories: SubCategory[] = [
  { id: 'concerts', title: 'CONCERTS', coverImage: '/img/photos_page/events/concert_cover.jpg' },
  { id: 'weddings', title: 'WEDDINGS', coverImage: '/img/photos_page/events/weddings_cover.jpg' },
  { id: 'graduation', title: 'GRADUATION', coverImage: '/img/photos_page/events/graduation_cover.jpg' },
  { id: 'sports', title: 'SPORTS', coverImage: '/img/photos_page/events/sports_cover.jpg' },
  { id: 'community', title: 'COMMUNITY EVENTS', coverImage: '/img/photos_page/events/community_cover.jpg' },
];

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export default function EventsCategoryPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: 'calc(100vh - 90px)',
        padding: '16px 50px 32px 50px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* HEADER ENTRANCE */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        style={{ marginBottom: '16px', flexShrink: 0 }}
      >
        <Link
          href="/photos"
          className="body_text_bold"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '13px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '6px',
            letterSpacing: '0.5px',
          }}
        >
          &larr; BACK TO MAIN PAGE
        </Link>
        <h1 className="header_text" style={{ fontSize: '32px', color: '#111', margin: 0 }}>
          EVENTS GALLERY
        </h1>
      </motion.div>

      {/* STAGGERED GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          flexGrow: 1,
        }}
      >
        {eventSubCategories.map((sub) => (
          <Link key={sub.id} href={`/photos/events/${sub.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              animate="show"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#1a1a1a',
                willChange: 'transform',
              }}
            >
              {/* Background Cover Photo */}
              <motion.img
                src={sub.coverImage}
                alt={sub.title}
                variants={{
                  hover: { scale: 1.06 },
                }}
                transition={{ duration: 0.6, ease: smoothEase }}
                className="event-card-img"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.85) saturate(0.85)',
                  transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'filter, transform',
                }}
              />

              {/* Overlay Text */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#fff',
                  pointerEvents: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                  <h2 className="header_text" style={{ fontSize: '22px', letterSpacing: '0.5px', margin: 0 }}>
                    {sub.title}
                  </h2>
                  <motion.span
                    className="body_text_bold"
                    variants={{
                      hover: { x: 6 },
                    }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    style={{ fontSize: '12px', color: '#FFAC41', letterSpacing: '0.5px' }}
                  >
                    VIEW &rarr;
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Smooth CSS Filter Transition on Hover */}
      <style jsx global>{`
        .event-card-img:hover {
          filter: brightness(0.95) saturate(1.1) !important;
        }
      `}</style>
    </div>
  );
}
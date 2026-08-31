'use client';

import { motion, Variants } from 'framer-motion';
import PhotoCategoryCard from '@/app/components/PhotoCategoryCard';
import PageHeader from '@/app/components/PageHeader';

interface SubCategory {
  id: string;
  title: string;
  coverImage: string;
}

const eventSubCategories: SubCategory[] = [
  { id: 'concert', title: 'CONCERTS', coverImage: '/img/photos_page/Events/concert_cover.webp' },
  { id: 'weddings', title: 'WEDDINGS', coverImage: '/img/photos_page/Events/weddings_cover.webp' },
  { id: 'graduation', title: 'GRADUATION', coverImage: '/img/photos_page/Events/graduation_cover.webp' },
  { id: 'sports', title: 'SPORTS', coverImage: '/img/photos_page/Events/sports_cover.webp' },
  { id: 'community', title: 'COMMUNITY EVENTS', coverImage: '/img/photos_page/Events/community_cover.webp' },
];

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
    transition: { duration: 0.4, ease: smoothEase },
  },
};

export default function EventsViewMobile() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 90px)',
        padding: '16px 20px 40px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PageHeader
        title="EVENTS GALLERY"
        backHref="/photos"
        backText="BACK TO MAIN PAGE"
        smoothEase={smoothEase}
      />

      {/* SINGLE COLUMN MOBILE STACK WITH EXPLICIT GAP */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px', /* Creates spacing between each card */
          width: '100%',
          marginTop: '24px', /* Creates breathing room below the page header */
        }}
      >
        {eventSubCategories.map((sub) => (
          <div 
            key={sub.id} 
            style={{ 
              width: '100%', 
              height: '180px', 
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <PhotoCategoryCard
              id={sub.id}
              title={sub.title}
              coverImage={sub.coverImage}
              baseHref="/photos/events"
              variants={itemVariants}
              smoothEase={smoothEase}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
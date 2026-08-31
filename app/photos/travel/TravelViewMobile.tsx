'use client';

import { motion, Variants } from 'framer-motion';
import PhotoCategoryCard from '@/app/components/PhotoCategoryCard';
import PageHeader from '@/app/components/PageHeader';

interface SubCategory {
  id: string;
  title: string;
  coverImage: string;
}

const travelSubCategories: SubCategory[] = [
  { id: 'nature', title: 'NATURE', coverImage: '/img/photos_page/Travel/nature_cover.webp' },
  { id: 'cities', title: 'CITIES', coverImage: '/img/photos_page/Travel/cities_cover.webp' },
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

export default function TravelViewMobile() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 60px)',
        padding: '16px 20px 40px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PageHeader
        title="TRAVEL GALLERY"
        backHref="/photos"
        backText="BACK TO MAIN PAGE"
        smoothEase={smoothEase}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          marginTop: '24px',
        }}
      >
        {travelSubCategories.map((sub) => (
          <div
            key={sub.id}
            style={{
              width: '100%',
              height: '200px',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <PhotoCategoryCard
              id={sub.id}
              title={sub.title}
              coverImage={sub.coverImage}
              baseHref="/photos/travel"
              variants={itemVariants}
              smoothEase={smoothEase}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
'use client';

import { motion, Variants } from 'framer-motion';
import CategoryCard from '@/app/components/PhotoCategoryCard';
import PageHeader from '@/app/components/PageHeader';

interface SubCategory {
  id: string;
  title: string;
  coverImage: string;
}

const lifestyleSubCategories: SubCategory[] = [
  { id: 'carmeet', title: 'CAR MEET', coverImage: '/img/photos_page/Lifestyle/carmeet_cover.webp' },
  { id: 'polo', title: 'POLO', coverImage: '/img/photos_page/Lifestyle/polo_cover.webp' },
  { id: 'skating', title: 'SKATING', coverImage: '/img/photos_page/Lifestyle/skating_cover.webp' },
];

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export default function LifestyleViewDesktop() {
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
      <PageHeader
        title="LIFESTYLE GALLERY"
        backHref="/photos"
        backText="BACK TO MAIN PAGE"
        smoothEase={smoothEase}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '1fr',
          gap: '20px',
          width: '100%',
          flexGrow: 1,
          marginTop: '16px',
        }}
      >
        {lifestyleSubCategories.map((sub) => (
          <CategoryCard
            key={sub.id}
            id={sub.id}
            title={sub.title}
            coverImage={sub.coverImage}
            baseHref="/photos/lifestyle"
            variants={itemVariants}
            smoothEase={smoothEase}
          />
        ))}
      </motion.div>
    </div>
  );
}
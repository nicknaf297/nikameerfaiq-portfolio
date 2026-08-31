'use client';

import { motion, Variants } from 'framer-motion';
import CategoryCard from '@/app/components/PhotoCategoryCard';
import PageHeader from '@/app/components/PageHeader';

interface SubCategory {
  id: string;
  title: string;
  coverImage: string;
}

const architectureSubCategories: SubCategory[] = [
  { id: 'srisendayan', title: 'MASJID SRI SENDAYAN', coverImage: '/img/photos_page/Architecture/srisendayan_cover.webp' },
  { id: 'kl', title: 'KUALA LUMPUR', coverImage: '/img/photos_page/Architecture/kl_cover.webp' },
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

export default function ArchitectureCategoryPage() {
  return (
    <div className="category-page-wrapper">
      <PageHeader
        title="ARCHITECTURE GALLERY"
        backHref="/photos"
        backText="BACK TO MAIN PAGE"
        smoothEase={smoothEase}
      />

      {/* GRID CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="category-grid-container"
      >
        {architectureSubCategories.map((sub) => (
          <CategoryCard
            key={sub.id}
            id={sub.id}
            title={sub.title}
            coverImage={sub.coverImage}
            baseHref="/photos/architecture"
            variants={itemVariants}
            smoothEase={smoothEase}
          />
        ))}
      </motion.div>

      <style jsx global>{`
        .category-card-img:hover {
          filter: brightness(0.95) saturate(1.1) !important;
        }
      `}</style>

      {/* CLEAN STYLES FOR DESKTOP AND MOBILE */}
      <style jsx>{`
        .category-page-wrapper {
          width: 100vw;
          height: calc(100vh - 90px);
          padding: 16px 50px 32px 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        :global(.category-grid-container) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
          flex-grow: 1;
        }

        @media (max-width: 768px) {
          .category-page-wrapper {
            height: auto;
            min-height: calc(100vh - 90px);
            padding: 16px 20px 32px 20px;
            overflow: auto;
          }

          :global(.category-grid-container) {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            grid-auto-rows: 240px !important;
            gap: 20px !important;
            flex-grow: initial !important;
          }
        }
      `}</style>
    </div>
  );
}
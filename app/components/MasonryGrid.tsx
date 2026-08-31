'use client';

import { motion, Variants } from 'framer-motion';
import { useIsMobile } from '@/app/hooks/useMediaQuery';

interface MasonryGridProps {
  images: string[];
  categoryTitle: string;
  onSelectImage: (index: number) => void;
  columns?: number;
}

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

export default function MasonryGrid({
  images,
  categoryTitle,
  onSelectImage,
  columns = 4,
}: MasonryGridProps) {
  const isMobile = useIsMobile(868);

  if (isMobile === null) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={
        isMobile
          ? {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '6px',
              padding: '0',
              width: '100%',
              boxSizing: 'border-box',
            }
          : {
              columnCount: columns,
              columnGap: '20px',
              width: '100%',
            }
      }
    >
      {images.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={isMobile ? undefined : { y: -4 }}
          transition={{ duration: 0.25 }}
          onClick={() => onSelectImage(idx)}
          style={
            isMobile
              ? {
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '4px', /* 👈 Subtle rounding softens the grid look */
                  overflow: 'hidden',
                  background: '#111',
                  cursor: 'pointer',
                }
              : {
                  breakInside: 'avoid',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#1a1a1a',
                  cursor: 'pointer',
                }
          }
        >
          <img
            src={imgSrc}
            alt={`${categoryTitle} image ${idx + 1}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: isMobile ? 'cover' : 'contain',
              display: 'block',
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
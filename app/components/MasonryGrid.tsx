'use client';

import { motion, Variants } from 'framer-motion';

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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

export default function MasonryGrid({
  images,
  categoryTitle,
  onSelectImage,
  columns = 4,
}: MasonryGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ columnCount: columns, columnGap: '20px', width: '100%' }}
    >
      {images.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          onClick={() => onSelectImage(idx)}
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
            alt={`${categoryTitle} image ${idx + 1}`}
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface PhotoCategoryCardProps {
  id: string;
  title: string;
  coverImage: string;
  baseHref: string;
  variants?: Variants;
  smoothEase?: readonly [number, number, number, number];
}

const defaultEase = [0.4, 0.4, 0.6, 1] as const;

export default function PhotoCategoryCard({
  id,
  title,
  coverImage,
  baseHref,
  variants,
  smoothEase = defaultEase,
}: PhotoCategoryCardProps) {
  return (
    <Link href={`${baseHref}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div
        variants={variants}
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
          src={coverImage}
          alt={title}
          variants={{
            hover: { scale: 1.06 },
          }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="category-card-img"
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
              {title}
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
  );
}
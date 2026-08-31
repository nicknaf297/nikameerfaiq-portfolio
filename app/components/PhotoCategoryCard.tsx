'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  title: string;
  coverImage: string;
  baseHref: string;
  variants?: Variants;
  smoothEase?: readonly [number, number, number, number];
}

const defaultEase = [0.4, 0.4, 0.6, 1] as const;

export default function CategoryCard({
  id,
  title,
  coverImage,
  baseHref,
  variants,
  smoothEase = defaultEase,
}: CategoryCardProps) {
  return (
    <Link 
      href={`${baseHref}/${id}`} 
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    >
      <motion.div
        variants={variants}
        whileHover="hover"
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '100%',
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
            filter: 'brightness(0.75) saturate(0.85)',
            transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'filter, transform',
          }}
        />

        {/* Overlay Text */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            color: '#fff',
            pointerEvents: 'none',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 className="header_text" style={{ fontSize: '20px', letterSpacing: '0.5px', margin: 0, color: '#ffffff' }}>
              {title}
            </h2>
            <motion.span
              className="body_text_bold"
              variants={{
                hover: { x: 6 },
              }}
              transition={{ duration: 0.4, ease: smoothEase }}
              style={{ fontSize: '12px', color: '#FFAC41', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}
            >
              VIEW &rarr;
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
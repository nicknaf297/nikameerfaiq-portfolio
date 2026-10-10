'use client';

import { useState, useEffect, useRef } from 'react';
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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PhotoViewDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/photos/${categoryId}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = panelRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    panelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPanel = (index: number) => {
    panelRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '16px 130px 32px 130px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '420px 1fr',
          gap: '40px',
          width: '100%',
          alignItems: 'start',
        }}
      >
        <motion.aside
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'sticky',
            top: '90px',
            alignSelf: 'start',
            height: 'fit-content',
            width: '100%',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <img
                src="/img/photos_page/main.webp"
                alt="Nik Ameer Faiq Photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <p className="body_text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155' }}>
              Beyond computer science, photography is a big passion. It is my medium for capturing moments, and preserving memories I aspire to keep forever.
            </p>

            <div
              style={{
                borderTop: '1px solid #e2e8f0',
                paddingTop: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div className="body_text" style={{ fontSize: '13px', color: '#6b7280' }}>
                📍 Based in Selangor, Malaysia
              </div>
              <div className="body_text" style={{ fontSize: '13px', color: '#6b7280' }}>
                📷 Gear: Fujifilm XT30ii, Canon D5000
              </div>
            </div>
          </div>
        </motion.aside>

        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            width: '100%',
          }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                scrollSnapAlign: 'start',
                scrollMarginTop: '90px',
                width: '100%',
              }}
            >
              <MainPhotoPanel
                title={cat.title}
                coverImage={cat.coverImage}
                description={cat.description}
                onClick={() => handleCategoryClick(cat.id)}
              />
            </motion.div>
          ))}
        </main>
      </div>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          position: 'fixed',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          zIndex: 50,
        }}
      >
        {categories.map((cat, index) => (
          <button
            key={cat.id}
            onClick={() => scrollToPanel(index)}
            title={cat.title}
            aria-label={`Scroll to ${cat.title}`}
            style={{
              width: activeIndex === index ? '12px' : '8px',
              height: activeIndex === index ? '12px' : '8px',
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? '#FFAC41' : 'rgba(0, 0, 0, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
              outline: 'none',
            }}
          />
        ))}
      </motion.nav>
    </div>
  );
}
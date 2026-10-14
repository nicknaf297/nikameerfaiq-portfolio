'use client';

import { motion, Variants } from 'framer-motion';
import PageHeader from '@/app/components/PageHeader';
import Link from 'next/link';

interface ProjectCategory {
  id: string;
  title: string;
  coverImage: string;
}

const projectsList: ProjectCategory[] = [
  { 
    id: 'python-desktop-utility', 
    title: 'PYTHON DESKTOP UTILITY', 
    coverImage: '/img/projects_page/utility_cover.webp' 
  },
  { 
    id: 'biodiversity-dashboard', 
    title: 'BIODIVERSITY DASHBOARD', 
    coverImage: '/img/projects_page/dashboard_cover.webp' 
  },
  { 
    id: 'esg-application', 
    title: 'ESG APPLICATION MODULES', 
    coverImage: '/img/projects_page/esg_cover.webp' 
  },
  { 
    id: 'portfolio-website', 
    title: 'PORTFOLIO WEBSITE', 
    coverImage: '/img/projects_page/portfolio_cover.webp' 
  },
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

export default function ProjectsViewDesktop() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 90px)',
        padding: '16px 50px 60px 50px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PageHeader
        title="PROJECTS GALLERY"
        backHref="/"
        backText="BACK TO HOME"
        smoothEase={smoothEase}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          marginTop: '24px',
        }}
      >
        {projectsList.map((proj) => (
          <motion.div key={proj.id} variants={itemVariants}>
            <Link 
              href={`/projects/${proj.id}`}
              style={{
                display: 'block',
                position: 'relative',
                height: '280px',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#222',
                textDecoration: 'none',
              }}
            >
              <img 
                src={proj.coverImage} 
                alt={proj.title} 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  color: '#fff',
                }}
              >
                <h3 className="header_text" style={{ fontSize: '24px', margin: 0 }}>{proj.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  backHref: string;
  backText: string;
  smoothEase?: readonly [number, number, number, number];
}

const defaultEase = [0.4, 0.4, 0.6, 1] as const;

export default function PageHeader({
  title,
  backHref,
  backText,
  smoothEase = defaultEase,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      style={{ marginBottom: '16px', flexShrink: 0 }}
    >
      <Link
        href={backHref}
        className="body_text_bold"
        style={{
          color: '#6b7280',
          textDecoration: 'none',
          fontSize: '13px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '6px',
          letterSpacing: '0.5px',
        }}
      >
        &larr; {backText}
      </Link>
      <h1 className="header_text" style={{ fontSize: '32px', color: '#111', margin: 0 }}>
        {title}
      </h1>
    </motion.div>
  );
}
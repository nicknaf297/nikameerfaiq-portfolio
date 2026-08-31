'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  backHref: string;
  backText: string;
  smoothEase?: readonly [number, number, number, number];
}

export default function PageHeader({
  title,
  backHref,
  backText,
}: PageHeaderProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: 0, padding: 0 }}>
      {/* BACK LINK WITH FLUSH LEFT ALIGNMENT */}
      <Link
        href={backHref}
        className="body_text_bold"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          color: '#6b7280',
          textDecoration: 'none',
          letterSpacing: '1px',
          margin: 0,
          padding: 0,
        }}
      >
        <span style={{ display: 'inline-block' }}>&larr;</span>
        <span>{backText}</span>
      </Link>

      {/* FLUSH TITLE */}
      <h1
        className="header_text"
        style={{
          fontSize: '32px',
          color: '#111827',
          margin: '8px 0 0 0',
          padding: 0,
          lineHeight: '1.1',
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </h1>
    </div>
  );
}
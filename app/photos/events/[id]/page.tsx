'use client';

import { use, useState } from 'react';
import PageHeader from '@/app/components/PageHeader';
import MasonryGrid from '@/app/components/MasonryGrid';
import LightboxModal from '@/app/components/LightBoxModal';

import manifest from '@/public/img/photos_page/manifest.json';

interface GalleryData {
  title: string;
  description: string;
}

const subCategoryInfo: Record<string, GalleryData> = {
  concert: {
    title: 'CONCERTS',
    description: 'Live musical performances, and stage lighting.',
  },
  weddings: {
    title: 'WEDDINGS',
    description: 'Special vows, ceremonies, and unforgettable moments.',
  },
  graduation: {
    title: 'GRADUATION',
    description: 'Campus achievements and memorable convocation ceremonies.',
  },
  sports: {
    title: 'SPORTS',
    description: 'Action shots and high-energy games.',
  },
  community: {
    title: 'COMMUNITY EVENTS',
    description: 'Dinners, Programmes, Cultural Meetups.',
  },
};

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

export default function DynamicEventGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categoryId = resolvedParams.id.toLowerCase();
  const galleryImages: string[] = (manifest as Record<string, string[]>)[categoryId] || [];

  const categoryDetails = subCategoryInfo[categoryId] || {
    title: categoryId.toUpperCase(),
    description: 'Photo gallery collection.',
  };

  return (
    <div style={{ width: '100%', padding: '24px 50px 60px 50px', boxSizing: 'border-box' }}>
      <PageHeader
        title={categoryDetails.title}
        backHref="/photos/events"
        backText="BACK TO EVENTS"
        smoothEase={smoothEase}
      />

      <p className="body_text" style={{ fontSize: '15px', color: '#6b7280', marginTop: '-16px', marginBottom: '32px' }}>
        {categoryDetails.description}
      </p>

      {/* 4-COLUMN MASONRY PHOTO GRID COMPONENT */}
      <MasonryGrid
        images={galleryImages}
        categoryTitle={categoryDetails.title}
        onSelectImage={(index) => setSelectedIndex(index)}
        columns={4}
      />

      {/* FULL-SCREEN LIGHTBOX MODAL COMPONENT */}
      <LightboxModal
        selectedIndex={selectedIndex}
        images={galleryImages}
        categoryId={categoryId}
        onClose={() => setSelectedIndex(null)}
        onNavigate={(newIndex) => setSelectedIndex(newIndex)}
      />
    </div>
  );
}
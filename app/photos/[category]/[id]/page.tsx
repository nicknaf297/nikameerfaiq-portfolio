'use client';

import { use, useState } from 'react';
import PageHeader from '@/app/components/PageHeader';
import MasonryGrid from '@/app/components/MasonryGrid';
import LightboxModal from '@/app/components/LightBoxModal';

import manifest from '@/public/img/photos_page/manifest.json';

interface SubCategoryMeta {
  title: string;
  description: string;
  parentHref: string;
  parentLabel: string;
}

const subCategoryMetadata: Record<string, SubCategoryMeta> = {
  // EVENTS CATEGORIES
  concert: {
    title: 'CONCERTS',
    description: 'Live musical performances, and stage lighting.',
    parentHref: '/photos/events',
    parentLabel: 'BACK TO EVENTS',
  },
  weddings: {
    title: 'WEDDINGS',
    description: 'Special vows, ceremonies, and unforgettable moments.',
    parentHref: '/photos/events',
    parentLabel: 'BACK TO EVENTS',
  },
  graduation: {
    title: 'GRADUATION',
    description: 'Campus achievements and convocation ceremonies.',
    parentHref: '/photos/events',
    parentLabel: 'BACK TO EVENTS',
  },
  sports: {
    title: 'SPORTS',
    description: 'Action shots and high-energy games.',
    parentHref: '/photos/events',
    parentLabel: 'BACK TO EVENTS',
  },
  community: {
    title: 'COMMUNITY EVENTS',
    description: 'Dinners, Programmes, Cultural Meetups.',
    parentHref: '/photos/events',
    parentLabel: 'BACK TO EVENTS',
  },

  // TRAVEL CATEGORIES
  nature: {
    title: 'NATURE',
    description: 'Breathtaking landscapes, pristine wilderness, and the quiet beauty of the natural world.',
    parentHref: '/photos/travel',
    parentLabel: 'BACK TO TRAVEL',
  },
  cities: {
    title: 'CITIES',
    description: 'Urban architecture, vibrant street life, and the dynamic energy of cityscapes.',
    parentHref: '/photos/travel',
    parentLabel: 'BACK TO TRAVEL',
  },

  // LIFESTYLE CATEGORIES
  carmeet: {
    title: 'CAR MEET',
    description: 'Breathtaking landscapes, pristine wilderness, and the quiet beauty of the natural world.',
    parentHref: '/photos/lifestyle',
    parentLabel: 'BACK TO LIFESTYLE',
  },
  polo: {
    title: 'POLO',
    description: 'Urban architecture, vibrant street life, and the dynamic energy of cityscapes.',
    parentHref: '/photos/lifestyle',
    parentLabel: 'BACK TO LIFESTYLE',
  },
  skating: {
    title: 'SKATING',
    description: 'Urban architecture, vibrant street life, and the dynamic energy of cityscapes.',
    parentHref: '/photos/lifestyle',
    parentLabel: 'BACK TO LIFESTYLE',
  },

  // ARCHITECTURE CATEGORIES
  srisendayan: {
    title: 'MASJID SRI SENDAYAN',
    description: 'Grand Nabawi-inspired design, intricate Islamic craftsmanship, and majestic domes illuminating Seremban.',
    parentHref: '/photos/architecture',
    parentLabel: 'BACK TO ARCHITECTURE',
  },
  kl: {
    title: 'KUALA LUMPUR',
    description: 'Striking architectural contrast, from towering modern skyscrapers to rich historical landmarks across Kuala Lumpur.',
    parentHref: '/photos/architecture',
    parentLabel: 'BACK TO ARCHITECTURE',
  },
};

const smoothEase = [0.4, 0.4, 0.6, 1] as const;

export default function UniversalGalleryPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categoryParam = resolvedParams.category.toLowerCase();
  const idParam = resolvedParams.id.toLowerCase();

  // Retrieve matching image paths directly from manifest.json
  const galleryImages: string[] = (manifest as Record<string, string[]>)[idParam] || [];

  // Retrieve metadata or generate fallbacks dynamically
  const details: SubCategoryMeta = subCategoryMetadata[idParam] || {
    title: idParam.toUpperCase(),
    description: 'Photo gallery collection.',
    parentHref: `/photos/${categoryParam}`,
    parentLabel: `BACK TO ${categoryParam.toUpperCase()}`,
  };

  return (
    <div style={{ width: '100%', padding: '24px 50px 60px 50px', boxSizing: 'border-box' }}>
      <PageHeader
        title={details.title}
        backHref={details.parentHref}
        backText={details.parentLabel}
        smoothEase={smoothEase}
      />

      <p className="body_text" style={{ fontSize: '15px', color: '#6b7280', marginTop: '-16px', marginBottom: '32px' }}>
        {details.description}
      </p>

      {/* 4-COLUMN MASONRY PHOTO GRID */}
      <MasonryGrid
        images={galleryImages}
        categoryTitle={details.title}
        onSelectImage={(index) => setSelectedIndex(index)}
        columns={4}
      />

      {/* FULL-SCREEN LIGHTBOX OVERLAY */}
      <LightboxModal
        selectedIndex={selectedIndex}
        images={galleryImages}
        categoryId={idParam}
        onClose={() => setSelectedIndex(null)}
        onNavigate={(newIndex) => setSelectedIndex(newIndex)}
      />
    </div>
  );
}
'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import DesktopPhotosView from '@/app/components/PhotoViewDesktop';
import MobilePhotosView from '@/app/components/PhotoViewMobile';

export default function PhotosPage() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return isMobile ? <MobilePhotosView /> : <DesktopPhotosView />;
}
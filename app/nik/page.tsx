'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import DesktopNiksView from '@/app/components/NikViewDesktop';
import MobileNiksView from '@/app/components/NikViewMobile';

export default function NiksPage() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return isMobile ? <MobileNiksView /> : <DesktopNiksView />;
}
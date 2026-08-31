'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import TravelViewDesktop from './TravelViewDesktop';
import TravelViewMobile from './TravelViewMobile';

export default function TravelCategoryPage() {
  const isMobile = useIsMobile(868);

  if (isMobile === null) return null;

  return isMobile ? <TravelViewMobile /> : <TravelViewDesktop />;
}
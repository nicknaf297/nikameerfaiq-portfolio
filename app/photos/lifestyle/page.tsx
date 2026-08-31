'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import LifestyleViewDesktop from './LifestyleViewDesktop';
import LifestyleViewMobile from './LifestyleViewMobile';

export default function LifestyleCategoryPage() {
  const isMobile = useIsMobile(868);

  if (isMobile === null) return null;

  return isMobile ? <LifestyleViewMobile /> : <LifestyleViewDesktop />;
}
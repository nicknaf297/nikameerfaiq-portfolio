'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import ArchitectureViewDesktop from './ArchitectureViewDesktop';
import ArchitectureViewMobile from './ArchitectureViewMobile';

export default function ArchitectureCategoryPage() {
  const isMobile = useIsMobile(868);

  if (isMobile === null) return null;

  return isMobile ? <ArchitectureViewMobile /> : <ArchitectureViewDesktop />;
}
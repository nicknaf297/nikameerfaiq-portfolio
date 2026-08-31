'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import EventsViewDesktop from './EventsViewDesktop';
import EventsViewMobile from './EventsViewMobile';

export default function EventsCategoryPage() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return isMobile ? <EventsViewMobile /> : <EventsViewDesktop />;
}
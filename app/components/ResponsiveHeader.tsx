'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import Header from '@/app/components/Header'; // Your original desktop header
import MobileNavbar from '@/app/components/Navbar'; // Mobile hamburger navbar

export default function ResponsiveHeader() {
  const isMobile = useIsMobile();

  if (isMobile === null) return <Header />;

  return isMobile ? <MobileNavbar /> : <Header />;
}
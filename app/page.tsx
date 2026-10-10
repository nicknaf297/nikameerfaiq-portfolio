'use client';

import { useIsMobile } from '@/app/hooks/useMediaQuery';
import MainOptionsDesktop from '@/app/components/MainOptionsDesktop';
import HomeMobile from '@/app/components/HomeViewMobile';

export default function Home() {
  const isMobile = useIsMobile(868);

  if (isMobile === null) return null;

  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div id="optionbody">
      <MainOptionsDesktop
        pageLink="/nik"
        title="ABOUT ME"
        subtitle="Get To Know Me, Contacts & Resume"
        image="/img/main_nik.webp"
      />
      <MainOptionsDesktop
        pageLink="/photos"
        title="PHOTOS"
        subtitle="Snap. Snap. Snap."
        image="/img/main_photo.webp"
      />
      <MainOptionsDesktop
        pageLink="/projects"
        title="PROJECTS"
        subtitle="Personal Coding Projects"
        image="/img/main_project.webp"
      />
    </div>
  );
}
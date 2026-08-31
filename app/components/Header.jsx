'use client';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  return (
    <>
      <div className="desktop-header-container">
        <HeaderDesktop />
      </div>
      <div className="mobile-header-container">
        <HeaderMobile />
      </div>

      <style jsx global>{`
        .desktop-header-container,
        .mobile-header-container {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000; /* Keeps header above all photo grids and lightboxes */
        }

        .desktop-header-container {
          display: block;
        }

        .mobile-header-container {
          display: none;
        }

        @media (max-width: 868px) {
          .desktop-header-container {
            display: none !important;
          }
          .mobile-header-container {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
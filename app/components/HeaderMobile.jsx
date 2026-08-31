'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className="mobile-header-root">
      <div className="mobile-bar">
        {/* LOGO USING CHAKRA PETCH */}
        <Link href="/" className="mobile-logo" onClick={() => setIsOpen(false)}>
          NIK.
        </Link>

        {/* HAMBURGER TOGGLE */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="burger-bar"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="burger-bar"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="burger-bar"
          />
        </button>
      </div>

      {/* OVERLAY DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-overlay"
          >
            <nav className="mobile-nav-list">
              <Link
                href="/nik"
                className={`mobile-nav-link ${pathname === '/nik' ? 'active' : ''}`}
              >
                ABOUT ME
              </Link>
              <Link
                href="/photos"
                className={`mobile-nav-link ${pathname.startsWith('/photos') ? 'active' : ''}`}
              >
                PHOTOS
              </Link>
              <Link
                href="/projects"
                className={`mobile-nav-link ${pathname === '/projects' ? 'active' : ''}`}
              >
                PROJECTS
              </Link>

              <Link href="/contact" className="mobile-contact-btn">
                CONTACT ME
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .mobile-header-root {
          position: sticky;
          top: 0;
          width: 100%;
          height: 65px;
          background: #ffffff;
          z-index: 100;
          border-bottom: 1px solid #f1f5f9;
        }

        .mobile-bar {
          width: 100%;
          height: 100%;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .mobile-logo {
          font-family: var(--font-cp-bold), sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #d6336c;
          text-decoration: none;
          letter-spacing: 1px;
          z-index: 101;
        }

        .hamburger-btn {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 15px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }

        .burger-bar {
          width: 100%;
          height: 2.5px;
          background-color: #1e293b;
          border-radius: 2px;
          transform-origin: center;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 65px;
          left: 0;
          width: 100vw;
          height: calc(100vh - 90px);
          background-color: #ffffff !important;
          z-index: 99;
          padding: 40px 24px;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        /* FORCED VISIBLE TEXT COLOR AND FONT FAMILY */
        .mobile-nav-link {
          font-family: var(--font-cp-bold), sans-serif !important;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b !important; /* Forces dark gray so unselected links show up */
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .mobile-nav-link.active {
          color: #d6336c !important; /* Accent pink matching active state */
        }

        .mobile-contact-btn {
          display: block;
          text-align: center;
          font-family: var(--font-cp-bold), sans-serif !important;
          background: #ffac41;
          color: #111111 !important;
          padding: 16px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          margin-top: 12px;
          letter-spacing: 0.5px;
        }
      `}</style>
    </header>
  );
}
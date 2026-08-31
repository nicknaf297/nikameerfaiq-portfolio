'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'PHOTOS', href: '/photos' },
  { label: 'ABOUT', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          NIK.
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-item ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="contact-btn">
            CONTACT ME
          </Link>
        </nav>

        {/* MOBILE HAMBURGER TOGGLE BUTTON */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="hamburger-line"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="hamburger-line"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="hamburger-line"
          />
        </button>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="mobile-menu-overlay"
          >
            <nav className="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-nav-item ${pathname === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                style={{ marginTop: '20px', width: '100%' }}
              >
                <Link href="/contact" className="mobile-contact-btn">
                  CONTACT ME
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPONENT STYLES */}
      <style jsx>{`
        .navbar-header {
          position: sticky;
          top: 0;
          width: 100%;
          height: 90px;
          background: #ffffff;
          z-index: 100;
          border-bottom: 1px solid #f1f5f9;
        }

        .navbar-container {
          max-width: 1440px;
          height: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .navbar-logo {
          font-family: inherit;
          font-size: 28px;
          font-weight: 900;
          color: #d6336c;
          text-decoration: none;
          letter-spacing: 1px;
        }

        /* DESKTOP NAV */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-size: 13px;
          font-weight: 700;
          color: #475569;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .nav-item:hover,
        .nav-item.active {
          color: #1e293b;
        }

        .contact-btn {
          background: #ffac41;
          color: #111;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .contact-btn:hover {
          background: #f59e0b;
          transform: translateY(-1px);
        }

        /* HAMBURGER TOGGLE BUTTON */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }

        .hamburger-line {
          width: 100%;
          height: 2.5px;
          background-color: #1e293b;
          border-radius: 2px;
          transform-origin: center;
        }

        /* MOBILE MENU OVERLAY */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 90px;
          left: 0;
          width: 100vw;
          height: calc(100vh - 90px);
          background: #ffffff;
          padding: 40px 24px;
          box-sizing: border-box;
          z-index: 99;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .mobile-nav-item {
          font-size: 20px;
          font-weight: 800;
          color: #334155;
          text-decoration: none;
          letter-spacing: 1px;
        }

        .mobile-nav-item.active {
          color: #d6336c;
        }

        .mobile-contact-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #ffac41;
          color: #111;
          padding: 16px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          box-sizing: border-box;
        }

        /* MEDIA QUERIES */
        @media (max-width: 868px) {
          .navbar-container {
            padding: 0 20px;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger-btn,
          .mobile-menu-overlay {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
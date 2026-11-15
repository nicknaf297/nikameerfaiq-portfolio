'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

interface ContactMethod {
  id: string;
  label: string;
  handle: string;
  href: string;
  copyValue?: string;
  icon: any;
}

export default function ContactPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, id: string, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      label: 'Phone / WhatsApp',
      handle: '+60 16-667 2907',
      href: 'tel:+60166672907',
      copyValue: '+60166672907',
      icon: faPhone,
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'nicknaf297@gmail.com',
      href: 'mailto:nicknaf297@gmail.com',
      copyValue: 'nicknaf297@gmail.com',
      icon: faEnvelope,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'Nik Ameer Faiq',
      href: 'https://www.linkedin.com/in/nik-ameer-faiq-nik-muhd-aslan-3b7b912ab/',
      icon: faLinkedin,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@niksvistas_',
      href: 'https://www.instagram.com/niksvistas_/',
      icon: faInstagram,
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'nikameerfaiq',
      href: 'https://github.com/nikameerfaiq',
      icon: faGithub,
    },
  ];

  return (
    <div className="resume-container fadeAnimation">
      {/* Responsive overrides for mobile screens */}
      <style>{`
        .contact-desc {
          white-space: nowrap;
        }
        @media (max-width: 1024px) {
          .contact-portrait-aside {
            max-width: 340px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .contact-desc {
            white-space: normal;
          }
          .contact-card-box {
            padding: 32px 20px !important;
          }
        }
      `}</style>

      {/* LEFT COLUMN: Static Portrait (No Sticky, No Hover Effect) */}
      <aside className="contact-portrait-aside" style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: '#fff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              backgroundColor: '#111',
            }}
          >
            <img
              src="/img/photos_page/main.webp"
              alt="Nik Ameer Faiq"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </motion.div>
      </aside>

      {/* RIGHT COLUMN: Centered Connection Layout (No Container Hover Effect) */}
      <main className="resume-main" style={{ justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="contact-card-box"
          style={{
            background: '#fff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '8px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {/* Header & Name */}
          <div style={{ width: '100%', marginBottom: '36px' }}>
            <h1
              className="header_text"
              style={{
                fontSize: '2.2rem',
                lineHeight: '1.1',
                color: '#111',
                marginBottom: '6px',
              }}
            >
              NIK AMEER FAIQ
            </h1>
            <h2
              className="title_text"
              style={{
                fontSize: '1.15rem',
                color: '#C73659',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              More Ways to Connect
            </h2>
            <p
              className="body_text contact-desc"
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: '1.5',
              }}
            >
              Trying to get in touch? Reach out through any of the channels below.
            </p>
          </div>

          {/* Horizontal Circular Badge Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '20px',
              width: '100%',
            }}
          >
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.id === 'email' || method.id === 'phone' ? undefined : '_blank'}
                rel={method.id === 'email' || method.id === 'phone' ? undefined : 'noopener noreferrer'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '10px',
                  padding: '16px 10px',
                  borderRadius: '8px',
                  color: '#111',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  const badge = e.currentTarget.querySelector('.icon-circle') as HTMLElement;
                  if (badge) {
                    badge.style.backgroundColor = '#FFAC41';
                    badge.style.color = '#000000';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  const badge = e.currentTarget.querySelector('.icon-circle') as HTMLElement;
                  if (badge) {
                    badge.style.backgroundColor = '#111111';
                    badge.style.color = '#ffffff';
                  }
                }}
              >
                {/* Circular Icon Badge */}
                <div
                  className="icon-circle"
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  <FontAwesomeIcon icon={method.icon} style={{ width: '20px', height: '20px' }} />
                </div>

                {/* Label & Handle */}
                <div style={{ width: '100%' }}>
                  <p
                    className="title_text"
                    style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      color: '#64748b',
                      marginBottom: '2px',
                    }}
                  >
                    {method.label}
                  </p>
                  <p
                    className="body_text_bold"
                    style={{
                      fontSize: '0.85rem',
                      color: '#111',
                      wordBreak: 'break-word',
                    }}
                  >
                    {method.handle}
                  </p>
                </div>

                {/* Copy Button for Email & Phone */}
                {method.copyValue && (
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, method.id, method.copyValue!)}
                    className="body_text"
                    style={{
                      marginTop: '2px',
                      padding: '3px 8px',
                      fontSize: '0.72rem',
                      color: copiedId === method.id ? '#16a34a' : '#64748b',
                      backgroundColor: '#f1f5f9',
                      border: 'none',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={copiedId === method.id ? faCheck : faCopy}
                      style={{ width: '11px', height: '11px' }}
                    />
                    <span>{copiedId === method.id ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
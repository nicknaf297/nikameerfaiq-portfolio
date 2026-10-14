'use client';

import { use } from 'react';
import PageHeader from '@/app/components/PageHeader';

export default function WalletProjectPage() { // 👈 Ensure 'export default' is present here
  return (
    <div className="wallet-page-root">
      <div className="wallet-max-wrapper">
        <PageHeader
          title="WALLET PROJECT"
          backHref="/projects"
          backText="BACK TO PROJECTS"
        />
        
        <p className="body_text">Unique layout and details for the wallet project go here.</p>
      </div>

      <style jsx>{`
        .wallet-page-root {
          width: 100%;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }

        .wallet-max-wrapper {
          width: 100%;
          max-width: 1400px;
          padding: 24px 40px 60px 40px;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
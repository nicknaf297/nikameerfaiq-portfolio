import Link from 'next/link';

export default function MainOptionsMobile({ pageLink, title, subtitle, image }) {
  return (
    <Link href={pageLink} className="mob-wrapper">
      <div className="mob-card">
        <img src={image} alt={title} className="mob-image" />
        
        <div className="mob-overlay">
          <div className="mob-title">{title}</div>
          <div className="mob-subtitle">{subtitle}</div>
        </div>
      </div>

      <style jsx>{`
        .mob-wrapper {
          display: block;
          width: 100%;
          text-decoration: none;
        }

        .mob-card {
          position: relative;
          width: 100%;
          height: 320px;
          border-radius: 8px;
          overflow: hidden;
          background-color: #222;
        }

        .mob-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1);
        }

        .mob-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 16px 20px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.6) 80%, transparent 100%);
          box-sizing: border-box;
        }

        .mob-title {
          font-family: var(--font-cp-bold), sans-serif;
          font-size: 24px;
          line-height: 1.2;
          color: white;
          margin: 0;
        }

        .mob-subtitle {
          font-family: var(--font-sc-reg), monospace;
          font-size: 13px;
          color: #ccc;
          margin-top: 4px;
        }
      `}</style>
    </Link>
  );
}
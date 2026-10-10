import Link from 'next/link';

export default function LogoMobile() {
  return (
    <div className="logo-container">
      <Link href="/" className="logo-link header_text">
        NIK.
      </Link>

      <style jsx>{`
        .logo-container {
          height: 40px;
          display: inline-flex;
          align-items: center;
          background: var(--Red, #C73659);
          padding: 0 16px;
        }

        .logo-link {
          font-size: 35px;
          color: white !important;
          text-decoration: none;
          letter-spacing: 1px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
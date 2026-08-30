import Link from 'next/link';

function MainOptions({ pageLink, title, subtitle, image }) {
  return (
    <Link href={pageLink} className="mainoptions">
      <img src={image} alt={title} className="option-bg-img" />
      
      <div className="optiontextbar">
        <div className="titletextbar">{title}</div>
        <div className="desctextbar">{subtitle}</div>
      </div>
    </Link>
  );
}

export default MainOptions;
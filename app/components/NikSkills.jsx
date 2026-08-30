import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faFilm } from '@fortawesome/free-solid-svg-icons';

export default function NikSkills() {
  const devSkills = [
    { name: 'C++', logo: '/img/logos/cplus.png' },
    { name: 'HTML5', logo: '/img/logos/html.png' },
    { name: 'CSS3', logo: '/img/logos/css.png' },
    { name: 'React', logo: '/img/logos/react.png' },
    { name: 'Flutter', logo: '/img/logos/flutter.png' },
    { name: 'Java', logo: '/img/logos/java.png' },
    { name: 'Python', logo: '/img/logos/python.png' },
    { name: 'Django', logo: '/img/logos/django.png' },
    { name: 'Cisco', logo: '/img/logos/cisco.png' },
    { name: 'Linux', logo: '/img/logos/linux.png' },
  ];

  const designSkills = [
    { name: 'Figma', logo: '/img/logos/figma.png' },
    { name: 'Photoshop', logo: '/img/logos/photoshop.png' },
    { name: 'Lightroom', logo: '/img/logos/lightroom.png' },
  ];

  return (
    <section>
      <h2 className="resume-section-title" style={{ fontSize: '20px', marginBottom: '12px' }}>
        Technical &amp; Design Skills
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <p className="body_text_bold" style={{ fontSize: '16px', marginBottom: '6px', color: '#64748b' }}>
            DEVELOPMENT
          </p>
          <div className="skill-tag-group">
            {devSkills.map((s) => (
              <span key={s.name} className="skill-tag">
                <img src={s.logo} alt={s.name} /> {s.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="body_text_bold" style={{ fontSize: '16px', marginBottom: '6px', color: '#64748b' }}>
            DESIGN &amp; CREATIVE
          </p>
          <div className="skill-tag-group">
            {designSkills.map((s) => (
              <span key={s.name} className="skill-tag">
                <img src={s.logo} alt={s.name} /> {s.name}
              </span>
            ))}
            <span className="skill-tag"><FontAwesomeIcon icon={faCamera} /> Photography</span>
            <span className="skill-tag"><FontAwesomeIcon icon={faFilm} /> Video Editing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
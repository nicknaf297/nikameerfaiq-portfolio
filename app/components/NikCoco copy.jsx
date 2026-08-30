// components/nik_coco.tsx
import PopOutCard from "./PopOutCard";

export default function NikCoco() {
  return (
    <section className="center_vertical_container" style={{ gap: "48px" }}>
      <h2 className="header_text fadeAnimation" style={{ fontSize: "60px" }}>
        EXTRACURRICULAR ACTIVITIES
      </h2>

      {/* 2025 SECTION */}
      <div className="center_vertical_container" style={{ gap: "20px" }}>
        <h3 className="header_text fadeAnimation" style={{ fontSize: "25px" }}>2025</h3>
        <div className="center_horizontal_container fadeAnimation" style={{ gap: "32px" }}>
          
          <PopOutCard
            titleName="Sekolah@MMU Perdana Negeri Sembilan 2025"
            subtitle="CSR Programme | Assistant Director"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>
                    A 7 day CSR programme across Kuala Pilah, Negeri Sembilan involving 14 high schools and 500 students, organized by MMU students and PPD.
                  </li>
                  <li>
                    I was the Assistant Director, my responsibilities include:
                    <ul className="sub-list">
                      <li>Oversee the Multimedia Division for designing media collaterals and teaching modules.</li>
                      <li>Oversee the Technical, Logistic and Asset Division for assets.</li>
                      <li>Oversee the Communications and Media Division, responsible for ceremony planning and closing gimmick.</li>
                      <li>In charge of arranging the logistic plan for buses for the movements of students.</li>
                      <li>Lead and manage my team on the closing school, ensuring activities are well executed.</li>
                    </ul>
                  </li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/n93.jpg" style={{ width: '35%' }} alt="perdanaN9" />
                  <img src="/img/n94.jpg" style={{ width: '35%' }} alt="perdanaN9" />
                </div>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/n92.jpg" style={{ width: '35%' }} alt="perdanaN9" />
                  <img src="/img/n91.jpg" style={{ width: '35%' }} alt="perdanaN9" />
                </div>
              </div>
            }
          />

          <PopOutCard
            titleName="Sekolah@MMU Melaka Edisi Ramadan 2025"
            subtitle="CSR Programme | Assistant Head of Division"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>
                    A 7 day programme across Merlimau, Melaka involving 3 high schools, organized by MMU students.
                  </li>
                  <li>
                    I was the Assistant Head of Division for Multimedia, tasked to:
                    <ul className="sub-list">
                      <li>Lead the refinement of the previous Canva module to be used for teaching</li>
                      <li>Create the final project to test students’ ability in using Canva based on the module taught</li>
                      <li>Taught students, set up computer labs, and was the event photographer</li>
                      <li>Assist other high committees in designing banners, backdrops and after-event posts</li>
                    </ul>
                  </li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/melaka1.jpg" style={{ width: '35%' }} alt="melaka" />
                  <img src="/img/melaka2.jpg" style={{ width: '35%' }} alt="melaka" />
                </div>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/melaka3.png" style={{ width: '35%' }} alt="melaka" />
                  <img src="/img/melaka4.png" style={{ width: '35%' }} alt="melaka" />
                </div>
              </div>
            }
          />

          <PopOutCard
            titleName="Light of Hope"
            subtitle="Volunteering Programme | Committee"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>
                    A volunteering programme organized by Sekretariat Sekolah@MMU in collaboration with Dapur Jalanan Kuala Lumpur.
                  </li>
                  <li>
                    Prepared food at Dapur Jalanan Kuala Lumpur headquarters, then proceeded to distribute them in the streets of Pasar Seni, Kuala Lumpur to those in need.
                  </li>
                  <li>
                    I was the treasurer, keeping track of expenses and making a financial report.
                  </li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/light.jpg" style={{ width: '55%' }} alt="lightofhope" />
                </div>
              </div>
            }
          />

        </div>
      </div>

      {/* 2024 SECTION */}
      <div className="center_vertical_container" style={{ gap: "20px" }}>
        <h3 className="header_text fadeAnimation" style={{ fontSize: "25px" }}>2024</h3>
        <div className="center_horizontal_container fadeAnimation" style={{ gap: "32px" }}>

          <PopOutCard
            titleName="CodeNection 2024"
            subtitle="Coding Competition | Committee"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>A coding competition for university students organized by MMU students.</li>
                  <li>I was part of the multimedia committee and my main tasks include designing posters, certificates and being the photographer for the event day.</li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/code1.jpg" style={{ width: '40%' }} alt="codenection" />
                  <img src="/img/code2.jpg" style={{ width: '40%' }} alt="codenection" />
                </div>
              </div>
            }
          />

          <PopOutCard
            titleName="Kechara Soup Kitchen"
            subtitle="Volunteering Programme | Participant"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>A volunteering programme organized by Kechara Soup Kitchen Society to help those in need.</li>
                  <li>Collecting surplus food from multiple stores such as KFC and AEON in Cheras, then delivering them to Cheshire Home, a home for old and disabled individuals.</li>
                </ul>
              </div>
            }
          />

          <PopOutCard
            titleName="Sekolah@MMU Jubli Emas Darul Iman"
            subtitle="CSR Programme | Committee"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>A 7 day programme across Terengganu involving high school students, organized by MMU students.</li>
                  <li>
                    Part of the Multimedia Committee
                    <ul className="sub-list">
                      <li>Taught the students about the basics of Canva</li>
                      <li>Set up the school labs (laptops, WiFi, PCs)</li>
                      <li>Evaluated the posters and videos created by the students as part of the final project</li>
                    </ul>
                  </li>
                  <li>We also did many meaningful activities with the students such as Explorace, sharing sessions, and many more.</li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/jubli1.jpg" style={{ width: '40%' }} alt="jubli" />
                  <img src="/img/jubli2.jpg" style={{ width: '40%' }} alt="jubli" />
                </div>
              </div>
            }
          />

        </div>
      </div>

      {/* 2023 & 2022 SECTIONS */}
      <div className="center_vertical_container" style={{ gap: "32px" }}>
        
        {/* 2023 */}
        <div className="center_vertical_container" style={{ gap: "20px" }}>
          <h3 className="header_text fadeAnimation" style={{ fontSize: "25px" }}>2023</h3>
          <div className="center_horizontal_container fadeAnimation" style={{ gap: "32px" }}>
            
            <PopOutCard
              titleName="CARES UMMC"
              subtitle="Volunteering Programme | Participant"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "32px" }}>
                  <ul className="body_text">
                    <li>A volunteering programme held at Pusat Perubatan Universiti Malaya, where the goal is to take care of child patients diagnosed with cancer.</li>
                    <li>We played and entertained the children with board games, and made conversations with them.</li>
                  </ul>
                  <img src="/img/cares.jpg" style={{ width: '40%' }} alt="cares" />
                </div>
              }
            />

            <PopOutCard
              titleName="Minggu Mesra Pelajar"
              subtitle="Orientation Programme | Participant"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "32px" }}>
                  <ul className="body_text">
                    <li>A volunteer programme opened to alumni of ASASIpintar to help handle the orientation of new ASASIpintar students.</li>
                    <li>Involved in helping with registration, setting up venues, moving belongings and taking photos.</li>
                    <li>Handled activities and sharing sessions.</li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                    <img src="/img/mmp1.jpg" style={{ width: '40%' }} alt="mmp" />
                    <img src="/img/mmp2.jpg" style={{ width: '40%' }} alt="mmp" />
                  </div>
                </div>
              }
            />

          </div>
        </div>

        {/* 2022 */}
        <div className="center_vertical_container fadeAnimation" style={{ gap: "20px" }}>
          <h3 className="header_text fadeAnimation" style={{ fontSize: "25px" }}>2022</h3>
          <PopOutCard
            titleName="International Future Scientist Conference"
            subtitle="Research Competition | Best Review Paper, Gold Medallist"
            popupContent={
              <div className="center_vertical_container" style={{ gap: "32px" }}>
                <ul className="body_text">
                  <li>
                    Title of Research Paper: “Evaluation of Antibacterial Properties of Kelulut Honey, Cinnamon, Turmeric and Garlic Extracts against <em>Escherichia coli</em>: A Comprehensive Review”
                  </li>
                  <li>Reviewed over 15+ research papers and collaborated with Mohd Razif Mamat from Malaysia Genome Institute.</li>
                  <li>Obtained <strong>Gold Medal</strong> and <strong>Best Research Award</strong> for Review Paper Category.</li>
                </ul>
                <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "32px" }}>
                  <img src="/img/ifsc.jpg" style={{ width: '40%' }} alt="ifsc" />
                  <img src="/img/ifsc_best.jpg" style={{ width: '40%' }} alt="ifsc_best" />
                </div>
              </div>
            }
          />
        </div>

      </div>

    </section>
  );
}
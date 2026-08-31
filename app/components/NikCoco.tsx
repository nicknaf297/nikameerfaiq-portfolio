import PopOutCard from "./PopOutCard";

export default function NikCoco() {
  return (
    <section>
      <h2 className="resume-section-title">Extracurricular Activities</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* 2026 SECTION */}
        <div className="timeline-year-group">
          <h3 className="timeline-year-heading">2026</h3>
          <div className="resume-card-grid">
            <PopOutCard
              titleName="Sekolah@MMU Perdana Darul Ridzuan"
              subtitle="CSR Programme | Director"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A 7 day CSR programme across Gerik and Tambun, Perak involving 4 high schools and 330 students, organized by MMU students and Jabatan Agama Islam Perak and MRSM.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      As my final event for Sekolah@MMU, I was the Director. My responsibilities include:
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Manage and delegate tasks for my top committees and 6 different bureaus with different responsibilties</li>
                        <li>Approach, conduct meetings and present the event proposal with multiple schools, VIPs and MMU Departmentsa</li>
                        <li>Solve problems and come up with contingency plans.</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <img src="/img/nik_page/pdr1.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pdr" />
                    <img src="/img/nik_page/pdr2.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pdr" />
                    <img src="/img/nik_page/pdr3.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pdr" />
                    <img src="/img/nik_page/pdr4.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pdr" />
                  </div>
                </div>
              }
            />

          <PopOutCard
              titleName="Sekolah@MMU Perdana Darul Makmur Ihya' Ramadan"
              subtitle="CSR Programme | HOD Corporate Partnership"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A 7 day CSR programme across Pekan, Pahang involving 17 high schools and 300 students, organized by MMU students and Jabatan Agama Islam Pahang.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I was the Head of Division for Corporate Partnership, my responsibilities include:
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Secure sponsorships from various companies including in-kind and monetary.</li>
                        <li>Created a sponsorship scheme, executive summary and email account to approach companies.</li>
                        <li>Guide 4 other committee members on tips and methods to approach a company</li>
                      </ul>
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I managed to secure a total of 5 companies, with the sponsor including RM12,000 total monetarily and some books that were donated to the schools
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <img src="/img/nik_page/pahang1.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pahang" />
                    <img src="/img/nik_page/pahang2.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pahang" />
                    <img src="/img/nik_page/pahang3.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pahang" />
                    <img src="/img/nik_page/pahang4.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="pahang" />
                  </div>
                </div>
              }
            />
          </div>
        </div>
        
        {/* 2025 SECTION */}
        <div className="timeline-year-group">
          <h3 className="timeline-year-heading">2025</h3>
          <div className="resume-card-grid">
            <PopOutCard
              titleName="Sekolah@MMU Mini Kelantan"
              subtitle="CSR Programme | Secretary"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A 5 day CSR programme across Kota Bharu, Kelantan involving 6 high schools and 100 students, organized by MMU students and Yayasan Islam Kelantan.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I was the Secretary, my responsibilities include:
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Create minute meetings of meetings between multiple different parties.</li>
                        <li>Create various letters for VIP invitations as well as for committee documentations.</li>
                        <li>Drafted a final report of the overall programme.</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <img src="/img/nik_page/kelantan1.webp" style={{ width: '45%', borderRadius: '4px' }} alt="kelantan" />
                    <img src="/img/nik_page/kelantan2.webp" style={{ width: '45%', borderRadius: '4px' }} alt="kelantan" />
                  </div>
                </div>
              }
            />

            <PopOutCard
              titleName="Sekolah@MMU Perdana Negeri Sembilan 2025"
              subtitle="CSR Programme | Assistant Director I"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A 7 day CSR programme across Kuala Pilah, Negeri Sembilan involving 14 high schools and 500 students, organized by MMU students and PPD.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I was the Assistant Director, my responsibilities include:
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Oversee the Multimedia Division for designing media collaterals and teaching modules.</li>
                        <li>Oversee the Technical, Logistic and Asset Division for assets.</li>
                        <li>Oversee the Communications and Media Division, responsible for ceremony planning and closing gimmick.</li>
                        <li>In charge of arranging the logistic plan for buses for the movements of students.</li>
                        <li>Lead and manage my team on the closing school, ensuring activities are well executed.</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <img src="/img/nik_page/n93.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="perdanaN9" />
                    <img src="/img/nik_page/n94.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="perdanaN9" />
                    <img src="/img/nik_page/n92.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="perdanaN9" />
                    <img src="/img/nik_page/n91.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="perdanaN9" />
                  </div>
                </div>
              }
            />

            <PopOutCard
              titleName="Sekolah@MMU Melaka Edisi Ramadan 2025"
              subtitle="CSR Programme | AHOD Multimedia"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A 7 day programme across Merlimau, Melaka involving 3 high schools, organized by MMU students.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I was the Assistant Head of Division for Multimedia, tasked to:
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Lead the refinement of the previous Canva module to be used for teaching</li>
                        <li>Create the final project to test students’ ability in using Canva based on the module taught</li>
                        <li>Taught students, set up computer labs, and was the event photographer</li>
                        <li>Assist other high committees in designing banners, backdrops and after-event posts</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <img src="/img/nik_page/melaka1.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="melaka" />
                    <img src="/img/nik_page/melaka2.jpg" style={{ width: '45%', borderRadius: '4px' }} alt="melaka" />
                    <img src="/img/nik_page/melaka3.png" style={{ width: '45%', borderRadius: '4px' }} alt="melaka" />
                    <img src="/img/nik_page/melaka4.png" style={{ width: '45%', borderRadius: '4px' }} alt="melaka" />
                  </div>
                </div>
              }
            />

            <PopOutCard
              titleName="Light of Hope"
              subtitle="Volunteering Programme | Treasurer"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      A volunteering programme organized by Sekretariat Sekolah@MMU in collaboration with Dapur Jalanan Kuala Lumpur.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      Prepared food at Dapur Jalanan Kuala Lumpur headquarters, then proceeded to distribute them in the streets of Pasar Seni, Kuala Lumpur to those in need.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      I was the treasurer, keeping track of expenses and making a financial report.
                    </li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px" }}>
                    <img src="/img/nik_page/light.jpg" style={{ width: '70%', borderRadius: '4px' }} alt="lightofhope" />
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* 2024 SECTION */}
        <div className="timeline-year-group">
          <h3 className="timeline-year-heading">2024</h3>
          <div className="resume-card-grid">
            <PopOutCard
              titleName="CodeNection 2024"
              subtitle="Coding Competition | Multimedia Committee"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>A coding competition for university students organized by MMU students.</li>
                    <li style={{ marginTop: '8px' }}>I was part of the multimedia committee and my main tasks include designing posters, certificates and being the photographer for the event day.</li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px" }}>
                    <img src="/img/nik_page/code1.webp" style={{ width: '45%', borderRadius: '4px' }} alt="codenection" />
                    <img src="/img/nik_page/code2.webp" style={{ width: '45%', borderRadius: '4px' }} alt="codenection" />
                  </div>
                </div>
              }
            />

            <PopOutCard
              titleName="Sekolah@MMU Jubli Emas Darul Iman"
              subtitle="CSR Programme | Multimedia Committee"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>A 7 day programme across Terengganu involving high school students, organized by MMU students.</li>
                    <li style={{ marginTop: '8px' }}>
                      Part of the Multimedia Committee
                      <ul className="sub-list" style={{ marginTop: '6px' }}>
                        <li>Taught the students about the basics of Canva</li>
                        <li>Set up the school labs (laptops, WiFi, PCs)</li>
                        <li>Evaluated the posters and videos created by the students as part of the final project</li>
                      </ul>
                    </li>
                    <li style={{ marginTop: '8px' }}>We also did many meaningful activities with the students such as Explorace, sharing sessions, and many more.</li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px" }}>
                    <img src="/img/nik_page/jubli1.webp" style={{ width: '45%', borderRadius: '4px' }} alt="jubli" />
                    <img src="/img/nik_page/jubli2.webp" style={{ width: '45%', borderRadius: '4px' }} alt="jubli" />
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* 2023 & 2022 SECTIONS */}
        <div className="timeline-year-group">
          <h3 className="timeline-year-heading">2023</h3>
          <div className="resume-card-grid">
            <PopOutCard
              titleName="CARES UMMC"
              subtitle="Volunteering Programme | Participant"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>A volunteering programme held at Pusat Perubatan Universiti Malaya, where the goal is to take care of child patients diagnosed with cancer.</li>
                    <li style={{ marginTop: '8px' }}>We played and entertained the children with board games, and made conversations with them.</li>
                  </ul>
                  <img src="/img//nik_page/cares.webp" style={{ width: '50%', borderRadius: '4px' }} alt="cares" />
                </div>
              }
            />

            <PopOutCard
              titleName="Minggu Mesra Pelajar"
              subtitle="Orientation Programme | Multimedia Committee"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>A volunteer programme opened to alumni of ASASIpintar to help handle the orientation of new ASASIpintar students.</li>
                    <li style={{ marginTop: '8px' }}>Involved in helping with registration, setting up venues, moving belongings and taking photos.</li>
                    <li style={{ marginTop: '8px' }}>Handled activities and sharing sessions.</li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px" }}>
                    <img src="/img/nik_page/mmp1.webp" style={{ width: '45%', borderRadius: '4px' }} alt="mmp" />
                    <img src="/img/nik_page/mmp2.webp" style={{ width: '45%', borderRadius: '4px' }} alt="mmp" />
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className="timeline-year-group">
          <h3 className="timeline-year-heading">2022</h3>
          <div className="resume-card-grid">
            <PopOutCard
              titleName="International Future Scientist Conference"
              subtitle="Research Competition | Best Review Paper, Gold Medallist"
              popupContent={
                <div className="center_vertical_container" style={{ gap: "24px" }}>
                  <ul className="body_text" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <li>
                      Title of Research Paper: “Evaluation of Antibacterial Properties of Kelulut Honey, Cinnamon, Turmeric and Garlic Extracts against <em>Escherichia coli</em>: A Comprehensive Review”
                    </li>
                    <li style={{ marginTop: '8px' }}>Reviewed over 15+ research papers and collaborated with Mohd Razif Mamat from Malaysia Genome Institute.</li>
                    <li style={{ marginTop: '8px' }}>Obtained <strong>Gold Medal</strong> and <strong>Best Research Award</strong> for Review Paper Category.</li>
                  </ul>
                  <div className="center_horizontal_container" style={{ justifyContent: "center", gap: "16px" }}>
                    <img src="/img/nik_page/ifsc.webp" style={{ width: '45%', borderRadius: '4px' }} alt="ifsc" />
                    <img src="/img/nik_page/IFSC_best.webp" style={{ width: '45%', borderRadius: '4px' }} alt="ifsc_best" />
                  </div>
                </div>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
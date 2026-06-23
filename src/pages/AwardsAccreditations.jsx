import React, { useState } from "react";
import './partners/Sophos.css';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function AwardsAccreditations() {
  const seoData = getSEOData('awardsAccreditations');

  const [activeTab, setActiveTab] = useState("aruba");

  const certNames = [
    'Sophos Certified Architect', 'Sophos Certified Engineer', 'Sophos Certified Technician',
    'Sophos XG Firewall Certified', 'Sophos Intercept X Certified', 'Sophos Central Admin Certified',
    'Sophos MDR Certified', 'Sophos EDR Specialist', 'Sophos ZTNA Certified',
    'Sophos Endpoint Protection Certified', 'Sophos Email Security Certified', 'Sophos Web Gateway Certified',
    'Sophos Cloud Optix Certified', 'Sophos SD-WAN Certified', 'Sophos Server Protection Certified',
    'Sophos Mobile Certified', 'Sophos SASE Solutions Certified', 'Sophos Mobile Engineer',
    'Sophos Mobile Architect', 'Sophos Wireless Certified', 'Sophos Phish Threat Certified',
    'Sophos Data Loss Prevention Certified', 'Sophos Network Detection & Response', 'Sophos XDR Specialist',
    'Sophos Managed Threat Response', 'Sophos Firewall Manager Certified', 'Sophos Partner Sales Certified',
    'Sophos Rapid Response Certified', 'Sophos Synchronized Security Certified', 'Sophos Encryption Certified',
    'Sophos Sandstorm Certified', 'Sophos UTM Certified', 'Sophos AP Certified', 'Sophos Switch Certified',
  ];

  return (
    <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h1>Awards &amp; Accreditations</h1>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="tracenetworksolutions"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Awards &amp; Accreditations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cert-awards-section-dark">
        <div className="container">
          <h2 className="cert-awards-title text-center">Awards &amp; Accreditations</h2>

          <ul className="cert-tabs-nav-dark">
            <li
              className={`cert-tab-dark${activeTab === "aruba" ? " active" : ""}`}
              onClick={() => setActiveTab("aruba")}
              style={{ cursor: "pointer" }}
            >Aruba</li>
            <li
              className={`cert-tab-dark${activeTab === "sophos" ? " active" : ""}`}
              onClick={() => setActiveTab("sophos")}
              style={{ cursor: "pointer" }}
            >Sophos</li>
            <li
              className={`cert-tab-dark${activeTab === "others" ? " active" : ""}`}
              onClick={() => setActiveTab("others")}
              style={{ cursor: "pointer" }}
            >Other Certifications</li>
          </ul>

          <div className="cert-tabs-content-dark">

            {/* Aruba Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "aruba" ? " active" : ""}`} id="aruba">
              <h3 className="cert-sub-title-dark">Aruba Certifications</h3>
              <div className="cert-grid-dark">
                <img src="/assets/images/Aruba-AASP.png" alt="Aruba Instant On" title="Aruba Instant On" />
                <img src="/assets/images/Aruba-ACSP.png" alt="Aruba Certification 1" title="Aruba Certification 1" />
                <img src="/assets/images/Aruba-ACSX-3.png" alt="Aruba Certification 2" title="Aruba Certification 2" />
                <img src="/assets/images/HPE-ACP-CA.png" alt="HPE ACP Campus Access" title="HPE ACP Campus Access" />
              </div>
              <div className="cert-grid-dark">
                <img src="/assets/images/HPE-Associate-Campus-access.png" alt="HPE Associate Campus Access" title="HPE Associate Campus Access" />
                <img src="/assets/images/HPE-Associate-Network-Security.png" alt="HPE Associate Network Security" title="HPE Associate Network Security" />
                <img src="/assets/images/HPE-product-specialist-central.png" alt="HPE Product Specialist Central" title="HPE Product Specialist Central" />
                <img src="/assets/images/product-1.png" alt="HPE Product Specialist CX 10000 Switch" title="HPE Product Specialist CX 10000 Switch" />
              </div>
              <h3 className="cert-sub-title-dark">Aruba Awards</h3>
              <ul className="award-list-dark">
                <li>Aruba Best Partner <span className="award-year">2024</span></li>
                <li>Aruba Excellence Award <span className="award-year">2023</span></li>
              </ul>
            </div>

            {/* Sophos Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "sophos" ? " active" : ""}`} id="sophos">
              <div className="sophos-tab-layout">

                {/* Left: certifications + awards */}
                <div className="sophos-tab-left">

                  <h3 className="cert-sub-title-dark">Sophos Certifications</h3>
                  <div className="sophos-cert-chips">
                    <span className="sophos-chip">Endpoint Engineer</span>
                    <span className="sophos-chip">Endpoint Technician</span>
                    <span className="sophos-chip">Endpoint Architecture</span>
                    <span className="sophos-chip">Firewall Architecture</span>
                    <span className="sophos-chip">Firewall Engineer</span>
                    <span className="sophos-chip">Firewall Technician</span>
                  </div>

                  <h3 className="cert-sub-title-dark" style={{marginTop: '32px'}}>Sophos Awards</h3>
                  <ul className="award-list-dark">
                    <li>Sophos Partner of the Year – India &amp; SAARC</li>
                    <li>Top Performer Of The Region <span className="award-year">2020</span></li>
                    <li>Best Performing Partner <span className="award-year">2018</span></li>
                    <li>Best Solution Partner <span className="award-year">2023 · 2018 · 2017 · 2016</span></li>
                    <li>Best Platinum Partner <span className="award-year">2020</span></li>
                    <li>Best Top Performing Partner <span className="award-year">2019</span></li>
                    <li>Highest Achiever Business Partner <span className="award-year">2015</span></li>
                  </ul>
                </div>

                {/* Right: Sophos 2025 award image */}
                <div className="sophos-tab-right">
                  <div className="sophos-award-img-wrap">
                    <div className="sophos-award-badge-top"><i className="fas fa-star"></i> 2025 Award</div>
                    <img
                      src="/assets/images/award/sophos 2025.jpeg"
                      alt="Sophos Award 2025"
                      title="Sophos Award 2025"
                      className="sophos-award-img"
                    />
                    <div className="sophos-award-caption">
                      <span className="sophos-caption-title">Sophos Partner of the Year</span>
                      <span className="sophos-caption-sub">India &amp; SAARC · 2025</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Other Certifications Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "others" ? " active" : ""}`} id="others">
              <h3 className="cert-sub-title-dark">Other Certifications</h3>
              <div className="cert-grid-dark">
                <img src="/assets/images/pan_pcnse_digital-badge_sharing-logo-2048x2048.png" alt="Palo Alto PCNSE" title="Palo Alto PCNSE" />
                <img src="/assets/images/1.-CEH-Certified-Ethical-hacker.png" alt="CEH Certified Ethical Hacker" title="CEH Certified Ethical Hacker" />
                <img src="/assets/images/ccna_600.png" alt="CCNA" title="CCNA" />
                <img src="/assets/images/Vinay Kumar Certificate_page-0001.jpg" alt="Seceon Professional" title="Seceon Professional" />
                <img src="/assets/manage-engine.png" alt="ManageEngine" title="ManageEngine" />
              </div>
            </div>

          </div>
        </div>

      {/* Team Certifications Carousel — visible only on Sophos tab */}
      {activeTab === "sophos" && (
      <section className="certifications-carousel-premium">
        <div className="container">
          <div className="cert-carousel-header">
            <div className="cert-badge-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h2>Team Certifications</h2>
            <p>Recognized expertise across all <span className="sophos-highlight">Sophos</span> technologies</p>
          </div>

          <div className="cert-marquee-outer">
            <div className="cert-marquee-track">
              {[...Array(34)].map((_, i) => (
                <div className="cert-marquee-item" key={`a-${i}`}>
                  <img
                    src={`/assets/s${i + 1}.png`}
                    alt={certNames[i] || `Sophos Certification ${i + 1}`}
                    title={certNames[i] || `Sophos Certification ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
              {[...Array(34)].map((_, i) => (
                <div className="cert-marquee-item" key={`b-${i}`}>
                  <img
                    src={`/assets/s${i + 1}.png`}
                    alt={certNames[i] || `Sophos Certification ${i + 1}`}
                    title={certNames[i] || `Sophos Certification ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Career CTA Section */}
      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text">
            Speak with a senior consultant today. In 30 minutes you'll know:
            <br /><br />
            • The top three risks hiding in your current stack<br />
            • Quick wins that boost performance without new hardware<br />
            • An exact timeline & cost estimate—no obligations
          </p>

          <div className="about-two__btn-box">
            <a href="https://wame.pro/tracenetwork" target="_blank" rel="noopener noreferrer" className="btn-get-started">
              <span className="btn-text">Book Your Free Strategy Call </span>
              <span className="btn-arrow"></span>
            </a>
          </div>
        </div>
      </section>


      </section>
    </>
  );
}

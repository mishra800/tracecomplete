import React, { useState } from "react";


import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function AwardsAccreditations() {
  const seoData = getSEOData('awardsAccreditations');

  const [activeTab, setActiveTab] = useState("aruba");

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
                <img src="/assets/images/HPE-product-specialist-cx-10000-switch.png" alt="HPE Product Specialist CX 10000 Switch" title="HPE Product Specialist CX 10000 Switch" />
              </div>
              <h3 className="cert-sub-title-dark">Aruba Awards</h3>
              <ul className="award-list-dark">
                <li>Aruba Best Partner 2024</li>
                <li>Aruba Excellence Award 2023</li>
              </ul>
            </div>

            {/* Sophos Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "sophos" ? " active" : ""}`} id="sophos">
              <h3 className="cert-sub-title-dark">Sophos Certifications</h3>
              <ul className="cert-list-dark">
                <li>Sophos Endpoint Engineer</li>
                <li>Sophos Endpoint Technician</li>
                <li>Sophos Endpoint Architecture</li>
                <li>Sophos Firewall Architecture</li>
                <li>Sophos Firewall Engineer</li>
                <li>Sophos Firewall Technician</li>
              </ul>

              <h3 className="cert-sub-title-dark">Sophos Awards</h3>
              <ul className="award-list-dark">
                <li>Sophos Partner of the Year - India &amp; SAARC</li>
                <li>Top Performer Of The Region (2020)</li>
                <li>Best Performing Partner (2018)</li>
                <li>Best Solution Partner (2023, 2018, 2017, 2016)</li>
                <li>Best Platinum Partner (2020)</li>
                <li>Best Top Performing Partner (2019)</li>
                <li>Highest Achiever Business Partner (2015)</li>
              </ul>
            </div>

            {/* Other Certifications Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "others" ? " active" : ""}`} id="others">
              <h3 className="cert-sub-title-dark">Other Certifications</h3>
              <div className="cert-grid-dark">
                <img src="/assets/images/pan_pcnse_digital-badge_sharing-logo-2048x2048.png" alt="Palo Alto PCNSE" title="Palo Alto PCNSE" />
                <img src="/assets/images/1.-CEH-Certified-Ethical-hacker.png" alt="CEH Certified Ethical Hacker" title="CEH Certified Ethical Hacker" />
                <img src="/assets/images/ccna_600.png" alt="CCNA" title="CCNA" />
                <img src="/assets/images/Vinay Kumar Certificate_page-0001.jpg" alt="Seceon Professional" title="Seceon Professional" />
              </div>
            </div>

          </div>
        </div>
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
            <a href="tel:7032224513" className="btn-get-started">
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

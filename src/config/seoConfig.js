// SEO Configuration for all pages
// Based on legacy HTML files meta tags and titles

const siteUrl = "https://tracenetwork.in"; // Update with your actual domain
const companyName = "Trace Network & Engineering Pvt Ltd";
const defaultImage = "/assets/images/logoo.png";

export const seoConfig = {
  home: {
    title: "Best Cybersecurity Company in Hyderabad | Trace Network & Engineering",
    description: "Trace Network & Engineering Pvt Ltd is India's leading IT solutions provider delivering advanced cybersecurity, network security, cloud, and managed IT services since 2005. Best Cybersecurity Company in Hyderabad.",
    keywords: "best cybersecurity company in hyderabad, cybersecurity, network security, IT solutions, managed IT services, cloud security, network infrastructure, IT infrastructure, trace network, india, cybersecurity hyderabad, IT company hyderabad",
    ogImage: "/assets/images/trace.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": companyName,
      "url": siteUrl,
      "logo": `${siteUrl}/assets/images/logoo.png`,
      "description": "Leading IT solutions and cybersecurity company in Hyderabad, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-40-XXXXXXXX",
        "contactType": "customer service"
      }
    }
  },

  companyProfile: {
    title: "Company Profile | About Us | Trace Network & Engineering Pvt Ltd",
    description: "Learn about Trace Network & Engineering Pvt Ltd – a trusted provider of networking, cybersecurity, IT infrastructure, and engineering solutions delivering reliable and scalable services across industries since 2005.",
    keywords: "company profile, trace network, IT solutions provider, cybersecurity company, network infrastructure, engineering solutions, about us, trace network hyderabad, IT company profile",
    ogImage: "/assets/images/about1.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Trace Network & Engineering",
      "description": "Company profile and information about Trace Network & Engineering Pvt Ltd"
    }
  },

  partners: {
    title: "Technology Partners | Sophos, HPE, Aruba, ManageEngine | Trace Network",
    description: "Trace Network & Engineering partners with leading technology vendors including Sophos, HPE Aruba, ManageEngine, Qualys, Safetica, Forcepoint, Veeam, Tenable, Microsoft, Dell, HP, Lenovo and more to deliver best-in-class IT and cybersecurity solutions.",
    keywords: "technology partners, IT partners, cybersecurity partners, sophos partner, hpe aruba partner, manageengine partner, qualys partner, safetica partner, forcepoint, veeam, tenable, microsoft partner, trace network partners",
    ogImage: "/assets/images/partners nav.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Technology Partners",
      "description": "Our technology partnerships with leading IT and cybersecurity vendors"
    }
  },

  awardsAccreditations: {
    title: "Awards & Accreditations | Certified IT & Cybersecurity Partner",
    description: "Discover the key industry awards, global partner certifications and technical achievements earned by Trace Network & Engineering Pvt Ltd, showcasing excellence in networking, cybersecurity and IT services.",
    keywords: "awards, accreditations, certifications, IT certifications, cybersecurity certifications, partner awards, industry recognition, trace network awards"
  },

  blogs: {
    title: "IT & Cybersecurity Blogs | Expert Insights | Trace Network & Engineering",
    description: "Read the latest insights, trends, and expert opinions on cybersecurity, network infrastructure, cloud solutions, and IT services from Trace Network & Engineering's technical experts.",
    keywords: "IT blogs, cybersecurity blogs, network security articles, technology insights, IT trends, security best practices, trace network blog, cybersecurity articles, IT expert insights",
    ogImage: "/assets/images/cybersecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Trace Network Blog",
      "description": "Expert insights on cybersecurity and IT solutions"
    }
  },

  contactUs: {
    title: "Contact Us | Get IT & Cybersecurity Solutions | Trace Network & Engineering",
    description: "Get in touch with Trace Network & Engineering Pvt Ltd for expert IT solutions, cybersecurity services, and network infrastructure support. Contact us today for a free consultation.",
    keywords: "contact us, get in touch, IT support, cybersecurity consultation, network solutions, trace network contact, hyderabad IT company, free consultation, IT services contact",
    ogImage: "/assets/images/contact.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Trace Network & Engineering",
      "description": "Contact information and consultation request form"
    }
  },

  networksecurity: {
    title: "Network Security Solutions | Firewall & Threat Protection | Trace Network",
    description: "Comprehensive network security solutions to protect your business from cyber threats. Expert cybersecurity services including next-gen firewall management, intrusion detection, threat prevention, and 24/7 security monitoring.",
    keywords: "network security, cyber security solutions, firewall solutions, intrusion detection, threat prevention, security services, cybersecurity hyderabad, network protection, security monitoring",
    ogImage: "/assets/images/networksecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Network Security Solutions",
      "description": "Comprehensive network security and threat protection services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cybersecurity: {
    title: "Cybersecurity Services | Advanced Threat Protection | Trace Network",
    description: "Advanced cybersecurity services to safeguard your organization from evolving cyber threats. Comprehensive security solutions including threat detection, incident response, security audits, and managed security services.",
    keywords: "cybersecurity services, threat protection, security audits, incident response, cyber defense, security solutions, cybersecurity company hyderabad, managed security services, SOC services",
    ogImage: "/assets/images/cybersecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cybersecurity Services",
      "description": "Advanced cybersecurity and threat protection services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cybersecurityy: {
    title: "Cybersecurity Solutions | Endpoint & Network Security | Trace Network",
    description: "Protect your business with Trace Network's complete cybersecurity solutions — covering endpoint security, network protection, threat intelligence, and compliance. India's trusted cybersecurity partner since 2005.",
    keywords: "cybersecurity solutions, endpoint security, network protection, threat intelligence, cybersecurity company hyderabad, IT security services, information security, cyber defense hyderabad",
    ogImage: "/assets/images/cybersecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cybersecurity Solutions",
      "description": "Complete cybersecurity solutions and endpoint security services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cloudsecurity: {
    title: "Cloud Security Solutions | Cloud Protection Services",
    description: "Secure your cloud infrastructure with our comprehensive cloud security solutions. Expert services for AWS, Azure, and multi-cloud environments.",
    keywords: "cloud security, cloud protection, AWS security, Azure security, multi-cloud security, cloud infrastructure, cloud security hyderabad"
  },

  accesssecurity: {
    title: "Access Security Solutions | Identity & Access Management",
    description: "Robust access security and identity management solutions to control and monitor user access to your critical systems and data.",
    keywords: "access security, identity management, access control, IAM solutions, user authentication, privileged access, access security hyderabad"
  },

  advancedthreat: {
    title: "Advanced Threat Protection | Threat Intelligence Services",
    description: "Advanced threat protection services to detect, prevent, and respond to sophisticated cyber threats targeting your organization.",
    keywords: "advanced threat protection, threat intelligence, APT protection, threat detection, cyber threats, security monitoring, advanced threat hyderabad"
  },

  firewallsolutions: {
    title: "Firewall Solutions | Next-Gen Firewall Services",
    description: "Enterprise-grade firewall solutions and next-generation firewall services to protect your network perimeter and internal systems.",
    keywords: "firewall solutions, next-gen firewall, NGFW, network firewall, firewall management, perimeter security, firewall hyderabad"
  },

  networking: {
    title: "Network Infrastructure Solutions | Enterprise Networking",
    description: "Comprehensive network infrastructure solutions including design, implementation, and management of enterprise networks.",
    keywords: "network infrastructure, enterprise networking, network design, network implementation, LAN, WAN, network solutions, networking hyderabad"
  },

  infrastructure: {
    title: "IT Infrastructure Solutions in Hyderabad | Cloud, Storage & Network Services",
    description: "Trace Networks delivers secure IT infrastructure solutions including cloud storage, NAS, network security, data center services, and scalable business storage.",
    keywords: "IT infrastructure solutions, IT infrastructure Hyderabad, cloud storage for business, NAS storage solutions, network security services, data center services, server and storage solutions, network infrastructure services, IT infrastructure management, business storage solutions"
  },

  datasolutions: {
    title: "Data Solutions | Data Management & Analytics",
    description: "Comprehensive data solutions including data management, backup, recovery, analytics, and business intelligence services.",
    keywords: "data solutions, data management, data backup, data recovery, data analytics, business intelligence, data solutions hyderabad"
  },

  collaboration: {
    title: "Collaboration Solutions | Unified Communications",
    description: "Modern collaboration and unified communications solutions to enhance productivity and enable seamless teamwork.",
    keywords: "collaboration solutions, unified communications, video conferencing, team collaboration, communication tools, collaboration hyderabad"
  },

  visibility: {
    title: "Network Visibility Solutions | Monitoring & Analytics",
    description: "Advanced network visibility and monitoring solutions to gain insights into your network performance and security.",
    keywords: "network visibility, network monitoring, network analytics, performance monitoring, traffic analysis, visibility solutions hyderabad"
  },

  grc: {
    title: "GRC Solutions | Governance, Risk & Compliance | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, provides Governance, Risk, and Compliance (GRC) services that centralize policies, controls, and audits. Our GRC solutions help organizations align business objectives with security standards, automate compliance, and manage risks effectively.",
    keywords: "GRC, governance, risk management, compliance, regulatory compliance, security governance, GRC hyderabad, trace network GRC"
  },

  iso: {
    title: "ISO Certification Services | ISO Compliance | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, offers Compliance and Risk Management services aligned with ISO 27001 standards. We help organizations establish, implement, and maintain robust information security frameworks to ensure data protection, regulatory compliance, and risk reduction.",
    keywords: "ISO certification, ISO compliance, ISO 27001, ISO 9001, quality standards, security standards, ISO hyderabad, information security"
  },

  noc: {
    title: "NOC Services | Network Operations Center | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., based in Hyderabad, is a leading provider of IT infrastructure, network solutions, cybersecurity, and managed services. We deliver end-to-end technology support for enterprises through expert engineers, 24/7 monitoring, and innovative digital solutions.",
    keywords: "NOC services, network operations center, 24/7 monitoring, network management, IT support, proactive monitoring, NOC hyderabad, managed IT services"
  },

  fms: {
    title: "Facility Management Services | IT Facility Management | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, delivers comprehensive Facility Management Services (FMS) with on-site IT support, system monitoring, data backup, and endpoint maintenance ensuring smooth operations, maximum uptime, and cost-effective technology management for enterprises.",
    keywords: "facility management, IT facility management, infrastructure maintenance, facility support, FMS, FMS hyderabad, IT maintenance services"
  },

  professionalServices: {
    title: "Professional Services | IT Consulting & Support | Trace Network",
    description: "Trace Network & Engineering Pvt Ltd offers expert Professional Services including Disaster Recovery Planning, vCISO, Crisis Management Advisory, Security Posture Advisory, and Configuration Review Advisory. Safeguard your business with tailored strategies and proactive support from certified professionals.",
    keywords: "professional services, IT consulting, project management, technical support, managed services, IT expertise, vCISO, disaster recovery, security advisory"
  },

  securityAudits: {
    title: "Security Audits | Cybersecurity Assessment Services | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, provides comprehensive Security Audits including Network Audits, WiFi Audits, and Network & Server Hardening. Our expert engineers identify vulnerabilities, strengthen system defenses, and ensure your IT infrastructure remains secure and compliant.",
    keywords: "security audits, security assessment, vulnerability assessment, security testing, penetration testing, compliance audit, network audit, WiFi audit, server hardening, hyderabad"
  },

  networkPenetrationTesting: {
    title: "VAPT Services in Hyderabad | Network Penetration Testing Company",
    description: "Trace Networks & Engineering is a specialist VAPT company in Hyderabad offering advanced Vulnerability Assessment and Penetration Testing services. Our certified cybersecurity experts provide detailed security audits, identify vulnerabilities, and safeguard your applications, networks, and cloud environments.",
    keywords: "vapt services in hyderabad, network penetration testing, web application pentesting, cyber security company, vulnerability assessment and penetration testing, trace networks and engineering"
  },

  webApplicationSecurityTesting: {
    title: "Web Application Penetration Testing Services | Trace Networks",
    description: "Secure your web applications with Trace Networks – Hyderabad's trusted VAPT company. Our penetration testing experts identify, assess, and fix vulnerabilities to keep your business safe. Book your VAPT audit today!",
    keywords: "vapt services in hyderabad, web application penetration testing, vapt testing company, vapt audit report, cyber security vapt, network penetration testing, vulnerability assessment, vapt cost, penetration testing hyderabad, application security testing, cloud penetration testing, mobile application vapt, vapt and penetration testing, vapt testing price, trace networks vapt"
  },

  mobileApplicationsSecurityTesting: {
    title: "Mobile Application Security Testing Services in Hyderabad",
    description: "Secure your mobile apps from vulnerabilities with Trace Networks – Hyderabad's trusted mobile application security testing company. Our experts perform in-depth vulnerability assessment, penetration testing, and code-level analysis to protect your Android & iOS applications from cyber threats.",
    keywords: "mobile application security testing, mobile app penetration testing, vapt for mobile apps, android app security testing, ios app security testing, mobile app vulnerability assessment, mobile app vapt services, app security audit, penetration testing company hyderabad, trace networks vapt, mobile application testing company"
  },

  cloudPenetrationTesting: {
    title: "Cloud Penetration Testing Services in Hyderabad | Trace Networks",
    description: "Trace Networks provides expert Cloud Penetration Testing services across Hyderabad, Bengaluru, Chennai, Visakhapatnam, and Vijayawada. Our cloud security specialists identify vulnerabilities in AWS, Azure, and Google Cloud environments to ensure data protection, compliance, and complete infrastructure security.",
    keywords: "cloud penetration testing, cloud vapt services, aws penetration testing, azure security testing, google cloud security testing, cloud security audit, vapt for cloud, penetration testing company hyderabad, cloud vapt in bengaluru, cloud security chennai, cloud vapt visakhapatnam, cloud penetration testing vijayawada, trace networks vapt"
  },

  secureCodeReview: {
    title: "Secure Code Review Services in Hyderabad | Trace Networks",
    description: "Trace Networks offers professional Secure Code Review services in Hyderabad, Bengaluru, Chennai, Visakhapatnam, and Vijayawada. Our experts perform detailed manual and automated code analysis to detect security flaws, prevent vulnerabilities, and ensure your applications meet the highest security standards.",
    keywords: "secure code review, source code review services, application code security, manual code review, automated code review, secure coding practices, code vulnerability assessment, vapt company hyderabad, code review bengaluru, code audit chennai, code analysis visakhapatnam, secure coding vijayawada, trace networks vapt"
  },

  industries: {
    title: "Industries We Serve | Sector-Specific IT Solutions | Trace Network",
    description: "Trace Network & Engineering serves diverse industries with tailored IT and cybersecurity solutions including healthcare, finance, education, manufacturing, and more.",
    keywords: "industries, sectors, healthcare IT, finance IT, education IT, manufacturing IT, industry solutions, trace network industries"
  },

  industriesDetails: {
    title: "Industry Solutions | Trace Network & Engineering Pvt Ltd",
    description: "Detailed industry-specific IT and cybersecurity solutions tailored to meet unique business requirements and compliance needs.",
    keywords: "industry solutions, sector solutions, vertical solutions, industry IT, compliance solutions, trace network industry"
  },

  internationalSchoolsItAvUpgrades: {
    title: "International Schools IT & AV Upgrades | Trace Networks",
    description: "Elevate your international school's IT infrastructure and AV systems with scalable networks, smart classrooms & seamless multimedia solutions by Trace Network & Engineering Pvt Ltd.",
    keywords: "school IT solutions, education technology, AV upgrades, smart classrooms, school network, digital learning, international school IT, AV infrastructure"
  },

  pharmaceuticalNetworkInfrastructure: {
    title: "Pharmaceutical Network Infrastructure Solutions | Trace Networks",
    description: "Leading IT network infrastructure solutions for pharmaceutical & life sciences companies by Trace Network & Engineering Pvt Ltd. Enhance security, connectivity & scalable infrastructure tailored for pharma growth.",
    keywords: "pharmaceutical IT, pharma network, healthcare IT, GxP compliance, pharma infrastructure, life sciences IT, pharmaceutical network hyderabad"
  },

  universityItLearningEcosystem: {
    title: "University IT & Learning Ecosystem Solutions | Trace Networks",
    description: "Transform and modernize your university's IT infrastructure and learning ecosystem with scalable networks, smart classrooms & hybrid learning solutions from Trace Network & Engineering Pvt Ltd.",
    keywords: "university IT, higher education IT, campus network, learning ecosystem, education infrastructure, LMS, university IT hyderabad, hybrid learning"
  },

  softwareLicensingProductivitySolutions: {
    title: "Software Licensing & Productivity Solutions | Microsoft 365 | Trace Network",
    description: "Trace Network & Engineering offers end-to-end software licensing & productivity solutions in India – Google Workspace, Office 365, Zoom, Adobe, Bulk SMS, Business WhatsApp & Cloud Telephony. Authorized reseller pricing, seamless deployment, 24/7 support and usage optimization for cost-efficient productivity.",
    keywords: "software licensing, Microsoft 365, Office 365, productivity solutions, software management, enterprise software, Google Workspace, Zoom, Adobe, cloud telephony, business WhatsApp"
  },

  caseStudies: {
    title: "IT & Cybersecurity Case Studies | Real-World Enterprise Solutions",
    description: "Explore real-world IT infrastructure, networking, and cybersecurity case studies showcasing enterprise deployments, security transformations, and scalable technology solutions.",
    keywords: "case studies, success stories, customer stories, project portfolio, client testimonials, IT case studies, cybersecurity case studies"
  },

  events: {
    title: "Events | Webinars & Workshops | Trace Network",
    description: "Stay updated with our latest events, webinars, workshops, and training sessions on cybersecurity and IT technologies.",
    keywords: "events, webinars, workshops, training, seminars, IT events, cybersecurity events, trace network events"
  },

  news: {
    title: "News & Updates | Trace Network & Engineering",
    description: "Latest news, updates, and announcements from Trace Network & Engineering Pvt Ltd.",
    keywords: "news, updates, announcements, company news, IT news, cybersecurity news, trace network news"
  },

  workWithUs: {
    title: "Work With Us | Careers | Trace Network & Engineering Pvt Ltd",
    description: "Explore career opportunities at Trace Network & Engineering Pvt Ltd. Join our team and grow your career in IT, networking and cybersecurity services.",
    keywords: "careers, jobs, employment, work with us, IT jobs, cybersecurity jobs, job opportunities, trace network careers"
  },

  // Partner-specific SEO configurations
  partnerSophos: {
    title: "Sophos Partner | Cybersecurity Solutions | Trace Network",
    description: "Trace Network is an authorized Sophos partner providing advanced cybersecurity solutions including endpoint protection, firewall, email security, and managed threat response services.",
    keywords: "sophos partner, sophos cybersecurity, endpoint protection, sophos firewall, email security, managed threat response, cybersecurity solutions hyderabad"
  },

  partnerHpe: {
    title: "HPE Server Partner | Infrastructure Solutions | Trace Network",
    description: "Authorized HPE partner delivering enterprise-grade server solutions, infrastructure management, and data center services for modern IT environments.",
    keywords: "hpe partner, hpe server, enterprise infrastructure, data center solutions, server management, hpe proliant, infrastructure hyderabad"
  },

  partnerAruba: {
    title: "HPE Aruba Partner | Network Infrastructure | Trace Network",
    description: "Leading HPE Aruba partner providing AI-powered networking solutions, wireless infrastructure, SD-WAN, and network security services.",
    keywords: "aruba partner, hpe aruba, wireless networking, sd-wan, network infrastructure, ai networking, aruba central, networking hyderabad"
  },

  partnerNutanix: {
    title: "Nutanix Partner | Hyperconverged Infrastructure | Trace Network",
    description: "Authorized Nutanix partner delivering hyperconverged infrastructure, cloud platform solutions, and enterprise cloud services.",
    keywords: "nutanix partner, hyperconverged infrastructure, hci solutions, nutanix cloud, enterprise cloud, infrastructure modernization, nutanix hyderabad"
  },

  partnerVeeam: {
    title: "Veeam Partner | Backup & Recovery Solutions | Trace Network",
    description: "Certified Veeam partner providing comprehensive backup, recovery, and data protection solutions for modern data centers and cloud environments.",
    keywords: "veeam partner, backup solutions, data recovery, data protection, veeam backup, disaster recovery, cloud backup, veeam hyderabad"
  },

  partnerTenable: {
    title: "Tenable Partner | Vulnerability Management | Trace Network",
    description: "Authorized Tenable partner delivering vulnerability management, security assessment, and cyber exposure management solutions.",
    keywords: "tenable partner, vulnerability management, security assessment, cyber exposure, tenable nessus, vulnerability scanning, security hyderabad"
  },

  partnerSify: {
    title: "Sify Partner | Digital Services | Trace Network",
    description: "Trusted Sify partner providing digital transformation services, cloud solutions, and managed IT services for enterprises.",
    keywords: "sify partner, digital services, cloud solutions, managed IT services, digital transformation, enterprise services, sify hyderabad"
  },

  partnerAccops: {
    title: "Accops Partner | Virtual Desktop Solutions | Trace Network",
    description: "Authorized Accops partner delivering secure remote access, virtual desktop infrastructure, and endpoint security solutions.",
    keywords: "accops partner, virtual desktop, remote access, vdi solutions, endpoint security, secure access, accops hyderabad"
  },

  partnerCymmetri: {
    title: "Cymmetri Partner | Identity Management | Trace Network",
    description: "Certified Cymmetri partner providing identity and access management, privileged access management, and identity governance solutions.",
    keywords: "cymmetri partner, identity management, access management, privileged access, identity governance, iam solutions, cymmetri hyderabad"
  },

  partnerMotadata: {
    title: "Motadata Partner | IT Monitoring Solutions | Trace Network",
    description: "Authorized Motadata partner delivering comprehensive IT infrastructure monitoring, network monitoring, and IT service management solutions.",
    keywords: "motadata partner, it monitoring, network monitoring, infrastructure monitoring, itsm solutions, motadata hyderabad"
  },

  partnerPaloalto: {
    title: "Palo Alto Networks Partner | Next-Gen Security | Trace Network",
    description: "Authorized Palo Alto Networks partner providing next-generation firewalls, cloud security, and advanced threat protection solutions.",
    keywords: "palo alto partner, next-gen firewall, cloud security, threat protection, palo alto networks, ngfw, security hyderabad"
  },

  partnerPeoplelink: {
    title: "PeopleLink Partner | Unified Communications | Trace Network",
    description: "Certified PeopleLink partner delivering unified communications, collaboration solutions, and digital workplace services.",
    keywords: "peoplelink partner, unified communications, collaboration solutions, digital workplace, communication services, peoplelink hyderabad"
  },

  partnerQualys: {
    title: "Qualys Partner | Vulnerability Management & Compliance | Trace Network",
    description: "Authorized Qualys partner providing cloud-based vulnerability management, compliance monitoring, and continuous security assessment solutions.",
    keywords: "qualys partner, vulnerability management, compliance monitoring, security assessment, qualys vmdr, cloud security, qualys hyderabad"
  },

  partnerSafetica: {
    title: "Safetica Partner | Data Loss Prevention | Trace Network",
    description: "Certified Safetica partner delivering advanced data loss prevention, insider risk management, and endpoint data protection solutions.",
    keywords: "safetica partner, data loss prevention, dlp solutions, insider risk management, endpoint protection, data security, safetica hyderabad"
  },

  partnerManageengine: {
    title: "ManageEngine Partner | IT Management Solutions | Trace Network",
    description: "Authorized ManageEngine partner providing comprehensive IT management, endpoint management, network monitoring, and IT service management solutions.",
    keywords: "manageengine partner, it management, endpoint management, network monitoring, itsm solutions, zoho manageengine, it management hyderabad"
  },

  soc: {
    title: "SOC Services | Security Operations Center | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd. offers advanced Security Operations Center (SOC) services from Hyderabad, providing 24/7 threat monitoring, incident response, and cybersecurity management to safeguard enterprise networks and data from evolving digital threats.",
    keywords: "SOC services, security operations center, 24/7 threat monitoring, incident response, cybersecurity management, SOC hyderabad, managed SOC, threat detection"
  },

  viewBlog: {
    title: "Blog | Trace Network & Engineering Pvt Ltd",
    description: "Read expert insights on cybersecurity, network infrastructure, cloud solutions, and IT services from Trace Network & Engineering Pvt Ltd.",
    keywords: "IT blog, cybersecurity article, network security, technology insights, trace network blog"
  },

  viewEvent: {
    title: "Event | Trace Network & Engineering Pvt Ltd",
    description: "Stay updated with the latest events, webinars, and workshops on cybersecurity and IT technologies from Trace Network & Engineering Pvt Ltd.",
    keywords: "IT event, cybersecurity event, webinar, workshop, technology event, trace network event",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Trace Network Event",
      "description": "Technology and cybersecurity event by Trace Network & Engineering"
    }
  },

  // Admin pages SEO
  adminDashboard: {
    title: "Admin Dashboard | Trace Network & Engineering",
    description: "Administrative dashboard for managing Trace Network & Engineering website content, blogs, and events.",
    keywords: "admin dashboard, content management, website administration, trace network admin",
    robots: "noindex, nofollow"
  },

  adminLogin: {
    title: "Admin Login | Trace Network & Engineering",
    description: "Secure login portal for Trace Network & Engineering website administrators.",
    keywords: "admin login, secure access, website administration, trace network login",
    robots: "noindex, nofollow"
  },

  adminBlogs: {
    title: "Manage Blogs | Admin Dashboard | Trace Network",
    description: "Administrative interface for managing blog posts and articles on Trace Network & Engineering website.",
    keywords: "blog management, content administration, article management, trace network blogs admin",
    robots: "noindex, nofollow"
  },

  adminEvents: {
    title: "Manage Events | Admin Dashboard | Trace Network",
    description: "Administrative interface for managing events, webinars, and workshops on Trace Network & Engineering website.",
    keywords: "event management, webinar administration, workshop management, trace network events admin",
    robots: "noindex, nofollow"
  },

  createEvent: {
    title: "Create Event | Admin Dashboard | Trace Network",
    description: "Create new events, webinars, and workshops for Trace Network & Engineering website.",
    keywords: "create event, add event, event creation, trace network event admin",
    robots: "noindex, nofollow"
  },

  createBlog: {
    title: "Create Blog | Admin Dashboard | Trace Network",
    description: "Create new blog posts and articles for Trace Network & Engineering website.",
    keywords: "create blog, add article, blog creation, trace network blog admin",
    robots: "noindex, nofollow"
  },

  editBlog: {
    title: "Edit Blog | Admin Dashboard | Trace Network",
    description: "Edit existing blog posts and articles on Trace Network & Engineering website.",
    keywords: "edit blog, modify article, blog editing, trace network blog admin",
    robots: "noindex, nofollow"
  },

  editEvent: {
    title: "Edit Event | Admin Dashboard | Trace Network",
    description: "Edit existing events, webinars, and workshops on Trace Network & Engineering website.",
    keywords: "edit event, modify event, event editing, trace network event admin",
    robots: "noindex, nofollow"
  },

  // Additional missing pages
  allsectionspage: {
    title: "All Services | Complete IT Solutions | Trace Network & Engineering",
    description: "Comprehensive overview of all IT services, cybersecurity solutions, and technology offerings provided by Trace Network & Engineering Pvt Ltd.",
    keywords: "all services, complete IT solutions, comprehensive services, technology offerings, trace network services, IT portfolio",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Complete IT Solutions Portfolio",
      "description": "Comprehensive IT and cybersecurity services portfolio",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  eventss: {
    title: "Events & Webinars | Technology Training | Trace Network",
    description: "Join our technology events, webinars, workshops, and training sessions on cybersecurity, networking, and IT infrastructure.",
    keywords: "technology events, IT webinars, cybersecurity workshops, training sessions, tech seminars, trace network events",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "Trace Network Technology Events",
      "description": "Regular technology and cybersecurity events and training sessions"
    }
  },

  notFound: {
    title: "Page Not Found | Trace Network & Engineering",
    description: "The page you are looking for could not be found. Return to Trace Network & Engineering homepage for IT and cybersecurity solutions.",
    keywords: "page not found, 404 error, trace network, IT solutions, cybersecurity",
    robots: "noindex, nofollow"
  }
};

// Helper function to get SEO config by page key
export const getSEOConfig = (pageKey, dynamicData = {}) => {
  const config = seoConfig[pageKey] || seoConfig.home;
  
  // Merge dynamic data if provided
  if (dynamicData && Object.keys(dynamicData).length > 0) {
    return {
      ...config,
      ...dynamicData,
      structuredData: {
        ...config.structuredData,
        ...dynamicData.structuredData
      }
    };
  }
  
  return config;
};

// Helper function to generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  };
};

// Helper function to generate organization structured data
export const getOrganizationData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "url": siteUrl,
    "logo": `${siteUrl}/assets/images/logoo.png`,
    "description": "Leading IT solutions and cybersecurity company in Hyderabad, India",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-40-XXXXXXXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/trace-network-engineering",
      "https://twitter.com/tracenetwork",
      "https://www.facebook.com/tracenetwork"
    ]
  };
};

// Helper function to get SEO data for a page
export const getSEOData = (pageName) => {
  return seoConfig[pageName] || seoConfig.home;
};

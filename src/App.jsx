import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import VaptPopup from './components/VaptPopup'
import StickySocial from './components/StickySocial'
import { useStickyHeader } from './hooks/useStickyHeader'
import { useAOS } from './hooks/useAOS'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollToHash } from './hooks/useScrollToHash'
import Home from './pages/Home'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminBlogs from './pages/admin/AdminBlogs'
import CreateBlog from './pages/admin/CreateBlog'
import EditBlog from './pages/admin/EditBlog'
import AdminEvents from './pages/admin/AdminEvents'
import CreateEvent from './pages/admin/CreateEvent'
import EditEvent from './pages/admin/EditEvent'
import ViewBlog from './pages/ViewBlog'
import ViewEvent from './pages/ViewEvent'
import Blogs from './pages/Blogs'
import Accesssecurity from './pages/Accesssecurity'
import Advancedthreat from './pages/Advancedthreat'
import Allsectionspage from './pages/Allsectionspage'
import AwardsAccreditations from './pages/AwardsAccreditations'
import CaseStudies from './pages/CaseStudies'
import CloudPenetrationTesting from './pages/CloudPenetrationTesting'
import Cloudsecurity from './pages/Cloudsecurity'
import Collaboration from './pages/Collaboration'
import CompanyProfile from './pages/CompanyProfile'
import ContactUs from './pages/ContactUs'
import ThankYou from './pages/ThankYou'
import Cybersecurity from './pages/Cybersecurity'
import Cybersecurityy from './pages/Cybersecurityy'
import Datasolutions from './pages/Datasolutions'
import Events from './pages/Events'
import Eventss from './pages/Eventss'
import Firewallsolutions from './pages/Firewallsolutions'
import Fms from './pages/Fms'
import Grc from './pages/Grc'
import IndustriesDetails from './pages/IndustriesDetails'
import Industries from './pages/Industries'
import Infrastructure from './pages/Infrastructure'
import InternationalSchoolsItAvUpgrades from './pages/InternationalSchoolsItAvUpgrades'
import Iso from './pages/Iso'
import MobileApplicationsSecurityTesting from './pages/MobileApplicationsSecurityTesting'
import NetworkPenetrationTesting from './pages/NetworkPenetrationTesting'
import Networking from './pages/Networking'
import Networksecurity from './pages/Networksecurity'
import News from './pages/News'
import Noc from './pages/Noc'
import Partners from './pages/Partners'
import PharmaceuticalNetworkInfrastructure from './pages/PharmaceuticalNetworkInfrastructure'
import ProfessionalServices from './pages/ProfessionalServices'
import SecureCodeReview from './pages/SecureCodeReview'
import SecurityAudits from './pages/SecurityAudits'
import SoftwareLicensingProductivitySolutions from './pages/SoftwareLicensingProductivitySolutions'
import UniversityItLearningEcosystem from './pages/UniversityItLearningEcosystem'
import Visibility from './pages/Visibility'
import WebApplicationSecurityTesting from './pages/WebApplicationSecurityTesting'
import WorkWithUs from './pages/WorkWithUs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  // Initialize global hooks inside Router and AuthProvider context
  useStickyHeader();
  useAOS();
  useCustomCursor();
  useScrollToHash();

  return (
    <Routes>
      {/* Admin routes — no Header/Footer */}
      <Route path="/login" element={<Navigate to="/admin" replace />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/blogs" element={
        <ProtectedRoute>
          <AdminBlogs />
        </ProtectedRoute>
      } />
      <Route path="/admin/blogs/create" element={
        <ProtectedRoute>
          <CreateBlog />
        </ProtectedRoute>
      } />
      <Route path="/admin/blogs/edit/:id" element={
        <ProtectedRoute>
          <EditBlog />
        </ProtectedRoute>
      } />
      <Route path="/admin/events" element={
        <ProtectedRoute>
          <AdminEvents />
        </ProtectedRoute>
      } />
      <Route path="/admin/events/create" element={
        <ProtectedRoute>
          <CreateEvent />
        </ProtectedRoute>
      } />
      <Route path="/admin/events/edit/:id" element={
        <ProtectedRoute>
          <EditEvent />
        </ProtectedRoute>
      } />

      {/* Public routes — with Header/Footer */}
      <Route path="*" element={<PublicLayout />} />
    </Routes>
  );
}

function PublicLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.toLowerCase().includes('admin') ||
    location.pathname.toLowerCase().includes('login') ||
    location.pathname.toLowerCase().startsWith('/admin');

  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/view-blog/:id" element={<ViewBlog />} />
        <Route path="/view-event/:id" element={<ViewEvent />} />
        <Route path="/accesssecurity" element={<Accesssecurity />} />
        <Route path="/advancedthreat" element={<Advancedthreat />} />
        <Route path="/allsectionspage" element={<Allsectionspage />} />
        <Route path="/awards&accreditations" element={<AwardsAccreditations />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/cloud-penetration-testing" element={<CloudPenetrationTesting />} />
        <Route path="/cloudsecurity" element={<Cloudsecurity />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/cybersecurityy" element={<Cybersecurityy />} />
        <Route path="/datasolutions" element={<Datasolutions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventss" element={<Eventss />} />
        <Route path="/firewallsolutions" element={<Firewallsolutions />} />
        <Route path="/fms" element={<Fms />} />
        <Route path="/grc" element={<Grc />} />
        <Route path="/industries-details" element={<IndustriesDetails />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/international-schools-it-av-upgrades" element={<InternationalSchoolsItAvUpgrades />} />
        <Route path="/iso" element={<Iso />} />
        <Route path="/mobile-applications-security-testing" element={<MobileApplicationsSecurityTesting />} />
        <Route path="/network-penetration-testing" element={<NetworkPenetrationTesting />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/networksecurity" element={<Networksecurity />} />
        <Route path="/news" element={<News />} />
        <Route path="/noc" element={<Noc />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/pharmaceutical-network-infrastructure" element={<PharmaceuticalNetworkInfrastructure />} />
        <Route path="/professional-services" element={<ProfessionalServices />} />
        <Route path="/secure-code-review" element={<SecureCodeReview />} />
        <Route path="/security-audits" element={<SecurityAudits />} />
        <Route path="/software-licensing-productivity-solutions" element={<SoftwareLicensingProductivitySolutions />} />
        <Route path="/university-it-learning-ecosystem" element={<UniversityItLearningEcosystem />} />
        <Route path="/visibility" element={<Visibility />} />
        <Route path="/web-application-security-testing" element={<WebApplicationSecurityTesting />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {!isAdminPage && <VaptPopup />}
      <StickySocial />
    </div>
  );
}

export default App

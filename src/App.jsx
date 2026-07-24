import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import DesktopSidebar from './components/DesktopSidebar'
import Footer from './components/Footer'
import OneSignalInitializer from './components/OneSignalInitializer'
import LoadingScreen from './components/LoadingScreen'
import NewsTicker from './components/NewsTicker'
import AnimatedCharacter from './components/AnimatedCharacter'
import ImmersivePoetryBackground from './components/ImmersivePoetryBackground'
import UmamiAnalytics from './components/UmamiAnalytics'
import AuthHeader from './components/AuthHeader'

// Lazy Load Pages for Performance
const Home = lazy(() => import('./pages/Home'));
const StoryDetail = lazy(() => import('./pages/StoryDetail'));
const PoemDetail = lazy(() => import('./pages/PoemDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const StudyMaterial = lazy(() => import('./pages/StudyMaterial'));
const AllPoems = lazy(() => import('./pages/AllPoems'));
const AllStories = lazy(() => import('./pages/AllStories'));
const About = lazy(() => import('./pages/About'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ResearchPapers = lazy(() => import('./pages/ResearchPapers'));
const ResearchDetail = lazy(() => import('./pages/ResearchDetail'));
const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));
const WriteForUs = lazy(() => import('./pages/WriteForUs')); // [NEW] SANSKRITI SANGAM
const ArtOfWriting = lazy(() => import('./pages/seo/ArtOfWriting')); // [NEW] Study Material
const ShradhanjaliHub = lazy(() => import('./pages/ShradhanjaliHub')); // [NEW] Tribute Hub
const ShradhanjaliYadumani = lazy(() => import('./pages/ShradhanjaliYadumani')); // [NEW] Tribute
const ShradhanjaliDevSharma = lazy(() => import('./pages/ShradhanjaliDevSharma')); // [NEW] Tribute
const ShradhanjaliGeetaUpadhyay = lazy(() => import('./pages/ShradhanjaliGeetaUpadhyay')); // [NEW] Tribute

// Admin & Auth Pages
const AdminGateway = lazy(() => import('./pages/AdminGateway'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const TrollPage = lazy(() => import('./pages/TrollPage'));

// SEO Pillar Pages
const NepaliSahitya = lazy(() => import('./pages/seo/NepaliSahitya'));
const NepaliKavita = lazy(() => import('./pages/seo/NepaliKavita'));
const NepaliKavitaArth = lazy(() => import('./pages/seo/NepaliKavitaArth'));
const NepaliCulture = lazy(() => import('./pages/seo/NepaliCulture'));
const HindiNepaliSahitya = lazy(() => import('./pages/seo/HindiNepaliSahitya'));
const AssameseNepaliSahitya = lazy(() => import('./pages/seo/AssameseNepaliSahitya'));
const EnglishNepaliLiterature = lazy(() => import('./pages/seo/EnglishNepaliLiterature'));
const AuthorTilakSarmah = lazy(() => import('./pages/seo/AuthorTilakSarmah'));
const ModernNepaliKavita = lazy(() => import('./pages/seo/ModernNepaliKavita'));
const ClassicalNepaliSahitya = lazy(() => import('./pages/seo/ClassicalNepaliSahitya'));
const NepaliPoetsOverview = lazy(() => import('./pages/seo/NepaliPoetsOverview'));
const NepaliLiteraryMovements = lazy(() => import('./pages/seo/NepaliLiteraryMovements'));
const ExploreKeyword = lazy(() => import('./pages/ExploreKeyword')); // [NEW] pSEO Landing Page
const ZubeenGargBiography = lazy(() => import('./pages/ZubeenGargBiography')); // [PREMIUM] Zubeen Garg

function App() {
  const location = useLocation();

  // Route Change Listener: Force Scroll to Top
  useEffect(() => {
    // We use a zero-timeout to ensure the new DOM has painted before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [location.pathname]);

  // Feature: Reset Zoom on Refresh/Load (User Request)
  // ... existing useEffect ... 

  return (
    <>
      <div className="site-background" /> {/* Fixed Background */}

      {/* Global Immersive Elements */}
      <ImmersivePoetryBackground />
      <AnimatedCharacter />

      <NewsTicker />
      <OneSignalInitializer />
      <UmamiAnalytics />

      <div className="site-layout-wrapper">
        <div className="site-container">
          <AuthHeader />
          <div className="content-paper">

            {/* Main Flex Layout: Sidebar + Content */}
            <div style={{ display: 'flex', width: '100%', flex: 1 }}>

              {/* Desktop Sidebar - Hidden on Mobile via CSS */}
              <div className="desktop-sidebar-container">
                <DesktopSidebar />
              </div>

              {/* Main Content Area */}
              <div style={{ flex: 1, width: '100%', minWidth: 0, paddingBottom: '0' }}>
                {/* minWidth: 0 is CRITICAL for flex item overflow fix */}
                <Suspense fallback={<LoadingScreen />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/story/:id" element={<StoryDetail />} />
                    <Route path="/poem/:id" element={<PoemDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/study" element={<StudyMaterial />} />
                    <Route path="/poems" element={<AllPoems />} />
                    <Route path="/stories" element={<AllStories />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />
                    <Route path="/research" element={<ResearchPapers />} />
                    <Route path="/research/:id" element={<ResearchDetail />} />
                    <Route path="/write" element={<WriteForUs />} />
                    <Route path="/study/art-of-writing" element={<ArtOfWriting />} />
                    <Route path="/shradhanjali" element={<ShradhanjaliHub />} />
                    <Route path="/shradhanjali/yadumani-sharma" element={<ShradhanjaliYadumani />} />
                    <Route path="/shradhanjali/dev-sharma-chapagai" element={<ShradhanjaliDevSharma />} />
                    <Route path="/shradhanjali/geeta-upadhyay" element={<ShradhanjaliGeetaUpadhyay />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* [NEW] The Epic Hub for Zubeen Garg */}
                    <Route path="/zubeen-garg" element={<ZubeenGargBiography />} />

                    {/* SEO Pillar Pages */}
                    {/* SEO Pillar Pages */}
                    <Route path="/nepali-sahitya" element={<NepaliSahitya />} />
                    <Route path="/nepali-kavita" element={<NepaliKavita />} />
                    <Route path="/nepali-kavita-arth" element={<NepaliKavitaArth />} />
                    <Route path="/culture" element={<NepaliCulture />} />

                    {/* Multilingual Support */}
                    <Route path="/hi/nepali-sahitya" element={<HindiNepaliSahitya />} />
                    <Route path="/as/nepali-sahitya" element={<AssameseNepaliSahitya />} />
                    <Route path="/en/nepali-literature" element={<EnglishNepaliLiterature />} />

                    {/* Author Authority */}
                    <Route path="/author/dr-tilak-sarmah" element={<AuthorTilakSarmah />} />

                    {/* Cluster Pages */}
                    <Route path="/modern-nepali-kavita" element={<ModernNepaliKavita />} />
                    <Route path="/classical-nepali-sahitya" element={<ClassicalNepaliSahitya />} />
                    <Route path="/nepali-literary-movements" element={<NepaliLiteraryMovements />} />

                    {/* Private Analytics */}
                    <Route path="/analytics" element={<AnalyticsDashboard />} />

                    {/* pSEO Dynamic Destinations */}
                    <Route path="/explore/:keyword" element={<ExploreKeyword />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminGateway />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/troll" element={<TrollPage />} />
                  </Routes>
                </Suspense>
              </div>

            </div>

            {/* Global Footer - Now inside the paper, full width of paper */}
            <Footer />

          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CV from './pages/CV';

const LiveChat = lazy(() => import('./pages/LiveChat'));

const Home = () => (
  <>
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to work
    </a>
    <Header />
    <main>
      <Hero />
      <Work />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <ChatWidget />
  </>
);

// The router lives in the entry files so the same tree renders in the browser and at build time.
const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={<CV />} />
    <Route
      path="/live-chat"
      element={
        <Suspense fallback={null}>
          <LiveChat />
        </Suspense>
      }
    />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default App;

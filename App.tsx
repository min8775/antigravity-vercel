import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { CorePillars } from './components/CorePillars';
import { AppShowcase } from './components/AppShowcase';
import { Privacy } from './components/Privacy';
import { Funding } from './components/Funding';
import { Footer } from './components/Footer';
import { LoginOverlay } from './components/LoginOverlay';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-cosmic-text font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-subtle-grid bg-[length:40px_40px]"></div>
      
      <div className="relative z-10">
        <Header onOpenLogin={() => setIsLoginOpen(true)} />
        
        <main>
          <Hero />
          <ProblemSolution />
          <CorePillars />
          <AppShowcase />
          <Privacy />
          <Funding />
        </main>

        <Footer />
      </div>

      <LoginOverlay isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
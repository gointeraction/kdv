import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import RadarSystemsLandingPage from './components/RadarSystemsLandingPage';
import AgentsPage from './components/AgentsPage';
import ErpPage from './components/ErpPage';
import KDHKA20Page from './components/KDHKA20Page';
import NotFoundPage from './components/NotFoundPage';
import RadarSystemsWizardPage from './components/RadarSystemsWizardPage';
import TrainingPage from './components/TrainingPage';
import ConsultantTrainingPage from './components/ConsultantTrainingPage';
import MainPage from './components/MainPage';
import CustomerAnalysisPage from './components/CustomerAnalysisPage';
import SecurityPage from './components/SecurityPage';

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.hash.substring(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.substring(1) || '/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    observerRef.current = observer;

    const timeoutId = setTimeout(() => {
        const elementsToAnimate = document.querySelectorAll('[data-animate]');
        elementsToAnimate.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
        clearTimeout(timeoutId);
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
    };
  }, [currentPath]); // Re-run when path changes to animate new page content

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <MainPage />;
      case '/agents':
        return <AgentsPage />;
      case '/erp':
        return <ErpPage />;
      case '/kdhka20':
        return <KDHKA20Page />;
      case '/entrenamientos':
        return <TrainingPage />;
      case '/formacion-consultores':
        return <ConsultantTrainingPage />;
      case '/diagnostico-radarsystems':
        return <RadarSystemsWizardPage />;
      case '/marketing-automation':
        return <RadarSystemsLandingPage />;
      case '/analisis-cliente':
        return <CustomerAnalysisPage />;
      case '/seguridad-informatica':
        return <SecurityPage />;
      default:
        // Handle agent detail routes
        if (currentPath.startsWith('/agents/')) {
            return <AgentsPage />;
        }
        return <NotFoundPage />;
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header currentPath={currentPath} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
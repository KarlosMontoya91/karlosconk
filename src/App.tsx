import { useState } from 'react';
import { useViewMode } from './context/ViewModeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CursorFollower } from './components/ui/CursorFollower';
import { HeroSection } from './components/sections/HeroSection';
import { TechCloud } from './components/sections/TechCloud';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceProfile } from './components/sections/ExperienceProfile';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { CVModal } from './components/ui/CVModal';

// Nuevas secciones comerciales
import { ServicesSection } from './components/sections/ServicesSection';
import { TemplatesSection } from './components/sections/TemplatesSection';
import { WorkProcessSection } from './components/sections/WorkProcessSection';
import { FAQSection } from './components/sections/FAQSection';
import { QuoteBuilderSection } from './components/quote-builder/QuoteBuilderSection';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { mode } = useViewMode();

  return (
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-accent-coral selection:text-black font-sans">
      <CursorFollower />
      <Header onOpenCV={() => setIsCVModalOpen(true)} />

      <main>
        <HeroSection />

        {mode === 'professional' ? (
          <>
            <TechCloud />
            <SkillsSection />
            <ExperienceProfile />
            <PortfolioSection />
          </>
        ) : (
          <>
            <ServicesSection />
            <PortfolioSection />
            <QuoteBuilderSection />
            <TemplatesSection />
            <WorkProcessSection />
            <FAQSection />
          </>
        )}

        <FinalCTA />
      </main>

      <Footer />

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

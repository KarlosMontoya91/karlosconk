import { useState } from 'react';
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

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-accent-coral selection:text-black font-sans">
      <CursorFollower />
      <Header onOpenCV={() => setIsCVModalOpen(true)} />

      <main>
        <HeroSection />
        <TechCloud />
        <SkillsSection />
        <ExperienceProfile />
        <PortfolioSection />
        <FinalCTA />
      </main>

      <Footer />

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

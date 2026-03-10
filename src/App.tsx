import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CursorFollower } from './components/ui/CursorFollower';
import { HeroSection } from './components/sections/HeroSection';
import { TechCloud } from './components/sections/TechCloud';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceProfile } from './components/sections/ExperienceProfile';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { FinalCTA } from './components/sections/FinalCTA';

function App() {
  return (
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-accent-coral selection:text-black font-sans">
      <CursorFollower />
      <Header />

      <main>
        <HeroSection />
        <TechCloud />
        <SkillsSection />
        <ExperienceProfile />
        <PortfolioSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;

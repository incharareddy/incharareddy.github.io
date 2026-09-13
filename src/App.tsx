import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { SelectedWork } from "./sections/SelectedWork";
import { Experience } from "./sections/Experience";
import { TechnicalToolkit } from "./sections/TechnicalToolkit";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent/20 selection:text-accent">
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <TechnicalToolkit />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <div className="bg-background min-h-screen text-neutral-text selection:bg-accent/10">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6">
        <Hero />
        <section id="proyectos">
          {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
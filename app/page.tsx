import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Frameworks from './components/Frameworks';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <Frameworks />
      <Projects />
      <Approach />
      <Contact />
    </main>
  );
}

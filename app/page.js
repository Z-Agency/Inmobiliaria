import Navbar from '@/app/components/navbar';
import Hero from '@/app/components/hero';
import About from '@/app/components/about';
import Services from '@/app/components/services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  );
}

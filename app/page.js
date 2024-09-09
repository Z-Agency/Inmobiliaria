import Navbar from '@/app/components/navbar';
import Hero from '@/app/components/hero';
import About from '@/app/components/about';
import Services from '@/app/components/services';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

import useReveal from './hooks/useReveal';

import SEO from './components/SEO';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Servicos from './components/Servicos';
import Metodo from './components/Metodo';
import Planos from './components/Planos';
import Faq from './components/Faq';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import FloatWpp from './components/FloatWpp';

export default function App() {
  useReveal();

  return (
    <>
      <SEO />
      <Loader />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Servicos />
        <Metodo />
        <Planos />
        <Faq />
        <CtaFinal />
      </main>

      <Footer />
      <FloatWpp />
    </>
  );
}

import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import { aboutSection } from '../data/AboutSection.jsx';
import { whySection } from '../data/WhySection.jsx';
import { skillSection } from '../data/SkillSection.jsx';
import { serviceSection } from '../data/ServiceSection.jsx';
import { ctaSection } from '../data/CtaSection.jsx';
import { bukuSection } from '../data/BukuSection.jsx';
import { pemesananSection } from '../data/PemesananSection.jsx';
import { hargaSection } from '../data/HargaSection.jsx';
import { faqSection } from '../data/FaqSection.jsx';
import { contactSection } from '../data/ContactSection.jsx';
import { footerSection } from '../data/FooterSection.jsx';

import parse from 'html-react-parser'
function Home() {
  return (
    <>
      <Navbar />

       <Hero />

      <main id="main">
       {parse(aboutSection.content)}
       {parse(whySection.content)}
       {parse(skillSection.content)}
       {parse(serviceSection.content)}
       {parse(ctaSection.content)}
       {parse(bukuSection.content)}
       {parse(pemesananSection.content)}
       {parse(hargaSection.content)}
       {parse(faqSection.content)}
       {parse(contactSection.content)}
      </main>

      {parse(footerSection.content)}

    </>
  );
}

export default Home;

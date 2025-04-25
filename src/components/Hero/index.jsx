import './styleHero.scss';
import Header from '../Header';
import heroSlug from '/assets/heroSlug.png';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
import { useState, useEffect } from 'react';
import Socials from '../Socials';
import Octagon from '../ButtonCenter';
export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [fontSize, setFontSize] = useState('96px');
  const [showParagraph, setShowParagraph] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const updateFontSize = () => {
      const screenWidth = window.innerWidth;
      let newSize = '96px';

      if (screenWidth < 1250) newSize = '72px';
      if (screenWidth < 900) newSize = '56px';
      if (screenWidth < 576) {
        setShowParagraph(false);
      }

      setFontSize(newSize);
    };

    window.addEventListener('resize', updateFontSize);
    window.addEventListener('scroll', handleScroll);
    updateFontSize();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="section-hero">
      <Header />
      <img
        src={heroSlug}
        alt="Satellite"
        className="section-hero__content__satellite"
        style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
      />
      <div className="section-hero__content__text">
        <TitleText className="section-hero__content__text--title" styles={{ fontSize, position: 'relative', zIndex: '100' }}>
          BATTLE PLANETS
        </TitleText>
        <ParagraphText
          styles={{
            marginBottom: '1rem',
            display: showParagraph ? 'block' : 'none',
          }}
        >
          F2P Sci-Fi, Signature Collection, Multi stage Game
        </ParagraphText>
      </div>
      <Octagon className="section-hero__content__socials" styles={{ position: 'absolute', bottom: '50px' }}>
        <Socials />
      </Octagon>
    </section>
  );
}

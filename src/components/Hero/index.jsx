import './styleHero.scss';
import Header from '../Header';
import heroSlug from '/assets/heroSlug.png';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
import { useState, useEffect } from 'react';
import Socials from '../Socials';
import Octagon from '../ButtonCenter';
import Container from '../Container';
export default function Hero() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handlerScroll = () => setScrollY(window.scrollY);
    const handlerResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setShowParagraph(false);
      }
    };

    window.addEventListener('resize', handlerResize);
    window.addEventListener('scroll', handlerScroll);
    handlerResize();
  }, []);
  return (
    <section className="section-hero">
      <Container>
        <Header />
        <img
          src={heroSlug}
          alt="Satellite"
          className="section-hero__content__satellite"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        <div className="section-hero__content__text">
          <TitleText isFirst className="section-hero__content__text--title">
            BATTLE PLANETS
          </TitleText>
          <ParagraphText
            styles={{
              display: showParagraph ? 'block' : 'none',
            }}
          >
            F2P Sci-Fi, Signature Collection, Multi stage Game
          </ParagraphText>
        </div>
        <Octagon
          className="section-hero__content__socials"
        >
          <Socials />
        </Octagon>
      </Container>
    </section>
  );
}

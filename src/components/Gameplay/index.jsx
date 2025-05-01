import './styleGameplay.scss';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
import planetBlue from '/assets/gameplayPlanetBlue.png';
import planetRed from '/assets/gameplayPlanetRed.png';
import satelliteLeft from '/assets/gameplaySatelliteLeft.png';
import satelliteRight from '/assets/gameplaySatelliteRight.png';
import { useEffect, useState } from 'react';
import CarouselCards from '../CarouselCards';
import Container from '../Container';
export default function Gameplay() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="section-gameplay">
      <Container>
        <article className="section-gameplay__content">
          <TitleText>unique gameplay</TitleText>
          <CarouselCards />
          <img
            className="section-gameplay__content--planetB"
            style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            src={planetBlue}
            alt="planet blue"
          />
          <img
            className="section-gameplay__content--planetR"
            style={{ transform: `translateY(${-scrollY * 0.15 + 400}px)` }}
            src={planetRed}
            alt="planet red"
          />
          <img
            className="section-gameplay__content--satelliteL"
            style={{ transform: `translateY(${-scrollY * 0.09 + 300}px)` }}
            src={satelliteLeft}
            alt="satellite"
          />
          <img
            className="section-gameplay__content--satelliteR"
            style={{ transform: `translateY(${-scrollY * 0.09 + 100}px)` }}
            src={satelliteRight}
            alt="satellite"
          />
          <ParagraphText>
            AWESOME SIGNATURES OF THREE ELEMENTS: $BTC, $ETH, $DASH OPENING
            UNLIMITED POSSIBILITIES AND POWERFULL COMBINATIONS! Is there a lot
            of profit to be made by the Leader of an Entire Planet? Are you
            ready to check it out?!
          </ParagraphText>
        </article>
      </Container>
    </section>
  );
}

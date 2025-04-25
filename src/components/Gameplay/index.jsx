import './styleGameplay.scss';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
// import gameplayCards from '/assets/gameplayCards.png';
import planetBlue from '/assets/gameplayPlanetBlue.png';
import planetRed from '/assets/gameplayPlanetRed.png';
import satelliteLeft from '/assets/gameplaySatelliteLeft.png';
import satelliteRight from '/assets/gameplaySatelliteRight.png';
import { useEffect, useState } from 'react';
import CarouselCards from '../CarouselCards';
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
      <article className="section-gameplay__content">
        <TitleText styles={{marginBottom:'3rem'}}>unique gameplay</TitleText>
        <CarouselCards styles={{ margin: '2rem auto 7rem' }} />
        <img
          className="section-gameplay__content--planetB"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
          src={planetBlue}
          alt="planet blue"
        />
        <img
          className="section-gameplay__content--planetR"
          style={{ transform: `translateY(${-scrollY * 0.15 + 300}px)` }}
          src={planetRed}
          alt="planet red"
        />
        <img
          className="section-gameplay__content--satelliteL"
          style={{ transform: `translateY(${-scrollY * 0.09}px)` }}
          src={satelliteLeft}
          alt="satellite"
        />
        <img
          className="section-gameplay__content--satelliteR"
          style={{ transform: `translateY(${-scrollY * 0.09}px)` }}
          src={satelliteRight}
          alt="satellite"
        />
        <ParagraphText>
          AWESOME SIGNATURES OF THREE ELEMENTS: $BTC, $ETH, $DASH OPENING
          UNLIMITED POSSIBILITIES AND POWERFULL COMBINATIONS! Is there a lot of
          profit to be made by the Leader of an Entire Planet? Are you ready to
          check it out?!
        </ParagraphText>
      </article>
    </section>
  );
}
